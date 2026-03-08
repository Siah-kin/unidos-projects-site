#!/usr/bin/env python3
"""
Water Check — Unidos Website Vocabulary Enforcement

Adapted from Bonzi_v5 water_check.py for NGO website context.
Loads banned vocabulary from policies/water_rules.json (single source of truth).
Blocks NGO buzzwords, vague impact language, and AI-generated filler.

Modes:
  Default (no args):  Pre-commit — scans staged files
  --file <path>:      Single-file check
  --all:              Full scan — audit entire repo

Exit codes:
  0: All checks pass
  1: Violations found (blocks commit)
  2: Warnings only (allows commit)
"""

import json
import re
import sys
from pathlib import Path
from typing import Dict, List, Tuple

# Root directory
REPO_ROOT = Path(__file__).parent.parent.parent

# JSON config path (single source of truth)
WATER_RULES_PATH = REPO_ROOT / "policies" / "water_rules.json"

# Protest-sign patterns (mission statements in HTML headings)
PROTEST_SIGNS = [
    r"(?i)<h[1-3][^>]*>.*\b(revolutioniz|disrupt|transform|empower|innovati)\b",
    r"(?i)<title>.*\b(revolutioniz|disrupt|transform|empower)\b",
]

# Comparison patterns
COMPARISONS = [
    r"\bunlike\s+\w+\b",
    r"\bbetter\s+than\s+\w+\b",
    r"\bcompared\s+to\s+\w+\b",
]

# External-facing (full enforcement)
EXTERNAL_EXTENSIONS = {".html"}

# Warning-only
WARNING_EXTENSIONS = {".md", ".txt"}

# Ignore patterns
IGNORE_PATTERNS = [
    ".git/",
    "node_modules/",
    "policies/",
    "scripts/",
    "CLAUDE.md",
    ".claude/",
    ".DS_Store",
    "static/video_files/",
]

# Fallback if water_rules.json is missing
_FALLBACK_BANNED = [
    r"\brevolutionar(y|ies|ize)\b",
    r"\btransform(s|ed|ing|ative|ation)?\b",
    r"\binnovate(s|d|ing|ive|ion)?\b",
    r"\bcutting[- ]edge\b",
    r"\bgame[- ]changer\b",
    r"\bleverag(e|es|ed|ing)\b",
    r"\butiliz(e|es|ed|ing)\b",
    r"\bunlock(s|ed|ing)?\b",
    r"\bsynerg(y|ies)\b",
    r"\bseamlessly\b",
    r"\bholistic(ally)?\b",
    r"\bcomprehensive\b",
    r"\brobust\b",
    r"\bempower(s|ed|ing|ment)?\b",
    r"\bfundamentally\b",
    r"\bessentially\b",
    r"\bsignificantly\b",
    r"\bstakeholders\b",
    r"\bbeneficiaries\b",
]


# ── Config loaders ──────────────────────────────────────────────────

def _load_json(path: Path) -> Dict:
    """Load JSON config, return empty dict on failure."""
    if not path.exists():
        print(f"WARNING: {path.name} not found at {path}", file=sys.stderr)
        return {}
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def _build_banned_patterns(water_rules: Dict) -> List[str]:
    """Build regex patterns from water_rules.json banned_vocabulary."""
    if not water_rules:
        return _FALLBACK_BANNED
    patterns = []
    for _category, words in water_rules.get("banned_vocabulary", {}).items():
        for word in words:
            escaped = re.escape(word).replace(r"\ ", r"\s+").replace(r"\-", r"[- ]")
            patterns.append(rf"\b{escaped}\b")
    return patterns


def _load_configs():
    """Load JSON config and build lookup tables."""
    water_rules = _load_json(WATER_RULES_PATH)
    banned = _build_banned_patterns(water_rules)
    suggestions = water_rules.get("replacement_suggestions", {})
    return banned, suggestions


# ── File classification ─────────────────────────────────────────────

def _is_ignored(rel_path: str) -> bool:
    """Check if file should be ignored."""
    for pattern in IGNORE_PATTERNS:
        if pattern in rel_path:
            return True
    return False


# ── Scanner ─────────────────────────────────────────────────────────

def scan_file(
    file_path: Path,
    banned_patterns: List[str],
    is_external: bool,
) -> List[Tuple[int, str, str]]:
    """Scan file for vocabulary violations."""
    violations = []

    try:
        content = file_path.read_text(encoding="utf-8")
    except (UnicodeDecodeError, PermissionError):
        return violations

    lines = content.split("\n")

    for line_num, line in enumerate(lines, start=1):
        stripped = line.strip()

        # Skip HTML comments and JS comments
        if stripped.startswith("<!--") or stripped.startswith("//"):
            continue

        # Skip lines that are pure HTML/CSS/JS structure
        if re.match(r'^<(script|style|link|meta)\b', stripped):
            continue

        # Skip CSS property lines (transform, transition, etc.)
        if re.match(r'^[\w-]+\s*:', stripped) or re.match(r'^[\w-]+\s*\{', stripped):
            continue
        if 'transform:' in stripped or 'transition:' in stripped:
            continue

        # Banned vocabulary
        for pattern in banned_patterns:
            match = re.search(pattern, line, re.IGNORECASE)
            if match:
                # Skip if inside an HTML attribute (class, id, data-i18n, etc.)
                before = line[:match.start()]
                if re.search(r'(?:class|id|href|src|alt|data-i18n|data-key|name|value)=["\'][^"\']*$', before):
                    continue
                # Skip if inside a <script> block JS string key (like translation keys)
                if re.search(r"['\"][\w.]*$", before) and ":" in line[match.end():match.end()+5]:
                    continue
                violations.append((
                    line_num,
                    "BANNED_WORD",
                    match.group()
                ))

        # Protest-sign patterns (headings)
        if is_external:
            for pattern in PROTEST_SIGNS:
                if re.search(pattern, line):
                    violations.append((line_num, "MISSION_HEADING", stripped[:80]))

        # Comparison patterns
        for pattern in COMPARISONS:
            match = re.search(pattern, line, re.IGNORECASE)
            if match:
                violations.append((line_num, "COMPARISON", match.group()))

    return violations


# ── Output ──────────────────────────────────────────────────────────

def print_violations(files_with_violations: List, total: int, suggestions: Dict):
    """Print formatted violation report."""
    print(f"\n{'='*60}")
    print(f"WATER CHECK: {total} violation(s) in {len(files_with_violations)} file(s)")
    print(f"{'='*60}\n")

    for file_path, violations in files_with_violations:
        try:
            rel_path = file_path.relative_to(REPO_ROOT)
        except ValueError:
            rel_path = file_path
        print(f"  {rel_path}:")

        for line_num, vtype, matched in violations:
            labels = {
                "BANNED_WORD": "BANNED",
                "MISSION_HEADING": "HEADING",
                "COMPARISON": "COMPARE",
            }
            label = labels.get(vtype, vtype)
            suggestion = ""
            matched_lower = matched.lower()
            if matched_lower in suggestions:
                alts = suggestions[matched_lower]
                suggestion = f" -> try: {', '.join(alts)}"
            print(f"    Line {line_num}: [{label}] \"{matched}\"{suggestion}")
        print()

    print("Policy: policies/WATER_PROMPT.md")
    print("Rules:  policies/water_rules.json")
    print()
    print("Tips:")
    print("  - Describe MECHANICS (what we do), not MISSION (why we exist)")
    print("  - Use specifics: '142 women, 3 settlements, 12 tonnes'")
    print("  - Name places: Nakivale, Kyangwali — not 'communities'")
    print("  - Name methods: Kon-Tiki kilns, vermicomposting — not 'techniques'")
    print()


# ── Modes ───────────────────────────────────────────────────────────

def mode_precommit() -> int:
    """Pre-commit mode: scan staged files."""
    import subprocess

    print("Water Check: scanning staged files...")

    banned, suggestions = _load_configs()

    try:
        result = subprocess.run(
            ["git", "diff", "--cached", "--name-only"],
            cwd=REPO_ROOT,
            capture_output=True,
            text=True,
            check=True
        )
        staged_files = [REPO_ROOT / f for f in result.stdout.strip().split("\n") if f]
    except subprocess.CalledProcessError:
        print("   ERROR: Could not get staged files from git")
        return 1

    total_violations = 0
    files_with_violations = []

    for fp in staged_files:
        if not fp.is_file():
            continue
        rel = str(fp.relative_to(REPO_ROOT))
        if _is_ignored(rel):
            continue

        ext = fp.suffix.lower()
        is_external = ext in EXTERNAL_EXTENSIONS
        is_warning = ext in WARNING_EXTENSIONS

        if not is_external and not is_warning:
            continue

        violations = scan_file(fp, banned, is_external)
        if violations:
            total_violations += len(violations)
            files_with_violations.append((fp, violations))

    if not files_with_violations:
        print("   No violations found")
        return 0

    print_violations(files_with_violations, total_violations, suggestions)

    has_html = any(fp.suffix.lower() in EXTERNAL_EXTENSIONS for fp, _ in files_with_violations)
    return 1 if has_html else 2


def mode_file(file_path_str: str) -> int:
    """Single-file mode."""
    file_path = Path(file_path_str).resolve()
    if not file_path.is_file():
        return 0

    banned, suggestions = _load_configs()

    try:
        rel = str(file_path.relative_to(REPO_ROOT))
    except ValueError:
        rel = str(file_path)
    if _is_ignored(rel):
        return 0

    ext = file_path.suffix.lower()
    is_external = ext in EXTERNAL_EXTENSIONS

    violations = scan_file(file_path, banned, is_external)
    if not violations:
        print(f"   {file_path.name}: No violations")
        return 0

    print_violations([(file_path, violations)], len(violations), suggestions)
    return 1 if is_external else 2


def mode_all() -> int:
    """Full scan mode: audit entire repo."""
    print("Water Check: full repo audit...\n")

    banned, suggestions = _load_configs()

    total_violations = 0
    files_with_violations = []
    files_checked = 0

    for fp in sorted(REPO_ROOT.rglob("*")):
        if not fp.is_file():
            continue
        rel = str(fp.relative_to(REPO_ROOT))
        if _is_ignored(rel):
            continue

        ext = fp.suffix.lower()
        is_external = ext in EXTERNAL_EXTENSIONS
        is_warning = ext in WARNING_EXTENSIONS

        if not is_external and not is_warning:
            continue

        files_checked += 1
        violations = scan_file(fp, banned, is_external)
        if violations:
            total_violations += len(violations)
            files_with_violations.append((fp, violations))

    print(f"   Checked {files_checked} files")

    if not files_with_violations:
        print("   No violations found")
        return 0

    print_violations(files_with_violations, total_violations, suggestions)
    return 1


def main():
    """Entry point."""
    if len(sys.argv) > 1:
        if sys.argv[1] == "--file" and len(sys.argv) > 2:
            return mode_file(sys.argv[2])
        elif sys.argv[1] == "--all":
            return mode_all()
        else:
            print(f"Usage: {sys.argv[0]} [--file <path> | --all]")
            return 2
    return mode_precommit()


if __name__ == "__main__":
    sys.exit(main())
