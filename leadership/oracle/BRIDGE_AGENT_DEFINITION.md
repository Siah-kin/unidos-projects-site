# BRIDGE Agent Definition: Unidos-Bonzi Vertical Integration

**Full Name**: Bonzi Regeneration Integration for Displaced Governance Ecosystems
**Date**: February 2026
**Status**: INTERNAL - Leadership Planning Document
**Oracle Lead**: Innovator (primary), Strategist (secondary)
**Version**: 1.0

---

## Executive Summary

BRIDGE is the coordination agent that owns the vertical between Unidos' humanitarian operations (501 farmers, Nakivale Refugee Settlement, regenerative agriculture) and Bonzi's regenerative finance toolset (HEROES detection, Euler Pool, Wizard flows, Cooperation Scoring, Oracle 6 framework).

**What BRIDGE is**: A defined role with decision authority, workflows, and accountability for 9 integration verticals. It can be filled by a person, a team, or an AI agent.

**What BRIDGE is not**: Not the Unidos Telegram bot (that is the user-facing execution layer). Not the Oracle Planner (that is strategic oversight on bonzivista.org). BRIDGE sits between them — it translates Bonzi's generic toolset into refugee-specific implementations and ensures the data-as-collateral pipeline runs.

**Why it exists**: Unidos has 5 research documents totaling 40,000+ words describing *what* the integration should do. None define *who* operates it day-to-day. BRIDGE fills that gap.

---

## Agent Identity Card

```
Agent Name:      BRIDGE
Full Name:       Bonzi Regeneration Integration for Displaced Governance Ecosystems
Type:            Strategic Coordination Agent (role-based)

Oracle Lead:     Innovator
                 (data-as-collateral is a first-of-its-kind model)

Oracle Support:  Strategist  — multi-chain roadmap, 2030 scaling plan
                 Analyst     — PQI scoring, cooperation metrics, collateral ratios
                 Guardian    — data sovereignty, anonymization, regulatory compliance
                 Connector   — CGIAR partnerships, Celo Foundation, UNHCR advocacy
                 Operator    — daily pipeline monitoring, USSD uptime, farmer support

Reports To:      Oracle Planner (bonzivista.org)
Delegates To:    Ralph (builder agent), Unidos Bot (user-facing execution)

Decision Scope:  Technical architecture, chain selection, data pipeline design,
                 token economics adjustments (<=5%), HEROES calibration,
                 data buyer contracts (<$5K)

Escalation:      >$5K expenditure, regulatory uncertainty, ethical dilemmas,
                 partnership MOU signing, smart contract deployment
```

---

## The 8 Verticals

### 1. Behavioral KYC (HEROES for Refugees)

**What**: Adapt Bonzi's HEROES detection (Helper, Educator, Reflector, Organizer, Engager, Supporter) to recognize refugee agricultural cooperation behaviors instead of generic online community participation.

**BRIDGE owns**:
- HEROES category mapping: Helper = answers farming questions, Educator = completes/delivers training, Organizer = coordinates harvest schedules, Reflector = provides crop feedback, Engager = daily participation, Supporter = refers new farmers
- Detection accuracy validation (AI classification vs manual spot-check)
- Tier thresholds: Lurker (0-20), Participant (21-50), Helper (51-100), Trusted (101-200), Pillar (201-500), MVP (501+)

**BRIDGE delegates**:
- HEROES AI model training/tuning → Ralph
- Daily detection execution → Unidos Bot
- Manual spot-checks → Community Agents (farmers validate each other)

**Reference**: [BONZI_BUDDY_REFUGEE_TOOLKIT.md](../scout/BONZI_BUDDY_REFUGEE_TOOLKIT.md) (task-and-earn mapping), [ACADEMIC_PAPER_DATA_AS_COLLATERAL.md](../scout/ACADEMIC_PAPER_DATA_AS_COLLATERAL.md) (Section 3.2: behavioral KYC)

**Success metric**: 90%+ HEROES accuracy (AI vs manual match rate) by Q3 2026

**Escalation trigger**: Error rate exceeds 15% for 2+ consecutive weeks → escalate to Oracle Planner for model retrain

---

### 2. Data Farming Pipeline

**What**: End-to-end flow where refugees contribute behavioral data → Unidos monetizes anonymized datasets → buys ETH → locks as collateral → mints UNIDOS barter tokens.

**BRIDGE owns**:
- Data buyer sourcing and contract negotiation (<$5K)
- Pricing per data type: HEROES behavior ($0.10), training completion ($1.00), PQI yield data ($0.50), DAO participation ($0.05), member referral ($2.00), carbon verification ($5.00)
- Anonymization standards (differential privacy, no PII, GPS rounded to 1km grid)
- Revenue-to-collateral conversion schedule (monthly)

**BRIDGE delegates**:
- Data collection → Unidos Bot (HEROES detection, PQI logging)
- Data packaging/anonymization → Ralph (ETL pipeline)
- ETH purchase execution → Treasury multi-sig (Gnosis Safe)
- Token minting → BarterToken.sol (smart contract, multi-sig gated)

**Reference**: [DATA_AS_COLLATERAL_BARTER.md](../scout/DATA_AS_COLLATERAL_BARTER.md) (full mechanics), [ACADEMIC_PAPER_DATA_AS_COLLATERAL.md](../scout/ACADEMIC_PAPER_DATA_AS_COLLATERAL.md)

**Success metric**: $3.50/user/month data value by Q3 2026

**Escalation trigger**: Data buyer demands PII or refuses anonymization → reject and escalate to Guardian

---

### 3. Internal Barter Economy

**What**: UNIDOS token marketplace where 80% of transactions stay internal (mushroom spawn, vermicompost, equipment, training) and only 20% cash out.

**BRIDGE owns**:
- Internal pricing: mushroom spawn bag = 5 UNIDOS, 10 kg vermicompost = 10 UNIDOS, tricycle transport = 10 UNIDOS, Afripads = 15 UNIDOS, training slot = 50 UNIDOS
- Cash-out fee (2%) and maximum cash-out ratio (20% of monthly earnings)
- Circular velocity monitoring (are tokens recirculating or piling up?)
- New goods/services onboarding (when farmers want to sell new products)

**BRIDGE delegates**:
- Marketplace UI → Ralph (PWA/USSD interface)
- Cash-out execution → Unidos Treasury (UGX mobile money transfer)
- Pricing surveys → Analyst (monthly market price comparison)

**Reference**: [DATA_AS_COLLATERAL_BARTER.md](../scout/DATA_AS_COLLATERAL_BARTER.md) (Part 3: barter economy), [UNIDOS_BUSINESS_MODEL_2026.md](../strategy/UNIDOS_BUSINESS_MODEL_2026.md) (70/20/10 distribution)

**Success metric**: 80% internal transaction retention by Q4 2026

**Escalation trigger**: Cash-out exceeds 40% for 2+ consecutive months (token confidence crisis) → escalate to Strategist + Innovator for marketplace expansion

---

### 4. Cooperation Governance

**What**: Cooperation score = credit history + voting weight. Farmers earn governance power by helping, not buying tokens.

**BRIDGE owns**:
- Score-to-credit mapping: cooperation score >= 101 (Trusted tier) = microloan eligible
- Score-to-vote mapping: governance weight = cooperation score (1 point = 1 vote)
- Anti-gaming rules: EigenTrust algorithm, Passport gate, behavioral pattern detection
- Graduated sanctions: warning → score freeze → temporary suspension → permanent ban

**BRIDGE delegates**:
- Score calculation → Unidos Bot (automated from HEROES detections)
- Snapshot voting infrastructure → Ralph (Polygon deployment)
- Sybil investigation → Guardian (manual review of flagged accounts)
- Loan disbursement → Operator (via mobile money or UNIDOS tokens)

**Reference**: [UNIDOS_DAO_TRANSFORMATION_ROADMAP.md](../scout/UNIDOS_DAO_TRANSFORMATION_ROADMAP.md), [REPUTATION_STAKING.md](../strategy/REPUTATION_STAKING.md) (vetting committee thresholds)

**Success metric**: 60%+ DAO voter turnout by Q4 2026

**Escalation trigger**: Sybil attack detected (mass fake accounts gaming scores) → escalate to Guardian for immediate freeze + investigation

---

### 5. Multi-Chain Orchestration

**What**: Celo (primary, phone wallets, USSD, $0.001/tx) → BASE (diaspora fiat on-ramps via Coinbase) → Polygon (DAO voting, NFTs) → Ethereum Mainnet (collateral vault).

**BRIDGE owns**:
- Chain selection for each use case (which feature goes on which chain)
- Bridge architecture (Wormhole/Squid Router for BASE↔Celo)
- Wallet strategy per user tier: Coinbase Wallet (70%), social recovery (20%), self-custody (10%)
- Fee threshold monitoring (alert if any chain exceeds $0.10/tx average)

**BRIDGE delegates**:
- Smart contract deployment → Ralph (with Guardian review)
- Bridge transaction monitoring → Operator (daily check)
- Wallet onboarding → Unidos Bot (guided wizard flow)

**Reference**: [LEAN_MOBILE_ARCHITECTURE.md](../scout/LEAN_MOBILE_ARCHITECTURE.md) (Part 1: chain comparison)

**Success metric**: <$0.01 average transaction fee across all chains

**Escalation trigger**: Chain congestion causing >$0.10 fees for 48h+ OR bridge exploit → escalate to Guardian + Strategist for migration contingency

---

### 6. LEAN Mobile Architecture

**What**: <10MB/month data budget for 70% feature phone users. PWA + USSD + SMS access layers.

**BRIDGE owns**:
- Data budget enforcement (<10MB/month PWA, 0 bytes USSD/SMS)
- Feature-to-channel mapping: what goes PWA (smartphone), USSD (feature phone), SMS (fallback)
- Caching strategy (cooperation scores cached 24h, proposals cached until updated)
- Offline mode definition (7-day offline capability, queue transactions for sync)

**BRIDGE delegates**:
- PWA development → Ralph (React + ethers.js, <1MB initial load)
- USSD gateway integration → Ralph (Kotani Pay API)
- SMS notifications → Ralph (Africa's Talking API)
- Uptime monitoring → Operator

**Reference**: [LEAN_MOBILE_ARCHITECTURE.md](../scout/LEAN_MOBILE_ARCHITECTURE.md) (Part 2: LEAN architecture, Part 3: data budget)

**Success metric**: 70%+ users can access core features (balance, send, vote) on feature phones

**Escalation trigger**: Kotani Pay USSD gateway unavailable >24h → activate SMS fallback, notify Operator

---

### 7. Gasless Distributions (Euler Pool)

**What**: Monthly stipend distribution to 500+ wallets in a single transaction via Euler Pool O(1) gas mechanism.

**BRIDGE owns**:
- Distribution frequency (monthly)
- Proportionality formula: distribution_share = (user_cooperation_score / total_cooperation_scores) * pool_amount
- Minimum distribution threshold ($0.50 — below this, accumulate to next month)
- Pool funding sources: 10% B2B revenue + data sales revenue + donor tips

**BRIDGE delegates**:
- Euler Pool smart contract deployment → Ralph (with Guardian audit)
- Distribution execution → Operator (monthly, multi-sig approved)
- Pool balance monitoring → Analyst (weekly report)

**Reference**: [UNIDOS_BUSINESS_MODEL_2026.md](../strategy/UNIDOS_BUSINESS_MODEL_2026.md) (70/20/10 split), [BONZI_BUDDY_REFUGEE_TOOLKIT.md](../scout/BONZI_BUDDY_REFUGEE_TOOLKIT.md) (Euler Pool mechanics)

**Success metric**: 500+ wallets per distribution, <$1 total gas

**Escalation trigger**: Distribution fails for >5% of intended recipients → escalate to Ralph for debugging, Operator for manual fallback

---

### 8. Soulbound Identity (ERC-8004 Passport)

**What**: Portable, stateless-friendly identity credentials that work across borders without government documents.

**BRIDGE owns**:
- What goes on-chain: cooperation score, award NFTs, training completions, PQI certifications
- What stays off-chain: personal data, biometrics, precise location
- Credential format: W3C Verifiable Credentials + ERC-8004 soulbound NFTs
- Portability standards: compatible with Gitcoin Passport, Worldcoin, UNHCR identity systems

**BRIDGE delegates**:
- NFT smart contract → Ralph (TrainingCertificateNFT.sol on Polygon)
- Credential issuance → Unidos Bot (automated on training completion)
- Revocation handling → Guardian (if credential challenged)

**Reference**: [ACADEMIC_PAPER_DATA_AS_COLLATERAL.md](../scout/ACADEMIC_PAPER_DATA_AS_COLLATERAL.md) (Section 2.4: behavioral KYC), [REPUTATION_STAKING.md](../strategy/REPUTATION_STAKING.md) (award NFT structure)

**Success metric**: Credentials recognized by 2+ external platforms by 2027

**Escalation trigger**: Regulatory demand to deanonymize soulbound identities → escalate to Guardian + legal review (conflict with refugee protection mandate)

---

### 9. Membership & ZK Data Commons (Incubation Flywheel)

**What**: Membership tiers drive sustained data contribution → ZK proofs multiply data value → stronger grant pipeline → revenue funds regenerative business incubation → incubated businesses generate more data. Paulinho and Maria's expertise powers the incubation engine.

**BRIDGE owns**:
- Membership tier definitions (Seed/Grower/Cultivator/Steward), requirements, and benefits
- ZK proof generation schedule (quarterly, Semaphore circuits on Polygon)
- Data commons governance framework (DAO votes on data buyer policies)
- Incubation candidate selection criteria (cooperation score >=100, Cultivator tier, 6+ months)
- Seed funding allocation from collateral vault ($200-500 per incubated business)

**BRIDGE delegates**:
- Membership smart contract → Ralph (MembershipRegistry.sol on Celo)
- ZK circuit development → Ralph (Semaphore integration on Polygon)
- Incubation mentorship → Paulinho + Maria (8-week training program)
- Grant application assembly → Connector (proof bundle + narrative)
- Data buyer relationship management → Connector + Guardian

**Reference**: [MEMBERSHIP_DATA_COMMONS_STRATEGY.md](../strategy/MEMBERSHIP_DATA_COMMONS_STRATEGY.md) (full design)

**Success metric**: 200+ Grower members, 3+ ZK-verified grant awards, 10 incubated businesses by Q1 2027

**Escalation trigger**: ZK proof generation failure (circuit bug) → escalate to Ralph; data buyer ethics violation → escalate to Guardian + DAO vote

---

## Oracle 6 Decision Authority Matrix

Each Oracle personality has specific responsibilities within the BRIDGE vertical:

| Oracle | BRIDGE Responsibility | Example Decision |
|--------|----------------------|-----------------|
| **Innovator** (Lead) | Data-as-collateral design, novel token mechanics, new data buyer models | "Can we tokenize carbon credits from biochar as additional collateral?" |
| **Strategist** | Multi-year roadmap, chain migration, scaling from 500 to 100K users | "Expand to Rwamwanja settlement now or deepen Nakivale first?" |
| **Analyst** | PQI scores, cooperation distributions, collateral ratios, revenue tracking | "Data revenue dropped 15% — investigate: fewer contributions or buyer pricing change?" |
| **Guardian** | Data anonymization, smart contract audits, regulatory monitoring, fraud detection | "New data buyer contract — does it meet our anonymization standards?" |
| **Connector** | External partnerships for the vertical (Celo Foundation, CGIAR, UNHCR) | "Celo Foundation offering grant for USSD integration — pursue?" |
| **Operator** | Daily pipeline monitoring, USSD uptime, bridge processing, farmer onboarding | "USSD gateway timeout rate increased 3x — investigate MTN network or Kotani Pay?" |

### Decision Authority Table

| Decision Type | Authority Level | Escalation |
|---------------|----------------|------------|
| Token pricing change (<=5%) | BRIDGE decides | >5% → DAO vote |
| New data buyer contract (<$5K) | BRIDGE + Connector signs | >$5K → Strategist approval |
| HEROES model recalibration | BRIDGE + Analyst approves | >15% accuracy drop → Oracle Planner |
| Chain migration recommendation | BRIDGE recommends only | Always → Strategist + DAO vote |
| Smart contract deployment | BRIDGE + Guardian reviews | Always → multi-sig execution |
| Cooperation score threshold (<=10%) | BRIDGE + Analyst adjusts | >10% → DAO vote |
| Emergency bridge pause | BRIDGE + Guardian executes | Immediate action, notify all after |
| Partnership MOU | BRIDGE recommends only | Always → Human Leadership (Paulinho + Board) |
| Data anonymization standards | BRIDGE + Guardian sets | Regulatory change → external legal review |
| Euler pool distribution amount | BRIDGE + Operator executes | >$5K single distribution → Strategist |
| New marketplace item pricing | BRIDGE + Analyst sets | Community dispute → DAO arbitration |
| Cash-out ratio adjustment | BRIDGE recommends | Always → DAO vote |
| Incubation candidate selection | BRIDGE + DAO vote (Cultivator+) | Candidate disputes → Connector mediation |
| ZK proof circuit deployment | BRIDGE + Guardian reviews | Always → testnet first, then multi-sig |
| Membership tier changes | BRIDGE recommends | Always → DAO supermajority (>66%) |
| Seed funding disbursement (<$500) | BRIDGE + Operator | >$500 → Strategist approval |

---

## Operational Workflows

### Monitoring Mode (Daily)

Run every morning. Takes 15-30 minutes (human) or runs automatically (AI agent).

| Check | Source | Green | Yellow | Red |
|-------|--------|-------|--------|-----|
| Data pipeline flowing | Supabase: contributions table | 10+ contributions/day | 3-9/day | <3/day |
| Chain fees normal | Celo/BASE/Polygon explorers | <$0.01 avg | $0.01-0.05 | >$0.05 |
| HEROES accuracy | Spot-check 5 classifications | 90%+ match | 80-89% | <80% |
| USSD gateway up | Kotani Pay status | 99%+ uptime | 95-98% | <95% |
| Collateral ratio healthy | Gnosis Safe + token supply | >140% | 120-140% | <120% |
| SMS delivery rate | Africa's Talking dashboard | 95%+ delivered | 85-94% | <85% |

Output: Daily status summary (one line per check, color-coded).

### Decision Mode (Weekly)

Recurring decisions made every Monday. BRIDGE reviews:

1. **Data buyer pipeline**: Any new proposals? Evaluate against ethics checklist (anonymization, pricing, consent alignment)
2. **Token economics**: Cash-out ratio trending? Internal marketplace utilization? Price adjustments needed?
3. **HEROES accuracy**: Weekly aggregate accuracy. Recalibration needed?
4. **Cooperation score distribution**: Healthy spread across tiers? Signs of gaming?
5. **Revenue tracking**: Data sales on target? Collateral growing on schedule?

Output: Decision log entry (what was decided, which Oracle personality led, rationale).

### Escalation Mode (Event-Driven)

| Trigger | Severity | Response SLA | Action |
|---------|----------|-------------|--------|
| Smart contract exploit | Critical | 4 hours | Pause contracts, freeze bridge, Guardian investigates |
| Sybil attack on cooperation scores | Critical | 4 hours | Freeze affected accounts, Guardian + Analyst investigate |
| Data buyer violates anonymization | High | 24 hours | Terminate contract, Guardian reviews exposure, notify affected users |
| Chain fee spike (>$0.10 for 48h) | High | 24 hours | Route transactions to cheaper chain, Strategist evaluates migration |
| Uganda regulatory action against crypto/DAO | High | 24 hours | Pause public operations, Guardian + legal review, Strategist plans contingency |
| ETH price drops collateral below 120% | Medium | 72 hours | Pause new token minting, Analyst models scenarios, Strategist decides |
| USSD gateway down >24h | Medium | 72 hours | Activate SMS fallback, Operator contacts Kotani Pay |
| Cash-out ratio exceeds 40% | Medium | 72 hours | Analyze cause, Innovator proposes new marketplace goods, Strategist reviews |

Output: Incident report (timeline, root cause, action taken, Oracle personality analysis, prevention recommendation).

---

## Success Metrics

### Tier 1: Pipeline Health (Monthly)

| Metric | Q2 2026 | Q3 2026 | Q4 2026 |
|--------|---------|---------|---------|
| HEROES accuracy (AI vs manual) | 85% | 90% | 95% |
| Data contributions per user per month | 5 | 10 | 15 |
| Data revenue per user per month | $1.50 | $3.50 | $5.00 |
| USSD gateway uptime | 95% | 98% | 99% |
| Average transaction fee (all chains) | <$0.05 | <$0.02 | <$0.01 |
| PWA data usage per user per month | <5MB | <3MB | <2MB |

### Tier 2: Economy Health (Quarterly)

| Metric | Q2 2026 | Q3 2026 | Q4 2026 |
|--------|---------|---------|---------|
| Internal transaction ratio | 60% | 70% | 80% |
| Collateral vault value (USD) | $5,000 | $15,000 | $30,000 |
| UNIDOS tokens minted (cumulative) | 3,300 | 10,000 | 20,000 |
| Active cooperation score holders | 40 | 80 | 120 |
| DAO voter turnout | N/A | 30% | 60% |
| Euler pool distributions completed | 1 | 3 | 6 |

### Tier 3: Impact (Annual)

| Metric | Year 1 Target |
|--------|---------------|
| Refugees with behavioral KYC (HEROES profile) | 200 |
| Refugees accessing financial services for first time | 100 |
| Cost savings vs traditional banking per user | $72/year |
| External platforms recognizing BRIDGE credentials | 1 |
| Academic paper citations | 10+ |
| Data buyer contracts signed | 3+ |

---

## Implementation Roadmap

### Q2 2026: Foundation (Months 4-6)

- [ ] Deploy BarterToken.sol on Celo Alfajores testnet
- [ ] Calibrate HEROES detection for 10 refugee farmers (manual validation baseline)
- [ ] Sign first data buyer letter of intent (CGIAR agriculture research or carbon verifier)
- [ ] Launch USSD gateway pilot (Kotani Pay, 20 feature phone users)
- [ ] Build PWA prototype (<1MB, cooperation score + balance + send)
- [ ] Assign BRIDGE role to specific person (technical lead)
- [ ] Set up daily monitoring dashboard (Supabase + Cloudflare)

### Q3 2026: Pilot (Months 7-9)

- [ ] BarterToken.sol on Celo mainnet (50 farmers, guarded launch)
- [ ] Activate real data sales ($24K/year target from MEMORY.md)
- [ ] Lock first ETH in CollateralVault (Gnosis Safe, Ethereum Mainnet)
- [ ] Mint first UNIDOS tokens (1:1 USD backing, 150% overcollateralized)
- [ ] First Euler Pool distribution ($500+ from B2B revenue + data sales)
- [ ] HEROES accuracy: 90%+ (AI vs manual match rate)
- [ ] Scale to 200 farmers

### Q4 2026: Scale (Months 10-12)

- [ ] Scale to 500+ farmers (all Nakivale programs)
- [ ] BASE bridge operational (diaspora fiat on-ramps via Coinbase)
- [ ] DAO governance active (Snapshot voting, cooperation-weighted, Polygon)
- [ ] Soulbound identity pilot (ERC-8004 passport, 50 early adopters)
- [ ] Expand geographic scope (Rwamwanja, Kyangwali settlements — 2,000 users target)
- [ ] UNHCR policy advocacy begins (present behavioral KYC data to Innovation Service)

---

## Risk Registry

| Risk | Probability | Impact | Mitigation | Oracle Owner |
|------|-------------|--------|------------|--------------|
| HEROES misclassifies refugee behaviors | Medium | High | Manual validation baseline, weekly accuracy audits, recalibration pipeline | Analyst |
| Data buyer exploits refugee data (breaks anonymization) | Low | Critical | Contractual safeguards, technical anonymization (differential privacy), right-to-revoke, no PII in datasets | Guardian |
| ETH price crash reduces collateral below 100% | Medium | High | 150% overcollateralization buffer, diversify into stablecoins (30% DAI/USDC in vault) | Analyst |
| Uganda regulates against crypto/DAO | Low | Critical | Legal monitoring, contingency: pure mobile money fallback (no blockchain dependency for core operations) | Guardian |
| Kotani Pay USSD gateway shuts down | Low | High | Backup: Africa's Talking USSD API, SMS-only fallback mode | Operator |
| Sybil attack on cooperation scores | Medium | High | EigenTrust algorithm, Passport gate, graduated sanctions, community vouching requirement | Guardian |
| Cash-out exceeds 40% (token confidence crisis) | Medium | Medium | Expand internal marketplace (more goods/services), add new vendors, incentivize internal spending | Innovator |
| Founder (Paulinho) burnout or resettlement | Medium | Critical | Distributed leadership via cooperation tiers, documented SOPs, BRIDGE agent ensures continuity | Strategist |
| Smart contract vulnerability (BarterToken.sol) | Low | Critical | OpenZeppelin base contracts, multi-sig deployment, testnet period, consider formal audit | Guardian |
| Network congestion on Celo | Low | Medium | Multi-chain architecture provides fallback (BASE for critical transactions) | Operator |

---

## Document Cross-Reference Map

```
BRIDGE AGENT
  |
  |-- Behavioral KYC (Vertical 1)
  |     |-> ../scout/BONZI_BUDDY_REFUGEE_TOOLKIT.md (HEROES adaptation)
  |     |-> ../scout/ACADEMIC_PAPER_DATA_AS_COLLATERAL.md (Section 3.2)
  |
  |-- Data Farming Pipeline (Vertical 2)
  |     |-> ../scout/DATA_AS_COLLATERAL_BARTER.md (core mechanics)
  |     |-> ../scout/ACADEMIC_PAPER_DATA_AS_COLLATERAL.md (full paper)
  |
  |-- Internal Barter Economy (Vertical 3)
  |     |-> ../strategy/UNIDOS_BUSINESS_MODEL_2026.md (revenue, PQI)
  |     |-> ../scout/DATA_AS_COLLATERAL_BARTER.md (token economics)
  |
  |-- Cooperation Governance (Vertical 4)
  |     |-> ../scout/UNIDOS_DAO_TRANSFORMATION_ROADMAP.md (DAO design)
  |     |-> ../scout/INTRODUCTION_DAO_TRANSFORMATION.md (research questions)
  |     |-> ../strategy/REPUTATION_STAKING.md (vetting thresholds)
  |
  |-- Multi-Chain Orchestration (Vertical 5)
  |     |-> ../scout/LEAN_MOBILE_ARCHITECTURE.md (chain comparison)
  |
  |-- LEAN Mobile Architecture (Vertical 6)
  |     |-> ../scout/LEAN_MOBILE_ARCHITECTURE.md (data budget, PWA/USSD/SMS)
  |
  |-- Gasless Distributions (Vertical 7)
  |     |-> ../strategy/UNIDOS_BUSINESS_MODEL_2026.md (70/20/10 split)
  |     |-> ../scout/BONZI_BUDDY_REFUGEE_TOOLKIT.md (Euler Pool)
  |
  |-- Soulbound Identity (Vertical 8)
  |     |-> ../strategy/REPUTATION_STAKING.md (Award NFTs)
  |     |-> ../scout/ACADEMIC_PAPER_DATA_AS_COLLATERAL.md (Section 2.4)
  |
  |-- Strategic Context
  |     |-> ../UMBRELLA_RESEARCH_FRAMEWORK.md (Oracle 6 framework, Dynamic SWOT)
  |     |-> ../strategy/MULTI_YEAR_FUNDING_FUNNEL.md (umbrella NGO model)
  |     |-> ../strategy/VETTING_FUNNEL.md (fraud prevention)
  |     |-> ../strategy/UNIDOS_WIZARD_NGO_MANAGEMENT.md (wizard flows)
  |
  |-- Membership & Data Commons (Vertical 9)
  |     |-> ../strategy/MEMBERSHIP_DATA_COMMONS_STRATEGY.md (full design)
  |     |-> ../scout/DATA_AS_COLLATERAL_BARTER.md (token mechanics)
  |     |-> ../strategy/UNIDOS_BUSINESS_MODEL_2026.md (revenue integration)
  |
  |-- Bonzi Integration
  |     |-> ./BONZI_V5_INTEGRATION_REQUEST.md (formal request to Oracle Planner)
  |
  |-- External (Bonzi_v5 repo)
        |-> HIVE_DAO_FRAMEWORK_v3.md (SIAH Protocol)
        |-> data/leadership/oracle/BUSINESS_STRATEGY_2026.md (SIAH business model)
        |-> src/leadership/policies/WATER_PROMPT.md (communication standards)
```

---

## Relationship to Other Agents

```
                    ┌──────────────────────┐
                    │   Oracle Planner     │
                    │   (bonzivista.org)   │
                    │   Strategic oversight │
                    └──────────┬───────────┘
                               │ directives
                               ↓
                    ┌──────────────────────┐
                    │      BRIDGE          │
                    │   (this agent)       │
                    │   8 verticals        │
                    └───┬──────────┬───────┘
                        │          │
              specs     │          │ specs
                        ↓          ↓
          ┌─────────────────┐  ┌─────────────────┐
          │     Ralph       │  │   Unidos Bot     │
          │  (builder)      │  │  (user-facing)   │
          │  Smart contracts│  │  Telegram/USSD   │
          │  PWA, APIs      │  │  SMS, wallets    │
          └─────────────────┘  └─────────────────┘
                                       │
                                       ↓
                            ┌─────────────────┐
                            │ Community Agents │
                            │ (DAO voters,     │
                            │  facilitators)   │
                            └─────────────────┘
```

**Oracle Planner** (upstream): Sets strategic direction for the Unidos-Bonzi integration. BRIDGE receives quarterly directives, submits monthly reports. Oracle Planner approves major architecture changes.

**Ralph** (downstream builder): Builds what BRIDGE designs. BRIDGE provides smart contract specs, PWA wireframes, API requirements. Ralph implements, tests, deploys (with Guardian review).

**Unidos Bot** (downstream execution): The Telegram/USSD bot refugees interact with daily. BRIDGE defines what the bot does (HEROES detection rules, wizard flows, marketplace listings). Ralph builds it. Operator runs it.

**Community Agents** (peer): DAO voters and community facilitators. They use the governance infrastructure BRIDGE provides. Their voting decisions feed back into BRIDGE's cooperation governance vertical.

**Guardian** (advisory): Monitors ethics, security, compliance across all 8 verticals. BRIDGE consults Guardian on every data buyer contract, smart contract deployment, and regulatory question. Guardian can veto on security/ethics grounds.

---

## AI Agent Specification

BRIDGE can operate in two modes. Human mode: a person uses this document as their operating manual. AI mode: an autonomous agent executes monitoring and decisions within defined authority.

### Mode 1: Claude Code Agent (Recommended for Q2 2026)

**Runtime**: Claude Code via Claude Agent SDK, running in the Unidos repository.

**CLAUDE.md Configuration** (project-level):

```markdown
# BRIDGE Agent Instructions

You are BRIDGE — the coordination agent for the Unidos-Bonzi integration vertical.

## Your Authority
- Monitor all 8 verticals daily (see BRIDGE_AGENT_DEFINITION.md)
- Make decisions within defined authority (token pricing <=5%, data buyer <$5K, HEROES calibration)
- Escalate beyond authority to human leadership

## Your Documents
Read these before any session:
- leadership/oracle/BRIDGE_AGENT_DEFINITION.md (your role definition)
- leadership/scout/DATA_AS_COLLATERAL_BARTER.md (data pipeline mechanics)
- leadership/scout/LEAN_MOBILE_ARCHITECTURE.md (chain/mobile decisions)

## Your Constraints
- Never deploy smart contracts without multi-sig approval
- Never share un-anonymized user data
- Never adjust token pricing >5% without DAO vote
- Always log decisions to memory/bridge_decision_log.md
```

**State Persistence**:

Store in `.claude/projects/-Users-*/memory/`:
- `bridge_decision_log.md` — Every decision: date, vertical, Oracle personality, rationale, outcome
- `bridge_pipeline_status.md` — Latest daily monitoring results
- `bridge_data_buyers.md` — Active/prospective data buyer pipeline
- `bridge_quarterly_metrics.md` — Tier 1/2/3 metrics tracking

**Monitoring Automations** (via cron or manual trigger):

```
Daily:   Check Celo/BASE/Polygon gas fees (L2fees.info API)
         Ping Kotani Pay status endpoint
         Query Supabase for daily contribution count
         Query Gnosis Safe for collateral balance

Weekly:  Run HEROES accuracy audit (sample 20 classifications, compare AI vs manual)
         Calculate cash-out ratio (internal vs external transactions)
         Generate cooperation score distribution chart

Monthly: Compile Tier 1 metrics report
         Review data buyer contracts (renewals, new prospects)
         Calculate Euler pool distribution amounts
```

**Tool Integrations** (MCP servers):

| Tool | Purpose | Connection |
|------|---------|------------|
| Render MCP | Infrastructure monitoring (Cloudflare Workers, Supabase) | Already connected |
| Celo RPC | On-chain queries (token supply, collateral balance, cooperation scores) | ethers.js via Bash |
| Supabase API | Off-chain data (user profiles, HEROES logs, contribution history) | REST API via WebFetch |
| GitHub API | Code changes, PR reviews for smart contracts | gh CLI via Bash |

### Mode 2: Telegram Bot Agent (Recommended for Q3 2026)

**Runtime**: Python bot (Bonzi_v5 framework fork), hosted on Cloudflare Workers or Render.

**Capabilities**:
- HEROES detection in real-time (monitor Telegram group messages)
- Wizard flows (data farming consent, marketplace browse, cash-out request)
- Cooperation score queries (/myscore, /leaderboard, /tier)
- Automated escalation alerts (post to admin channel when thresholds breached)

**Architecture**:
```
Telegram Group (farmers)
    ↓ messages
Python Bot (HEROES detection, wizard state machine)
    ↓ writes
Supabase (cooperation scores, contribution logs)
    ↓ triggers
Cloudflare Worker (data pipeline, token minting queue)
    ↓ executes
Celo Blockchain (BarterToken.sol, CooperationScore.sol)
```

This bot IS the Unidos Bot from the agent relationship diagram. BRIDGE defines its behavior; Ralph builds it; Operator monitors it.

### Mode Transition Plan

```
Q2 2026: Human mode (BRIDGE = designated person using this document)
         + Claude Code agent for monitoring automation

Q3 2026: Telegram Bot agent deployed (user-facing HEROES + wizard)
         + Human BRIDGE for strategic decisions
         + Claude Code agent for analysis and reporting

Q4 2026: Full hybrid (Telegram bot handles daily execution,
         Claude Code handles analysis/monitoring,
         Human handles escalations and partnerships)
```

---

## Glossary

| Term | Definition |
|------|-----------|
| **HEROES** | Helper, Educator, Reflector, Organizer, Engager, Supporter — 6 behavioral types detected by AI in community interactions |
| **Euler Pool** | O(1) gas distribution mechanism — send tokens to 500+ wallets in a single transaction |
| **Cooperation Score** | Numeric reputation earned through verified contributions (not purchased). Higher score = more governance power + loan eligibility |
| **PQI** | Production Quality Index — 100-point scale measuring agricultural output quality across 9 dimensions |
| **SIAH** | Semantic Identity & Actionable HEROES — Bonzi's protocol for behavioral identity and trust scoring |
| **Oracle 6** | 6 personality archetypes for delegation: Strategist, Operator, Connector, Analyst, Guardian, Innovator |
| **Ralph** | Builder/executor agent in Bonzi framework — takes plans and implements code/systems |
| **Soulbound** | Non-transferable NFT credential — proves achievement without being sellable |
| **ERC-8004** | Token standard for soulbound identity credentials on EVM-compatible chains |
| **Sybil Attack** | Creating multiple fake identities to game a system (e.g., fake cooperation scores) |
| **EigenTrust** | Algorithm for computing trust scores in peer-to-peer networks — detects collusion |
| **Merkle Proof** | Cryptographic proof that specific data exists in a dataset without revealing the full dataset |
| **Multi-sig** | Multi-signature wallet requiring N-of-M approvals to execute transactions (e.g., 3-of-5 board members) |
| **Gnosis Safe** | Industry-standard multi-sig wallet on Ethereum (holds the collateral vault) |
| **Snapshot** | Off-chain voting platform for DAOs — cooperation-weighted votes recorded without gas fees |
| **USSD** | Unstructured Supplementary Service Data — dial *123# menus on any phone, no internet required |
| **PWA** | Progressive Web App — web app that works like a native app (offline, installable, <1MB) |
| **Kotani Pay** | USSD gateway provider connecting feature phones to Celo blockchain ($0.02/transaction) |
| **Differential Privacy** | Mathematical framework ensuring individual data points cannot be reverse-engineered from aggregated datasets |

---

*Last updated: February 2026*
*Maintained by: BRIDGE Agent (human or AI, depending on deployment phase)*
*Review cycle: Monthly (pipeline metrics), Quarterly (strategic alignment with Oracle Planner)*
