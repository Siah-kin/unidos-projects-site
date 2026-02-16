# Security Classification for /scout Documents

**Last Updated**: February 16, 2026
**Classification Authority**: Unidos Leadership Team

---

## 🔒 Document Security Levels

### PRIVATE (Restricted Distribution)

**Access**: Unidos leadership, trusted advisors under NDA, vetted strategic partners only

**Files**:
- `README.md` - Strategic vault index (contains sensitive competitive intelligence)
- `UNIDOS_DAO_TRANSFORMATION_ROADMAP.md` - Full DAO transition strategy (not for public distribution until Phase 1 complete)
- `STRATEGIC_DEFI_PARTNERSHIPS.md` - Ranked partner pipeline, grant opportunities (competitive advantage)
- `BONZI_CREDIT_UNION_MODEL.md` - Detailed funding model with revenue projections
- `MEMBER_ONBOARDING_CREDIT_UNION_SUMMARY.md` - Internal member onboarding strategy
- `README_COMPLETE.md` - Complete research index with implementation details

**Why Private**:
- Contains competitive intelligence and strategic positioning
- Reveals transformation timeline and financial projections
- Includes partnership strategies and grant application plans
- Could be exploited by competitors if made public prematurely
- Contains internal metrics and success criteria

**Distribution Rules**:
- Require explicit approval from Paulinho Ginoludikhuyze or designated leadership
- Partners must sign NDA before access
- No public posting, social media sharing, or inclusion in public grant applications
- Use sanitized public versions for external communications

---

### PUBLIC (Can Be Shared)

**Access**: Open distribution, can be used in grant applications, shared with public, posted on websites

**Files**:
- `REFUGEE_NGO_BUSINESS_MODELS_COMPARISON.md` - Comparative analysis of 5 refugee NGOs (educational research)
- `HYPERSKIDS_ANALYSIS.md` - Charity memecoin case study (lessons learned)
- `ACADEMIC_PAPER_DATA_AS_COLLATERAL.md` - Peer-review ready research paper (for journal submission)
- `DATA_AS_COLLATERAL_BARTER.md` - Technical implementation guide (can share with developers)
- `LEAN_MOBILE_ARCHITECTURE.md` - Mobile-first architecture guide (technical, non-strategic)
- `BONZI_BUDDY_REFUGEE_TOOLKIT.md` - Refugee toolkit adaptation (public tool)
- `GDPR_COMPLIANCE_PLAN_REFUGEE_DATA.md` - Data protection framework (transparency document)

**Why Public**:
- Educational value for refugee innovation community
- No competitive advantage revealed
- Demonstrates Unidos expertise and impact
- Can be cited in academic papers
- Helps build Unidos reputation and credibility

**Distribution Rules**:
- Can be freely shared
- Attribute to Unidos Social Innovation Center
- Recommend citation format: "Source: Unidos /scout Research Vault, February 2026"

---

### CONDITIONAL (Public After Milestones)

**Access**: Currently private, will become public after specific conditions are met

**Files**:
- `UNIDOS_DAO_TRANSFORMATION_ROADMAP.md` - Private until **Phase 1 complete** (Month 3: 50+ Telegram participants, 100+ daily HEROES detections)
- `GLOBAL_BARTER_SYSTEM.md` - Private until **Pilot validated** (Q3 2026: 50+ Data Vault users, $3.50/month revenue confirmed)
- `REFUGEE_DATA_MARKETPLACE.md` - Private until **First data sale** (CGIAR or Microsoft Climate partnership confirmed)

**Conditions for Public Release**:
1. Technical milestones achieved (proof of concept validated)
2. Partnerships secured (reduces competitive risk)
3. Leadership approval (final review before publication)
4. Legal review complete (no regulatory concerns)

**Review Process**:
- Leadership team evaluates milestone completion
- Security classification downgraded from PRIVATE → PUBLIC
- Public version sanitized (remove internal metrics, partner names if requested)
- Announcement made to research community

---

## 🛡️ Security Best Practices

### For Unidos Team Members

**When Working with Private Documents**:
```bash
# ✅ SAFE: Working in private GitHub repo
git clone https://github.com/unidos/unidos-projects-site.git
cd leadership/scout
# Edit private documents locally

# ⚠️ UNSAFE: Accidentally pushing to public repo
git remote add public-repo https://github.com/public/repo.git  # DON'T DO THIS
git push public-repo main  # WILL LEAK PRIVATE DOCS

# ✅ SAFE: Check remote before pushing
git remote -v  # Verify it's the private repo
git push origin main  # Only push to private Unidos repo
```

**When Sharing Research**:
```bash
# ✅ SAFE: Sharing public documents
"Check out our refugee NGO comparison: leadership/scout/REFUGEE_NGO_BUSINESS_MODELS_COMPARISON.md"

# ⚠️ UNSAFE: Sharing private documents publicly
"Check out our DAO roadmap: leadership/scout/UNIDOS_DAO_TRANSFORMATION_ROADMAP.md"  # DON'T SHARE
```

**When Applying for Grants**:
```bash
# ✅ SAFE: Use public versions
Attachment: ACADEMIC_PAPER_DATA_AS_COLLATERAL.md (public research)

# ⚠️ UNSAFE: Attach private strategic documents
Attachment: BONZI_CREDIT_UNION_MODEL.md (reveals competitive advantage)  # DON'T ATTACH
```

---

### For External Partners

**If You Received Access to Private Documents**:

1. **NDA Required**: You signed a non-disclosure agreement. Honor it.
2. **No Redistribution**: Do not forward, share, or post these documents publicly
3. **Secure Storage**: Store in password-protected folders, encrypted drives
4. **Limited Use**: Use only for agreed-upon purpose (partnership evaluation, technical review, etc.)
5. **Expiration**: Access may be revoked. Delete copies when partnership ends or upon request

**If You're Unsure About a Document's Status**:
- Check the document header for "🔒 PRIVATE" or "✅ PUBLIC" markers
- Review this SECURITY.md file
- Contact: security@unidos.ug (ask before sharing)

---

## 🚨 Security Incident Response

### If Private Documents Are Accidentally Leaked

**Immediate Actions** (within 1 hour):
1. **Notify Leadership**: Email security@unidos.ug immediately
2. **Document Source**: Where was it leaked? (social media, email, public repo, etc.)
3. **Assess Scope**: Which documents? How many people saw it?
4. **Contain Spread**: Request takedown (if posted online), delete emails, revoke access

**Leadership Response** (within 24 hours):
1. **Evaluate Damage**: Competitive risk, partnership impact, legal implications
2. **Update Strategy**: Accelerate timelines if competitive advantage lost
3. **Sanitize Public Version**: Publish official version to control narrative
4. **Review Access**: Audit who had access, tighten security protocols

**Long-Term Mitigation**:
1. **Improve Classification**: Clearer labels, security warnings in documents
2. **Training**: Educate team on security protocols
3. **Technical Controls**: .gitignore for sensitive files, pre-commit hooks
4. **Regular Audits**: Quarterly review of document classifications

---

## 📞 Contact for Security Questions

**Security Team**: security@unidos.ug
**Leadership Approval**: paulinho@unidos.ug (for document declassification requests)
**General Inquiries**: contact@unidos.ug

---

## 📋 Classification Change Log

**February 16, 2026**:
- Added security notice to README.md
- Created SECURITY.md classification guide
- Marked 6 documents as PRIVATE, 7 as PUBLIC, 3 as CONDITIONAL

**Future Updates**:
- Phase 1 Complete (Est. May 2026): Declassify UNIDOS_DAO_TRANSFORMATION_ROADMAP.md
- Q3 2026 Pilot (Est. Sep 2026): Declassify GLOBAL_BARTER_SYSTEM.md
- First Data Sale (Est. Q4 2026): Declassify REFUGEE_DATA_MARKETPLACE.md

---

*Classification system based on: competitive risk, partnership sensitivity, and strategic advantage. Updated quarterly or as milestones are achieved.*
