# Unidos Anti-Hallucination Framework

**Status**: ✅ INSTALLED (2026-02-16)

## What's Active

### 1. Water Check (`water_check.py`)
- **Purpose**: Enforce WATER_PROMPT.md policy automatically
- **Checks**: Banned vocabulary, protest-sign language, comparisons, AI fingerprints
- **Trigger**: Pre-commit hook (blocks commits with violations)
- **Files scanned**: HTML, markdown, external-facing content
- **Ignores**: Internal docs (`leadership/`, `policies/`)

### 2. Pre-Commit Hook (`.git/hooks/pre-commit`)
- **Step 1**: Water Prompt check (WATER_PROMPT.md)
- **Step 2**: Secret detection (.env, .key files)
- **Step 3**: Large file check (>10MB warning)
- **Step 4**: HTML syntax validation (basic)

### 3. Source Policies
- `policies/WATER_PROMPT.md` - Full policy specification
- `policies/PQI_SCORING.md` - Production quality verification
- `policies/COOPERATION_SCORING.md` - Behavioral detection

## Usage

### Test Water Check
```bash
cd /Users/ginoludikhuyze/Developer/GitHub/Unidos
python3 scripts/validation/water_check.py
```

### Manual Check (Bypass Pre-Commit)
```bash
git commit --no-verify -m "message"
```

### Add New Banned Words
Edit `scripts/validation/water_check.py` → `BANNED_WORDS` array

## Comparison with Bonzi_v5

| Component | Bonzi_v5 | Unidos | Status |
|-----------|----------|--------|--------|
| **Water Prompt Check** | ✅ `scripts/validation/water_check.py` | ✅ Adapted | INSTALLED |
| **Pre-commit Hook** | ✅ 14-step validation | ✅ 4-step validation | INSTALLED |
| **Agent Claim Verification** | ✅ SHA256 hash proofs | ❌ N/A (static site) | Not needed |
| **Ralph External Verify** | ✅ Proof-of-work gates | ❌ N/A (no Python backend) | Not needed |
| **Import Smoke Test** | ✅ Python imports | ❌ N/A (no Python) | Not needed |
| **Security Audit** | ✅ PII scanner, SQL injection | ❌ Not yet | MISSING |
| **Test Suite** | ✅ 290+ tests | ❌ No tests | MISSING |
| **OPSEC Manifest** | ✅ Signed dev manifest | ❌ Not yet | MISSING |

## What's Missing (Optional)

### 1. Security Audit Script
**Why**: Bonzi_v5 scans for hardcoded secrets, SQL injection, PII leaks
**Unidos**: Static HTML site - lower risk but could still scan for:
- Hardcoded API keys in JS
- Personal emails in HTML comments
- Debug code left in production

**Priority**: LOW (static site has minimal attack surface)

### 2. Test Suite
**Why**: Bonzi_v5 has 290+ pytest tests
**Unidos**: Could add:
- HTML validation (W3C validator)
- Link checker (broken links)
- Image existence checks
- Mobile responsiveness tests

**Priority**: MEDIUM (useful for site quality)

### 3. OPSEC Manifest
**Why**: Bonzi_v5 tracks who changed what in sensitive files
**Unidos**: Could track changes to:
- Donation addresses
- Contact information
- Financial data

**Priority**: LOW (small team, public repo)

### 4. Metrics Validation
**Why**: Verify claims in content match source documents
**Unidos**: Could check:
- "501 farmers" → Cross-reference with internal records
- "4,800 kg produced" → Verify against PQI scoring data
- Award claims → Match against `docs/AWARDS_AND_RECOGNITION.md`

**Priority**: HIGH (critical for NGO credibility)

## Next Steps (Recommended)

1. **✅ DONE**: Water Prompt enforcement
2. **✅ DONE**: Pre-commit hook
3. **TODO**: Metrics validation script
4. **TODO**: HTML validation (W3C)
5. **TODO**: Link checker

## Testing

Test the framework with a deliberate violation:

```bash
cd /Users/ginoludikhuyze/Developer/GitHub/Unidos
echo "<h1>Revolutionizing Refugee Support</h1>" >> test.html
git add test.html
git commit -m "test"  # Should BLOCK
```

Expected output:
```
❌ Found 1 violation(s) in 1 file(s):
  test.html:
    Line 1: BANNED WORD: 'Revolutionizing'
```

Clean up:
```bash
git reset HEAD test.html
rm test.html
```

---

**Last updated**: 2026-02-16
**Maintained by**: Unidos Leadership Team
**Based on**: Bonzi_v5 anti-hallucination framework
