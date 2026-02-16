# Unidos Refugee Data Marketplace: Survey-as-a-Service for Global NGOs

**Date**: February 16, 2026
**Purpose**: Design membership onboarding + data contribution platform + NGO survey marketplace
**Innovation**: First ethical refugee voice marketplace (refugees get paid directly for survey participation)
**Status**: 🚀 Market Opportunity Research

---

## 🎯 The Market Opportunity

### **Problem**: NGOs Pay Consultants, Not Refugees

**Current NGO Research Spending**:
- UNHCR research budget: **$50M+/year** (consultants, field assessments, impact evaluations)
- IRC M&E (Monitoring & Evaluation): **$15M/year** (mostly external consultants)
- Oxfam research: **$8M/year** (academics, think tanks)
- World Bank refugee studies: **$100M+/year** (contracted researchers)

**Where Money Goes**:
- 70% to **Western consultants** ($500-1,500/day rates)
- 20% to **local NGO partners** (admin overhead)
- 10% to **refugee respondents** (maybe $5-10 for 2-hour interview)

**The Absurdity**:
```
UNHCR wants to know: "Why don't refugees use our health clinics?"
    ↓
Hires consultant: $50,000 for 3-month study
    ↓
Consultant interviews 100 refugees ($10 each = $1,000 paid to refugees)
    ↓
Consultant writes 200-page report: $49,000 goes to consultant
    ↓
UNHCR reads report, implements recommendations (or files it away)
```

**Unidos Alternative**:
```
UNHCR posts question on Unidos Survey Marketplace: "Why don't you use health clinics?"
    ↓
500 refugees respond in 24 hours (earn 5 UNIDOS tokens each = $5)
    ↓
AI analyzes responses, generates insights: "Clinic hours conflict with work, no childcare available, staff speak only English"
    ↓
Cost to UNHCR: $2,500 (500 × $5) + $500 platform fee = $3,000 total
    ↓
Savings: $47,000 (94% cheaper, 99% faster, 5x more respondents)
```

**Total Addressable Market**:
- Global NGO research spending: **$500M+/year**
- If Unidos captures 1%: **$5M/year revenue**
- If Unidos captures 10%: **$50M/year revenue**
- Refugees receive 80% of survey fees: **$4M-40M/year distributed directly to refugee pockets**

---

## 📊 Part 1: Membership Onboarding (How People Become Members)

### **Tier 1: Telegram-First Onboarding** (70% of users, feature phones)

**Step-by-Step Journey**:

```
Step 1: Discovery (How refugees hear about Unidos)
├── Word of mouth (existing member refers friend)
├── QR code poster (at mushroom lab, Women's Circle, training sites)
├── SMS invite (Unidos sends bulk SMS: "Join Unidos Bot: t.me/UnidosBot")
└── Community meeting (Paulinho announces at farmer gathering)
    ↓
Step 2: Join Telegram Bot
├── Scan QR code or click t.me/UnidosBot link
├── Telegram opens (or prompts install if not installed)
├── Click "Start" button
└── Bot greets: "👋 Karibu! Welcome to Unidos. I'm your farming assistant. Let's get you set up."
    ↓
Step 3: Phone Verification (Anti-Sybil)
├── Bot: "Please verify your phone number (required to prevent duplicate accounts)"
├── User clicks "Share Phone Number" button (Telegram native)
├── Bot receives: +256781234567 (Uganda mobile number)
└── Bot checks: Is this number already registered? (If yes, reject. If no, continue.)
    ↓
Step 4: Community Vouching (Trust Layer)
├── Bot: "To join Unidos, 2 existing members must vouch for you. Do you know anyone in Unidos?"
├── User: "Yes, Furaha and Paulinho"
├── Bot sends vouch requests to Furaha and Paulinho
├── Furaha/Paulinho click "Yes, I vouch for this person"
└── Bot: "✅ Verified! You're now a Seed member (Tier 1)."
    ↓
Step 5: Consent to Data Sharing (Ethical Onboarding)
├── Bot: "Unidos funds your transaction fees by selling anonymized survey data to NGOs like UNHCR."
├── "Example: 'Farmers who use biochar earn 20% more.' (No names shared.)"
├── "You can earn 1-10 UNIDOS tokens per survey (5-30 minutes)."
├── "Do you consent? [Yes] [No] [Learn More]"
├── User: "Yes"
└── Bot: "✅ Consent recorded. You can revoke anytime: /data-sharing off"
    ↓
Step 6: Profile Setup (5 Questions)
├── 1. "What is your primary livelihood? [Farming] [Small business] [Daily labor] [Student] [Other]"
├── 2. "How many people in your household? [1-2] [3-4] [5-6] [7+]"
├── 3. "What languages do you speak? [Swahili] [French] [English] [Kinyarwanda] [Other]"
├── 4. "What training have you completed? [Mushroom] [Permaculture] [Biochar] [Women's Circle] [None yet]"
└── 5. "What are you most interested in? [Better yields] [More income] [New skills] [Community support]"
    ↓
Step 7: First Task (Earn First Token)
├── Bot: "Complete your first task to earn 1 UNIDOS token!"
├── Task: "Tell us about your farm: What crops do you grow? What challenges do you face?"
├── User types: "I grow beans, cassava, and mushrooms. Challenge: No water during dry season."
├── Bot: "✅ Thank you! +1 UNIDOS earned. Balance: 1.00 UNIDOS"
└── Bot: "You're all set! Explore: /help for commands, /surveys for paid surveys, /marketplace to spend tokens"
```

**Onboarding Time**: 5-10 minutes (vs 2-3 days for traditional NGO registration)

**Conversion Rate Target**: 80% (refugees who start onboarding complete it)

---

### **Tier 2: Smartphone Wallet Onboarding** (20% of users)

**When**: After earning 10 UNIDOS tokens (proves commitment, reduces drop-off)

**Wizard Flow**: "Setup Your Wallet"

```
Step 1: Bot detects balance ≥10 UNIDOS
├── Bot: "🎉 You've earned 10 tokens! Want to unlock advanced features? (DAO voting, Euler pool distributions)"
├── User: "Yes"
└── Bot: "Great! Let's set up your wallet. This takes 5 minutes. Ready? [Yes] [Later]"
    ↓
Step 2: Choose Wallet Type
├── Option A: Coinbase Wallet (Recommended — phone number recovery, easiest)
├── Option B: Celo Valora Wallet (Phone number wallet, lowest fees)
├── Option C: MetaMask (Advanced — full DeFi access, requires seed phrase)
└── User selects: "Coinbase Wallet"
    ↓
Step 3: Guided Installation
├── Bot: "1. Download Coinbase Wallet app: [Android] [iOS]"
├── Bot: "2. Open app, create account with phone number +256781234567"
├── Bot: "3. Set 6-digit PIN (like mobile money)"
├── Bot: "4. Copy your wallet address and send it here"
└── User sends: 0xABC123...
    ↓
Step 4: Link Wallet to Telegram
├── Bot: "✅ Wallet linked! Sending your 10 UNIDOS tokens now..."
├── Smart contract: Transfer 10 UNIDOS from escrow → user's wallet
├── User sees balance in Coinbase Wallet app
└── Bot: "🎉 You now have DAO voting power! Next proposal: Equipment purchase (vote opens Monday)"
```

**Wallet Adoption Rate Target**: 30% of Telegram users (150 of 500 pilot users)

---

### **Tier 3: Full DAO Member** (10% of users, high contributors)

**Criteria**: Cooperation score ≥101 (Helper tier) OR completed 20+ surveys

**Benefits**:
- DAO voting rights (Snapshot governance)
- Euler pool distributions (monthly earnings)
- Solidarity loan access (borrow from community fund)
- Training priority (first access to new courses)
- Ambassador status (can vouch for new members, earn referral bonus)

**Onboarding**: Automatic (bot detects eligibility, sends congratulations + instructions)

---

## 💬 Part 2: Data Contribution Mechanisms (How Members Provide Data)

### **Method 1: Paid Surveys** (Marketplace Model)

**How It Works**:

```
NGO (e.g., UNHCR) posts survey to Unidos Survey Marketplace
    ↓
Unidos bot broadcasts to eligible members (filtered by demographics)
    ↓
Refugees complete survey in Telegram (5-30 minutes)
    ↓
Bot validates responses (AI detects low-effort answers, copy-paste)
    ↓
Refugee earns UNIDOS tokens (1-10 tokens depending on survey length)
    ↓
NGO receives anonymized results (aggregate insights, no individual data)
```

**Survey Types**:

| Survey Type | Length | Payment | Frequency | Example |
|-------------|--------|---------|-----------|---------|
| **Quick poll** | 1 question, 1 min | 0.5 UNIDOS ($0.50) | Daily | "Rate UNHCR food distribution 1-5 stars" |
| **Short survey** | 5 questions, 5 min | 2 UNIDOS ($2) | Weekly | "What barriers prevent you from accessing healthcare?" |
| **Long survey** | 20 questions, 30 min | 10 UNIDOS ($10) | Monthly | "Livelihood activities, income sources, aspirations" |
| **Focus group** | 60 min discussion | 20 UNIDOS ($20) | Quarterly | "Design new UNHCR shelter prototype (video call)" |

**Survey Delivery** (Telegram-Native):

```
Bot: "📋 New survey available! Topic: Water access in Nakivale"
Bot: "Payment: 5 UNIDOS ($5) • Time: 10 minutes • Expires: Feb 20"
Bot: "[Start Survey] [Remind Me Later] [Not Interested]"
    ↓
User clicks "Start Survey"
    ↓
Bot: "Question 1 of 8: How many liters of water does your household get per day?"
Bot: "[0-5L] [6-10L] [11-20L] [20L+]"
    ↓
User selects: "6-10L"
    ↓
Bot: "Question 2 of 8: What is your primary water source?"
Bot: "[Borehole] [Rainwater] [Delivery truck] [River/stream] [Other]"
    ↓
... continues through 8 questions ...
    ↓
Bot: "✅ Survey complete! +5 UNIDOS earned. Balance: 18.50 UNIDOS"
Bot: "Thank you! Your feedback helps UNHCR improve water services."
```

**Quality Control**:
- **AI validation**: Detects nonsense answers ("ajfklajsdlfkj"), yes-saying (all "agree"), speeders (completes 10-min survey in 1 min)
- **Attention checks**: Random question like "Select 'Somewhat Agree' to show you're reading"
- **Duplicate detection**: Same refugee can't take same survey twice (phone number linked)
- **Low-quality flagging**: If refugee fails 3 quality checks, future surveys locked until manual review

---

### **Method 2: Behavioral Data** (Passive Collection)

**What Gets Collected** (With Consent):

| Data Type | Example | Value to Buyers | Payment |
|-----------|---------|----------------|---------|
| **HEROES patterns** | "User helps 10 farmers/month (Helper behavior)" | AI training data, cooperation research | $0.50/month |
| **Farming practices** | "User reports: intercropping beans + maize, uses biochar, 80% yield increase" | Agricultural research (CGIAR, FAO) | $1.00/month |
| **Income sources** | "User earns from: mushroom sales (60%), casual labor (30%), remittances (10%)" | Economic research (World Bank) | $0.80/month |
| **Training effectiveness** | "User completed 2-week permaculture → PQI score 85 → income +40%" | Education research (IRC, NRC) | $0.30/month |
| **Carbon sequestration** | "User produced 50 kg biochar → sequesters 150 kg CO2e" | Carbon credit verification (Microsoft Climate) | $2.00/month |
| **Social graph** | "User vouched for 5 new members, all became active contributors" | Network analysis (DAO governance research) | $0.20/month |

**Opt-In/Opt-Out**:
- Default: Opt-in (during onboarding consent)
- Revoke: `/data-sharing off` (stops future collection, past contributions honored)
- Selective: `/data-sharing exclude:income` (share farming data but not income data)

**Transparency Dashboard**:
```
User: /my-data
Bot: "📊 Your Data Contributions (Last 30 Days)"
Bot: "• HEROES patterns: $0.50 earned"
Bot: "• Farming practices: $1.00 earned"
Bot: "• Survey responses: $15.00 earned (3 surveys)"
Bot: "• Total this month: $16.50"
Bot: ""
Bot: "Data buyers: UNHCR (surveys), CGIAR (farming insights), Microsoft Climate (carbon data)"
Bot: "Export your data: /export-my-data"
Bot: "Stop data sharing: /data-sharing off"
```

---

### **Method 3: Community Help** (Social Contribution)

**How It Works**: HEROES AI detects helpful behavior in Telegram community chat

**Actions That Earn Points**:

| Action | HEROES Type | Cooperation Points | Example |
|--------|-------------|-------------------|---------|
| **Answer farming question** | Helper | +5 | "To prevent mushroom contamination, sterilize bags at 100°C for 2 hours" |
| **Write training guide** | Educator | +30 | Creates PDF: "How to Build Kon-Tiki Biochar Kiln (Step-by-Step)" |
| **Report problem** | Reflector | +3 | "Mushroom lab door lock is broken, cannot secure equipment" |
| **Organize group training** | Organizer | +20 | "10 farmers meeting Saturday 2pm at Women's Circle to learn vermicomposting" |
| **Welcome newcomer** | Engager | +5 | "Welcome to Unidos, Furaha! If you have questions about mushrooms, ask me anytime" |
| **Celebrate win** | Supporter | +3 | "Congratulations Maria on your first mushroom harvest! 🎉" |

**Conversion to Income**:
- Cooperation points → Tier upgrades → Euler pool distributions
- Example: Earn 100 points → Reach Helper tier → Qualify for monthly Euler pool (avg $10-30/month)

---

### **Method 4: Referral System** (Network Growth)

**How It Works**:

```
Existing member invites friend to Unidos
    ↓
Friend joins via referral link (t.me/UnidosBot?start=ref_FURAHA123)
    ↓
Friend completes onboarding + earns first 10 tokens
    ↓
Referrer earns bonus: 5 UNIDOS ($5)
    ↓
If referred friend becomes active (20+ tokens earned), referrer earns another 10 UNIDOS ($10)
```

**Referral Limits**: Max 10 referrals/month (prevents spam, ensures quality)

**Network Effect**:
- 500 members × 2 referrals each = 1,000 new members
- 1,000 members × 2 referrals each = 2,000 new members
- Exponential growth (3x every 3 months if 2 referrals/member avg)

---

## 🌍 Part 3: NGO Survey Marketplace (Bridge Humanitarian Sector)

### **The Vision**: **"SurveyMonkey for Refugees, Paid by NGOs"**

**Product**: Unidos Survey Marketplace Platform

**How It Works**:

```
┌──────────────────────────────────────────────────────────────┐
│                    UNIDOS SURVEY MARKETPLACE                 │
│              (web.unidos.ug/survey-marketplace)              │
└──────────────────────────────────────────────────────────────┘
         ↓                                    ↓
    NGO SIDE                            REFUGEE SIDE
         ↓                                    ↓
1. NGO creates account              1. Refugee joins Telegram bot
2. Designs survey (web UI)          2. Consents to data sharing
3. Sets budget ($500-10K)           3. Receives survey notifications
4. Targets demographics             4. Completes surveys (earns UNIDOS)
5. Launches campaign                5. Spends tokens internally or cashes out
6. Receives results (24-48hrs)      6. Provides feedback on survey quality
```

---

### **NGO Dashboard Features**

**Survey Builder** (No-Code Interface):

```
Step 1: Survey Details
├── Title: "Water Access Assessment - Nakivale Settlement"
├── Objective: "Understand barriers to clean water access"
├── Budget: $2,500 (500 refugees × $5 each)
└── Timeline: 7 days
    ↓
Step 2: Target Audience (Filters)
├── Location: Nakivale Settlement, Uganda
├── Demographics: All ages, all genders
├── Livelihood: Farmers only (exclude students, daily laborers)
├── Language: Swahili, English, French
└── Sample size: 500 respondents
    ↓
Step 3: Questions (Drag-and-Drop)
├── Q1: Multiple choice - "What is your primary water source?"
├── Q2: Scale 1-5 - "Rate water quality"
├── Q3: Open text - "What prevents you from accessing clean water?"
├── Q4: Yes/No - "Would you pay for water delivery service?"
└── Q5: Multiple choice - "How much would you pay per 20L jerry can?"
    ↓
Step 4: Quality Controls
├── Minimum time: 5 minutes (reject speeders)
├── Attention check: Insert question "Select 'Other' to continue"
├── Duplicate prevention: One response per refugee
└── AI validation: Detect nonsense answers
    ↓
Step 5: Launch
├── Payment: $2,500 USDC deposited to smart contract escrow
├── Unidos distributes surveys to 500 eligible refugees
├── Results available: 48 hours after 500 responses collected
```

---

### **Pricing Model** (For NGOs)

| Package | Survey Length | Respondents | Payment/Refugee | Platform Fee (20%) | Total Cost |
|---------|--------------|-------------|-----------------|-------------------|------------|
| **Quick Poll** | 1 question, 1 min | 1,000 | $0.50 | $100 | **$600** |
| **Short Survey** | 5 questions, 5 min | 500 | $2 | $200 | **$1,200** |
| **Standard Survey** | 15 questions, 15 min | 500 | $5 | $500 | **$3,000** |
| **Long Survey** | 30 questions, 30 min | 200 | $10 | $400 | **$2,400** |
| **Focus Group** | 60 min video call | 20 | $20 | $80 | **$480** |

**Cost Comparison** (Traditional vs Unidos):

| Method | Sample Size | Cost | Timeline | Quality |
|--------|-------------|------|----------|---------|
| **Traditional consultant** | 100 refugees | $50,000 | 3 months | High (but biased - consultant picks respondents) |
| **Phone survey (external firm)** | 500 refugees | $15,000 | 1 month | Medium (self-selection bias) |
| **Unidos Survey Marketplace** | 500 refugees | $3,000 | 2 days | High (representative, incentivized, verified) |

**Savings**: 80-94% cheaper, 95% faster, 5x more respondents

---

### **Revenue Split** (How Money Flows)

**Example: $3,000 Standard Survey**

```
NGO pays: $3,000 USDC (deposited to smart contract escrow)
    ↓
Survey completed by 500 refugees
    ↓
Distribution:
├── 80% to refugees: $2,400 (500 refugees × $4.80 each)
├── 15% to Unidos operations: $450 (bot maintenance, support, fraud prevention)
└── 5% to data vault (ETH collateral): $150 (backs UNIDOS tokens)
```

**Refugee Earnings Breakdown**:
- Survey payment: $5.00
- Platform fee (deducted): -$1.00 (20%)
- Net earnings: **$4.00 received as UNIDOS tokens**

**Why 80% Goes to Refugees** (Not 50-50):
- Refugees generate the value (their insights, their time)
- Unidos is facilitator, not owner of data
- Ethical imperative: Maximize benefit to vulnerable populations
- Competitive advantage: Higher payouts attract more refugees, better data quality

---

### **Market Sizing: How Big Is This Opportunity?**

#### **Total Addressable Market** (TAM)

**NGO Research Spending (Refugee Sector)**:
| Buyer Type | Annual Research Budget | % Relevant to Unidos | TAM |
|------------|------------------------|---------------------|-----|
| **UN Agencies** (UNHCR, WFP, UNICEF) | $200M | 20% (refugee-specific) | **$40M** |
| **International NGOs** (IRC, NRC, Oxfam, Save the Children) | $150M | 30% (refugees = core focus) | **$45M** |
| **Foundations** (Gates, Ford, Mastercard) | $80M | 10% (refugee subset) | **$8M** |
| **Academics** (universities, research institutes) | $50M | 40% (refugee studies popular) | **$20M** |
| **Governments** (USAID, DFID, EU) | $100M | 15% (refugee programs) | **$15M** |
| **TOTAL** | $580M | Average 22% | **$128M TAM** |

#### **Serviceable Addressable Market** (SAM)

**Focus**: NGOs working in East Africa (Uganda, Kenya, Rwanda, Tanzania)

**Narrowed TAM**:
- $128M TAM × 25% (East Africa share of global refugee research) = **$32M SAM**

#### **Serviceable Obtainable Market** (SOM)

**Year 1 Target** (Conservative):
- 10 NGO clients (UNHCR, IRC, NRC, Oxfam, Save the Children, 5 others)
- 5 surveys/NGO/year = 50 surveys
- Avg survey cost: $3,000
- **Year 1 Revenue: $150,000** (0.5% of SAM)

**Year 3 Target** (Growth):
- 50 NGO clients
- 10 surveys/NGO/year = 500 surveys
- Avg survey cost: $4,000 (larger surveys)
- **Year 3 Revenue: $2,000,000** (6% of SAM)

**Year 5 Target** (Market Leader):
- 200 NGO clients (expand beyond East Africa)
- 15 surveys/NGO/year = 3,000 surveys
- Avg survey cost: $5,000
- **Year 5 Revenue: $15,000,000** (47% of SAM, 12% of TAM)

**If This Happens**:
- $15M revenue × 80% to refugees = **$12M/year paid directly to refugees**
- Assuming 10,000 active refugee respondents: **$1,200/year per refugee** (4x average refugee income)

---

## 🚀 Part 4: Go-to-Market Strategy (How to Bridge NGOs + Refugees)

### **Phase 1: Proof of Concept** (Q2 2026, 3 months)

**Goal**: Prove Unidos can deliver high-quality refugee insights faster and cheaper than consultants

**Pilot Partners** (Target 3 NGOs):
1. **UNHCR Innovation Service** (already know Unidos via Gene Dewey Award)
2. **IRC Uganda** (operates in Nakivale, relationship exists)
3. **NRC (Norwegian Refugee Council)** (education focus, needs beneficiary feedback)

**Pilot Offer**: **Free first survey** (Unidos absorbs cost, pays refugees from grant funds)

**Pilot Survey Examples**:
- UNHCR: "Why don't refugees attend health clinics?" (500 respondents, $2,500 value)
- IRC: "What barriers prevent children from completing secondary school?" (300 respondents, $1,500 value)
- NRC: "Rank preferred livelihood training topics" (200 respondents, $1,000 value)

**Success Metrics**:
- 80%+ NGO satisfaction ("Would use again")
- 48-hour delivery (vs 3-month consultant timeline)
- 500+ refugee responses per survey (vs 100 consultant interviews)
- <5% low-quality responses (AI validation working)

**Revenue**: $0 (free pilot), but builds case studies for sales

---

### **Phase 2: Revenue Activation** (Q3 2026, 3 months)

**Goal**: Convert pilot partners to paying customers + acquire 7 new NGO clients

**Pricing**: Standard packages (see pricing table above)

**Sales Strategy**:
- **Inbound**: Blog posts ("How UNHCR Got 500 Refugee Insights in 48 Hours for $3K"), case studies, webinars
- **Outbound**: LinkedIn outreach to M&E directors at 50 NGOs, email campaigns
- **Partnerships**: Integration with humanitarian platforms (ReliefWeb, Humanitarian Data Exchange)

**Target**: 10 paying NGO clients, 50 surveys, **$150K revenue**

**Refugee Impact**: $120K distributed to refugees (800 refugees × $150 avg earnings)

---

### **Phase 3: Scale** (Q4 2026 - 2027)

**Goal**: Expand beyond East Africa, productize platform, reach 50 NGO clients

**Geographic Expansion**:
- Year 1: Uganda (Nakivale, Rwamwanja, Kyangwali)
- Year 2: Kenya (Kakuma, Dadaab), Rwanda (Kigeme, Mahama)
- Year 3: Tanzania (Nyarugusu), Ethiopia (Gambella), South Sudan (Maban)
- Year 5: Global (any settlement with 1,000+ refugees)

**Product Development**:
- Self-service survey builder (NGOs create surveys without Unidos assistance)
- Mobile app for refugees (iOS/Android, not just Telegram)
- Real-time dashboards (NGOs see results as they come in)
- API access (integrate with NGO M&E systems)

**Partnerships**:
- **Kobo Toolbox** (humanitarian survey tool, 14,000+ NGO users) → Integration ("Distribute Kobo survey via Unidos")
- **UNHCR Innovation Service** → Co-branded "UNHCR Refugee Insights Platform powered by Unidos"
- **World Bank** → Refugee research partnership (academic credibility)

**Target**: 50 NGO clients, 500 surveys, **$2M revenue**

---

## 📊 Part 5: Impact Projections (Bridging Refugees + Humanitarian Sector)

### **Refugee Economic Impact**

**Year 1** (500 pilot refugees, Nakivale only):
- 50 surveys × 500 respondents avg = 25,000 survey responses
- 25,000 × $4 avg payment = **$100,000 paid to refugees**
- Per refugee: $100K ÷ 500 = **$200/year avg** (20% income boost)

**Year 3** (5,000 refugees, Uganda + Kenya):
- 500 surveys × 200 respondents avg = 100,000 responses
- 100,000 × $5 avg payment = **$500,000 paid to refugees**
- Per refugee: $500K ÷ 5,000 = **$100/year avg** (10% income boost)

**Year 5** (50,000 refugees, East Africa + beyond):
- 3,000 surveys × 300 respondents avg = 900,000 responses
- 900,000 × $5 avg payment = **$4,500,000 paid to refugees**
- Per refugee: $4.5M ÷ 50,000 = **$90/year avg** (9% income boost)

---

### **Humanitarian Sector Impact**

**Cost Savings for NGOs**:
- Year 1: 50 surveys × $47K saved per survey (vs consultant) = **$2.35M saved**
- Year 3: 500 surveys × $47K = **$23.5M saved**
- Year 5: 3,000 surveys × $47K = **$141M saved**

**Speed Improvement**:
- Consultant timeline: 3 months (90 days)
- Unidos timeline: 2 days (48 hours)
- **45x faster** (NGOs can iterate, test interventions, respond to crises in real-time)

**Data Quality Improvement**:
- Consultant sample: 100 respondents (self-selected, interviewer bias)
- Unidos sample: 500 respondents (representative, incentivized honesty, AI-validated)
- **5x larger samples**, **10x less bias** (blind collection, no interviewer leading questions)

---

### **Policy Influence**

**If Unidos Becomes "Source of Truth" for Refugee Voice**:

1. **UNHCR adopts Unidos Survey Marketplace** as official feedback mechanism (replaces expensive consultants)
2. **Refugee voices directly shape policy** (not filtered through Western consultants' interpretations)
3. **Real-time crisis response** (NGOs detect problems in 48 hours, not 3 months)
4. **Academic credibility** (World Bank, universities cite Unidos data in research papers)
5. **Donor transparency** (foundations require Unidos verification for grant recipients)

**Precedent**: **Ushahidi** (Kenyan crisis mapping platform) became **gold standard for humanitarian data** (used in Haiti earthquake 2010, Libya crisis 2011, COVID-19 response 2020). Unidos could be **"Ushahidi for refugee voice"**.

---

## 🎓 Competitive Analysis

### **Existing Survey Platforms**

| Platform | Refugee Focus? | Pays Respondents? | NGO Clients | Weakness |
|----------|---------------|-------------------|-------------|----------|
| **SurveyMonkey** | No (general purpose) | No (DIY model) | 20M+ users | Not humanitarian-specific, no refugee access |
| **Kobo Toolbox** | Yes (humanitarian) | No (NGO does own outreach) | 14,000 NGOs | Free but requires NGO staff time, no direct refugee payment |
| **Premise** | No (gig economy) | Yes ($0.10-$5/task) | 100+ enterprises | For-profit, extractive, not community-owned |
| **TaroWorks** (Salesforce) | Yes (NGO CRM) | No (M&E tool only) | 400 NGOs | Expensive ($50-200/user/month), no refugee voice |
| **SurveyCTO** | Yes (field research) | No (researcher pays) | 5,000 researchers | Academic focus, complex, not refugee-friendly |

**Unidos Unique Position**:
- ✅ **Only platform** refugee-owned, DAO-governed, community-first
- ✅ **Only platform** that pays refugees 80% of NGO fees (not extractive)
- ✅ **Only platform** with built-in identity (HEROES cooperation scoring, no fake responses)
- ✅ **Only platform** with internal currency (UNIDOS tokens, circular economy)

---

## 🔬 Open Questions & Research Needs

### **Question 1: Will NGOs Trust Refugee-Collected Data?**

**Concern**: "How do we know refugees aren't lying to get paid?"

**Mitigation**:
- AI validation (detects nonsense, yes-saying, speeders)
- Attention checks (random verification questions)
- Cooperation score gate (only Helper tier+ can take high-value surveys)
- Blockchain audit trail (every response timestamped, immutable)
- Academic partnership (World Bank co-validates 10% of surveys, publishes methodology)

**Pilot Test Needed**: Side-by-side comparison (same survey via consultant vs Unidos, compare results)

---

### **Question 2: Can Refugees Access Telegram on Feature Phones?**

**Reality Check**:
- Telegram requires 2G/3G data (works on feature phones with internet)
- Alternative: USSD survey delivery (dial *384*1# for menu-based surveys, 0 data needed)
- Pilot test: 50 feature phone users, measure completion rates (Telegram vs USSD)

---

### **Question 3: What if Refugees Collude** (Answer surveys together to game system)?

**Detection**:
- IP address clustering (10 responses from same device = suspicious)
- Timestamp analysis (10 surveys completed in 5 minutes from same location = suspicious)
- Answer similarity (identical open-text responses = copy-paste)
- EigenTrust graph (refugee A vouches for B, C, D who all give identical answers = ring behavior)

**Penalty**: Graduated sanctions (warning → suspension → permanent ban)

---

## 📋 Next Steps

**Immediate** (This Week):
- [ ] Validate market size (email 10 NGO M&E directors: "Would you pay for refugee survey platform?")
- [ ] Design membership onboarding flow (Telegram bot mockups)
- [ ] Draft pilot proposal for UNHCR Innovation Service (free first survey offer)

**Q2 2026**:
- [ ] Build Unidos Survey Marketplace MVP (web UI for NGO clients, Telegram bot for refugees)
- [ ] Recruit 500 pilot refugees (Nakivale farmers, existing Unidos network)
- [ ] Run 3 pilot surveys (UNHCR, IRC, NRC — free, case study generation)

**Q3 2026**:
- [ ] Launch paid product ($3,000 standard survey package)
- [ ] Acquire 10 paying NGO clients (50 surveys, $150K revenue)
- [ ] Distribute $120K to 800 refugees ($150 avg earnings)

**Q4 2026**:
- [ ] Expand to 2,000 refugees (Rwamwanja, Kyangwali settlements)
- [ ] 20 NGO clients, 200 surveys, $600K revenue
- [ ] Academic publication: "Ethical Refugee Data Marketplaces" (validate methodology)

---

*Last updated: February 16, 2026*
*Status: 🚀 Market Opportunity Research - Ready for Pilot*
*Next: NGO outreach (validate demand), build Survey Marketplace MVP*
