# Water Prompt — Unidos Communication Policy

**Status:** Active governance layer
**Applies to:** All external-facing surfaces (website pages, copy, meta descriptions, alt text)
**Enforcement:** Pre-commit hook (`scripts/validation/water_check.py`)
**Adapted from:** Bonzi_v5 Water Prompt (strategic communication filter)

---

## Core Principle

**Never announce what you are. Let people discover what you do.**

External copy describes **what Unidos does** (programs, locations, results), never **why it matters** (mission statements, vague impact claims). The work expresses the values. The website describes the work.

---

## The Five Tests (Unidos Edition)

Every piece of website copy must pass all five:

### 1. Specificity Test
**Question:** Can this claim be verified with a photo, report, or field data?

- "142 women trained in mushroom cultivation in Nakivale settlement"
- "We support vulnerable communities" (which ones? how? where?)

### 2. Protest Sign Test
**Question:** Could this sentence appear on an NGO fundraising poster from 2005?

- "Empowering communities through sustainable development" — FAIL
- "Biochar kilns built in 3 refugee settlements, soil pH improved from 4.2 to 6.8" — PASS

### 3. Mechanics First
**Question:** Does it describe what the program DOES (not what it "achieves")?

- "Weekly permaculture training sessions for 30 women per cohort"
- "Holistic approach to community resilience" (says nothing)

### 4. No Savior Framing
**Question:** Does it center the people doing the work, or the NGO "saving" them?

- "Refugees manage their own seed banks and crop rotation schedules"
- "Unidos empowers refugees to grow their own food" (savior framing)

### 5. Adversarial Test
**Question:** Does it survive a cynical donor who's seen 1000 NGO websites?

- "3 biochar kilns operational since 2024. 12 tonnes produced. Used on 4 hectares."
- "Innovative sustainable agriculture program" (could be anyone's copy)

---

## Banned Vocabulary

### Fire Language (hype words)
- revolutionary, revolutionize, transform, transformative, transforming
- innovative, innovate, cutting-edge, game-changer, groundbreaking
- pioneering, trailblazing, world-class, best-in-class

### AI Fingerprints (generated filler)
- leverage, leveraging, utilize, utilizing, unlock, unlocking
- synergy, synergies, seamlessly, holistic, holistically
- comprehensive, robust, empower, empowering, empowerment

### Filler Adverbs
- fundamentally, essentially, arguably, notably, significantly, inherently
- incredibly, truly, deeply, profoundly

### NGO Buzzwords
- sustainable development (use specifics instead)
- capacity building (describe what's actually taught)
- stakeholders (name them: farmers, refugees, women)
- beneficiaries (dehumanizing — use participants, members, farmers)
- vulnerable populations (name who and where)
- at-risk communities (name them)
- food security (describe what people actually eat/grow)

### Vague Impact Claims
- making a difference, changing lives, creating impact
- building resilience, fostering growth, driving change

---

## Required Patterns

Instead of vague claims, use:

| Don't write | Write instead |
|-------------|---------------|
| "Empowering women" | "142 women completed 6-month mushroom cultivation training" |
| "Sustainable agriculture" | "Biochar production using Kon-Tiki kilns, 4 hectares treated" |
| "Food security program" | "Families grow cassava, beans, and mushrooms on 0.5ha plots" |
| "Capacity building" | "12-week permaculture course covering composting, crop rotation, water management" |
| "Vulnerable communities" | "Refugee families in Nakivale and Kyangwali settlements" |
| "Creating impact" | "3 settlements, 200+ participants, 12 tonnes biochar produced" |
| "Holistic approach" | List the actual program components |

---

## Style Guide

### Voice
- State what the program does, not what it "achieves"
- Short sentences. Specific numbers.
- Name places: Nakivale, Kyangwali, Kampala — not "communities in East Africa"
- Name crops: cassava, mushrooms, beans — not "agricultural products"
- Name methods: Kon-Tiki kilns, vermicomposting, companion planting — not "techniques"

### Content Priority
- **Live programs:** Full descriptions with numbers, locations, methods
- **Planned programs:** One-liner, no elaborate promises
- **Past programs:** Results with dates and numbers

---

## Implementation

- Pre-commit hook scans all `.html` files for banned vocabulary
- Warnings on `.md` files (internal docs may discuss concepts)
- Policy files and scripts are excluded from scanning
