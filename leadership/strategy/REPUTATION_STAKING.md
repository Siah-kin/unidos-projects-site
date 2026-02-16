# Reputation Staking — Award-Winning NGOs as On-Chain Vetting Organs

**Date**: February 2026
**Purpose**: Document how award-winning refugee-led NGOs (vetted 3+ times by prize juries) can stake their reputation to vet newcomer projects, bringing trust on-chain

**Core Insight**: Unidos (6 awards) + similar multi-award NGOs form decentralized vetting committee, transferring jury trust → vetted NGO → newcomer NGO

---

## 🎯 The Trust Transfer Problem

### Current State (Broken Trust Chain)

**How Awards Work Today**:
```
UNHCR Gene Dewey Award jury → vets Unidos (2023) → Unidos wins
Lush Prize jury → vets RRF (2022) → RRF wins
Permaculture Award jury → vets Unidos (2024) → Unidos wins
```

**Problem**: Trust doesn't transfer
- Jury trusts Unidos (proven via award)
- Donors trust Unidos (award badge = credibility signal)
- **BUT**: Newcomer NGO can't inherit Unidos' credibility
- **Result**: Every new NGO starts from zero trust (inefficient, slows ecosystem growth)

---

### Desired State (On-Chain Trust Transfer)

**Reputation Staking Model**:
```
Award juries → vet Unidos 6 times → on-chain reputation score: 600 pts
Unidos → vets NewNGO (stakes 100 reputation) → NewNGO gets provisional 100 pts
NewNGO → delivers impact → Unidos reputation preserved (600 pts)
NewNGO → commits fraud → Unidos loses staked reputation (600 → 500 pts)
```

**Why This Works**:
- **Accountability**: Unidos loses reputation if vets fraud → careful vetting
- **Trust transfer**: NewNGO inherits partial credibility from Unidos → faster funding access
- **Scalability**: Award-winning NGOs can vet dozens of newcomers → ecosystem grows faster
- **Decentralization**: No single gatekeeper (multiple award-winning NGOs form vetting committee)

---

## 🏆 Award-Based Reputation Scoring

### Reputation Point System

**Points Per Award** (Weighted by jury prestige):

| Award Tier | Examples | Reputation Points |
|------------|----------|-------------------|
| **Tier 1: International Recognition** | UNHCR Gene Dewey Award, Lush Prize, Skoll Award, Ashoka Fellowship | 100 pts each |
| **Tier 2: Regional/National Recognition** | National permaculture awards, country-level innovation prizes | 50 pts each |
| **Tier 3: Sectoral Recognition** | Industry-specific awards (mushroom growers, fair trade certification) | 25 pts each |
| **Tier 4: Community Recognition** | Local government commendations, settlement-level awards | 10 pts each |

**Unidos Example**:
- UNHCR Gene Dewey Award (2023): 100 pts
- Permaculture Award 1 (2024): 50 pts
- Permaculture Award 2: 50 pts
- Refugee Innovation Fund finalist: 50 pts
- Local government commendation: 10 pts
- Community recognition: 10 pts
- **Total**: 270 reputation points

**Threshold for Vetting Others**:
- **150+ pts**: Can vet newcomer NGOs (proven track record, 3+ awards minimum)
- **300+ pts**: Can veto fraudulent vetting (override decisions by lower-rep NGOs)
- **500+ pts**: Can propose vetting methodology changes (governance voting power)

---

### On-Chain Reputation Credentials

**Technical Implementation** (ERC-721 NFT per award):

**Award NFT Structure**:
```solidity
struct AwardCredential {
    string awardName;          // "UNHCR Gene Dewey Award 2023"
    address juryOrganization;  // 0x... (UNHCR wallet, or trusted issuer)
    uint256 timestamp;         // When awarded
    uint256 reputationPoints;  // 100 (Tier 1 award)
    string evidenceURI;        // IPFS link to award certificate, announcement
    bool verified;             // True if jury organization signed
}
```

**Example: Unidos Award NFT Collection**:
- NFT #1: UNHCR Gene Dewey Award (100 pts, verified by UNHCR wallet)
- NFT #2: Permaculture Award 2024 (50 pts, verified by Permaculture Association)
- NFT #3: Local Government Commendation (10 pts, verified by OPM wallet)
- **Total on-chain reputation**: Sum of all NFT points = 270 pts (auto-calculated)

**Why NFT vs Simple Attestation?**
- **Transferable**: NGO can delegate vetting power to trusted member (NFT holder = vetting authority)
- **Composable**: Other protocols can query reputation (e.g., DeFi lending based on NGO credibility)
- **Immutable**: Award history can't be deleted or falsified (permanent record)
- **Verifiable**: Jury organization signature proves authenticity (not self-issued)

---

## 🤝 Peer Vetting Committee Model

### How Award-Winning NGOs Vet Newcomers

**Vetting Committee Composition** (Minimum 3 NGOs, 450+ combined reputation):

**Example Lineup**:
1. **Unidos (Uganda)**: 270 reputation pts (6 awards, agriculture focus)
2. **RRF (Uganda)**: 150 reputation pts (Lush Prize, mushroom specialization)
3. **SINA (Uganda/Kenya)**: 200 reputation pts (entrepreneurship awards)
4. **AWR (Kenya)**: 180 reputation pts (regenerative ag, 26,600 households)
- **Total committee reputation**: 800 pts

**Voting Power** (Quadratic, not linear):
- Unidos: √270 = 16.4 votes
- RRF: √150 = 12.2 votes
- SINA: √200 = 14.1 votes
- AWR: √180 = 13.4 votes
- **Total voting power**: 56.1 votes

**Why Quadratic?**
- Prevents single NGO dominance (800 pts ≠ 80% control)
- Rewards mid-tier NGOs (150 pts = valuable voice, not drowned out)
- Diminishing returns for awards (6 awards ≠ 6x voting power of 1 award)

---

### Vetting Process (Committee Vote)

**Scenario**: NewNGO (0 reputation) applies to umbrella network

**Step 1: Committee Review** (2 weeks)
- Each member reviews NewNGO application (5-stage funnel from VETTING_FUNNEL.md)
- Score NewNGO on 100-point vetting scale (transparency, impact, sustainability, quality)
- Optionally: Visit NewNGO on-ground (spot check beneficiaries, verify operations)

**Step 2: Reputation Staking** (1 week)
- Committee votes: Approve (stake reputation) or Reject (no stake)
- **Approve** requires 60% of quadratic votes (33.7 / 56.1 in example)
- Each approving NGO stakes proportional reputation:
  - Unidos votes Yes (stakes 50 pts) → 270 - 50 = 220 pts remaining
  - RRF votes Yes (stakes 30 pts) → 150 - 30 = 120 pts remaining
  - SINA votes No (stakes 0) → 200 pts unchanged
  - AWR votes Yes (stakes 40 pts) → 180 - 40 = 140 pts remaining
- **Total staked**: 120 pts (Unidos 50 + RRF 30 + AWR 40)

**Step 3: Provisional Credibility** (NewNGO receives)
- NewNGO awarded 120 provisional reputation pts (inherited from committee)
- Marked "provisional" on-chain (not full reputation, can be slashed)
- Unlocks benefits:
  - Donors see "Vetted by Unidos, RRF, AWR" badge
  - Grant approval rate increases (40%+ vs 10-20% unvetted)
  - Wizard access (Starter tier, $25/mo fee waived for 6 months)

---

### Reputation Slashing (If Fraud Detected)

**Scenario**: NewNGO turns out to be fraud (ghost beneficiaries, fund diversion)

**Slashing Mechanism**:
1. **Evidence submitted** (any umbrella member can report fraud, evidence required)
2. **Fraud investigation** (committee reviews evidence, 2-week period)
3. **Slashing vote** (60% quadratic vote required to slash)
4. **Penalties applied**:
   - NewNGO: Banned permanently (0 reputation, blacklisted)
   - Staking NGOs: Lose staked reputation proportionally
     - Unidos: -50 pts (270 → 220)
     - RRF: -30 pts (150 → 120)
     - AWR: -40 pts (180 → 140)
   - Non-staking NGOs: No penalty (SINA voted No, reputation unchanged)

**Why This Works**:
- **Skin in the game**: NGOs lose reputation if vet fraud → careful vetting
- **Distributed risk**: Multiple NGOs stake small amounts (not single NGO risks all)
- **Asymmetric reward**: Successful vetting builds ecosystem (more NGOs = more collaboration), slashing punishes lazy vetting

---

## 📊 Human Vetting vs Algorithmic Vetting

### When Humans Add Value (Award-Winning NGO Committee)

**Human Judgment Superior For**:
1. **Cultural context** — Understanding local norms, gender dynamics, political sensitivities
2. **Tacit knowledge** — "This feels off" gut instinct from experience
3. **Relationship verification** — Calling references, visiting sites, meeting beneficiaries in person
4. **Nuance** — Distinguishing between exaggeration (forgivable) vs fraud (ban)

**Example**:
- **Algorithmic check**: NewNGO claims "trained 500 farmers"
- **HEROES AI flags**: Only 50 Telegram accounts detected (suspicious)
- **Human vetting**: Unidos visits NewNGO, finds 200 farmers exist (offline, no smartphones)
- **Verdict**: Exaggeration (trained 200, not 500) but NOT fraud → coaching, not ban

---

### When Algorithms Add Value (SIAH Wizard)

**Algorithmic Verification Superior For**:
1. **Scale** — Can check 1,000 applications/day (humans max 5/day)
2. **Consistency** — No bias, fatigue, or favoritism (same criteria applied to all)
3. **Speed** — Instant fraud flags (ChatGPT fingerprints detected in seconds)
4. **Cost** — $0.10/application (AI inference) vs $500 (human review, travel, calls)

**Example**:
- **Algorithmic check**: NewNGO application contains "transformative impact", "holistic approach", "innovative solutions"
- **HEROES AI flags**: 95% ChatGPT probability (generic buzzwords, no specifics)
- **Auto-reject**: Application rejected before human review (saves committee time)

---

### Hybrid Model (Best of Both)

**Stage 1-2: Algorithmic Pre-Screening** (AI filters 90% of applications)
- Auto-reject: ChatGPT fingerprints, plagiarism, ghost orgs, suspicious metrics
- Auto-approve: Strong signals (multiple award winners vouching, existing partnerships)
- **Pass to humans**: 10% of applications (ambiguous cases, need judgment)

**Stage 3-5: Human Committee Review** (Award-winning NGOs vet finalists)
- Deep dive: Site visits, reference calls, cultural context assessment
- Reputation staking: Committee votes, stakes reputation, transfers provisional credibility
- **Outcome**: 1-2% of original applications graduate (10% pass AI → 10-20% pass humans)

---

## 🌍 Pan-African Vetting Committee Network

### Regional Committees (Year 3-5)

**East Africa Committee**:
- **Lead**: Unidos (270 pts, Uganda)
- **Members**: RRF (150 pts, Uganda), SINA (200 pts, Uganda/Kenya), AWR (180 pts, Kenya)
- **Total reputation**: 800 pts
- **Capacity**: 20 NGOs vetted/year

**West Africa Committee**:
- **Lead**: Partner TBD (200+ pts, Ghana or Senegal)
- **Members**: 3-4 award-winning NGOs (150+ pts each)
- **Total reputation**: 600+ pts
- **Capacity**: 15 NGOs vetted/year

**Southern Africa Committee**:
- **Lead**: Partner TBD (200+ pts, Zimbabwe or Mozambique)
- **Members**: 3-4 award-winning NGOs (150+ pts each)
- **Total reputation**: 600+ pts
- **Capacity**: 10 NGOs vetted/year

**Cross-Regional Vetting** (Year 5+):
- NewNGO in Tanzania → East Africa committee vets
- NewNGO in Ghana → West Africa committee vets
- Dispute resolution → Cross-committee vote (all 3 regions vote)

---

## 🔑 How This Solves the Fraud Trap

### Problem: African NGOs Face Blanket Distrust

**Donor Mindset** (Unfair but Real):
- "African NGOs are risky" (some fraud cases taint entire ecosystem)
- "Better fund Western NGO operating in Africa" (known brand, lower perceived risk)
- **Result**: Legitimate refugee-led NGOs starved of funding (collateral damage from fraud)

---

### Solution: On-Chain Reputation Transfers Trust

**New Donor Mindset**:
- "This NGO is vetted by Unidos (270 reputation, 6 awards)"
- "Unidos staked 50 reputation points (if fraud, they lose credibility)"
- "I trust UNHCR jury (gave Unidos Gene Dewey Award), so I trust Unidos vetting"
- **Result**: Trust transfers from jury → Unidos → NewNGO (3-hop trust chain)

**Formula**:
```
Donor Trust = f(Reputation Staked, Jury Prestige, Slashing History)

Example:
- NewNGO vetted by Unidos (270 pts, 6 awards, 0 slashing incidents)
- Donor trust score: 85/100 (high confidence)

vs

- NewNGO vetted by UnknownNGO (50 pts, 1 award, 2 slashing incidents)
- Donor trust score: 40/100 (low confidence, requires more due diligence)
```

---

## 💰 Economic Incentives (Why Award-Winners Participate)

### Benefits to Vetting NGOs

**1. Ecosystem Growth Revenue**:
- More NGOs in network → larger B2B marketplace → Unidos earns 3-5% commission
- Example: 20 NGOs vetted, avg $500/month tasks → $10K/month marketplace volume → $300-$500 commission to Unidos

**2. Solidarity Fund Access**:
- 10% of umbrella revenue → DAO solidarity fund (emergency support, shared equipment)
- Vetting NGOs earn governance votes (quadratic, based on reputation) → decide fund allocation

**3. Shared Learning**:
- Newcomer NGOs bring fresh ideas (composting technique from Tanzania, new to Uganda)
- Cross-pollination (mushroom NGO learns from textile NGO, adapts quality scoring)

**4. Reputation Appreciation**:
- Successful vetting → NewNGO thrives → Unidos reputation increases (reward for good judgment)
- Example: Unidos vets 10 NGOs, 9 succeed → reputation 270 → 300 pts (bonus for batting average)

---

### Costs to Vetting NGOs

**1. Time Investment**:
- Reviewing applications: 2-4 hours/NGO
- Site visits (if needed): 1-2 days (travel, meetings, verification)
- Ongoing monitoring: 1 hour/quarter per vetted NGO

**2. Reputation Risk**:
- If vet fraud → lose staked reputation (50 pts per bad vetting)
- Cumulative slashing → below 150 pts threshold → lose vetting authority

**3. Opportunity Cost**:
- Time spent vetting = time NOT spent on own projects (training farmers, producing mushrooms)

---

### Why Net Positive (Despite Costs)

**ROI Calculation** (Unidos example):
- Vet 10 newcomer NGOs/year (40 hours total)
- 9 succeed, 1 fails (90% batting average, typical)
- Reputation: +20 pts (successful vetting bonus) - 5 pts (1 slashing) = +15 pts net
- Revenue: $3K/year (marketplace commissions from 9 successful NGOs)
- Solidarity fund: $2K/year (access to shared equipment, emergency support)
- **Total benefit**: +15 reputation, +$5K/year, +shared learning
- **Total cost**: 40 hours (valued at ~$1K if staff time opportunity cost)
- **Net ROI**: +$4K/year + intangible benefits (ecosystem growth, political influence)

**Conclusion**: Worthwhile IF vetting is selective (90%+ batting average)

---

## 🚀 Implementation Roadmap

### Year 1-2: Unidos Earns Vetting Credibility

**Actions**:
- [ ] Mint Unidos award NFTs (6 awards → on-chain credentials)
- [ ] Document award verification (IPFS links to certificates, jury announcements)
- [ ] Cryptographic self-verification (mushroom, vermicompost, biochar, Women's Circle)
- [ ] Achieve 300+ reputation threshold (2-3 more awards via UNHCR, Lush Prize applications)

**Outcome**: Unidos = 300+ reputation, eligible to vet others

---

### Year 2-3: Pilot Peer Vetting Committee

**Actions**:
- [ ] Recruit 2-3 co-vetting NGOs (RRF 150+ pts, SINA 200+ pts, or equivalents)
- [ ] Form East Africa committee (450+ combined reputation)
- [ ] Vet 3 newcomer NGOs (pilot test, document lessons learned)
- [ ] Develop hybrid vetting (AI pre-screen 90%, human deep-dive 10%)

**Outcome**: Vetting methodology validated (90%+ batting average, 0-1 slashing incidents)

---

### Year 3-5: Scale Pan-African Network

**Actions**:
- [ ] Open vetting applications (10-20 NGOs/year per committee)
- [ ] Establish West Africa + Southern Africa committees (600+ pts each)
- [ ] Deploy on-chain reputation system (ERC-721 award NFTs, slashing mechanism)
- [ ] Integrate with donor platforms (Giveth, Gitcoin Grants, Endaoment)

**Outcome**: 50+ NGOs vetted, 95%+ donor trust, <5% fraud rate

---

## 📊 Success Metrics

### Reputation Network Health

| Metric | Year 1 | Year 2 | Year 3 | Year 5 |
|--------|--------|--------|--------|--------|
| **Award-winning NGOs (150+ pts)** | 1 (Unidos) | 3 | 5 | 12 |
| **Total network reputation** | 270 | 600 | 1,200 | 3,500 |
| **Newcomer NGOs vetted** | 0 | 3 | 10 | 50 |
| **Vetting batting average** | N/A | 67% (2/3 succeed) | 90% (9/10) | 92% (46/50) |
| **Slashing incidents** | 0 | 1 | 1 | 2 |
| **Reputation slashed** | 0 | 50 pts | 20 pts | 50 pts |
| **Reputation earned (bonuses)** | 0 | 30 pts | 90 pts | 400 pts |

### Donor Trust Transfer

| Metric | Year 1 | Year 2 | Year 3 | Year 5 |
|--------|--------|--------|--------|--------|
| **Donors trusting Unidos-vetted NGOs** | N/A | 60% | 80% | 95% |
| **Grant approval rate (vetted NGOs)** | N/A | 40% | 50% | 60% |
| **Grant approval rate (unvetted NGOs)** | 10% | 10% | 10% | 10% |
| **Funding ratio (vetted vs unvetted)** | N/A | 4x | 5x | 6x |

---

## 🔍 Key Differentiators

### Unidos Reputation Staking vs Traditional Certification

| Dimension | WFTO Fair Trade Certification | Unidos Reputation Staking |
|-----------|------------------------------|---------------------------|
| **Cost to NGO** | $2,000/year + audit fees | $0 (SaaS fee waived if vetted) |
| **Verification method** | Annual audit (1 week/year) | Real-time (daily HEROES + quarterly committee review) |
| **Trust source** | WFTO brand (centralized) | Award-winning NGOs (decentralized committee) |
| **Slashing mechanism** | None (revoke cert, no penalty to WFTO) | Yes (vetting NGO loses reputation if fraud) |
| **Transparency** | Audit report private | On-chain (reputation visible, slashing history public) |
| **Geographic bias** | Western NGOs favored (brand recognition) | Refugee-led NGOs favored (lived experience valued) |

---

## 🎯 Call to Action

### For Unidos Leadership Team

**Immediate (Q1 2026)**:
- [ ] Inventory all awards (6 confirmed, any missing?)
- [ ] Gather verification evidence (certificates, jury announcements, photos)
- [ ] Design award NFT schema (ERC-721 structure, metadata fields)

**Short-Term (Q2-Q3 2026)**:
- [ ] Mint award NFTs (on Polygon, gas-efficient, widely compatible)
- [ ] Deploy reputation staking smart contract (stake, slash, bonus functions)
- [ ] Recruit co-vetting NGOs (RRF, SINA, or equivalents with 150+ pts)

**Medium-Term (Q4 2026 - 2027)**:
- [ ] Form East Africa vetting committee (450+ combined reputation)
- [ ] Vet first 3 newcomer NGOs (pilot test, document process)
- [ ] Integrate with donor platforms (Giveth, Gitcoin, show "Vetted by Unidos" badge)

---

### For Potential Vetting Committee Members

**Why Join?**
1. **Ecosystem growth revenue** (marketplace commissions, 3-5% of tasks)
2. **Solidarity fund access** (shared equipment, emergency support)
3. **Reputation appreciation** (successful vetting earns bonus points)
4. **Political influence** (governance votes proportional to reputation)

**Requirements**:
- 150+ reputation points (3+ awards minimum, verified on-chain)
- Operational 2+ years (proven track record, not startup)
- Willing to stake reputation (skin in the game, accountability)
- Time commitment: 40 hours/year (reviewing applications, site visits if needed)

**Apply**: Contact Unidos leadership team (details at unidos.ug)

---

## 📚 References

**Internal Documents**:
- `/leadership/strategy/VETTING_FUNNEL.md` — 5-stage vetting process, fraud prevention layers
- `/leadership/strategy/MULTI_YEAR_FUNDING_FUNNEL.md` — Umbrella NGO model, Year 1-4+ roadmap
- `/leadership/strategy/UNIDOS_WIZARD_NGO_MANAGEMENT.md` — Wizard flows, HEROES detection, vetting score methodology

**External Research**:
- EigenTrust: Reputation in P2P Networks (Stanford, 2003)
- ERC-721 NFT Standard (Ethereum, Non-Fungible Tokens)
- Quadratic Voting (Vitalik Buterin, RadicalxChange)
- Staking & Slashing Mechanisms (Ethereum Proof-of-Stake)

---

*Last updated: February 2026*
*Author: Unidos Leadership Team*
*Review cycle: Quarterly (reputation scoring accuracy), Annually (slashing threshold adjustments)*
