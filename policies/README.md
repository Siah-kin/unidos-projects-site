# Unidos /policies — Governance & Communication Policies

**Purpose**: Centralized policy management for Unidos operations, modeled after Bonzi_v5 `/src/leadership/policies/` structure.

---

## 📁 Policy Categories

### Communication Policies
- **WATER_PROMPT.md** — Content style guide (avoid AI fingerprints, mechanics first, no buzzwords)
- **SOCIAL_MEDIA.md** — Social media posting guidelines, tone, frequency
- **DONOR_COMMUNICATIONS.md** — Grant reports, impact updates, transparency standards

### Operational Policies
- **PQI_SCORING.md** — Production Quality Index methodology (100-point system)
- **COOPERATION_SCORING.md** — HEROES behavioral detection, tier progression (Lurker → MVP)
- **WIZARD_FLOWS.md** — Standard wizard processes (donation setup, crowdfunding, impact verification)

### Governance Policies
- **DAO_VOTING.md** — Trust-weighted voting rules, proposal thresholds, quorum requirements
- **EULER_POOL.md** — Distribution formulas, contribution eligibility, anti-gaming measures
- **GRADUATED_SANCTIONS.md** — Violation tiers, consequences, appeal process (Ostrom model)

### Financial Policies
- **REVENUE_DISTRIBUTION.md** — 70/20/10 model (producers/reinvestment/solidarity fund)
- **GRANT_MANAGEMENT.md** — Application process, reporting requirements, compliance
- **TRANSPARENCY.md** — On-chain treasury visibility, public reporting standards

---

## 🎯 Active Policies

### 1. **WATER_PROMPT.md** (Content Style Guide)

**Status**: ✅ Active (implemented in WEBSITE_IMPROVEMENTS_ANALYSIS.md)

**Core Principle**: Never announce what you are. Let people discover what you do.

**Five Tests**:
1. **Specificity** — Can this claim be verified?
2. **Protest Sign** — Could this appear on a banner?
3. **Mechanics First** — Does it describe WHAT (not WHY)?
4. **No Comparisons** — Avoid positioning against others
5. **Adversarial** — Survives cynical readers?

**Banned Vocabulary**:
- ❌ innovative, transformative, revolutionary, groundbreaking
- ❌ holistic, comprehensive, seamless
- ❌ empower, leverage, unlock, synergy
- ❌ cutting-edge, paradigm, disrupt

**Approved Pattern**:
- ✅ Specific metrics (501 farmers, 4,800 kg, 7.8 tons)
- ✅ Verifiable outcomes (45% yield increase, 40% soil improvement)
- ✅ Real people (Furaha Bahati, Rosetta Nzonga)
- ✅ Honest challenges ("We only made 4 sites instead of 6")
- ✅ Mechanics ("2-week training: permaculture design, seed conservation, tools provided")

**Enforcement**: All public content (website, social media, grant applications) must pass Water Prompt audit before publication.

**Review Cycle**: Quarterly audit of all published content

**Source**: Adapted from Bonzi_v5 `/src/leadership/policies/WATER_PROMPT.md`

---

### 2. **PQI_SCORING.md** (Production Quality Index)

**Status**: 🚧 Pilot testing (10 farmers, mushroom batches)

**Purpose**: Fair chain verification without expensive WFTO certification

**Scoring Dimensions** (100 points total):
1. **Size consistency** (15 pts) — Cap diameter within 5-8 cm range
2. **Color uniformity** (10 pts) — White to light brown, no discoloration
3. **Contamination-free** (20 pts) — No mold, pests, or foreign material
4. **Moisture content** (10 pts) — Optimal 85-90% for fresh mushrooms
5. **Harvest timing** (10 pts) — Picked at peak maturity
6. **Yield efficiency** (15 pts) — kg produced per kg substrate
7. **Presentation** (5 pts) — Clean, undamaged stems/caps
8. **Shelf life** (10 pts) — Days remain fresh post-harvest
9. **Traceability** (5 pts) — Batch labels, farmer ID, harvest date

**Score Interpretation**:
- **90-100**: Premium grade (30-50% markup pricing)
- **75-89**: Standard grade (market price)
- **60-74**: Below standard (discounted or composted)
- **<60**: Rejected (identify quality issue, provide training)

**Verification Method**:
- Farmer self-reports + spot checks (monthly random sampling)
- Photos required for batches >50 kg
- Merkle proofs (planned): Cryptographic verification on-chain

**Benefit**: $0 cost vs $2,000/year WFTO certification, real-time vs annual audit

**Review Cycle**: Quarterly methodology review, monthly farmer feedback

---

### 3. **COOPERATION_SCORING.md** (HEROES Behavioral Detection)

**Status**: 🚧 Design complete, Telegram bot pending

**Purpose**: Trust-weighted governance via behavioral contribution detection

**HEROES Taxonomy** (6 behavior types):
1. **Helper** — Answers questions, solves problems, shares knowledge
2. **Educator** — Writes detailed explanations, creates tutorials
3. **Reflector** — Reports bugs, identifies issues, provides feedback
4. **Organizer** — Coordinates tasks, schedules activities, manages logistics
5. **Engager** — Keeps morale up, welcomes new members, builds community
6. **Supporter** — Sends encouragement, celebrates wins, provides emotional support

**Scoring Formula**:
- Each detected behavior → +1 to +10 points (weighted by complexity, impact)
- Tier thresholds:
  - **Lurker**: 0-20 (observer, no contribution)
  - **Participant**: 21-50 (occasional help)
  - **Helper**: 51-100 (regular contributor)
  - **Trusted**: 101-200 (proven track record)
  - **Pillar**: 201-500 (community leader)
  - **MVP**: 501+ (exceptional sustained contribution)

**Governance Weight**:
- Cooperation score = vote weight (1 score point = 1 vote)
- Production multiplier: Farmers with PQI ≥85 get 1.5x vote weight
- Example: Farmer with 200 cooperation + 85 PQI = 200 * 1.5 = 300 vote weight

**Anti-Gaming** (4 layers):
1. Passport gate (ERC-8004 + Telegram + X/Twitter verification)
2. Behavioral pattern analysis (AI detects copy-paste, generic responses)
3. EigenTrust reputation graph (ring detection)
4. Graduated sanctions (warnings → suspension → ban)

**Review Cycle**: Weekly detection accuracy audit, monthly anti-gaming review

**Source**: Adapted from Bonzi_v5 SIAH Protocol (CPI-253 scoring, HEROES detection)

---

## 🚀 Policies to Develop (Q2-Q3 2026)

### Short-term (Q2)
- [ ] **DAO_VOTING.md** — Voting rules, quorum, proposal thresholds
- [ ] **EULER_POOL.md** — Distribution formulas, eligibility criteria
- [ ] **SOCIAL_MEDIA.md** — Posting guidelines, voice/tone standards

### Medium-term (Q3)
- [ ] **GRADUATED_SANCTIONS.md** — Violation handling, appeal process
- [ ] **REVENUE_DISTRIBUTION.md** — 70/20/10 model enforcement
- [ ] **TRANSPARENCY.md** — On-chain reporting standards

### Long-term (Q4)
- [ ] **GRANT_MANAGEMENT.md** — Application SOPs, compliance checklist
- [ ] **DONOR_COMMUNICATIONS.md** — Impact report templates
- [ ] **WIZARD_FLOWS.md** — Standard process documentation

---

## 📋 Policy Development Process

### 1. Drafting
- Identify need (operational gap, governance question, compliance requirement)
- Research best practices (Bonzi_v5, Mondragon Cooperative, Ostrom commons governance)
- Draft policy document (purpose, rules, enforcement, review cycle)

### 2. Review
- Leadership team review (Paulinho + key stakeholders)
- Pilot test (if operational policy)
- Gather feedback (farmers, partners, community)

### 3. Approval
- DAO vote (if governance policy, requires 60% yes vote)
- Leadership approval (if operational policy, simple majority)
- Documentation (publish to /policies folder)

### 4. Implementation
- Train affected parties (farmers, staff, volunteers)
- Update systems (Telegram bot, Airtable, dashboards)
- Monitor compliance (weekly/monthly reviews)

### 5. Review & Update
- Quarterly policy audit (are policies being followed?)
- Annual policy update (do rules still make sense?)
- Community feedback (what's working, what's not?)

---

## 🔗 Related Resources

**In Leadership**:
- `/leadership/strategy/UNIDOS_BUSINESS_MODEL_2026.md` — Revenue model, PQI scoring, projections
- `/leadership/strategy/UNIDOS_WIZARD_NGO_MANAGEMENT.md` — Wizard flows, vetting scores
- `/leadership/strategy/WEBSITE_IMPROVEMENTS_ANALYSIS.md` — Water Prompt implementation

**In Scout**:
- `/leadership/scout/UNIDOS_DAO_TRANSFORMATION_ROADMAP.md` — DAO transition plan
- `/leadership/scout/REFUGEE_NGO_BUSINESS_MODELS_COMPARISON.md` — Competitor analysis

**In Bonzi_v5** (source frameworks):
- `/src/leadership/policies/WATER_PROMPT.md` — Original Water Prompt specification
- `/HIVE_DAO_FRAMEWORK_v3.md` — SIAH Protocol governance model
- `/data/leadership/oracle/BUSINESS_STRATEGY_2026.md` — Trust-weighted voting, Euler pool

---

## 🎓 Policy Principles (from Ostrom Commons Governance)

1. **Clearly Defined Boundaries** — Who is eligible for cooperation scores, Euler pool, voting
2. **Proportional Equivalence** — Farmers earn rewards proportional to contribution (PQI + cooperation score)
3. **Collective-Choice Arrangements** — Those affected by rules participate in modifying rules (DAO voting)
4. **Monitoring** — Cooperation scores tracked transparently, Euler pool distributions verifiable on-chain
5. **Graduated Sanctions** — First warning, then suspension, then ban (escalating consequences)
6. **Conflict Resolution** — Appeal process for sanctions, dispute resolution via trusted members
7. **Minimal Recognition** — DAO governance recognized by NGO board (hybrid model)
8. **Nested Enterprises** — Unidos (settlement level) → Regional federation (planned) → Global network (vision)

---

*Last updated: February 2026*
*Maintained by: Unidos Leadership Team*
*Review cycle: Quarterly (policy audit), Annually (policy updates)*
