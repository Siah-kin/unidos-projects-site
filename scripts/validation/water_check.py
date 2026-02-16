#!/usr/bin/env python3
"""
Water Check - WATER_PROMPT Enforcement for Unidos

Scans HTML, markdown, and content files for Water Prompt violations:
- Banned vocabulary (revolutionary, disrupt, paradigm, etc.)
- Protest-sign language (mission statements in headers)
- Competitor comparisons (Unlike X, Better than Y)
- AI fingerprints (leverage, utilize, unlock, synergy)

Exit codes:
  0: All checks pass
  1: Violations found (blocks commit)
"""

import re
import sys
from pathlib import Path
from typing import List, Tuple

# Root directory
REPO_ROOT = Path(__file__).parent.parent.parent

# Banned vocabulary from policies/WATER_PROMPT.md
BANNED_WORDS = [
    # Fire language
    r"\brevolutionar(y|ies|ize)\b",
    r"\bdisrupt(s|ed|ing|ive)?\b",
    r"\bparadigm\b",
    r"\btransform(s|ed|ing|ative)?\b",
    r"\binnovate(s|d|ing|ive)?\b",
    r"\bcutting[- ]edge\b",
    r"\bgame[- ]changer\b",
    r"\bgroundbreaking\b",

    # AI fingerprints
    r"\bleverag(e|es|ed|ing)\b",
    r"\butiliz(e|es|ed|ing)\b",
    r"\bunlock(s|ed|ing)?\b",
    r"\bsynerg(y|ies)\b",
    r"\bseamlessly\b",
    r"\bholistic(ally)?\b",

    # Filler adverbs
    r"\bfundamentally\b",
    r"\bessentially\b",
    r"\barguably\b",
    r"\bnotably\b",
    r"\bsignificantly\b",
    r"\binherently\b",

    # Vague claims
    r"\bcomprehensive\b",
    r"\bempowering\b",
    r"\btransformative\b",
]

# Protest-sign patterns (mission in titles/headers)
PROTEST_SIGNS = [
    r"(?i)^#+\s.*\b(revolutioniz|disrupt|transform|rebuild)\b",  # Headers
    r"(?i)^<h[1-6]>.*\b(future of|end of|replacing)\b",  # HTML headers
    r"(?i)^##?\s.*\b(future of|end of|replacing)\b",  # Mission statements
]

# Comparison patterns
COMPARISONS = [
    r"\bunlike\s+\w+\b",  # Unlike X
    r"\bbetter\s+than\s+\w+\b",  # Better than X
    r"\bcompared\s+to\s+\w+\b",  # Compared to X
]

# Files to check (external-facing content)
CHECK_PATTERNS = [
    "*.html",
    "stories/**/*.html",
    "*.md",
    "README.md",
]

# Ignore patterns (internal docs, policies with examples)
IGNORE_PATTERNS = [
    "policies/**",  # Policy docs contain examples of violations
    "leadership/**",  # Internal strategy docs
    "docs/analysis/**",  # Internal analysis
    ".git/**",
    "node_modules/**",
    "static/video_files/**",
]


def should_check_file(file_path: Path) -> bool:
    """Determine if file should be checked."""
    rel_path = str(file_path.relative_to(REPO_ROOT))

    # Check ignore patterns
    for pattern in IGNORE_PATTERNS:
        if file_path.match(pattern):
            return False

    # Check if external-facing
    for pattern in CHECK_PATTERNS:
        if file_path.match(pattern):
            return True

    return False


def scan_file(file_path: Path) -> List[Tuple[int, str, str]]:
    """Scan file for Water Prompt violations.

    Returns:
        List of (line_number, violation_type, matched_text)
    """
    violations = []

    try:
        content = file_path.read_text(encoding="utf-8")
    except (UnicodeDecodeError, PermissionError):
        return violations  # Skip binary/protected files

    lines = content.split("\n")

    for line_num, line in enumerate(lines, start=1):
        # Check banned vocabulary
        for pattern in BANNED_WORDS:
            if re.search(pattern, line, re.IGNORECASE):
                match = re.search(pattern, line, re.IGNORECASE)
                violations.append((
                    line_num,
                    "BANNED_VOCABULARY",
                    match.group() if match else pattern
                ))

        # Check protest-sign patterns
        for pattern in PROTEST_SIGNS:
            if re.search(pattern, line):
                violations.append((
                    line_num,
                    "PROTEST_SIGN",
                    line.strip()[:60]
                ))

        # Check comparisons
        for pattern in COMPARISONS:
            if re.search(pattern, line, re.IGNORECASE):
                match = re.search(pattern, line, re.IGNORECASE)
                violations.append((
                    line_num,
                    "COMPARISON",
                    match.group() if match else pattern
                ))

    return violations


def main():
    """Main entry point."""
    import subprocess

    print("🌊 Water Check: Scanning external-facing content...")

    # Get staged files from git
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

    # Filter staged files to only external-facing ones
    files_to_check = []
    for file_path in staged_files:
        if file_path.exists() and file_path.is_file() and should_check_file(file_path):
            files_to_check.append(file_path)

    if not files_to_check:
        print("   ✅ No external-facing files staged")
        return 0

    print(f"   Checking {len(files_to_check)} staged file(s)")

    # Scan files
    total_violations = 0
    files_with_violations = []

    for file_path in files_to_check:
        violations = scan_file(file_path)
        if violations:
            total_violations += len(violations)
            files_with_violations.append((file_path, violations))

    # Report results
    if not files_with_violations:
        print("   ✅ No Water Prompt violations found")
        return 0

    print(f"\n❌ Found {total_violations} violation(s) in {len(files_with_violations)} file(s):\n")

    for file_path, violations in files_with_violations:
        rel_path = file_path.relative_to(REPO_ROOT)
        print(f"  {rel_path}:")

        for line_num, vtype, matched in violations:
            if vtype == "BANNED_VOCABULARY":
                print(f"    Line {line_num}: BANNED WORD: '{matched}'")
            elif vtype == "PROTEST_SIGN":
                print(f"    Line {line_num}: MISSION LANGUAGE: {matched}")
            elif vtype == "COMPARISON":
                print(f"    Line {line_num}: COMPARISON: '{matched}'")

        print()

    print("💡 Water Prompt Policy:")
    print("   - Describe MECHANICS (what we do), not MISSION (why we exist)")
    print("   - Avoid fire language: revolutionary, disrupt, paradigm")
    print("   - No comparisons: 'Unlike X', 'Better than Y'")
    print("   - AI fingerprints: leverage, utilize, unlock, synergy")
    print("   - Use specifics: '501 farmers, 4,800 kg' not 'empowering communities'")
    print()
    print("   See: policies/WATER_PROMPT.md")
    print()

    return 1  # Block commit


if __name__ == "__main__":
    sys.exit(main())
