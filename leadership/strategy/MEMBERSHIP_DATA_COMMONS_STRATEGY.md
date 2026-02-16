# Membership-Driven ZK Data Commons & Regenerative Incubation

**Date**: February 2026
**Status**: INTERNAL - Strategic Design
**BRIDGE Vertical**: 9 (Membership & Data Commons)
**Oracle Lead**: Innovator + Connector

---

## The Flywheel

```
Members join Unidos
    ↓ (contribute behavioral + agricultural data as membership benefit)
ZK Data Commons grows
    ↓ (privacy-preserving proofs increase data value + trust)
Grant pipeline strengthens
    ↓ (cryptographic impact verification → higher approval rates)
Revenue funds incubation
    ↓ (Paulinho + Maria expertise → new regenerative businesses)
Incubated businesses generate more data
    ↓ (more members, more data, more value)
Flywheel accelerates
```

The core insight: **membership is the engine, ZK is the multiplier, grants are the fuel, incubation is the output.** Each turn of the flywheel makes the next turn stronger.

---

## Part 1: Membership Model

### Why Memberships Matter

Current state: 501 farmers benefit from Unidos programs but have no formal relationship beyond "trained participant." There's no ongoing data contribution, no governance participation, no recurring value exchange after training ends.

Memberships solve three problems:
1. **Sustained data flow**: Members contribute data regularly (not just during training), growing the data commons
2. **Recurring revenue**: Membership fees (even small ones) create predictable income independent of grants
3. **Governance base**: Members form the DAO electorate — cooperation score + membership = voting rights

### Membership Tiers

| Tier | Monthly Cost | Data Contribution | Benefits | Target |
|------|-------------|-------------------|----------|--------|
| **Seed** (Free) | 0 UNIDOS | Consent to HEROES detection only | View cooperation score, access training materials, basic USSD services | 500+ farmers (everyone currently trained) |
| **Grower** | 2 UNIDOS | HEROES + monthly PQI self-report + GPS training attendance | Marketplace access, loan eligibility (cooperation score >=50), Euler pool inclusion | 200 active farmers |
| **Cultivator** | 5 UNIDOS | Grower + quarterly yield data + soil health photos + carbon activity log | Priority marketplace listings, higher Euler pool share, incubation program eligibility, DAO proposal rights | 50 committed farmers |
| **Steward** | 10 UNIDOS | Cultivator + mentor new members + contribute training content + lead community sessions | Revenue share from data sales (5% of data revenue pro-rata), DAO voting weight bonus (1.5x), incubation mentor role | 10 leaders |

**How members "pay" without cash**:
- Membership fees are in UNIDOS tokens (earned through data farming, not purchased)
- A Grower contributing 10 HEROES detections/month earns ~1.0 UNIDOS from data farming
- Net cost is negligible: earn 3-5 UNIDOS from data contribution, pay 2 UNIDOS membership fee
- Result: membership costs nothing out-of-pocket — contribution IS the payment

**Membership as data contribution contract**:
When a farmer moves from Seed to Grower, they consent to:
```
"As a Grower member, I agree to:
- Allow HEROES to detect my cooperation behaviors in community channels
- Submit a monthly PQI self-report (yield, quality, soil observations)
- Share GPS attendance at training events

In return, I receive:
- Inclusion in monthly Euler pool distributions
- Loan eligibility when my cooperation score reaches 50
- Access to the internal marketplace

I can downgrade to Seed tier anytime. My past contributions remain credited."
```

---

## Part 2: ZK Data Commons

### What is the Data Commons?

A collectively owned, privacy-preserving dataset built from member contributions. Unlike traditional data collection where an organization owns the data, the data commons is:

- **Member-owned**: Each member controls their individual data (can revoke, export, delete)
- **Collectively governed**: DAO votes on data use policies (who can buy, what price, what anonymization level)
- **ZK-verified**: Zero-knowledge proofs prove dataset properties without exposing individual records

### How ZK Proofs Work for Unidos

**Problem**: Data buyers (CGIAR, carbon verifiers, grant funders) need to trust the data is real, but members need privacy.

**Solution**: ZK proofs that verify claims without revealing underlying data.

| Claim to Prove | What ZK Proves | What Stays Private |
|----------------|----------------|-------------------|
| "501 farmers were trained" | Proof that 501 unique HEROES profiles completed training milestones | Names, locations, personal details of each farmer |
| "Average yield increased 40%" | Proof that mean PQI yield scores increased from baseline X to X+40% | Individual farmer yields, specific farm locations |
| "100 tons CO2 sequestered via biochar" | Proof that aggregated carbon logs from N members total >=100 tons | Which members produced how much, kiln locations |
| "82% of members are active contributors" | Proof that >=82% of member wallets had >=5 HEROES detections in past 30 days | Which members are active vs inactive |
| "Loan repayment rate is 95%" | Proof that >=95% of loans issued were repaid within term | Who borrowed, how much, repayment schedules |

**Technical approach**: Semaphore-based ZK proofs on Polygon (where DAO governance already lives).

```
Member data (on-device / Supabase)
    ↓ generates
ZK proof (Semaphore circuit, runs on phone in ~15 seconds)
    ↓ submitted to
Polygon smart contract (verifies proof on-chain, costs <$0.05)
    ↓ produces
Verified claim (publicly readable, cryptographically guaranteed)
    ↓ used by
Grant applications, data buyers, impact reports
```

### Data Commons Architecture

```
┌───────────────────────────────────────────────────────┐
│              UNIDOS ZK DATA COMMONS                    │
│                                                        │
│  Layer 1: Raw Data (PRIVATE, never leaves member)     │
│  ┌──────────────────────────────────────────────┐     │
│  │ PQI reports, GPS logs, yield data, HEROES    │     │
│  │ Stored: device (offline) + Supabase (encrypted)│    │
│  │ Owner: individual member                      │     │
│  └──────────────────────────────────────────────┘     │
│                         ↓ ZK circuit                   │
│  Layer 2: ZK Proofs (PUBLIC, on-chain)                │
│  ┌──────────────────────────────────────────────┐     │
│  │ "501 trained" proof, "100t CO2" proof,       │     │
│  │ "95% repayment" proof, "40% yield increase"  │     │
│  │ Stored: Polygon (immutable, verifiable)       │     │
│  │ Owner: data commons (DAO-governed)            │     │
│  └──────────────────────────────────────────────┘     │
│                         ↓ data buyer API               │
│  Layer 3: Anonymized Insights (COMMERCIAL)            │
│  ┌──────────────────────────────────────────────┐     │
│  │ Aggregated farming patterns, cooperation     │     │
│  │ graphs, carbon verification bundles          │     │
│  │ Sold to: CGIAR, carbon buyers, AI trainers   │     │
│  │ Revenue: → collateral vault → UNIDOS tokens  │     │
│  └──────────────────────────────────────────────┘     │
└───────────────────────────────────────────────────────┘
```

### Why ZK Increases Data Value

Traditional anonymized data: buyer trusts the seller's word that data is real.
ZK-verified data: buyer can cryptographically verify data properties.

| Data Product | Without ZK | With ZK | Value Multiplier |
|-------------|-----------|---------|-----------------|
| Agricultural yield insights | $0.50/user/month (trust-based) | $1.50/user/month (verified) | 3x |
| Carbon sequestration data | $2.00/user/month (estimated) | $5.00/user/month (ZK-verified, carbon credit grade) | 2.5x |
| Cooperation/governance patterns | $0.20/user/month | $0.50/user/month (verified participation rates) | 2.5x |
| Training effectiveness data | $0.30/user/month | $1.00/user/month (verified outcomes) | 3.3x |
| **Total per user** | **$3.00/month** | **$8.00/month** | **2.7x** |

At 500 members: $3,000/month → $4,000/month (ZK premium)
At 2,000 members: $12,000/month → $16,000/month (ZK premium)

The ZK premium exists because carbon offset buyers, academic researchers, and impact investors pay more for cryptographically verified data than self-reported data.

---

## Part 3: Grant Pipeline

### Current Grant Problem

Refugee-led NGOs face a credibility gap:
- **Western NGOs**: Known brands, professional proposals, self-reported metrics → 15-25% approval rate
- **Refugee NGOs**: Unknown, limited capacity, self-reported metrics → 5-10% approval rate

The difference isn't impact quality — it's trust. Funders can't verify refugee NGO claims cheaply.

### How ZK Data Commons Fixes This

**Step 1**: BRIDGE generates ZK proofs from data commons (automated, quarterly)

Proof bundle for grant application:
```
Proof #1: "Unidos trained 501 farmers" (verified: 501 unique HEROES profiles completed milestones)
Proof #2: "Average yield increased 40% year-over-year" (verified: mean PQI scores)
Proof #3: "95% loan repayment rate" (verified: on-chain repayment records)
Proof #4: "100 tons CO2 sequestered" (verified: aggregated biochar production logs)
Proof #5: "60% DAO voter turnout" (verified: Snapshot participation records)
```

**Step 2**: Grant application includes proof bundle (1 QR code or on-chain link)

```
Grant Application: "Unidos requests $50,000 for mushroom dryer expansion"

Impact Evidence:
[QR Code → Polygon contract → 5 verified ZK proofs]

Funder scans QR → sees:
  ✓ 501 farmers trained (cryptographically verified)
  ✓ 40% yield increase (cryptographically verified)
  ✓ 95% loan repayment (cryptographically verified)
  ✓ 100 tons CO2 sequestered (cryptographically verified)
  ✓ 60% governance participation (cryptographically verified)

No site visit needed. No trust assumptions. Math proves it.
```

**Step 3**: Approval rate increases

| Grant Type | Traditional (self-reported) | ZK-Verified | Improvement |
|-----------|---------------------------|-------------|-------------|
| UNHCR Innovation Fund | 10-15% approval | 30-40% (estimated) | 2-3x |
| Climate/carbon grants | 5-10% approval | 25-35% (verified sequestration) | 3-5x |
| Agricultural development | 15-20% approval | 35-50% (verified yield increase) | 2-3x |
| DAO/blockchain grants | 20-30% approval | 50-60% (on-chain governance proof) | 2x |

**Revenue impact**: If Unidos applies to 10 grants/year at $50K average:
- Traditional: 1-2 awarded = $50-100K
- ZK-verified: 3-5 awarded = $150-250K
- **$100-150K additional annual grant revenue from ZK verification alone**

### Grant Pipeline Automation

BRIDGE manages a quarterly grant pipeline:

```
Month 1: ZK proof generation (automated from data commons)
Month 2: Grant identification (Connector Oracle scans opportunities)
Month 3: Application submission (Wizard-assisted, proof bundle attached)

Repeat quarterly. Each cycle adds more proofs (data commons grows).
```

---

## Part 4: Regenerative Business Incubation

### The Incubation Model

Paulinho has 8+ years of regenerative agriculture expertise. Maria leads the Women's Circle. Together they've trained 501 farmers across 5 programs (mushroom, vermicompost, biochar, Women's Circle, arborloo). This expertise is the incubation engine.

**Who gets incubated**: Members at Cultivator tier or above (cooperation score >=100, 6+ months active contribution, demonstrated agricultural output via PQI).

**What they build**: New regenerative businesses within the Unidos ecosystem:
- Mushroom micro-enterprise (farmer-owned spawn lab franchise)
- Vermicompost production unit (decentralized, farmer-operated)
- Biochar kiln operation (carbon credit eligible)
- Training-as-a-Service franchise (train other settlements)
- Women's Circle chapter (reusable pad production + financial literacy)

### Incubation Pathway

```
Cultivator Member (cooperation score >=100, 6+ months)
    ↓ applies
Incubation Selection (BRIDGE + DAO vote, 10 slots/quarter)
    ↓ accepted
Phase 1: Training (8 weeks, Paulinho/Maria mentorship)
  - Business plan development
  - PQI target setting
  - Market analysis (B2B buyers, internal marketplace)
  - Financial literacy (savings groups, loan management)
    ↓ graduates
Phase 2: Seed Funding (from collateral vault + grant revenue)
  - $200-500 in UNIDOS tokens (equipment, materials, starter inventory)
  - Collateral: cooperation score + data contribution history (behavioral credit)
  - NO traditional collateral required (no land, no assets, no guarantor)
    ↓ launches
Phase 3: Operations (6 months, mentored)
  - Monthly PQI reporting (quality tracking)
  - HEROES detection (contribution to community)
  - Revenue: sell to internal marketplace + B2B buyers
  - Repay seed funding: 10% of monthly revenue for 12 months
    ↓ sustainable
Phase 4: Graduate (self-sustaining business)
  - Business generates >=500 UNIDOS/month revenue
  - PQI score >=75/100
  - Cooperation score maintained at Cultivator+
  - Eligible to become Steward tier (mentor next cohort)
```

### How Data Serves as Collateral for Incubated Businesses

Traditional incubators require physical collateral (land title, equipment). Refugees have none.

BRIDGE uses behavioral collateral instead:

| Collateral Type | Traditional | Unidos (Behavioral) |
|----------------|-------------|-------------------|
| **Credit history** | Bank statements, credit score | Cooperation score (6+ months of verified contributions) |
| **Business track record** | Tax returns, revenue history | PQI scores (production quality over time) |
| **Community standing** | Reference letters | HEROES profile (Helper/Educator behaviors verified on-chain) |
| **Repayment probability** | Statistical model on financial data | On-chain cooperation score trajectory (increasing = low risk) |

SAVE Score (Rwanda) validates this approach: ML models on savings group behavior predict repayment as accurately as traditional credit scores. Unidos' cooperation score serves the same function.

**Loan terms for incubated businesses**:
- Amount: $200-500 equivalent in UNIDOS tokens
- Interest: 0% (social lending, funded by collateral vault surplus)
- Repayment: 10% of monthly revenue, 12-month term
- Collateral: Cooperation score >=100 (if score drops below 50 during loan, BRIDGE flags for Analyst review)
- Default handling: Score freeze + mentorship intervention (NOT asset seizure — there are no assets to seize)

### Incubation Revenue Model

Each incubated business contributes to the flywheel:

```
Incubated business (mushroom micro-enterprise)
    ↓ generates
Revenue ($300-500/month from B2B sales + internal marketplace)
    ↓ splits
70% to farmer (operating income)
20% reinvested (equipment, materials)
10% to DAO solidarity fund
    ↓ solidarity fund
Funds next cohort of incubated businesses
    ↓ plus
Business generates data (PQI scores, yield data, carbon logs)
    ↓ feeds
ZK Data Commons (more proofs, more value, more grant revenue)
```

**Year 1 projection (10 incubated businesses)**:
- Seed funding deployed: $3,000-5,000 (from collateral vault)
- Revenue generated: $36,000-60,000/year (10 businesses × $300-500/month)
- Solidarity fund contribution: $3,600-6,000/year (funds next 10 businesses)
- Data commons growth: 10 new PQI contributors, 10 new carbon reporters
- Self-sustaining by: Month 12 (solidarity fund covers next cohort seed)

---

## Part 5: The Complete Flywheel (Numbers)

### Year 1 (500 members, 10 incubated businesses)

| Revenue Source | Monthly | Annual |
|---------------|---------|--------|
| Membership data value (ZK-verified, 500 × $8) | $4,000 | $48,000 |
| Membership fees (200 Grower × 2 + 50 Cultivator × 5 + 10 Steward × 10) | 750 UNIDOS | Internal circulation |
| Grant pipeline (ZK-verified, 3-5 awards × $50K) | — | $150,000-250,000 |
| Incubated business revenue (10 × $400) | $4,000 | $48,000 |
| Solidarity fund (10% of incubated revenue) | $400 | $4,800 |
| **Total external revenue** | **$8,000+** | **$246,000-346,000** |

### Year 3 (2,000 members, 50 incubated businesses)

| Revenue Source | Monthly | Annual |
|---------------|---------|--------|
| Membership data value (2,000 × $8) | $16,000 | $192,000 |
| Grant pipeline (ZK-verified, 8-10 awards) | — | $400,000-500,000 |
| Incubated business revenue (50 × $400) | $20,000 | $240,000 |
| Solidarity fund (10% of incubated) | $2,000 | $24,000 |
| **Total external revenue** | **$36,000+** | **$832,000-932,000** |

### Compounding Effect

Each turn of the flywheel:
- More members → more data → higher ZK data value → more grant revenue
- More grants → more incubation funding → more businesses → more members
- More businesses → more data → stronger proofs → higher grant approval rates
- Stronger proofs → better carbon credit prices → more collateral → more UNIDOS tokens

The flywheel is self-reinforcing. After Year 1, growth compounds without proportional cost increase because ZK proofs, data commons, and incubation infrastructure are built once and scale linearly.

---

## Part 6: Implementation Roadmap

### Q2 2026: Membership Launch

- [ ] Define membership tier smart contract (Celo: MembershipRegistry.sol)
- [ ] Build membership onboarding wizard (USSD: *384*2# → select tier)
- [ ] Convert existing 501 farmers to Seed tier (opt-in, HEROES consent)
- [ ] Recruit first 50 Grower members (consent to PQI reporting)
- [ ] Set up data contribution tracking (Supabase: monthly contribution logs)

### Q3 2026: ZK Data Commons

- [ ] Deploy Semaphore-based ZK circuits on Polygon testnet
- [ ] Generate first ZK proof: "N farmers trained" (test with real data)
- [ ] Generate second ZK proof: "average yield increase" (PQI aggregate)
- [ ] First ZK-verified grant application submitted (UNHCR Innovation Fund or climate grant)
- [ ] Data buyer pilot: sell ZK-verified agricultural insights to 1 buyer

### Q4 2026: Incubation Pilot

- [ ] Select first 5 incubation candidates (Cultivator tier, cooperation >=100)
- [ ] Run 8-week training program (Paulinho + Maria)
- [ ] Deploy seed funding ($1,000-2,500 from collateral vault)
- [ ] First incubated businesses launch (mushroom micro-enterprises)
- [ ] First solidarity fund contribution received

### Q1 2027: Scale

- [ ] 200+ Grower members, 50+ Cultivator, 10+ Steward
- [ ] ZK proof bundle includes 5+ verified claims
- [ ] Second incubation cohort (10 businesses)
- [ ] Grant pipeline: 2+ awards using ZK verification
- [ ] Data commons generating $4,000+/month

---

## Part 7: Governance

### Who Decides Data Use?

The DAO votes on data commons policies:

| Decision | Voting Requirement | Who Can Vote |
|----------|-------------------|-------------|
| Add new data buyer | Simple majority (>50%) | All members (Grower+) |
| Change data pricing | Supermajority (>66%) | Cultivator+ only |
| Expel a data buyer (ethics violation) | Simple majority | All members |
| Adjust membership tier requirements | Supermajority | Steward tier only (>66%) |
| Approve incubation candidates | Simple majority | Cultivator+ (cooperation-weighted) |
| Allocate solidarity fund | Simple majority | All members |

### Data Buyer Ethics Framework

BRIDGE + Guardian evaluate every data buyer against:

1. **Anonymization**: Does the buyer accept differential privacy + ZK proofs? (Mandatory)
2. **Purpose alignment**: Does the use case benefit agricultural research, climate action, or refugee inclusion? (Required)
3. **Fair pricing**: Is the price within 20% of market rate? (Negotiable)
4. **No extraction**: Does the buyer commit to sharing insights back with the data commons? (Preferred)
5. **Revocability**: Can Unidos terminate the contract if the buyer violates terms? (Mandatory)

Buyers who fail criteria 1 or 5 are automatically rejected. Others go to DAO vote.

---

## References

**Data Cooperative Models**:
- MIDATA (Switzerland): Health data cooperative, member-governed, surplus reinvested in public benefit research
- Salus Coop (Barcelona): Citizen health data, collaborative governance
- Driver's Seat Cooperative (USA): Driver-owned data cooperative, sells aggregated data to cities

**ZK Technology**:
- Semaphore: ZK signaling framework, ~15 second proof generation on mobile
- Filecoin: 6-7M ZK proofs/day for storage verification
- Senken: ZK-verified carbon credit marketplace

**Incubation Precedents**:
- SINA: 23 communities, holacracy governance, self-sustaining social enterprises
- Village Enterprise: 540% ROI, $180-300 seed grants, savings groups

**Behavioral Credit**:
- SAVE Score (Rwanda): ML on savings group behavior predicts repayment
- Spectral Finance: On-chain credit scoring from wallet behavior
- Cred Protocol: Wallet transaction history as credit history

**Cross-References (Unidos repo)**:
- [BRIDGE_AGENT_DEFINITION.md](../oracle/BRIDGE_AGENT_DEFINITION.md) — Vertical 9 summary
- [DATA_AS_COLLATERAL_BARTER.md](../scout/DATA_AS_COLLATERAL_BARTER.md) — Token mechanics, collateral vault
- [LEAN_MOBILE_ARCHITECTURE.md](../scout/LEAN_MOBILE_ARCHITECTURE.md) — Chain selection, USSD architecture
- [BONZI_BUDDY_REFUGEE_TOOLKIT.md](../scout/BONZI_BUDDY_REFUGEE_TOOLKIT.md) — HEROES detection, cooperation scoring
- [UNIDOS_BUSINESS_MODEL_2026.md](./UNIDOS_BUSINESS_MODEL_2026.md) — Revenue model, PQI scoring
- [REPUTATION_STAKING.md](./REPUTATION_STAKING.md) — Vetting authority thresholds

---

*Last updated: February 2026*
*BRIDGE Vertical: 9 (Membership & Data Commons)*
*Review cycle: Quarterly (aligned with incubation cohort cycles)*
