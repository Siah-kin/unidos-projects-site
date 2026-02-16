#!/usr/bin/env python3
"""
Metrics Validation - Anti-Hallucination Framework Phase 2

Scans HTML files for numeric claims and cross-references with source documents.
Part of the Unidos anti-hallucination framework.

Exit codes:
  0: All claims verified or no claims found
  1: Unsupported claims found (blocks commit)
  2: Warnings only (allows commit)
"""

import re
import sys
import json
from pathlib import Path
from typing import List, Tuple, Dict, Set

# Root directory
REPO_ROOT = Path(__file__).parent.parent.parent

# Manifest location
MANIFEST_PATH = REPO_ROOT / "stories" / "source-documents" / "MANIFEST.json"

# Patterns to extract numeric claims from HTML
METRIC_PATTERNS = [
    # stat-number divs (e.g., <span class="stat-number">152</span>)
    r'<span class="stat-number">([0-9,\.]+(?:\s*(?:kg|tons?|people|farmers?|women|men|children|%))?)</span>',

    # Inline metrics (e.g., "501 farmers trained", "4,800 kg produced")
    r'\b(\d{1,3}(?:,\d{3})*(?:\.\d+)?)\s*(kg|tons?|people|farmers?|women|men|children|%|percent)\b',

    # Meta description metrics
    r'<meta name="description" content="[^"]*?(\d{1,3}(?:,\d{3})*(?:\.\d+)?)\s*(kg|tons?|people|farmers?|women|men|children|%)',

    # Award/year claims (e.g., "2024 Gene Dewey Award")
    r'\b(20\d{2})\s+(?:Gene Dewey|UNHCR|Re-?Alliance|award|prize)',
]

# Files to scan (stories only, not marketing pages)
STORY_PATTERNS = [
    "stories/**/*.html",
    "stories/*.html",
]

# Ignore patterns
IGNORE_PATTERNS = [
    "stories/css/**",
    "stories/images/**",
    "stories/js/**",
]


def should_check_file(file_path: Path) -> bool:
    """Determine if file should be checked for metrics."""
    rel_path = str(file_path.relative_to(REPO_ROOT))

    # Check ignore patterns
    for pattern in IGNORE_PATTERNS:
        if file_path.match(pattern):
            return False

    # Check if it's a story file
    for pattern in STORY_PATTERNS:
        if file_path.match(pattern):
            return True

    return False


def extract_metrics(file_path: Path) -> List[Tuple[int, str]]:
    """Extract numeric claims from HTML file.

    Returns:
        List of (line_number, claim_text)
    """
    claims = []

    try:
        content = file_path.read_text(encoding="utf-8")
    except (UnicodeDecodeError, PermissionError):
        return claims

    lines = content.split("\n")

    for line_num, line in enumerate(lines, start=1):
        for pattern in METRIC_PATTERNS:
            matches = re.finditer(pattern, line, re.IGNORECASE)
            for match in matches:
                # Extract full match or first group
                claim = match.group(0) if len(match.groups()) == 0 else match.group(1)

                # Normalize claim (remove HTML, standardize spacing)
                claim_clean = re.sub(r'<[^>]+>', '', claim).strip()

                # Skip generic numbers (dates in 1900s, single digits)
                if re.match(r'^(19\d{2}|[0-9])$', claim_clean):
                    continue

                if claim_clean:
                    claims.append((line_num, claim_clean))

    return claims


def load_manifest() -> Dict[str, any]:
    """Load source document manifest."""
    if not MANIFEST_PATH.exists():
        return {"version": "1.0.0", "claims": {}}

    try:
        with open(MANIFEST_PATH, 'r', encoding='utf-8') as f:
            return json.load(f)
    except (json.JSONDecodeError, PermissionError):
        return {"version": "1.0.0", "claims": {}}


def normalize_claim(claim: str) -> str:
    """Normalize claim for matching against manifest.

    Examples:
        "152" -> "152"
        "4,800 kg" -> "4800 kg"
        "501 farmers" -> "501 farmers"
    """
    # Remove commas from numbers
    normalized = re.sub(r'(\d),(\d)', r'\1\2', claim)
    return normalized.lower().strip()


def verify_claim(claim: str, manifest: Dict) -> Tuple[bool, str]:
    """Check if claim exists in manifest.

    Returns:
        (is_verified, source_info)
    """
    manifest_claims = manifest.get("claims", {})
    normalized = normalize_claim(claim)

    # Direct match
    if normalized in manifest_claims:
        source = manifest_claims[normalized].get("source", "unknown")
        return (True, source)

    # Partial match (number only, fuzzy match on units)
    claim_number = re.search(r'\d+', normalized)
    if claim_number:
        num = claim_number.group()
        for manifest_key in manifest_claims.keys():
            if num in manifest_key:
                source = manifest_claims[manifest_key].get("source", "unknown")
                return (True, f"{source} (fuzzy match)")

    return (False, "")


def main():
    """Main entry point."""
    import subprocess

    print("📊 Metrics Validation: Scanning claims...")

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

    # Filter to story files only
    files_to_check = []
    for file_path in staged_files:
        if file_path.is_file() and should_check_file(file_path):
            files_to_check.append(file_path)

    if not files_to_check:
        print("   ⏭️  No story files staged")
        return 0

    print(f"   Checking {len(files_to_check)} story file(s)")

    # Load manifest
    manifest = load_manifest()

    # Extract and verify claims
    total_claims = 0
    unverified_claims = []
    verified_claims = []

    for file_path in files_to_check:
        claims = extract_metrics(file_path)

        for line_num, claim in claims:
            total_claims += 1
            is_verified, source = verify_claim(claim, manifest)

            if is_verified:
                verified_claims.append((file_path, line_num, claim, source))
            else:
                unverified_claims.append((file_path, line_num, claim))

    # Report results
    if total_claims == 0:
        print("   ✅ No numeric claims found")
        return 0

    print(f"\n   Found {total_claims} claim(s): {len(verified_claims)} verified, {len(unverified_claims)} unverified")

    if unverified_claims:
        print(f"\n❌ UNVERIFIED CLAIMS ({len(unverified_claims)}):\n")

        for file_path, line_num, claim in unverified_claims:
            rel_path = file_path.relative_to(REPO_ROOT)
            print(f"  {rel_path}:{line_num}")
            print(f"    Claim: '{claim}'")
            print(f"    ❌ NO SOURCE REFERENCE")
            print()

        print("💡 Add claims to stories/source-documents/MANIFEST.json:")
        print('   {')
        print('     "claims": {')
        for _, _, claim in unverified_claims[:3]:  # Show first 3 as examples
            normalized = normalize_claim(claim)
            print(f'       "{normalized}": {{')
            print(f'         "source": "source-document-name.pdf",')
            print(f'         "page": 12,')
            print(f'         "verified_date": "2026-02-16"')
            print(f'       }},')
        print('     }')
        print('   }')
        print()

        return 1  # Block commit

    else:
        print("\n✅ All claims verified:")
        for file_path, line_num, claim, source in verified_claims[:5]:  # Show first 5
            rel_path = file_path.relative_to(REPO_ROOT)
            print(f"  ✓ '{claim}' → {source}")

        if len(verified_claims) > 5:
            print(f"  ... and {len(verified_claims) - 5} more")

        print()
        return 0


if __name__ == "__main__":
    sys.exit(main())
