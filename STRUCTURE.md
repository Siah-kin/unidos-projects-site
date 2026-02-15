# Unidos Repository Structure & Organization

**Date**: February 2026
**Purpose**: Document clean modular structure matching Bonzi_v5 architecture

---

## 📁 Complete Folder Structure

```
/Unidos/
│
├── README.md                    # Main repository overview
├── STRUCTURE.md                 # This file (organization documentation)
├── CNAME                        # Custom domain (unidos.ug)
│
├── static/                      # ✅ Website (Public-Facing)
│   ├── index.html               # Homepage
│   ├── about.html               # About Unidos
│   ├── programs.html            # Programs overview
│   ├── stories.html             # Success stories
│   ├── donate.html              # Donation page
│   ├── contact.html             # Contact form
│   ├── diary.html               # Project diary
│   ├── css/                     # Stylesheets
│   │   ├── style.css
│   │   └── ...
│   ├── js/                      # JavaScript
│   │   ├── main.js
│   │   └── ...
│   ├── images/                  # Photos, graphics, assets
│   │   ├── hero-bg.jpg
│   │   ├── team/
│   │   ├── OKc/
│   │   └── ...
│   └── video_files/             # Video content
│       └── ...
│
├── stories/                     # ✅ Project Content Library
│   ├── README.md                # Content organization guide
│   ├── html/                    # Project web pages (9 pages)
│   │   ├── mushroom-project.html
│   │   ├── women-circle.html
│   │   ├── vermicomposting.html
│   │   ├── biochar.html
│   │   ├── arborloo-toilets.html
│   │   ├── gene-dewey-award.html
│   │   ├── permaculture-award.html
│   │   ├── permaculture-training.html (legacy)
│   │   └── women-empowerment.html (legacy)
│   ├── source-documents/        # Original reports (DOCX/PDF)
│   │   ├── Annual biochar report.docx
│   │   ├── Case Study_ Regenerate the soil Project (Regesoil).docx
│   │   ├── Compost Toilet Proposal for Nakivale Refugee Settlement.docx
│   │   ├── Unidos -End of project report 2024 Refugee Innovation Fund.docx
│   │   ├── Website Mushroom project contents.docx
│   │   ├── Website Women Circle Project contents.docx
│   │   ├── UnidosProjects -End of project report 2024 RLo.pdf
│   │   ├── Defiants Social Impact Initiative.pdf
│   │   └── Unidos_Social_Innovation_Center_New_Website_Copy.pdf
│   └── data/                    # 🔒 Conversation logs (Private)
│       ├── Founder-unidos_chat.json (2.8 MB)
│       └── diary_unidos2022-2025.json (684 KB)
│
├── leadership/                  # ✅ Strategic Planning & Operations
│   ├── README.md                # Leadership vault index
│   ├── strategy/                # Business model, revenue, content strategy
│   │   ├── UNIDOS_BUSINESS_MODEL_2026.md
│   │   ├── UNIDOS_WIZARD_NGO_MANAGEMENT.md
│   │   └── WEBSITE_IMPROVEMENTS_ANALYSIS.md
│   ├── operations/              # SOPs, processes (to be populated)
│   │   └── [future operational frameworks]
│   ├── research/                # Market research (to be populated)
│   │   └── [future case studies]
│   └── scout/                   # DAO transformation, competitor analysis
│       ├── README.md            # Scout vault index
│       ├── UNIDOS_DAO_TRANSFORMATION_ROADMAP.md (🔒 PRIVATE)
│       ├── REFUGEE_NGO_BUSINESS_MODELS_COMPARISON.md
│       └── HYPERSKIDS_ANALYSIS.md
│
├── policies/                    # ✅ Governance & Communication Policies
│   ├── README.md                # Policy management guide
│   ├── WATER_PROMPT.md          # Content style guide (to be created)
│   ├── PQI_SCORING.md           # Production Quality Index (to be created)
│   └── COOPERATION_SCORING.md   # HEROES detection (to be created)
│
└── docs/                        # GitHub Pages build artifacts
    └── analysis/
```

---

## 🎯 Module Responsibilities

### `/static` — Website Module
**Owner**: Content Team
**Access**: Public
**Purpose**: All website files deployed via GitHub Pages

**Contents**:
- HTML pages (index, about, programs, stories, donate, contact, diary)
- CSS stylesheets (design system, responsive layouts)
- JavaScript (interactivity, animations)
- Images (photos, graphics, icons)
- Videos (project documentation, testimonials)

**Style Guide**: Apply Water Prompt principles (see `/policies/WATER_PROMPT.md`)

**Update Frequency**: Monthly (content updates), Quarterly (design updates)

---

### `/stories` — Content Library Module
**Owner**: Content Team
**Access**: Public (html/source-documents), Private (data/)
**Purpose**: Project content organized by type

**Submodules**:

1. **`/html`** — Project web pages (9 pages)
   - 5 active projects (mushroom, women-circle, vermicomposting, biochar, arborloo)
   - 2 award pages (gene-dewey, permaculture)
   - 2 legacy pages (permaculture-training, women-empowerment)

2. **`/source-documents`** — Original reports
   - DOCX files (end-of-project reports, proposals, case studies)
   - PDF files (external reports, website recommendations)
   - Used as source material for HTML content

3. **`/data`** — 🔒 Conversation logs (PRIVATE)
   - JSON files (founder chats, project diaries)
   - Contains sensitive information (not for public distribution)

**Update Frequency**: Monthly (add new testimonials, update metrics)

---

### `/leadership` — Strategic Planning Module
**Owner**: Leadership Team
**Access**: Internal (some public-shareable)
**Purpose**: Centralized strategic planning, operations, research

**Submodules**:

1. **`/strategy`** — Business model, revenue, content strategy
   - UNIDOS_BUSINESS_MODEL_2026.md (revenue model, PQI scoring, projections)
   - UNIDOS_WIZARD_NGO_MANAGEMENT.md (Bonzi wizard adapted for NGOs)
   - WEBSITE_IMPROVEMENTS_ANALYSIS.md (Water Prompt content strategy)

2. **`/operations`** — SOPs, processes (to be populated Q2 2026)
   - Standard operating procedures
   - Process documentation
   - Operational frameworks

3. **`/research`** — Market research (to be populated Q2-Q3 2026)
   - Case studies
   - Impact evaluations
   - Feasibility studies

4. **`/scout`** — DAO transformation, competitor analysis
   - README.md (research vault index)
   - UNIDOS_DAO_TRANSFORMATION_ROADMAP.md (🔒 PRIVATE: 12-month DAO transition plan)
   - REFUGEE_NGO_BUSINESS_MODELS_COMPARISON.md (6 organizations: AWR, RRF, SINA, MADE51, Village Enterprise, Hyperskids)
   - HYPERSKIDS_ANALYSIS.md (charity memecoin case study, Stake2Earn model)

**Update Frequency**: Quarterly (strategic docs), Monthly (research updates)

---

### `/policies` — Governance Module
**Owner**: Leadership Team
**Access**: Public (policies), Internal (drafts)
**Purpose**: Centralized policy management

**Policy Categories**:

1. **Communication Policies**
   - WATER_PROMPT.md — Content style guide (avoid AI fingerprints, mechanics first)
   - SOCIAL_MEDIA.md — Posting guidelines, voice/tone (to be created)
   - DONOR_COMMUNICATIONS.md — Grant reports, impact updates (to be created)

2. **Operational Policies**
   - PQI_SCORING.md — Production Quality Index methodology (to be created)
   - COOPERATION_SCORING.md — HEROES behavioral detection (to be created)
   - WIZARD_FLOWS.md — Standard wizard processes (to be created)

3. **Governance Policies**
   - DAO_VOTING.md — Trust-weighted voting rules (to be created Q3)
   - EULER_POOL.md — Distribution formulas (to be created Q3)
   - GRADUATED_SANCTIONS.md — Violation handling (to be created Q3)

**Update Frequency**: Quarterly (policy audit), Annually (policy updates)

---

## 🔄 Information Flow

### Content Creation Workflow

```
Source Documents (/stories/source-documents)
    ↓
Extract key metrics, testimonials, photos
    ↓
Draft HTML page (/stories/html)
    ↓
Apply Water Prompt audit (/policies/WATER_PROMPT.md)
    ↓
Deploy to website (/static)
```

### Strategic Planning Workflow

```
Market Research (/leadership/research)
    ↓
Competitive Analysis (/leadership/scout)
    ↓
Business Model Design (/leadership/strategy)
    ↓
Policy Development (/policies)
    ↓
Operational Implementation (/leadership/operations)
```

### DAO Transformation Workflow

```
Competitor Research (/leadership/scout/REFUGEE_NGO_BUSINESS_MODELS_COMPARISON.md)
    ↓
Gap Analysis (What SIAH fills)
    ↓
Transformation Roadmap (/leadership/scout/UNIDOS_DAO_TRANSFORMATION_ROADMAP.md)
    ↓
Policy Development (/policies/DAO_VOTING.md, COOPERATION_SCORING.md, etc.)
    ↓
Technical Implementation (Telegram bot, Euler pool, Snapshot voting)
```

---

## 📊 Comparison: Unidos vs Bonzi_v5 Structure

| Module | Unidos | Bonzi_v5 Equivalent |
|--------|--------|---------------------|
| **Website** | `/static` | N/A (Bonzi is bot, not website) |
| **Content** | `/stories` | N/A (different use case) |
| **Strategy** | `/leadership/strategy` | `/data/leadership/oracle` |
| **Research** | `/leadership/scout` | N/A (unique to Unidos) |
| **Policies** | `/policies` | `/src/leadership/policies` |
| **Operations** | `/leadership/operations` | `/src/agents` (code) |

**Key Similarities**:
- Modular separation (public/private, strategy/operations)
- Policy management (centralized governance rules)
- Leadership vault (strategic planning documents)
- Water Prompt style guide (consistent communication)

**Key Differences**:
- Unidos has public website (`/static`), Bonzi is Telegram bot
- Unidos has content library (`/stories`), Bonzi has codebase (`/src`)
- Unidos has scout research (`/leadership/scout`), Bonzi has inline docs

---

## 🚀 Deployment & Access

### Public (GitHub Pages)
- **URL**: https://unidos.ug
- **Source**: `/static` folder
- **Auto-deploy**: On push to main branch
- **Access**: Anyone

### Internal (Leadership Team)
- **Modules**: `/leadership`, `/policies`
- **Access**: Commit permissions required
- **Sensitive**: `/stories/data`, `/leadership/scout/UNIDOS_DAO_TRANSFORMATION_ROADMAP.md`

---

## 🔍 Quick Find Guide

**Need...**

**Website update**:
- Edit: `/static/[page].html`
- Style guide: `/policies/WATER_PROMPT.md`

**Project content**:
- Web page: `/stories/html/[project].html`
- Source data: `/stories/source-documents/[report].docx`

**Strategic planning**:
- Business model: `/leadership/strategy/UNIDOS_BUSINESS_MODEL_2026.md`
- DAO roadmap: `/leadership/scout/UNIDOS_DAO_TRANSFORMATION_ROADMAP.md`
- Competitor analysis: `/leadership/scout/REFUGEE_NGO_BUSINESS_MODELS_COMPARISON.md`

**Policy reference**:
- Content style: `/policies/WATER_PROMPT.md`
- PQI scoring: `/policies/PQI_SCORING.md`
- Cooperation scoring: `/policies/COOPERATION_SCORING.md`

---

## 🎓 Organization Principles

### 1. **Separation of Concerns**
- Public content (`/static`, `/stories/html`) separated from internal strategy (`/leadership`)
- Source documents (`/stories/source-documents`) separated from published pages (`/stories/html`)
- Policies (`/policies`) centralized for easy reference

### 2. **Discoverability**
- Each folder has README.md explaining contents
- Clear naming conventions (no abbreviations)
- Consistent structure across modules

### 3. **Scalability**
- Empty folders (`/leadership/operations`, `/leadership/research`) prepared for growth
- Policy templates ready for Q2-Q3 development
- Modular design allows adding new projects without restructuring

### 4. **Security**
- Sensitive data clearly marked (🔒 PRIVATE)
- Private folders (`/stories/data`, DAO roadmap) documented
- Access control via GitHub permissions

---

*Last updated: February 2026*
*Maintained by: Unidos Leadership Team*
*Modeled after: Bonzi_v5 repository structure*
