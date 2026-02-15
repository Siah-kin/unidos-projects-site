# Unidos Social Innovation Center

**Refugee-led organization in Nakivale, Uganda. Since 2018: trained 3,000+ farmers in food forest design, processed 800 kg food waste weekly into worm compost, taught 700 women to grow oyster mushrooms and make organic soap.**

**Website**: [unidos.ug](https://unidos.ug) (GitHub Pages deployment)

---

## 📁 Repository Structure (Modeled after Bonzi_v5)

```
/Unidos/
├── README.md (this file)
├── CNAME (custom domain config)
├── static/
│   ├── index.html, about.html, programs.html, stories.html, etc.
│   ├── css/ (stylesheets)
│   ├── js/ (JavaScript)
│   ├── images/ (photos, assets)
│   └── video_files/ (video content)
├── stories/
│   ├── html/ (9 project pages: mushroom, women-circle, biochar, etc.)
│   ├── source-documents/ (DOCX/PDF reports from UNHCR, partners)
│   └── data/ (JSON conversation logs, project diaries)
├── leadership/
│   ├── strategy/ (business model, wizard system, content strategy)
│   ├── operations/ (SOPs, processes, frameworks)
│   ├── research/ (market research, case studies)
│   └── scout/ (DAO transformation, competitor analysis, tokenization)
├── policies/
│   ├── WATER_PROMPT.md (content style guide)
│   ├── PQI_SCORING.md (Production Quality Index)
│   └── COOPERATION_SCORING.md (HEROES behavioral detection)
└── docs/ (build artifacts)
```

---

## 🎯 Modularity Principles

### `/static` — Website (Public)
All website files deployed via GitHub Pages. Apply Water Prompt style guide.

### `/stories` — Project Content (Public)
- `/html/` — 9 project pages (mushroom-project, women-circle, biochar, etc.)
- `/source-documents/` — Original reports, proposals, case studies
- `/data/` — Conversation logs (🔒 contains sensitive info)

### `/leadership` — Strategy & Operations (Internal)
- `/strategy/` — Business model, revenue projections, wizard design
- `/operations/` — SOPs, processes (to be populated)
- `/research/` — Market research (to be populated)
- `/scout/` — DAO transformation, NGO tokenization, competitor analysis

### `/policies` — Governance (Public/Internal)
- Content style guide (Water Prompt)
- Production quality (PQI scoring)
- Cooperation scoring (HEROES detection)
- DAO governance rules

---

## 🚀 Quick Start

### View Website
```bash
cd static && open index.html
# or visit https://unidos.ug
```

### Update Project Content
```bash
cd stories/html
open women-circle.html  # Edit project page
# Apply Water Prompt audit (see /policies/WATER_PROMPT.md)
# Commit and push (auto-deploys via GitHub Pages)
```

### Review Strategic Docs
```bash
cd leadership/strategy
open UNIDOS_BUSINESS_MODEL_2026.md  # Revenue model, PQI scoring
open UNIDOS_WIZARD_NGO_MANAGEMENT.md  # Wizard system design
open WEBSITE_IMPROVEMENTS_ANALYSIS.md  # Content strategy
```

### Explore Research
```bash
cd leadership/scout
open REFUGEE_NGO_BUSINESS_MODELS_COMPARISON.md  # 6 organizations analyzed
open HYPERSKIDS_ANALYSIS.md  # Charity memecoin case study
open UNIDOS_DAO_TRANSFORMATION_ROADMAP.md  # (🔒 PRIVATE)
```

---

## 📊 Key Projects

| Project | Metrics | Page |
|---------|---------|------|
| **Mushroom Spawn Lab** | 152 women trained, 4,800 kg/year | [mushroom-project](stories/html/mushroom-project.html) |
| **Vermicompost** | 501 farmers, 7.8 tons/year | [vermicomposting](stories/html/vermicomposting.html) |
| **Women's Circle** | 38 participants, 16 sessions | [women-circle](stories/html/women-circle.html) |
| **Biochar** | 6,100 kg produced (2025) | [biochar](stories/html/biochar.html) |
| **Arborloo Toilets** | 30% sanitation coverage | [arborloo-toilets](stories/html/arborloo-toilets.html) |

---

## 🎓 Content Style Guide (Water Prompt)

**DO**:
- ✅ Specific metrics (501 farmers, 4,800 kg, 7.8 tons)
- ✅ Real people (Furaha Bahati, village names)
- ✅ Honest challenges ("We only made 4 sites instead of 6")

**DON'T**:
- ❌ Buzzwords ("innovative", "transformative", "holistic")
- ❌ Mission statements ("Turning refugees into change makers")
- ❌ Vague claims ("Creating lasting change")

**See**: `/policies/WATER_PROMPT.md` for full guide

---

## 📈 Strategic Roadmap (2026)

**Q1**: Business model, wizard system, content strategy ✅
**Q2**: Telegram bot, HEROES detection, first B2B contract
**Q3**: Euler pool deployment, DAO governance, equipment investment
**Q4**: Break-even milestone, $193K+ revenue, self-sustaining operations

---

## 🔗 External References

**Bonzi_v5 Framework** (source systems):
- HIVE_DAO_FRAMEWORK_v3.md — SIAH Protocol governance
- WATER_PROMPT.md — Content style guide
- Wizard system — 3-layer triage, HEROES detection

**Research Comparisons**:
- African Women Rising (26,600 households, regenerative ag)
- Rwamwanja Rural Foundation (mushroom focus, Lush Prize)
- SINA (Nakivale, self-sustaining model)
- MADE51 (3,700 artisans, global fair trade)
- Village Enterprise (534% ROI, 933% savings)
- Hyperskids (charity memecoin, Stake2Earn)

---

## 🤝 Contributing

**Public** (safe to share):
- `/static`, `/stories/html`, `/policies`, most `/leadership/strategy`

**Private** (leadership only):
- `/leadership/scout/UNIDOS_DAO_TRANSFORMATION_ROADMAP.md` (🔒)
- `/stories/data/` (conversation logs contain sensitive info)

**Before contributing**:
1. Read `/policies/WATER_PROMPT.md`
2. Review `/leadership/README.md`
3. Test locally before pushing

---

## 📞 Contact

**Unidos Social Innovation Center**
Nakivale Refugee Settlement, Uganda
Founded 2018
[unidos.ug](https://unidos.ug)

---

*Repository structure modeled after Bonzi_v5*
*Last updated: February 2026*
