# Unidos → DAO Transformation Roadmap

**PRIVATE DOCUMENT - NOT FOR PUBLIC DISTRIBUTION**

*How Unidos transforms from grant-dependent NGO to self-sustaining DAO using SIAH's trust infrastructure*

---

## Executive Summary

This document outlines how Unidos leverages SIAH Protocol's existing toolkit to transform into a decentralized autonomous organization (DAO) with:
- **Trust-weighted governance** (cooperation-based voting, not plutocratic token-weighted)
- **Automated crowdfunding** (milestone-triggered smart contract releases)
- **Behavioral impact verification** (HEROES detection system proves real contribution)
- **Self-funding economics** (70/20/10 Euler pool distribution)

Research reveals critical gaps in existing NGO token projects that SIAH uniquely fills. Where ImpactMarket, Alice, and GiveDirectly rely on manual verification and token-weighted voting, SIAH provides automated behavioral trust scoring that prevents gaming and ensures contributors—not capital—control governance.

---

## Part I: What We Can Learn From NGO Token Projects

### 1. ImpactMarket — UBI Protocol DAO

**What they built:**
- World's largest crypto UBI program (37 countries, 1.7M+ recipients)
- Built on Celo blockchain
- $PACT governance token for DAO voting
- "Impact Farming" rewards supporters with tokens

**Governance model:**
- Token holders vote on new UBI community proposals
- Verified communities request funding directly from DAO treasury
- Contributors earn $PACT tokens through supporting communities

**What works:**
- Scale (reaching 37 countries)
- Clear governance structure (proposals → token vote → funding)
- Incentive alignment (help communities → earn governance power)

**Critical weaknesses:**
1. **Token-weighted voting** → wealthy holders control outcomes (top 10% control 76% of voting power in typical DAOs)
2. **Manual verification** → communities must be "verified" by humans, slow and expensive
3. **No behavioral detection** → can't distinguish authentic helpers from extractors
4. **Voter apathy** → average DAO participation is 17-25%, some as low as 0.79%

**Sources:**
- [impactMarket raises $2.1M and launches $PACT token](https://www.icbpro.org/2022/01/26/impactmarket-raises-2-1m-and-launches-pact-token-to-empower-millions-out-of-extreme-poverty/)
- [Get to Know: impactMarket](https://blog.polkastarter.com/get-to-know-impactmarket/)
- [DAO Governance: Voting Power, Participation, and Controversy](https://dl.acm.org/doi/10.1145/3777416)

---

### 2. Alice — Social Impact Bonds Platform

**What they built:**
- Ethereum-based social funding platform
- Smart contracts automate payments when milestones achieved
- Combines donations + impact investment
- First pilot: St Mungo's homeless housing (2017)

**How it works:**
1. Social organization sets project goals
2. Donors + investors fund project (escrowed in smart contract)
3. When goal achieved → automatic payment released
4. Third-party validators confirm milestones (e.g., Greater London Authority)

**What works:**
- **Milestone-based releases** → donors only pay for proven results
- **Hybrid funding** → combines donations and impact investment
- **Transparency** → blockchain shows exactly where money goes

**Critical weaknesses:**
1. **Manual milestone verification** → requires trusted third parties (expensive, slow)
2. **No contribution detection** → can't automatically measure who's helping
3. **Centralized validation** → depends on institutions like Greater London Authority
4. **No ongoing governance** → one-off projects, not community-governed orgs

**Sources:**
- [Alice: A Case Study - Social Tech Trust](https://socialtechtrust.org/our-portfolio/case-studies/alice-a-case-study/)
- [Alice SI Impact Investing](https://diutocoinnews.com.ng/alice-si-crowdfunding-projects/8657/)
- [Blockchain for Social Impact Bonds: Benefits and More](https://ideausher.com/blog/blockchain-for-social-impact/)

---

### 3. GiveDirectly — Direct Cash Transfers

**What they built:**
- $900M+ sent to 1.7M people (Kenya, Uganda, Rwanda, Malawi, US)
- USDC stablecoin distributions (pennies per transfer vs expensive bank wires)
- Mobile money + crypto hybrid
- Recent pilot: $12,000 USDC to 160 NYC residents

**What works:**
- **Scale** → 1.7M recipients across multiple countries
- **Low cost** → USDC transfers cost pennies vs traditional banking
- **Direct transfers** → no intermediaries, recipients decide how to spend
- **Stablecoin protection** → guards against inflation in fragile economies

**Critical weaknesses:**
1. **Top-down distribution** → GiveDirectly chooses recipients, not community-governed
2. **No contribution tracking** → recipients don't earn through helping others
3. **Dependency model** → handouts, not self-sustaining economy
4. **Requires crypto wallets** → technical barrier for refugees

**Sources:**
- [Donate crypto | GiveDirectly](https://www.givedirectly.org/crypto/)
- [Charities That Accept Crypto Donations - OMNI](https://omni.app/learn/donate-bitcoin-crypto-to-charities)
- [Coinbase Handing Out $12,000 in Crypto (USDC) in New York](https://www.coindesk.com/policy/2025/10/02/coinbase-backed-pilot-program-hands-out-usd12-000-in-crypto-to-low-income-new-yorkers)

---

### 4. WFP Building Blocks — UN Refugee Program

**What they built:**
- $325M+ delivered to 1M+ refugees since 2017
- Ethereum-based blockchain for refugee aid in Jordan
- Iris scan authentication (no wallet needed)
- Cash-for-food assistance to 100,000+ Syrian refugees

**How it works:**
1. Refugee scans iris at market
2. System confirms identity via UN database
3. Family account queried on Ethereum blockchain
4. Purchase approved, aid balance updated

**What works:**
- **No wallet needed** → iris scan eliminates technical barrier
- **Privacy protection** → biometric data stays with UN, not on-chain
- **Massive scale** → 1M+ refugees served
- **Fraud reduction** → blockchain prevents double-spending

**Critical weaknesses:**
1. **Centralized control** → UN manages everything, refugees have no governance power
2. **No contribution economy** → refugees are recipients, not earners
3. **Biometric risks** → iris scan data centralization is privacy concern
4. **Not self-sustaining** → depends on UN funding

**Sources:**
- [Inside the Jordan refugee camp that runs on blockchain](https://www.technologyreview.com/2018/04/12/143410/inside-the-jordan-refugee-camp-that-runs-on-blockchain/)
- [How UN Blockchains Revolutionize Humanitarian Aid](https://www.global-geneva.com/geneva/international/how-un-blockchains-revolutionize-humanitarian-aid)
- [UN humanitarian agency mulls blockchain solution](https://coingeek.com/un-humanitarian-agency-mulls-blockchain-solution-in-assisting-refugees/)

---

## Part II: The Critical Gaps — Where SIAH Fills What Others Miss

| **Gap in Existing Projects** | **Why It Matters** | **How SIAH Solves It** |
|------------------------------|-------------------|----------------------|
| **Token-weighted voting = plutocracy** | Top 10% of token holders control 76% of voting power. Wealth buys governance, not contribution. | **Trust-weighted voting**: CPI-253 cooperation score = vote weight. Helpers earn governance power through detected behavior, not purchased tokens. |
| **Manual impact verification** | Alice pays validators, WFP relies on UN staff. Expensive, slow, doesn't scale. | **HEROES behavioral detection**: Automatically detects 6 contribution types (Helper, Educator, Reflector, Organizer, Engager, Supporter). Impact is verified in real-time via AI + human hybrid. |
| **No anti-gaming protection** | ImpactMarket has no way to detect Sybil attacks or fake participation. One person can create multiple accounts. | **4-layer anti-gaming**: (1) EigenTrust reputation graph, (2) Passport gate (ERC-8004 agents + social verification), (3) Behavioral pattern analysis, (4) Graduated sanctions. Gaming attempts become training data. |
| **Voter apathy (17-25% turnout)** | DAO proposals get ignored. Only whales vote because small holders don't feel impact. | **Contribution-driven engagement**: Helpers/Educators/Reflectors are already active in community. They vote because they're invested. No apathy problem when governance flows from daily contribution. |
| **No self-sustaining economy** | GiveDirectly, WFP, Alice all depend on external funding (grants, donations, UN budgets). | **Euler pool self-funding**: Trade fees from token swaps → ThanksPoolEuler.sol → distributed to cooperation score holders. Economy funds itself through exchange activity. |
| **Centralized milestone verification** | Alice uses Greater London Authority. WFP uses UN staff. Single point of failure + trust dependency. | **Sealed measurement + Merkle proofs**: HEROES scores are cryptographically verifiable. Anyone can verify "did this person help?" without trusting a central authority. ZK proofs planned. |
| **Top-down recipient selection** | GiveDirectly staff choose who gets aid. ImpactMarket token holders vote on communities. Recipients have no voice. | **Producers are governors**: Refugee farmers with high PQI scores earn cooperation points → governance weight. Those who produce the mushrooms/vermicompost vote on how the DAO evolves. |
| **Wallet barriers for refugees** | Most crypto projects require smartphone + internet + wallet setup. 60%+ of Nakivale refugees lack smartphones. | **Telegram bot interface**: No wallet needed to start earning cooperation score. Help in Telegram → score increases → later claim rewards via assisted wallet setup. Progressive onboarding. |
| **Dependency mindset** | "NGO gives me aid" creates passive recipients, not active builders. | **Contribution culture**: Wizard says "you're already helping—now earn governance power for it." Psychological shift from recipient → contributor → governor. |

**Sources:**
- [Voting Power Concentration and Governance Risks](https://www.ainvest.com/news/voting-power-concentration-governance-risks-tokenized-defi-protocols-assessing-long-term-sustainability-dao-models-2512/)
- [DAO Governance: Voting Power, Participation, and Controversy](https://dl.acm.org/doi/10.1145/3777416)
- [How Blockchain Can Help in the Refugee Crisis](https://cardanofoundation.org/blog/how-blockchain-can-help-in-the-refugee-crisis)

---

## Part III: Unidos DAO Transformation — Phase-by-Phase Roadmap

### Phase 1: Establish Trust Layer (Months 1-3)

**Goal:** Deploy HEROES behavioral detection system for Unidos community without requiring blockchain knowledge.

**Implementation:**

1. **Launch Unidos Telegram Bot**
   - Existing SIAH bot adapted with Unidos branding
   - Refugee farmers, team members, volunteers join community chat
   - Bot observes interactions, detects HEROES behaviors:
     - **Helper**: Answers farming questions, shares mushroom cultivation tips
     - **Educator**: Writes detailed explanations (e.g., "how to build biochar kiln")
     - **Reflector**: Reports problems ("vermicompost bins leaking")
     - **Organizer**: Coordinates tasks ("let's harvest mushrooms Friday 9am")
     - **Engager**: Keeps morale up, welcomes new members
     - **Supporter**: Sends encouragement, celebrates wins

2. **Cooperation Score Accumulation**
   - No wallet needed yet
   - Every helpful behavior → cooperation score increases
   - Dashboard shows: Current score, tier (Lurker → Participant → Helper → Trusted → Pillar → MVP), leaderboard
   - Transparent: "You earned +5 points for explaining biochar process to Aisha"

3. **Community Culture Shift**
   - From "Unidos gives me aid" to "I'm building Unidos"
   - Early adopters become ambassadors ("I earned 237 cooperation points!")
   - PQI scoring runs in parallel: mushroom quality + cooperation score both matter

**Success Metrics:**
- 50+ active Telegram participants
- 100+ daily HEROES detections
- At least 5 people reach "Trusted" tier (101+ cooperation score)
- Zero gaming attempts, or gaming caught and sanctioned

---

### Phase 2: Introduce Economic Layer (Months 4-6)

**Goal:** Connect cooperation scores to real economic rewards.

**Implementation:**

1. **Deploy ThanksPoolEuler.sol on Polygon**
   - Why Polygon: Low gas fees ($0.01/tx), Celo-like accessibility
   - Alternative: Celo (if stablecoin-focused)
   - Smart contract address publicly visible, audited

2. **Wallet Onboarding (Wizard-Assisted)**
   - Wizard flow: "You've earned 156 cooperation points. Want to claim ETH rewards?"
   - Step 1: Install MetaMask (or Celo wallet)
   - Step 2: Connect wallet to bot
   - Step 3: Sign message to prove ownership
   - Step 4: Wizard registers wallet → cooperation score → Euler pool share
   - **Critical**: Not required to participate. Telegram engagement earns score even without wallet.

3. **Tip Economy Activation**
   - Donors can tip the pool in ETH/USDC/cUSD
   - Formula: `reward = thanksBalance * (currentEuler - euler0) / 1e18`
   - High cooperation score → higher share of tips
   - Example: Paulinho (Pillar tier, 500 cooperation score) earns 10x more per tip than new Helper (50 score)

4. **First Revenue Stream → Pool**
   - Mushroom spawn sales revenue (B2B model from UNIDOS_BUSINESS_MODEL_2026.md)
   - 70% to producers (farmers based on PQI score)
   - 20% reinvestment (equipment, training)
   - 10% to ThanksPoolEuler → distributed by cooperation score
   - Self-funding begins

**Success Metrics:**
- 20+ wallets connected
- $100+ in pool (from tips + B2B revenue)
- First distribution: High cooperation score holders receive verifiable ETH
- Retention: Do people keep helping after first payout?

---

### Phase 3: Crowdfunding Infrastructure (Months 7-9)

**Goal:** Use SIAH wizard system to run transparent, milestone-based crowdfunding campaigns.

**Implementation (Adapting Alice's Model with SIAH Verification):**

1. **Wizard Flow: "Setup Crowdfunding Campaign"**

   **Step 1: Define Campaign Goal**
   - Example: "Raise $15,000 for mushroom lab cold storage unit"
   - Bot asks: What's the funding goal? What's the deadline? What's the impact?
   - Wizard validates: Goal is specific, deadline realistic, impact measurable

   **Step 2: Break Into Verifiable Milestones**
   - Milestone 1: Purchase cold storage unit ($10,000)
   - Milestone 2: Install and test unit ($3,000)
   - Milestone 3: Train 10 farmers on usage ($2,000)
   - Each milestone has:
     - **Verification criteria**: Photo of unit + invoice, temperature logs for 7 days, training attendance sheet
     - **Responsible party**: Paulinho (Pillar tier, cooperation score 500)
     - **Deadline**: 30 days per milestone

   **Step 3: Deploy Escrow Smart Contract**
   - Funds locked in smart contract (Gnosis Safe on Polygon)
   - Requires multi-sig release: 3 of 5 signatures from high cooperation score holders
   - Cannot be withdrawn until milestone verified

   **Step 4: Launch Campaign Page**
   - Public-facing page (could be hosted on Unidos website or Gitcoin/JuiceBox)
   - Shows:
     - Current funding: $8,200 / $15,000
     - Milestone progress: Milestone 1 = 100% verified ✓, Milestone 2 = pending
     - Trust score of project lead: Paulinho (Pillar, 500 cooperation, 18 months active)
     - Live feed of HEROES behaviors (proof of active community)
   - Differentiation from Alice: Automated trust score + behavioral proof, not just manual validator

   **Step 5: Milestone Verification → Release Funds**
   - Paulinho submits proof (photos, invoices, logs)
   - Wizard assesses:
     - **ProjectStatusLayer**: Is budget on track? Timeline met?
     - **SentimentLayer**: Are farmers happy with unit? Any complaints?
     - **ImpactLayer**: Is cold storage actually improving mushroom shelf life?
   - If verified → multi-sig holders vote to release funds
   - If not → funds stay escrowed, public report of delay/issue

2. **Trust-Weighted Campaign Approval**
   - Not all campaigns get approved
   - Proposal: "I want $5,000 for new project X"
   - DAO members with cooperation score ≥ 101 can vote
   - Vote weight = cooperation score (not token holdings)
   - Example: Paulinho (500 score) vote = 10x weight of new Helper (50 score)
   - Prevents scams: Low cooperation score = low trust = low vote weight

**What This Solves That Alice Doesn't:**
- Alice requires Greater London Authority to verify milestones → expensive, centralized, slow
- SIAH uses Wizard 3-layer triage + cooperation score history → automated trust assessment
- Alice has no anti-gaming → anyone can propose fake project
- SIAH cooperation score threshold (≥101) + HEROES detection → only proven contributors can propose

**Success Metrics:**
- First campaign: $5,000+ raised
- Milestone verification: 100% of milestones verified within 7 days of completion
- Donor retention: 50%+ of donors fund a second campaign
- Trust score transparency: Campaign page shows cooperation scores of team

---

### Phase 4: Full DAO Governance (Months 10-12)

**Goal:** Transition from NGO board decisions to trust-weighted DAO proposals.

**Implementation:**

1. **Governance Framework (Snapshot + On-Chain Execution)**

   - **Off-chain voting**: Snapshot (free, gas-free votes)
   - **Vote weight formula**: `voteWeight = cooperationScore * productionMultiplier`
     - Base: Cooperation score from HEROES detection
     - Multiplier: PQI score for producers (farmers with verified output earn 1.5x vote weight)
     - Example: Farmer with 200 cooperation + 85 PQI score = 200 * 1.5 = 300 vote weight
   - **On-chain execution**: Gnosis Safe multi-sig (3 of 5 high cooperation score holders execute passed proposals)

2. **Proposal Types**

   | Proposal Type | Example | Vote Threshold | Execution |
   |--------------|---------|---------------|-----------|
   | **Budget allocation** | "Spend $10K on biochar kiln" | 60% yes, 200+ voters | Multi-sig release from treasury |
   | **New project approval** | "Launch training program for women's soap-making" | 50% yes, 100+ voters | Wizard creates project flow |
   | **Partnership decisions** | "Partner with hotel chain for mushroom supply" | 50% yes, 150+ voters | Board executes contract |
   | **Governance changes** | "Change vote threshold to 70%" | 75% yes, 300+ voters | Update Snapshot strategy |
   | **Member sanctions** | "Remove gaming member from pool" | 60% yes, 50+ voters | Bot applies graduated sanction |

3. **Institutional Completeness (Mondragon Model)**

   Building on HIVE_DAO_FRAMEWORK_v3.md institutional completeness:

   - **Internal bank**: Euler pool acts as revolving fund (members borrow for equipment, repay from harvest revenue)
   - **Education system**: Wizard-guided training flows (mushroom cultivation, biochar production, financial literacy)
   - **Quality standards**: PQI scoring (100-point system for production quality, already designed in UNIDOS_BUSINESS_MODEL_2026.md)
   - **Solidarity fund**: 10% of B2B revenue → pool for emergencies (medical, drought relief)
   - **Governance**: Trust-weighted voting via Snapshot
   - **Membership progression**: Lurker → Participant → Helper → Trusted → Pillar → MVP (same as SIAH tiers)

4. **Legal Structure (Parallel to DAO)**

   - DAO handles: Budget votes, project priorities, member rewards
   - NGO board handles: Legal contracts, compliance, bank account management
   - Bridge: Board members must have cooperation score ≥ 300 (Pillar tier minimum)
   - Over time: Legal wrapper transitions to DAO LLC (Wyoming/Marshall Islands) or Purpose Foundation (see STEWARD_OWNERSHIP_RESEARCH.md)

**What This Solves That ImpactMarket Doesn't:**
- ImpactMarket uses pure token-weighted voting → plutocracy
- Unidos uses cooperation score + production weighting → meritocracy
- ImpactMarket has voter apathy (17-25% turnout typical)
- Unidos community is already active (HEROES detection proves daily engagement)

**Success Metrics:**
- First governance vote: 60%+ of cooperation score holders participate
- No plutocratic capture: Top 10% of vote weight holders control <30% of total (vs 76% in typical DAOs)
- Proposal quality: 80%+ of proposals pass (indicates good community alignment)
- Retention: 70%+ of Pillar/MVP tier members still active after 6 months

---

## Part IV: Crowdfunding Campaign Playbook

### Campaign Template: "Industrial Mushroom Dryer Equipment"

**Using SIAH Wizard + Alice milestone model + ImpactMarket governance**

#### Pre-Campaign: Trust Establishment

Before launching any crowdfunding campaign, Unidos must have:
- **50+ cooperation score holders** (community is real, not fake)
- **HEROES behavioral proof** (daily Helper/Educator/Organizer activity visible on dashboard)
- **PQI scores published** (donors can see mushroom quality is 85/100 average)
- **1+ successful internal project** (proof Unidos can execute)

#### Campaign Structure

**Goal:** $25,000 for industrial mushroom dryer
**Timeline:** 60 days to raise funds, 90 days to execute
**Impact:** 10x mushroom production (480 kg/year → 4,800 kg/year)

**Milestone 1: Equipment Purchase ($20,000)**
- Verification: Invoice from supplier + equipment delivery photo
- Responsible: Paulinho (Pillar tier, 500 cooperation score)
- Timeline: 30 days after funding
- DAO vote required: Yes (budget >$10K threshold)

**Milestone 2: Installation & Training ($5,000)**
- Verification: Equipment operational + 15 farmers trained (attendance sheet + quiz results)
- Responsible: Mushroom lab team (average 180 cooperation score)
- Timeline: 60 days after Milestone 1
- DAO vote required: No (team autonomy for <$10K)

#### Smart Contract Setup

```solidity
// Simplified escrow logic (actual implementation uses Gnosis Safe)

contract UnidosCrowdfundingEscrow {
    uint256 public goal = 25000 * 10**6; // $25K USDC
    uint256 public raised = 0;
    uint256 public deadline = block.timestamp + 60 days;

    mapping(uint256 => Milestone) public milestones;
    mapping(address => uint256) public cooperationScores; // Imported from SIAH oracle

    struct Milestone {
        uint256 amount;
        string verificationCriteria;
        bool verified;
        address responsible;
        uint256 responsibleCoopScore;
    }

    function contribute(uint256 amount) external {
        require(block.timestamp < deadline, "Campaign ended");
        // Accept USDC, update raised
        raised += amount;
    }

    function releaseMilestone(uint256 milestoneId) external {
        Milestone storage m = milestones[milestoneId];
        require(m.verified == true, "Not verified yet");
        require(msg.sender has cooperation score >= 300, "Must be Pillar tier to release");
        // Multi-sig: 3 of 5 Pillar+ members must call this
        // Transfer m.amount to m.responsible
    }

    function verifyMilestone(uint256 milestoneId, bytes proof) external {
        // Wizard submits verification proof (photos, invoices, training records)
        // 3-layer triage assesses:
        //   - ProjectStatusLayer: Budget on track? Timeline met?
        //   - SentimentLayer: Farmers satisfied? Any complaints in Telegram?
        //   - ImpactLayer: Production actually increased?
        // If all layers pass → milestone.verified = true
    }
}
```

#### Campaign Page (Public-Facing)

**URL:** `https://unidos.org/crowdfunding/mushroom-dryer-2026`

**Page elements:**

1. **Progress Bar**: $18,200 / $25,000 (73%)
2. **Milestone Tracker**:
   - Milestone 1: Equipment Purchase ⏳ Pending
   - Milestone 2: Installation & Training 🔒 Locked
3. **Trust Transparency**:
   - Project Lead: Paulinho
   - Cooperation Score: 500 (Pillar tier)
   - Time Active: 18 months
   - HEROES Profile: 45% Helper, 30% Organizer, 25% Educator
   - Recent Activity: Answered 12 mushroom cultivation questions this week
4. **Live Community Proof**:
   - 68 active community members
   - 247 helpful interactions this month
   - Average cooperation score: 142
   - 8 members at Pillar tier or higher (proof of sustained engagement)
5. **Impact Metrics (From UNIDOS_BUSINESS_MODEL_2026.md)**:
   - Current production: 480 kg mushrooms/year
   - Target production: 4,800 kg/year (10x)
   - Current revenue: $12,000/year
   - Projected revenue: $120,000/year
   - Farmers benefiting: 38 direct, 150+ indirect (vermicompost supply chain)
6. **Smart Contract Address**: `0xABC123...` (verify on Polygonscan)
7. **Donation Button**: "Contribute USDC/ETH" (MetaMask or credit card via Coinbase Commerce)

**Why This Works Better Than Alice:**
- Alice shows "verified by Greater London Authority" → centralized trust
- Unidos shows "verified by 68-person community with 247 helpful interactions this month" → decentralized proof
- Alice verification is manual, slow, expensive
- Unidos verification is Wizard-automated, fast, cheap (3-layer triage + cooperation score check)

---

### Campaign Promotion Strategy

**Month 1: Community Building (Before Launch)**
- Telegram community reaches 50+ active members
- HEROES dashboard goes live (public proof of cooperation)
- First PQI scores published (mushroom quality = 85/100 average)
- Team cooperation scores visible (Paulinho 500, team average 180)

**Week 1-2: Pre-Launch**
- Blog post: "How We Use Trust Scoring to Prevent Crowdfunding Scams"
- Twitter thread: "68 refugee farmers building Africa's first DAO-governed mushroom cooperative"
- Email to past Unidos donors: "You gave $500 in 2024. Here's exactly how it was used (cooperation score proof)."

**Week 3-8: Campaign Live**
- Weekly milestone updates: "Equipment supplier selected, invoice verified by 3 Pillar tier members"
- Daily HEROES highlights: "Aisha (Helper tier) taught 5 new farmers mushroom cultivation this week"
- Donor transparency: "Your $100 bought 0.4% of equipment, released when installation verified"

**Week 9-12: Post-Campaign**
- Milestone 1 verification: Photo of equipment + invoice → funds released → public update
- Milestone 2 verification: Training completion + quiz results → final payment
- Impact report: "Dryer operational, production increased 8.3x in first month (target was 10x)"

---

## Part V: Technical Architecture

### System Components

```
┌─────────────────────────────────────────────────────────────┐
│                        UNIDOS DAO                           │
│                    (Trust-Weighted Governance)              │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌──────────────┐      ┌──────────────┐     ┌──────────────┐
│   TELEGRAM   │      │ SMART        │     │  SNAPSHOT    │
│   BOT        │      │ CONTRACTS    │     │  VOTING      │
│              │      │              │     │              │
│ - HEROES     │      │ - ThanksPool │     │ - Off-chain  │
│   detection  │      │   Euler.sol  │     │   proposals  │
│ - Cooperation│◄────►│ - Crowdfund  │◄───►│ - Cooperation│
│   scoring    │      │   Escrow     │     │   weighted   │
│ - Wizard     │      │ - Gnosis Safe│     │ - Gas-free   │
│   flows      │      │   multi-sig  │     │              │
└──────────────┘      └──────────────┘     └──────────────┘
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              ▼
                    ┌──────────────────┐
                    │  TRUST ORACLE    │
                    │  (SIAH Protocol) │
                    │                  │
                    │ - CPI-253 scoring│
                    │ - EigenTrust     │
                    │ - Anti-gaming    │
                    │ - Merkle proofs  │
                    └──────────────────┘
```

### Data Flow: Contribution → Reward

1. **Farmer helps in Telegram** ("How do I fix mushroom contamination?")
2. **HEROES detection** identifies behavior type (Helper)
3. **Cooperation score updated** (+5 points, now 156 total)
4. **Tier check** (≥101 = Trusted tier)
5. **Euler pool share calculated** (`thanks = 156`, eligible for rewards)
6. **Revenue event** (mushroom sale generates $500, 10% = $50 to pool)
7. **Distribution triggered** (`fee * 1e18 / totalThanks` → farmer receives $2.43 proportional to their 156 score)
8. **Governance weight updated** (156 cooperation score = 156 vote weight in next proposal)

### Tech Stack Comparison: SIAH vs Typical NGO DAO

| Layer | Typical DAO (ImpactMarket/Alice) | SIAH-Powered Unidos DAO |
|-------|----------------------------------|------------------------|
| **Blockchain** | Ethereum mainnet (high gas fees) | Polygon/Celo (low fees, $0.01/tx) |
| **Identity** | BrightID / Worldcoin | ERC-8004 Registry + Telegram verification |
| **Voting** | Snapshot (token-weighted) | Snapshot (cooperation-weighted) |
| **Treasury** | Gnosis Safe (manual releases) | ThanksPoolEuler.sol (automatic distribution) |
| **Verification** | Manual 3rd parties (Alice uses government) | Wizard 3-layer triage + behavioral proof |
| **Anti-Sybil** | BrightID uniqueness | HEROES detection + EigenTrust + Passport gate |
| **Reputation** | None (or token holdings) | CPI-253 (10 dimensions, 4 layers, 253 points) |
| **Interface** | Web dApp (requires wallet) | Telegram bot (no wallet initially needed) |
| **Gas fees** | Voters pay gas (discourages participation) | Gas-free voting (Snapshot off-chain) |

---

## Part VI: Risk Mitigation

### Challenge 1: Refugee Crypto Wallet Adoption

**Problem:** 60%+ of Nakivale refugees lack smartphones, internet access inconsistent, low technical literacy.

**SIAH Solution:**
- **Phase 1**: Earn cooperation score in Telegram (no wallet needed)
- **Phase 2**: Wizard-assisted wallet setup for those who want to claim rewards
- **Phase 3**: Community wallet option (trusted member holds wallet, distributes cash to scoreholders)
- **Not required**: Can participate in governance via Telegram voting bot (Wizard tallies cooperation-weighted votes, submits to Snapshot)

**Comparison:** WFP Building Blocks uses iris scans (requires biometric enrollment), GiveDirectly requires full wallet setup upfront. SIAH progressive onboarding removes barrier.

---

### Challenge 2: Gaming / Sybil Attacks

**Problem:** What prevents someone creating 10 fake Telegram accounts to earn cooperation score?

**SIAH Anti-Gaming (4 Layers):**

1. **Passport Gate (ERC-8004 + Social Verification)**
   - To earn cooperation score >100, must link:
     - Telegram account (proven via bot)
     - X (Twitter) account (proven via API)
     - Wallet address (proven via signature)
   - Cross-reference: Do these accounts have history? Or all created yesterday?

2. **HEROES Behavioral Detection**
   - AI analyzes message patterns
   - Real Helper: Varied responses, personalized advice, asks follow-up questions
   - Fake Helper: Generic copy-paste, no follow-up, suspiciously fast responses
   - Detection triggers flag → human review

3. **EigenTrust Reputation Graph**
   - Real contributors receive "/thanks" from multiple unique community members
   - Fake accounts only thank each other (ring detected)
   - Formula: `trust = Σ(trusting_me * their_trust) / total_trust`
   - Isolated rings have low global trust score

4. **Graduated Sanctions (Ostrom Commons Governance)**
   - First offense: Warning + cooperation score frozen
   - Second offense: 30-day suspension
   - Third offense: Permanent ban + cooperation score reset to 0
   - Public log (anonymized): "User #47 banned for gaming, -250 score"

**Proof:** WFP Building Blocks has no behavioral detection (iris scan only proves unique human, not helpful human). ImpactMarket has no anti-gaming (anyone can farm $PACT tokens). SIAH is the only system that detects behavioral gaming.

**Sources:**
- [Frontiers | Blockchain-based solution for addressing refugee management](https://www.frontiersin.org/journals/human-dynamics/articles/10.3389/fhumd.2024.1391163/full)
- [Constructing Trustworthy and Safe Communities on Blockchain](https://arxiv.org/pdf/1809.01031)

---

### Challenge 3: DAO Governance Attacks

**Problem:** DAOs get attacked via flash loans (borrow tokens, vote, repay in same block), treasury raids (vote to send treasury to attacker wallet), or voter apathy (attacker proposes malicious change, no one votes, proposal passes).

**SIAH Solution:**

1. **No token-weighted voting** → can't buy governance power
   - Attack vector: "I'll buy 51% of tokens and vote to drain treasury"
   - SIAH defense: Tokens don't exist (cooperation score can't be bought, only earned through time)

2. **Cooperation score threshold** → new accounts can't vote
   - Attack vector: "I'll create 100 accounts to vote for my proposal"
   - SIAH defense: Accounts need 101+ cooperation score (requires weeks of helpful behavior + anti-gaming passage)

3. **Multi-sig execution** → proposals don't auto-execute
   - Attack vector: "Proposal passes, treasury auto-sends to my wallet"
   - SIAH defense: Passed proposals require 3 of 5 Pillar tier members (300+ cooperation score each) to manually execute via Gnosis Safe

4. **Active community = no apathy**
   - Attack vector: "I'll propose bad change and hope no one votes"
   - SIAH defense: HEROES detection proves daily activity. If community is active in Telegram, they'll notice suspicious proposal.

**Proof:** Average DAO voter turnout is 17-25%. Decentraland had 0.79% turnout. Unidos DAO will have 60%+ turnout because voters are already active daily (HEROES-detected community members, not passive token holders).

**Sources:**
- [DAO Governance: Voting Power, Participation, and Controversy](https://dl.acm.org/doi/10.1145/3777416)
- [Voting Power Concentration and Governance Risks](https://www.ainvest.com/news/voting-power-concentration-governance-risks-tokenized-defi-protocols-assessing-long-term-sustainability-dao-models-2512/)

---

### Challenge 4: Regulatory Compliance

**Problem:** DAOs exist in legal gray area. If Unidos DAO controls treasury, are token holders liable? What about taxes?

**Hybrid Solution (NGO + DAO):**

1. **NGO remains legal entity** (registered in Uganda)
   - Holds bank accounts, signs contracts, employs staff
   - Board of directors legally responsible

2. **DAO governs operations** (budget votes, project priorities)
   - Snapshot proposals → community votes
   - Passed proposals → NGO board executes
   - Board members must have 300+ cooperation score (accountability to DAO community)

3. **Future: Legal wrapper options**
   - Wyoming DAO LLC (US-based legal recognition)
   - Marshall Islands DAO (crypto-friendly jurisdiction)
   - Purpose Foundation (see STEWARD_OWNERSHIP_RESEARCH.md, prevents sale/extraction)

4. **Tax handling**
   - B2B revenue taxed as NGO income (Uganda corporate tax)
   - Euler pool distributions taxed as individual income (recipient responsibility)
   - DAO treasury held in multi-sig (not taxed until distributed)

**Comparison:** ImpactMarket is fully on-chain (no legal entity), which creates compliance risk. Alice has legal entity but no DAO governance. Unidos hybrid model gets benefits of both.

---

## Part VII: 12-Month Financial Projection

### Revenue Streams (From UNIDOS_BUSINESS_MODEL_2026.md)

| Source | Year 1 Revenue | % to Euler Pool (10%) | Distributed to Cooperation Scoreholders |
|--------|---------------|---------------------|----------------------------------------|
| Mushroom spawn sales | $48,000 | $4,800 | Pillar tier avg earns $240/year |
| Vermicompost B2B | $28,800 | $2,880 | Trusted tier avg earns $90/year |
| Biochar sales | $16,700 | $1,670 | Helper tier avg earns $35/year |
| Women's Circle franchise | $24,000 | $2,400 | Educator role bonus +$50/year |
| Training as Service | $18,000 | $1,800 | Organizer role bonus +$40/year |
| Crowdfunding campaigns | $50,000 | $0 (stays in project escrow) | N/A |
| Donor tips to pool | $8,000 | $8,000 (100%) | Distributed immediately |
| **TOTAL** | **$193,500** | **$21,550** | **~150 active contributors** |

### Distribution Example (100 Cooperation Scoreholders)

Assume 100 people with cooperation scores (total = 15,000 points):

| Tier | Cooperation Score | % of Total | Annual Earnings from Pool | Monthly Income |
|------|------------------|-----------|--------------------------|---------------|
| **MVP** (1 person) | 800 | 5.3% | $1,142 | $95 |
| **Pillar** (5 people) | 500 avg | 16.7% | $360 each | $30 |
| **Trusted** (15 people) | 250 avg | 25.0% | $180 each | $15 |
| **Helper** (30 people) | 150 avg | 30.0% | $108 each | $9 |
| **Participant** (49 people) | 100 avg | 32.7% | $72 each | $6 |

**Context:** Nakivale median income is ~$2/day = $60/month. Pillar tier earns $30/month from pool alone (50% income boost). MVP tier earns $95/month (158% income boost). This is transformative.

### Crowdfunding Impact

3 successful campaigns in Year 1:
1. **Mushroom dryer** ($25,000) → 10x production capacity
2. **Biochar kiln upgrade** ($8,000) → 3x biochar output
3. **Women's Circle expansion** ($12,000) → 2 new communities (76 participants)

**Total raised:** $45,000
**Donor transparency:** 100% verified via Wizard milestones
**DAO approval rate:** 85% (high community alignment)
**Donor retention:** 60% fund second campaign (vs 20% typical for NGOs)

---

## Part VIII: Success Metrics — Unidos DAO vs Traditional NGO

| Metric | Traditional NGO (2024) | Unidos DAO (2026 Target) | Improvement |
|--------|----------------------|--------------------------|-------------|
| **Funding sources** | 90% grants, 10% donations | 40% B2B, 30% crowdfunding, 20% grants, 10% tips | Diversified, sustainable |
| **Decision-making** | Board of 5 (top-down) | Community of 100+ (trust-weighted votes) | Decentralized, inclusive |
| **Impact verification** | Annual report (self-reported) | Real-time HEROES detection + PQI scores | Transparent, verifiable |
| **Contributor retention** | 40% annual turnover | 70% retention (cooperation score incentive) | Stable, engaged |
| **Donor trust** | "Trust us" (opaque) | "Verify on-chain" (transparent) | Cryptographic proof |
| **Revenue per farmer** | $240/year (2024 avg) | $450/year (B2B + pool distribution) | 88% increase |
| **Governance participation** | 5 board members vote | 60+ cooperation scoreholders vote | 12x more voices |
| **Gaming / fraud risk** | Manual audits (slow) | 4-layer anti-gaming (real-time) | Proactive prevention |
| **Scalability** | Linear (more projects = more staff) | Exponential (Wizard automates, pool self-funds) | DAO scales without overhead |

---

## Conclusion: The SIAH Advantage

Existing NGO token projects (ImpactMarket, Alice, GiveDirectly, WFP Building Blocks) solve parts of the problem:
- **ImpactMarket** → DAO governance ✓, but token-weighted (plutocracy) ✗
- **Alice** → Milestone-based crowdfunding ✓, but manual verification ✗
- **GiveDirectly** → Crypto distributions ✓, but top-down control ✗
- **WFP Building Blocks** → Scale + low-tech interface ✓, but no contribution economy ✗

**SIAH Protocol solves all four:**
1. **DAO governance** → trust-weighted (cooperation score), not token-weighted
2. **Automated verification** → Wizard 3-layer triage + HEROES behavioral proof
3. **Decentralized distribution** → Euler pool rewards contributors, not donors choosing recipients
4. **Progressive onboarding** → Telegram bot (no wallet needed) → wallet-assisted later

**The gaps SIAH uniquely fills:**
- **Behavioral trust scoring** → no other system detects HEROES contribution types
- **Anti-gaming oracle** → EigenTrust + Passport + sanctions (ImpactMarket/Alice have none)
- **Cooperation-weighted voting** → solves plutocracy (76% control by top 10% in typical DAOs)
- **Self-funding economics** → Euler pool distributes B2B revenue automatically (GiveDirectly depends on donations)
- **Wizard-automated flows** → setup crowdfunding in 5 steps vs Alice's manual validator dependency

**Unidos becomes the proof:**
- First refugee-led DAO with trust-weighted governance
- First NGO using behavioral detection for impact verification
- First crowdfunding platform with automated cooperation score verification
- First self-sustaining aid economy (B2B revenue → Euler pool → contributors)

When Unidos raises $50K in crowdfunding with 60%+ cooperation score voter participation and 85% donor retention, the model is proven. Then: scale to 100 refugee settlements. SIAH becomes the infrastructure layer for bottom-up humanitarian DAOs worldwide.

---

**Sources:**

### NGO Token Projects
- [impactMarket raises $2.1M and launches $PACT token](https://www.icbpro.org/2022/01/26/impactmarket-raises-2-1m-and-launches-pact-token-to-empower-millions-out-of-extreme-poverty/)
- [Get to Know: impactMarket](https://blog.polkastarter.com/get-to-know-impactmarket/)
- [Alice: A Case Study - Social Tech Trust](https://socialtechtrust.org/our-portfolio/case-studies/alice-a-case-study/)
- [Donate crypto | GiveDirectly](https://www.givedirectly.org/crypto/)
- [Inside the Jordan refugee camp that runs on blockchain](https://www.technologyreview.com/2018/04/12/143410/inside-the-jordan-refugee-camp-that-runs-on-blockchain/)

### DAO Governance Challenges
- [DAO Governance: Voting Power, Participation, and Controversy](https://dl.acm.org/doi/10.1145/3777416)
- [Voting Power Concentration and Governance Risks](https://www.ainvest.com/news/voting-power-concentration-governance-risks-tokenized-defi-protocols-assessing-long-term-sustainability-dao-models-2512/)
- [DAOs after token voting: Where governance goes when capital stops leading?](https://blog.humanode.io/daos-after-token-governance-where-governance-goes-when-capital-stops-leading/)

### Refugee Blockchain Adoption
- [Using blockchain and cryptocurrency to support and empower refugees](https://www.cryptoaltruism.org/blog/using-blockchain-and-cryptocurrency-to-support-and-empower-refugees)
- [How Blockchain Can Help in the Refugee Crisis](https://cardanofoundation.org/blog/how-blockchain-can-help-in-the-refugee-crisis)
- [Frontiers | Blockchain-based solution for addressing refugee management](https://www.frontiersin.org/journals/human-dynamics/articles/10.3389/fhumd.2024.1391163/full)

### Impact Verification
- [Blockchain for Social Impact Bonds: Benefits and More](https://ideausher.com/blog/blockchain-for-social-impact/)
- [Constructing Trustworthy and Safe Communities on Blockchain](https://arxiv.org/pdf/1809.01031)
- [How Blockchain Can Support Social Impact: Three Innovative Use Cases](https://nextbillion.net/blockchain-social-impact-innovative-use-cases/)

---

*Document created February 2026 for internal Unidos leadership review. Not for public distribution until DAO transformation Phase 1 complete (Month 3).*
