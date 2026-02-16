# Unidos vs Bonzi_v5: Anti-Hallucination Framework Gap Analysis

**Date**: 2026-02-16
**Status**: Phase 1 Complete (Water Prompt enforcement installed)

---

## ✅ What's Installed (Phase 1)

### 1. Water Prompt Enforcement
- **Script**: `scripts/validation/water_check.py`
- **Pre-commit hook**: `.git/hooks/pre-commit` (4-step validation)
- **Coverage**: HTML, markdown, external-facing content
- **Blocks**: Banned vocabulary, protest-sign language, comparisons

### 2. Basic Safety Gates
- Secret file detection (.env, .key, .pem)
- Large file warning (>10MB)
- HTML syntax check (basic)

---

## 🔴 Critical Missing Components (from Bonzi_v5)

### 1. **Metrics Validation** (HIGH PRIORITY)
**Bonzi_v5 has**: `scripts/validation/verify_cpi.py`, `verify_revenue.py`

**Unidos needs**: Cross-reference claims with source documents

**Examples**:
- "501 farmers trained" → Verify against internal records
- "4,800 kg mushrooms produced" → Check PQI scoring data
- "7.8 tons vermicompost" → Match production logs
- Award claims → Cross-check `docs/AWARDS_AND_RECOGNITION.md`

**Why critical**: NGO credibility depends on accurate metrics. One fabricated number destroys trust.

**Implementation**:
```python
# scripts/validation/verify_metrics.py
# Read stories/*.html → Extract numeric claims → Cross-reference source docs
```

**Status**: 🔴 NOT STARTED

---

### 2. **Source Document Tracking** (HIGH PRIORITY)
**Bonzi_v5 has**: `data/agent_proofs/` with SHA256 hashes

**Unidos needs**: Track which source docs support which claims

**Structure**:
```
stories/source-documents/
├── mushroom-spawn-lab-report-2024.pdf  (UNHCR)
├── vermicompost-impact-study-2023.docx
├── women-circle-attendance-2025.xlsx
└── MANIFEST.json  (maps claims → source docs)
```

**MANIFEST.json example**:
```json
{
  "501 farmers trained": {
    "source": "vermicompost-impact-study-2023.docx",
    "page": 12,
    "verified_date": "2026-01-15",
    "hash": "sha256:abc123..."
  }
}
```

**Why critical**: Donors/auditors need proof. "Where did this number come from?"

**Status**: 🔴 NOT STARTED

---

### 3. **Automated Fact-Checking** (MEDIUM PRIORITY)
**Bonzi_v5 has**: `ralph_external_verify.py` (proof-of-work gates)

**Unidos needs**: Pre-publish verification for claims

**Gates**:
1. All numeric claims have source references
2. Source docs exist and are accessible
3. Claims match source docs (no inflation)
4. Recent claims (<6 months) have verification dates

**Implementation**:
```bash
# scripts/validation/fact_check.py
# Before deployment → Scan all HTML → Flag unsupported claims
```

**Status**: 🔴 NOT STARTED

---

## 🟡 Optional Enhancements (from Bonzi_v5)

### 4. **Security Audit** (LOW PRIORITY for static site)
**Bonzi_v5 has**: `scripts/validation/security_audit.py`

**Scans for**:
- Hardcoded secrets (API keys in JS)
- PII leaks (personal emails in HTML comments)
- SQL injection vulnerabilities (N/A for static site)
- XSS risks (minimal for static HTML)

**Unidos risk**: LOW (no backend, no user input, no database)

**Status**: 🟡 OPTIONAL

---

### 5. **Test Suite** (MEDIUM PRIORITY)
**Bonzi_v5 has**: 290+ pytest tests

**Unidos could have**:
- HTML validation (W3C validator)
- Link checker (broken internal/external links)
- Image existence checks (verify all `<img src>`)
- Mobile responsiveness tests (viewport breakpoints)
- Form validation (contact form, donation form)

**Implementation**:
```bash
# tests/test_html_validity.py
# tests/test_links.py
# tests/test_images.py
```

**Status**: 🟡 OPTIONAL

---

### 6. **OPSEC Manifest** (LOW PRIORITY)
**Bonzi_v5 has**: Signed developer manifest tracking sensitive file changes

**Unidos could track**:
- Donation addresses (prevent accidental changes)
- Contact information (email, phone)
- Financial data (budget, revenue)

**Risk**: LOW (small team, public repo, no on-chain assets)

**Status**: 🟡 OPTIONAL

---

## 📊 Priority Ranking

| Component | Priority | Effort | Impact | Status |
|-----------|----------|--------|--------|--------|
| **Metrics Validation** | 🔴 HIGH | 2 days | Credibility | Not started |
| **Source Document Tracking** | 🔴 HIGH | 1 day | Auditability | Not started |
| **Automated Fact-Checking** | 🟡 MEDIUM | 3 days | Trust | Not started |
| **Water Prompt Enforcement** | 🔴 HIGH | 1 day | Brand | ✅ DONE |
| **Test Suite** | 🟡 MEDIUM | 1 week | Quality | Not started |
| **Security Audit** | 🟢 LOW | 2 days | Safety | Not started |
| **OPSEC Manifest** | 🟢 LOW | 1 day | Accountability | Not started |

---

## 🎯 Recommended Roadmap

### Phase 1: ✅ COMPLETE (2026-02-16)
- Water Prompt enforcement
- Pre-commit hook
- Basic safety gates

### Phase 2: 📋 NEXT (1 week)
1. **Metrics validation script**
   - Extract all numeric claims from HTML
   - Cross-reference with source documents
   - Flag unsupported claims
   - Generate validation report

2. **Source document manifest**
   - Create `stories/source-documents/MANIFEST.json`
   - Map claims → source docs
   - Add SHA256 hashes for tamper detection

3. **Fact-check gate**
   - Add to pre-commit hook
   - Block commits with unverified claims
   - Allow bypass with `--no-verify` (requires approval)

### Phase 3: 🚀 FUTURE (optional)
- W3C HTML validator
- Link checker (broken links)
- Image existence validator
- Mobile responsiveness tests

---

## 🔬 Technical Differences: Unidos vs Bonzi_v5

| Aspect | Bonzi_v5 | Unidos | Implication |
|--------|----------|--------|-------------|
| **Architecture** | Python backend, Telegram bot | Static HTML site | Unidos needs simpler validation |
| **Attack surface** | API endpoints, database, user input | Static files only | Lower security risk |
| **Claim verification** | On-chain data (verifiable) | PDF reports, partner docs | Requires manual cross-check |
| **Deployment** | Render (CI/CD) | GitHub Pages | Deploy on every push |
| **Audience** | Crypto traders, DeFi users | Donors, NGOs, refugees | Higher trust standards |

**Key insight**: Unidos faces HIGHER trust requirements (NGO sector) but LOWER technical complexity (static site). Focus validation on **content accuracy** over **code security**.

---

## 💡 Bonzi_v5 Components NOT Needed

### 1. Agent Claim Verification
**Why**: Bonzi_v5 has autonomous AI agents making claims (need proof-of-work)
**Unidos**: Human editors, no autonomous agents
**Verdict**: ❌ NOT APPLICABLE

### 2. Import Smoke Tests
**Why**: Bonzi_v5 is Python codebase (check imports don't break)
**Unidos**: HTML/CSS/JS (no Python modules)
**Verdict**: ❌ NOT APPLICABLE

### 3. Ralph External Verify
**Why**: Bonzi_v5 has autonomous task loop (Ralph) making changes
**Unidos**: Human-driven edits only
**Verdict**: ❌ NOT APPLICABLE

### 4. Rate Limiting / API Security
**Why**: Bonzi_v5 has public API endpoints
**Unidos**: Static site, no API
**Verdict**: ❌ NOT APPLICABLE

---

## 🚨 Risk Assessment

### Without Metrics Validation
**Scenario**: Editor updates "501 farmers" to "650 farmers" without source doc
**Risk**: Audit failure, donor distrust, grant rejection
**Likelihood**: MEDIUM (human error, optimistic rounding)
**Impact**: HIGH (reputation damage)

### Without Source Tracking
**Scenario**: Donor asks "Prove 4,800 kg mushrooms claim"
**Risk**: Cannot provide evidence, claim dismissed as marketing
**Likelihood**: HIGH (donors increasingly skeptical)
**Impact**: MEDIUM (lost funding opportunity)

### Without Fact-Check Gate
**Scenario**: AI assistant fabricates "7,200 kg biochar produced" (inflated)
**Risk**: Published to website, spreads to media, exposed as false
**Likelihood**: LOW (water check catches AI language, but not numbers)
**Impact**: CRITICAL (NGO credibility destroyed)

---

## 📚 Reference

**Bonzi_v5 Framework**:
- `/Users/ginoludikhuyze/Developer/GitHub/Bonzi_v5/scripts/validation/`
- `water_check.py` (ported to Unidos ✅)
- `verify_agent_claims.py` (not applicable ❌)
- `ralph_external_verify.py` (not applicable ❌)
- `verify_cpi.py` (adapt as `verify_metrics.py` 🔴)
- `verify_revenue.py` (adapt as `verify_claims.py` 🔴)

**Unidos Policies**:
- `policies/WATER_PROMPT.md` (enforced ✅)
- `policies/PQI_SCORING.md` (design phase)
- `policies/COOPERATION_SCORING.md` (design phase)

---

## 🎓 Key Learnings from Bonzi_v5

1. **Automation is mandatory** - Humans forget rules, computers don't
2. **Block at commit time** - Fix issues before deployment, not after
3. **External verification** - AI can optimize for passing tests, not correctness
4. **Layered enforcement** - Pre-commit + runtime + strategic review
5. **Document everything** - Every check has a policy doc explaining WHY

---

**Next Steps**:
1. Read this document
2. Prioritize Phase 2 components
3. Implement metrics validation first
4. Add source document manifest
5. Wire fact-check gate into pre-commit hook

---

*Based on Bonzi_v5 anti-hallucination framework*
*Last updated: 2026-02-16*
