# Unidos Wizard - NGO Project Management System
## Adapting Bonzi_v5 Wizard for Refugee-Led Organization Management

**Based on:** Bonzi_v5 WizardTriageRouter + WizardState
**Purpose:** Help NGO leaders (like Paulinho) manage projects, donations, crowdfunding, impact vetting
**Target Users:** NGO founders, project managers, team coordinators

---

## The Core Concept

**Bonzi Wizard** helps community managers by:
- Triaging user interactions (technical + emotional + business layers)
- Routing to the right agent/persona
- Tracking multi-step flows (onboarding, features)

**Unidos Wizard** helps NGO leaders by:
- Triaging project status (resources + sentiment + impact layers)
- Routing to the right action/decision
- Tracking multi-step flows (donations, campaigns, impact reports)

---

## Part I: The Three-Layer Triage System (Adapted for NGO)

### Bonzi Model (Community Management)

| Layer | What It Reads | Example |
|-------|---------------|---------|
| **Technical** | User tier, feature access, system errors | "User wants to claim rewards but tier too low" |
| **Emotional** | Frustration, confusion, satisfaction | "User says 'this is broken' → frustrated" |
| **Business** | Revenue impact, churn risk, trust delta | "Frustrated user = revenue at risk" |

### Unidos Adaptation (NGO Management)

| Layer | What It Reads | Example |
|-------|---------------|---------|
| **Project Status** | Budget, timeline, resource capacity | "Mushroom project has $2k left, needs $5k equipment" |
| **Stakeholder Sentiment** | Donor feedback, team morale, beneficiary satisfaction | "Donor email says 'amazing work' → satisfied" |
| **Impact** | Program effectiveness, funding risk, sustainability | "Low donations = funding at risk" |

---

## Part II: NGO Wizard Flows (Specific Use Cases)

### Flow 1: Setup Donation Infrastructure

**User:** NGO founder wants to accept crypto + fiat donations

**Wizard Steps:**
```
Step 1: Choose payment methods
  → Options: Crypto (wallet), Fiat (Stripe), Mobile Money (M-Pesa)
  → Decision gate: Which does your audience use?

Step 2: Set up transparent treasury
  → Create multi-sig wallet (Polygon/Celo for low gas)
  → Configure Snapshot for governance votes
  → Link to public dashboard (donors see funds)

Step 3: Legal compliance
  → Register as nonprofit (if not already)
  → Set up tax receipt system (fiat donations)
  → KYC for large crypto donations (compliance)

Step 4: Verify & launch
  → Test donation flow (small test payment)
  → Create donation page (embed on website)
  → Status: LIVE ✅
```

**Wizard Assistance:**
- Detects if user gets stuck (repeat errors, frustration signals)
- Routes to help documentation or live support
- Tracks completion rate (did they finish setup?)

### Flow 2: Launch Crowdfunding Campaign

**User:** Project manager wants to raise $10k for biochar kilns

**Wizard Steps:**
```
Step 1: Define campaign goal
  → Input: Amount needed, purpose, timeline
  → Wizard validates: Does amount match project plan?
  → Wizard checks: Do you have impact data to show donors?

Step 2: Create campaign page
  → Template: Project description, budget breakdown, impact metrics
  → Wizard suggests: Use existing impact data (40% soil improvement, 6,100 kg biochar)
  → Add: Photos, videos, testimonials (Wizard pulls from PQI-scored content)

Step 3: Set up milestones
  → Break $10k into phases: $3k → equipment, $4k → installation, $3k → training
  → Wizard creates: Smart contract that releases funds per milestone
  → Transparency: Donors see progress on-chain

Step 4: Launch & promote
  → Wizard generates: Social media posts, email template, donor outreach list
  → Tracking: Views, donation amounts, completion %
  → Alerts: "Campaign 50% funded! Send update to donors"

Step 5: Impact reporting
  → After campaign ends: Wizard prompts for impact photos, metrics
  → Auto-generates: Donor report with before/after data
  → Next step: Convert donors to recurring supporters
```

**Wizard Intelligence:**
- Learns from past campaigns (which messages convert best)
- Alerts if campaign stalling ("No donations in 3 days - send update?")
- Suggests optimal timing ("Campaigns launched on Tuesdays raise 23% more")

### Flow 3: Prove Impact (Vetting for Donors)

**User:** Donor asks "How do I know my money makes a difference?"

**Wizard Flow:**
```
Step 1: Gather impact data
  → Wizard pulls: PQI scores, production volumes, beneficiary testimonials
  → Wizard calculates: ROI (dollars donated → impact created)
  → Example: "$1,000 donation → 50 kg biochar → 2 tons CO2e sequestered → 3 farmers earning $500/year"

Step 2: Create verification trail
  → Wizard links: Donation transaction → project spending → outcome data
  → On-chain: Smart contract shows $1,000 received → equipment purchased → production increased
  → Off-chain: Photos, videos, farmer testimonials (timestamped, location-tagged)

Step 3: Generate donor report
  → Template: Your donation impact summary
    • Amount: $1,000
    • Project: Biochar production equipment
    • Direct beneficiaries: 3 farmers (names: María, James, Furaha)
    • Outcomes: 50 kg biochar produced, 40% soil improvement, $1,500 farmer income generated
    • Carbon: 2 tons CO2e sequestered (verifiable via Gold Standard)
  → Wizard adds: QR code to blockchain proof, video testimonials

Step 4: Ongoing updates
  → Wizard schedules: Quarterly updates to donor
  → Auto-pulls: New production data, farmer progress, photos
  → Donor dashboard: Real-time view of project metrics (lives impacted, carbon sequestered, revenue generated)
```

**Wizard Vetting System (PQI-style for Projects):**

| Dimension | What It Measures | Verification |
|-----------|------------------|--------------|
| **Financial Transparency** | 100% of donations accounted for on-chain | Smart contract records |
| **Output Delivered** | Did project produce what it promised? | Production logs, photos |
| **Beneficiary Impact** | Are farmers earning more? Soil improving? | Before/after data, testimonials |
| **Sustainability** | Is project self-funding now? Dependency reducing? | Revenue vs grant % over time |
| **Quality Standards** | Are products meeting certifications? | Third-party audits (organic, fair trade) |

**Vetting Score (100 points):**
- 90-100: Exceptional impact, fully transparent, replicable
- 70-89: Strong impact, minor gaps in data
- 50-69: Moderate impact, needs improvement
- <50: High risk, transparency issues, reconsider funding

**Wizard Use:**
- Donors see vetting score BEFORE donating
- NGOs with high scores get featured (more donations)
- Low scores trigger "Improve your vetting" wizard flow
- Gamification: "Increase transparency to unlock matching grants"

---

## Part III: Wizard Triage for NGO Operations

### The Three-Layer Assessment

**Layer 1: Project Status (Technical)**
```python
class ProjectStatusLayer:
    project_name: str  # "Biochar Production", "Women's Circle"
    budget_remaining: float  # $2,000
    budget_needed: float  # $5,000 (funding gap)
    timeline_status: str  # on_track | delayed | ahead
    team_capacity: int  # 0-100 (how busy is team?)
    resource_availability: bool  # Do we have materials, equipment?
    blockers: List[str]  # ["Need autoclave", "Waiting for certification"]
```

**Wizard Detects:**
- ⚠️ **Funding gap:** budget_remaining < budget_needed → route to "Launch Campaign" wizard
- ⚠️ **Timeline delay:** delayed + high_team_capacity → route to "Resource Allocation" wizard
- ⚠️ **Blocker detected:** "Need autoclave" → route to "Equipment Subsidy" wizard

**Layer 2: Stakeholder Sentiment (Emotional)**
```python
class SentimentLayer:
    donor_feedback: str  # "Happy", "Concerned", "Silent"
    team_morale: str  # "Motivated", "Burnout Risk", "Frustrated"
    beneficiary_satisfaction: int  # 0-100 (from surveys, testimonials)
    sentiment_signals: List[str]  # ["Donor said 'amazing'", "Team member said 'overwhelmed'"]
    repeat_issues: int  # How many times same problem reported?
```

**Wizard Detects:**
- ⚠️ **Donor concern:** "Haven't heard an update in 2 months" → route to "Send Impact Update" wizard
- ⚠️ **Team burnout:** morale = "Frustrated" + repeat_issues ≥ 3 → route to "Team Support" wizard
- ⚠️ **Beneficiary dissatisfaction:** satisfaction < 60 → route to "Feedback Collection & Fix" wizard

**Layer 3: Impact (Business)**
```python
class ImpactLayer:
    program_effectiveness: int  # 0-100 (targets met?)
    funding_risk: str  # None | Low | Medium | High | Critical
    sustainability_score: float  # 0-1 (revenue/expenses ratio)
    beneficiaries_reached: int  # vs target
    carbon_sequestered: float  # tons CO2e (if applicable)
    revenue_generated: float  # from B2B sales (if applicable)
```

**Wizard Detects:**
- ⚠️ **Funding at risk:** 2 months runway left → route to "Emergency Fundraise" wizard
- ⚠️ **Low effectiveness:** beneficiaries_reached = 54% of target → route to "Program Adjustment" wizard
- ✅ **High sustainability:** revenue/expenses > 0.7 → celebrate, reduce grant dependency

---

### Wizard Routing Logic (Adapted from Bonzi RACI-V)

**ESCALATE conditions (need founder/leader decision):**
- Critical funding risk (< 1 month runway)
- Major donor complaint
- Team member resignation
- Legal/compliance issue
- Safety incident

**ASSISTED conditions (wizard helps, but human reviews):**
- Funding gap (launch campaign with wizard help)
- Timeline delay (wizard suggests resource reallocation)
- Donor feedback needed (wizard drafts update)
- Team capacity issue (wizard suggests task redistribution)

**LOCAL conditions (wizard auto-handles):**
- Routine donation received → auto-thank you email
- Impact data updated → auto-refresh donor dashboard
- Milestone reached → auto-notify donors
- New testimonial collected → auto-add to campaign page

---

## Part IV: Wizard State Machine for Multi-Step Flows

### Example: Campaign Setup Flow

**State Tracking:**
```json
{
  "user_id": 123,  // Paulinho
  "flow": "campaign_setup",
  "step_id": "define_goal",
  "step_number": 1,
  "total_steps": 5,
  "status": "active",
  "attempts": 1,
  "metadata": {
    "campaign_type": "equipment",
    "amount_needed": 10000,
    "project": "biochar_kilns"
  }
}
```

**Wizard Steps:**
1. **define_goal** (active) → User inputs $10k, biochar kilns
2. **create_page** (pending) → Wizard auto-generates campaign page
3. **set_milestones** (pending) → Wizard suggests 3 phases
4. **launch** (pending) → User reviews, clicks "Launch"
5. **promote** (pending) → Wizard sends to donor list, social media

**Wizard Assistance at Each Step:**
- **Step 1:** "You need $10k. We have impact data showing 6,100 kg biochar produced. Should we include this?"
- **Step 2:** "I've drafted a campaign page. Review it here: [preview link]"
- **Step 3:** "Based on $10k goal, I suggest: Phase 1 ($3k) - Purchase kilns, Phase 2 ($4k) - Install & test, Phase 3 ($3k) - Train 20 farmers. Approve?"
- **Step 4:** "Campaign ready. I'll email 50 past donors + post to social media. Launch now?"
- **Step 5:** "Campaign live! I'll send updates every 3 days. You can track donations here: [dashboard]"

**Wizard Learns:**
- If user abandons at Step 2 → "create_page template too complex, simplify"
- If campaigns launched on Tuesdays raise more → "Suggest Tuesday launch"
- If Phase 1 funding happens fast, Phase 2 slow → "Adjust milestone amounts"

---

## Part V: Wizard Features for NGO Leaders

### Feature 1: Donation Setup Wizard

**What It Does:**
- Guides NGO through setting up crypto + fiat donation infrastructure
- Creates transparent treasury (multi-sig wallet)
- Configures tax receipts, compliance
- Tests donation flow

**Wizard Prompts:**
```
Wizard: "Let's set up your donation infrastructure. I'll help you accept crypto, fiat, and mobile money."

Step 1: "Which payment methods does your audience use?"
  [ ] Crypto (wallet address - free)
  [ ] Credit card (Stripe - 2.9% fee)
  [ ] Mobile money (M-Pesa - 1% fee)

User selects: Crypto + Mobile money

Wizard: "Great choice. Low fees for your donors. Let's create your crypto wallet."

Step 2: "I'll create a multi-sig wallet on Polygon (low gas fees). Who should be signers?"
  → Input: Paulinho, Mariam, [Third person]
  → Wizard creates: Gnosis Safe on Polygon
  → Wizard displays: Wallet address 0x7ba0...861d

Step 3: "Now let's set up M-Pesa for local donors in Uganda."
  → Wizard connects: M-Pesa Business Account
  → Wizard configures: Auto-convert UGX → USD → crypto (if desired)

Step 4: "Let's test the donation flow."
  → Wizard sends: $1 test donation
  → Wizard confirms: Received in wallet ✅
  → Status: LIVE

Wizard: "Donation infrastructure ready! Add this to your website: [embed code]"
```

**Wizard Intelligence:**
- Detects if user gets stuck (error messages, repeat attempts)
- Routes to video tutorial or live support
- Tracks time to completion (optimize wizard flow)

### Feature 2: Crowdfunding Campaign Wizard

**What It Does:**
- Helps create campaign page with impact data
- Sets up milestone-based smart contracts
- Auto-generates promotion materials
- Tracks campaign performance
- Sends donor updates

**Wizard Prompts:**
```
Wizard: "Let's launch a crowdfunding campaign. What are you raising money for?"

User: "Biochar production equipment - $10,000"

Wizard: "Perfect. I see you've produced 6,100 kg biochar this year. That's great impact data. Let me draft a campaign."

[Wizard auto-generates campaign page]

Title: "Scale Biochar Production: Empower 20 Refugee Farmers"

Goal: $10,000

Story:
"In 2025, Unidos produced 6,100 kg biochar using locally-made kilns, improving soil health for 5 farmers. With $10,000, we'll install 4 industrial kilns and train 20 refugee farmers to produce 40 tons annually—enough to:
• Sequester 100 tons CO2e (climate impact)
• Improve soil for 50 farms
• Generate $30,000 income for farmers"

Budget Breakdown:
• 4 industrial kilns: $5,000 each = $20,000... wait, that's $20k not $10k?

Wizard: "I detected an issue. 4 kilns cost $20k but you're raising $10k. Should I adjust?"

Options:
  [ ] Raise $20k instead
  [ ] Buy 2 kilns for $10k
  [ ] Find cheaper kilns

User: "Buy 2 kilns for $10k"

Wizard: "Updated. Campaign now shows: 2 kilns, 10 farmers trained, 20 tons biochar/year."

Wizard: "Should I create milestones for transparency?"

Milestone 1 (30%): $3,000 raised → Purchase kilns
Milestone 2 (70%): $7,000 raised → Install & test kilns
Milestone 3 (100%): $10,000 raised → Train 10 farmers

User: "Approve"

Wizard: "Campaign created. Ready to launch? I'll email 50 past donors and post to social media."

User: "Launch"

Wizard: "Campaign LIVE! Track donations here: [dashboard link]"
```

**Wizard Ongoing Assistance:**
- Day 3: "Campaign is 20% funded ($2k). Send an update to donors?"
- Day 7: "No donations in 2 days. Try posting on LinkedIn? Here's a draft."
- Day 10: "Milestone 1 reached! $3k raised. I've notified donors and released funds for kiln purchase."
- Day 30: "Campaign ended at 85% ($8.5k). Options: (1) Extend campaign, (2) Adjust to 1.5 kilns, (3) Find matching grant for gap"

### Feature 3: Impact Vetting Wizard

**What It Does:**
- Collects impact data from projects
- Calculates vetting score (0-100)
- Generates donor-facing impact reports
- Creates verification trail (on-chain + off-chain proof)

**Wizard Prompts:**
```
Wizard: "Let's prove your impact to donors. I'll calculate your vetting score."

Step 1: Financial Transparency
  Wizard checks: "All donations accounted for on-chain?"
  → Pulls: Smart contract records
  → Result: 100% transparent ✅ (+25 points)

Step 2: Output Delivered
  Wizard asks: "Did you produce what you promised?"
  → User provides: Production logs (6,100 kg biochar vs 6,000 kg target)
  → Result: 102% of target ✅ (+25 points)

Step 3: Beneficiary Impact
  Wizard asks: "Are farmers better off?"
  → User provides: Income data (farmers earning $1,000/year vs $300 before)
  → Result: 3.3x income increase ✅ (+20 points)

Step 4: Sustainability
  Wizard calculates: Revenue / Expenses ratio
  → Data: $45,500 revenue / $100,000 expenses = 45.5%
  → Result: Moderate sustainability (+15 points)

Step 5: Quality Standards
  Wizard checks: "Do you have certifications?"
  → User: "IBI biochar standards pending, no organic cert yet"
  → Result: Partial certification (+10 points)

TOTAL VETTING SCORE: 95/100 (Exceptional)

Wizard: "Excellent! Your score is in the top 5% of refugee-led NGOs. Donors will love this."

Wizard generates report:

---
UNIDOS BIOCHAR PROJECT - IMPACT VERIFICATION REPORT

Vetting Score: 95/100 ⭐⭐⭐⭐⭐

✅ Financial Transparency: 100% of donations tracked on-chain
✅ Output Delivered: 102% of production target (6,100 kg vs 6,000 kg)
✅ Beneficiary Impact: Farmers earning 3.3x more ($1,000 vs $300/year)
✅ Sustainability: 45.5% self-funded through B2B sales
🔄 Quality: IBI certification in progress (target: Q2 2026)

Carbon Impact: 100 tons CO2e sequestered (verifiable on blockchain)
Farmers Served: 5 direct, 20 trained

Donation → Impact Trail:
$1,000 donated → 50 kg biochar produced → 2 tons CO2e sequestered → 3 farmers earning $500/year

[QR Code to blockchain proof]
[Video testimonials: Farmer María, Farmer James]
---

Wizard: "I've created your impact report. Share this with donors to build trust."
```

**Wizard Intelligence:**
- Low score? Wizard suggests improvements: "Add organic certification to increase score to 100"
- High score? Wizard promotes: "Feature your project on Unidos homepage, attract more donors"
- Scores tracked over time: "Your vetting score increased from 75 to 95 this year! Show donors your progress."

### Feature 4: Task Marketplace for Refugees

**What It Does:**
- NGOs post tasks (data collection, surveys, distribution)
- Refugees claim tasks, complete them, get paid
- Wizard manages task flow, validates completion
- Payment via crypto to DAO treasury → distributed by PQI

**Wizard Prompts (NGO Side):**
```
Wizard: "You can post tasks for refugees to complete and earn income. What do you need done?"

User: "We need to survey 100 farmers about soil health."

Wizard: "Great. Let's create a task."

Task Details:
• Title: Soil Health Survey - 100 Farmers
• Description: Visit farmers, ask 10 questions, take 3 photos per farm
• Payment: $5 per survey = $500 total
• Requirements: Must have PQI score >31 (Producer tier or higher)
• Deadline: 2 weeks

Wizard: "I'll post this to the task marketplace. Refugees can claim it."

[Task posted]

Wizard: "3 refugees claimed tasks (30 surveys each). Tracking progress..."

Day 3: "Refugee #1 (María, PQI 75) completed 10 surveys. Review quality?"
  → User reviews: Photos clear ✅, data accurate ✅
  → Wizard: "Approved. $50 paid to María's wallet. Her PQI score +2 for quality work."

Day 7: "Refugee #2 (James, PQI 45) submitted 5 surveys but data looks incomplete."
  → User reviews: Missing photos, incomplete answers
  → Wizard: "Reject? Or give James another chance?"
  → User: "Give feedback, let him redo"
  → Wizard sends to James: "3 photos required per farm. Please revisit these 5 farms."

Day 14: "All 100 surveys complete! Total paid: $500. Quality score: 92%."

Wizard: "Survey data compiled here: [download CSV]. Use this for your next impact report."
```

**Wizard Prompts (Refugee Side):**
```
Wizard: "New task available: Soil Health Survey. Pay: $5 per survey. You're eligible (PQI 75)."

Refugee María: "I'll take 30 surveys"

Wizard: "Task claimed. Here's the survey template and farmer locations. Submit each survey as you complete it."

[María completes 10 surveys, uploads photos + data]

Wizard: "10 surveys submitted. NGO is reviewing... Approved! $50 sent to your wallet. Great work!"

Wizard: "Your PQI score increased: 75 → 77 (+2 for quality work). You've unlocked: Master Producer tier!"

Wizard: "New tasks available at Master tier: Lead farmer training ($20/session). Interested?"
```

**Wizard Task Management:**
- Detects quality issues (missing data, poor photos) → flags for review
- Tracks completion rates (María 100% on-time, James 60% → adjust future task assignments)
- Learns: High-PQI workers deliver better quality → prioritize them for complex tasks
- Suggests: "María is your top performer. Offer her a permanent role as Data Coordinator?"

---

## Part VI: Technical Implementation (Simplified)

### Stack (Lightweight, Refugee-Accessible)

**Not:** Complex smart contracts, expensive gas fees
**Yes:** Simple tools, low-cost, mobile-friendly

| Component | Tool | Why |
|-----------|------|-----|
| **Wizard Interface** | Telegram bot | Refugees already use Telegram, no app install needed |
| **State Management** | Redis (fallback: in-memory) | Fast, cheap, handles offline gracefully |
| **Treasury** | Gnosis Safe on Polygon/Celo | Multi-sig security, low gas fees |
| **Governance** | Snapshot (off-chain voting) | Gasless, accessible on mobile |
| **Task Marketplace** | Google Forms → Airtable → Zapier | No-code, NGO leader can manage without developer |
| **Payment** | Mobile money (M-Pesa) + crypto option | Refugees prefer mobile money, crypto for transparency |
| **Impact Dashboard** | Google Data Studio (free) | Pulls from Airtable, auto-updates, shareable with donors |

### Wizard Bot Commands (Telegram)

```
/start_campaign → Launch crowdfunding campaign wizard
/setup_donations → Configure donation infrastructure
/vet_impact → Calculate vetting score + generate report
/post_task → Create task for refugees to complete
/check_project → See project status (budget, timeline, blockers)
/send_update → Draft donor update email
/help → Show all commands
```

### Wizard Automation (No Manual Work)

**Auto-actions:**
- Donation received → Send thank-you email, update dashboard
- Milestone reached → Notify donors, release funds
- Campaign stalling → Send "No donations in 3 days" alert to NGO leader
- Impact data updated → Refresh vetting score, notify high-score projects
- Task completed → Review quality, pay refugee, update PQI

**Human-in-loop for:**
- Campaign content review (wizard drafts, human approves)
- Task quality disputes (wizard flags, human decides)
- Large withdrawals (>$1,000 from treasury → multi-sig approval)
- Vetting score appeals ("My score should be higher" → human reviews)

---

## Part VII: Revenue Model (How Unidos Earns from Wizard)

### Freemium Tiers

| Tier | Price | Features | Target User |
|------|-------|----------|-------------|
| **Free** | $0/month | Setup donations, 1 campaign/year, basic impact report | Small refugee-led orgs |
| **Starter** | $25/month | 3 campaigns/year, task marketplace (10 tasks/month), vetting score | Growing NGOs (Unidos current stage) |
| **Growth** | $100/month | Unlimited campaigns, task marketplace (100 tasks/month), white-label | Established NGOs, multi-settlement |
| **Enterprise** | Custom | API access, custom integrations, dedicated support | Large NGOs (UNHCR, IRC) |

### Transaction Fees (Optional)

- **Donation processing:** 0% (all fees passed to donor or covered by payment processor)
- **Campaign success fee:** 3% of funds raised (only if campaign succeeds)
- **Task marketplace fee:** 5% of task payments (NGO pays $5, refugee gets $4.75, Unidos gets $0.25)

**Why low fees?**
- Refugee-led orgs have tight budgets
- Volume model: Better to serve 1,000 NGOs at $25/mo than 10 at $250/mo
- Impact > profit (but sustainability matters)

### Network Effects

**More NGOs using Wizard:**
→ More refugees earning via task marketplace
→ More impact data aggregated
→ Better vetting benchmarks ("Your score vs. 500 other NGOs")
→ More donors trust Wizard-vetted projects
→ More NGOs join (flywheel)

**Cross-sell opportunities:**
- NGO using Wizard → also buys biochar from Unidos (B2B customer)
- Refugee completing tasks → earns income → trains in mushroom cultivation (workforce pipeline)
- Donor funding campaign → sees B2B model → invests in Unidos expansion (capital partner)

---

## Part VIII: Differentiation (Why Wizard for NGOs vs Existing Tools)

### Vs. Traditional Donation Platforms (GoFundMe, GlobalGiving)

| Feature | Traditional Platforms | Unidos Wizard |
|---------|----------------------|---------------|
| **Transparency** | Opaque (where does money go?) | On-chain treasury (every dollar tracked) |
| **Impact Vetting** | Self-reported (trust me bro) | PQI-scored (verified data) |
| **Fees** | 5-8% platform fees | 3% success fee (lower) |
| **Setup Complexity** | Manual, technical | Wizard guides step-by-step |
| **Task Marketplace** | None | Built-in (refugees earn immediately) |
| **DAO Governance** | None | Members vote on fund allocation |

### Vs. NGO Management Software (Salesforce, Kindful)

| Feature | Enterprise Software | Unidos Wizard |
|---------|-------------------|---------------|
| **Price** | $500-5,000/month | $25-100/month |
| **Complexity** | Requires training, consultants | Wizard onboarding (no training needed) |
| **Crypto Support** | None | Native (multi-sig wallets, on-chain tracking) |
| **Refugee Focus** | Generic | Built for refugee context (mobile money, offline, low bandwidth) |
| **Impact Vetting** | Manual reports | Auto-calculated vetting score |

### Vs. Blockchain-for-Good Platforms (GiveDirectly, Alice)

| Feature | Blockchain Platforms | Unidos Wizard |
|---------|---------------------|---------------|
| **Target User** | Large NGOs, donors | Small refugee-led orgs |
| **Usability** | Technical, web3-native | Telegram bot (no wallet needed to start) |
| **Cost** | Ethereum gas fees (high) | Polygon/Celo (pennies per transaction) |
| **Task Marketplace** | None | Built-in (refugees earn + NGO gets work done) |
| **Integration** | Standalone | Connects to Unidos B2B production (full ecosystem) |

**Unidos Wizard Unique Value:**
> "The only platform designed BY refugees FOR refugee-led NGOs, combining donation infrastructure + crowdfunding + impact vetting + task marketplace + DAO governance in one Telegram bot - all on low-cost blockchain with mobile money support."

---

## Part IX: Go-to-Market (Who Uses This First?)

### Phase 1: Unidos Internal (Validate Product)

**Users:** Paulinho, Mariam, Unidos team
**Timeline:** 3 months
**Goals:**
- Use Wizard to manage Unidos' 5 projects
- Launch 1 crowdfunding campaign (biochar equipment)
- Post 10 tasks to task marketplace (refugee workers complete them)
- Generate 1 impact report (vetting score for donors)

**Success Metrics:**
- Campaign raises $5,000+ (50% of equipment subsidy gap)
- 10 tasks completed with 90%+ quality score
- Vetting score: 85+ (proves system works)
- NGO leader time saved: 10 hours/week (Wizard automates admin)

### Phase 2: Nakivale NGOs (Local Network)

**Users:** Other refugee-led orgs in Nakivale
- KBTN (seed bank, community gardens)
- Go-Green (mushroom cultivation)
- YICE Uganda (kitchen gardens)
- Minak Women (women's empowerment)

**Timeline:** Months 4-9
**Offer:** Free tier for first 6 months, then $25/month
**Goals:**
- 5 Nakivale NGOs using Wizard
- 20 crowdfunding campaigns launched
- 100 tasks posted (refugees earning $5,000 total)
- Aggregate vetting data (benchmark scores across orgs)

**Growth Loop:**
- Refugees complete tasks for multiple NGOs → earn more income
- NGOs see each other's campaigns → learn best practices
- Donors fund multiple Wizard-vetted projects → trust grows
- UNHCR/OPM notice → endorse Wizard for settlement-wide use

### Phase 3: Uganda Refugee Settlements (National Scale)

**Users:** NGOs in Rwamwanja, Kyangwali, Bidibidi settlements
**Timeline:** Months 10-18
**Partners:**
- Rwamwanja Rural Foundation (Lush Prize winner, same as Unidos)
- UNHCR Refugee Innovation Fund grantees
- Re-Alliance network orgs

**Goals:**
- 50 NGOs using Wizard across Uganda
- $500,000 raised via Wizard campaigns
- 1,000 refugees earning via task marketplace
- Vetting score benchmark: "Top 10% of refugee-led NGOs use Wizard"

**Revenue:** 50 NGOs × $50/month avg = $2,500/month recurring

### Phase 4: Africa-Wide (Regional Expansion)

**Users:** Refugee settlements in Kenya (Kakuma, Dadaab), Rwanda (Kigeme), Malawi (Dzaleka)
**Timeline:** Months 19-36
**Channels:**
- UNHCR Innovation Service (Unidos is Refugee Innovation Fund alum)
- ICRC, IRC, NRC partnerships (they fund local NGOs)
- Fair trade networks (WFTO, Fairtrade International)

**Goals:**
- 500 NGOs using Wizard across Africa
- $5M raised via Wizard campaigns
- 10,000 refugees earning via task marketplace
- Wizard = standard for refugee-led NGO management

**Revenue:** 500 NGOs × $75/month avg = $37,500/month recurring

---

## Part X: Integration with Unidos Existing Model

### How Wizard Fits with B2B Production

**Wizard supports B2B by:**
1. **Fundraising for equipment:** Crowdfunding campaigns raise subsidy gap ($74k needed)
2. **Task marketplace generates workforce:** Refugees earn → join production programs (mushroom, biochar)
3. **Impact vetting attracts B2B customers:** "95 vetting score" = quality assurance for buyers
4. **Donor conversion:** Campaign donors become B2B customers ("I funded the kilns, now I buy the biochar")

**Example:**
```
Donor gives $1,000 to biochar campaign
  → Equipment purchased
  → Production scales (6 tons → 40 tons)
  → Donor sees impact report (100 tons CO2e sequestered)
  → Donor works for corporate ESG team
  → Donor introduces Unidos to corporate as B2B supplier
  → $30,000 annual biochar contract signed
  → ROI for donor: $1,000 → $30,000 value created
```

### How Wizard Fits with DAO Governance

**Wizard = DAO management interface**

- Campaign proposals → DAO votes (approve/reject)
- Treasury withdrawals → multi-sig (Wizard triggers signing)
- Vetting scores → DAO members earn badges (high PQI = governance role)
- Task marketplace → DAO members get priority (insiders earn first)

**Wizard makes DAO accessible:**
- No crypto knowledge needed (Telegram bot handles complexity)
- Mobile-friendly (refugees don't have laptops)
- Offline-capable (state syncs when internet available)
- Multi-language (Swahili, French, English for Nakivale)

---

## Conclusion: Wizard Value Proposition

**For NGO Leaders (like Paulinho):**
> "Manage your entire organization from Telegram: accept donations, launch campaigns, prove impact, hire refugee workers - all transparent on blockchain but simple as a chat bot."

**For Refugees:**
> "Complete tasks, earn money, build your PQI score, unlock better opportunities - all from your phone."

**For Donors:**
> "See exactly where your money goes, verify impact on-chain, fund projects with proven vetting scores - transparency you can trust."

**For Unidos:**
> "Wizard is our infrastructure play. We're not just selling biochar - we're powering the entire refugee-led NGO ecosystem. Revenue from SaaS + task fees + donor conversion to B2B customers."

---

## Next Steps (90-Day Launch Plan)

**Month 1: Build Wizard MVP**
- [ ] Set up Telegram bot infrastructure
- [ ] Build donation setup wizard (3 flows: crypto, fiat, mobile money)
- [ ] Build campaign wizard (5-step flow)
- [ ] Build vetting score calculator (pull PQI data)
- [ ] Deploy to Unidos team (internal testing)

**Month 2: Test with Unidos Projects**
- [ ] Launch biochar equipment campaign ($10k goal)
- [ ] Post 5 tasks to marketplace (soil surveys, photo collection)
- [ ] Generate Unidos vetting report (share with existing donors)
- [ ] Collect feedback from team (what's confusing? what's slow?)
- [ ] Iterate on wizard flows

**Month 3: Invite Nakivale NGOs**
- [ ] Reach out to KBTN, Go-Green, YICE, Minak
- [ ] Offer free access for 6 months
- [ ] Onboard 3-5 orgs
- [ ] Track: campaigns launched, tasks completed, donations raised
- [ ] Case study: "How Nakivale NGOs raised $XX,XXX with Wizard"

**Success Criteria:**
- ✅ Unidos campaign raises $5,000+
- ✅ 3 Nakivale NGOs using Wizard
- ✅ 50 tasks completed via marketplace
- ✅ Vetting score calculation working (85+ for Unidos)
- ✅ NGO leader testimonial: "Wizard saved me 10 hours/week"

This is the **third pillar** of Unidos' business model: **SaaS for NGOs**, built on Bonzi wizard principles.
