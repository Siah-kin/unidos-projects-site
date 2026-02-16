# Visual Guide - What's Changed on Your Website

**Date**: February 16, 2026
**Purpose**: Show non-technical users exactly what was installed and where

---

## 🏠 Homepage Changes

### Before:
```
┌─────────────────────────────────────┐
│          HERO SECTION               │
│  (Unidos Social Innovation Center)  │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│         ABOUT SECTION               │
│      (Who We Are)                   │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│        PROGRAMS SECTION             │
│   (4 program cards)                 │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│         IMPACT STATS                │
│  (3,000+ | 700+ | 5,300+ | 10,000+) │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│      STORIES SECTION                │
│    (Meet Mariam)                    │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│     GET INVOLVED                    │
│  (Donate | Partner | Share)         │
└─────────────────────────────────────┘
```

### After (NEW!):
```
┌─────────────────────────────────────┐
│          HERO SECTION               │
│  (Unidos Social Innovation Center)  │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│         ABOUT SECTION               │
│      (Who We Are)                   │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│        PROGRAMS SECTION             │
│   (4 program cards)                 │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│         IMPACT STATS                │
│  (3,000+ | 700+ | 5,300+ | 10,000+) │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│      STORIES SECTION                │
│    (Meet Mariam)                    │
└─────────────────────────────────────┘
╔═════════════════════════════════════╗
║    ✨ NEW: SOCIAL MEDIA FEED ✨     ║
║                                     ║
║   "What We're Working On Right Now" ║
║                                     ║
║   [Instagram Photo Grid]            ║
║   📸 📸 📸                          ║
║   📸 📸 📸                          ║
║                                     ║
║   [Follow Us on Instagram] button   ║
╚═════════════════════════════════════╝
┌─────────────────────────────────────┐
│     GET INVOLVED                    │
│  (Donate | Partner | Share)         │
└─────────────────────────────────────┘
```

**What visitors see**:
- Scrolling down from Stories section...
- NEW section with "Live from the Field" header
- Grid of your latest Instagram posts (6-9 photos)
- "Follow Us on Instagram" button
- Then continues to donation section

---

## 🎨 What the Social Feed Looks Like

### Current State (Placeholder):
```
┌────────────────────────────────────────────┐
│  Section Label: "Live from the Field"     │
│  Heading: "What We're Working On Right Now"│
│  Subtitle: "Follow our daily progress..."  │
│                                            │
│  ┌──────────────────────────────────────┐ │
│  │         Instagram Icon  📷           │ │
│  │                                      │ │
│  │   Instagram Feed Coming Soon         │ │
│  │                                      │ │
│  │   Follow us at @unidosprojects       │ │
│  │                                      │ │
│  │   Setup: Replace with SnapWidget     │ │
│  └──────────────────────────────────────┘ │
│                                            │
│     [Follow Us on Instagram] (button)      │
└────────────────────────────────────────────┘
```

### After Instagram Setup:
```
┌────────────────────────────────────────────┐
│  Section Label: "Live from the Field"     │
│  Heading: "What We're Working On Right Now"│
│  Subtitle: "Follow our daily progress..."  │
│                                            │
│  ┌────────┬────────┬────────┐             │
│  │ Photo1 │ Photo2 │ Photo3 │             │
│  │  📸    │  📸    │  📸    │             │
│  ├────────┼────────┼────────┤             │
│  │ Photo4 │ Photo5 │ Photo6 │             │
│  │  📸    │  📸    │  📸    │             │
│  └────────┴────────┴────────┘             │
│  (Your latest Instagram posts auto-load)  │
│                                            │
│     [Follow Us on Instagram] (button)      │
└────────────────────────────────────────────┘
```

**How it works**:
- Automatically pulls your latest Instagram posts
- Updates every time you post on Instagram (no manual work!)
- Visitors can click photos to view on Instagram
- Mobile-responsive (looks good on phones)

---

## 🎛️ Content Management System (CMS)

### How to Access:
1. Go to: **https://unidos.ug/admin**
2. Log in with your email + password (after Netlify setup)
3. You'll see this interface:

```
┌─────────────────────────────────────────────────────┐
│  Unidos CMS                          [Your Name ▼]  │
├─────────────────────────────────────────────────────┤
│                                                     │
│  📋 Collections:                                    │
│                                                     │
│  📄 Homepage                  [3 items]            │
│     • Hero Section                                 │
│     • Impact Statistics                            │
│     • About Section                                │
│                                                     │
│  🎯 Programs                  [+ New Program]      │
│     • Mushroom Spawn Lab                           │
│     • REGESOIL                                     │
│     • Women's Circle                               │
│                                                     │
│  📖 Stories                   [+ New Story]        │
│     • Mariam - Soap Making                         │
│     • Furaha - Mushroom Farmer                     │
│                                                     │
│  🏆 Awards                    [+ New Award]        │
│     • Ockenden Prize 2024                          │
│     • Gene Dewey Award 2024                        │
│     • Lush Spring Prize 2023                       │
│                                                     │
│  👤 Founder Profiles                               │
│     • Paulinho Muzaliwa                            │
│     • Maria                                        │
│                                                     │
│  🤝 Partners                  [+ New Partner]      │
│     • UNHCR                                        │
│     • Lush                                         │
│     • Bonzi                                        │
│                                                     │
│  ⚙️ Site Settings                                  │
│     • Contact Information                          │
│     • Navigation Menu                              │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Example: Editing Impact Statistics

**Current numbers on website**:
- 3,000+ Refugees Trained
- 700+ Women Empowered
- 5,300+ Community Members
- 10,000+ Trees Planted

**How to update via CMS**:

1. Click "Homepage" → "Impact Statistics"
2. You'll see an editor:

```
┌─────────────────────────────────────────────┐
│  Edit Impact Statistics                     │
│                                             │
│  Statistic 1:                               │
│  Number:      [3,000+    ]                  │
│  Label:       [Refugees Trained]            │
│  Description: [in regenerative agriculture] │
│                                             │
│  Statistic 2:                               │
│  Number:      [700+      ]  ← Click to edit │
│  Label:       [Women Empowered]             │
│  Description: [through entrepreneurship]    │
│                                             │
│  [+ Add Another Statistic]                  │
│                                             │
│  [Save] [Preview]                           │
└─────────────────────────────────────────────┘
```

3. Change "700+" to "750+"
4. Click "Save"
5. Click "Publish"
6. Wait 2 minutes
7. ✅ Number updated on live website!

---

## 📁 Where Files Are Located

### Your Repository Structure (New!):

```
/Unidos/
├── index.html                    ← Social feed added here
├── css/
│   └── style.css                 ← Social feed styling added
├── admin/                        ← 🆕 NEW: CMS Interface
│   ├── index.html                ← CMS login page
│   └── config.yml                ← CMS configuration
├── _data/                        ← 🆕 NEW: Editable Content
│   ├── homepage_hero.yml         ← Hero section text
│   ├── impact_stats.yml          ← Statistics (3,000+, etc.)
│   ├── about_section.yml         ← About section
│   ├── contact.yml               ← Contact info + social links
│   ├── programs/                 ← All programs
│   │   └── mushroom-cultivation.yml
│   ├── awards/                   ← All awards
│   │   └── 2024-ockenden-prize.yml
│   ├── founders/                 ← Founder profiles
│   │   └── paulinho.yml
│   ├── stories/                  ← Testimonials
│   └── partners/                 ← Partner logos
└── docs/                         ← Setup guides
    ├── INSTALLATION_SUMMARY.md   ← What was installed
    ├── SETUP_GUIDE_FOR_FUNDER.md ← How to use it
    └── VISUAL_GUIDE.md           ← This file!
```

---

## 🎯 What You Can Edit (Without Developer!)

### ✅ Via CMS Interface:

**Text Content**:
- Headline on homepage ("Unidos Social Innovation Center")
- Impact numbers (3,000+ farmers → 3,500+ farmers)
- Program descriptions
- About section paragraphs
- Stories/testimonials
- Founder bios

**Images**:
- Program photos
- Story photos
- Founder headshots
- Partner logos
- Award logos

**Lists**:
- Add new programs
- Add new awards
- Add new stories
- Add new partners

**Contact Info**:
- Email address
- Location text
- Social media links (Instagram, Facebook, etc.)

### ❌ Still Need Developer For:

- Changing page layout
- Adding new pages
- Modifying navigation menu structure
- Design/color changes
- Custom functionality

---

## 📱 Mobile View

The social feed is **mobile-responsive**:

### Desktop (3 columns):
```
┌─────┬─────┬─────┐
│ 📸  │ 📸  │ 📸  │
├─────┼─────┼─────┤
│ 📸  │ 📸  │ 📸  │
└─────┴─────┴─────┘
```

### Tablet (2 columns):
```
┌─────┬─────┐
│ 📸  │ 📸  │
├─────┼─────┤
│ 📸  │ 📸  │
├─────┼─────┤
│ 📸  │ 📸  │
└─────┴─────┘
```

### Mobile (1 column):
```
┌─────┐
│ 📸  │
├─────┤
│ 📸  │
├─────┤
│ 📸  │
├─────┤
│ 📸  │
└─────┘
```

---

## 🎬 Quick Start Checklist

### Today (15 minutes):
- [ ] Go to https://snapwidget.com/
- [ ] Create Instagram widget
- [ ] Get embed code
- [ ] Send to developer to add to website
- [ ] ✅ Live Instagram feed!

### This Week (30 minutes):
- [ ] Set up Netlify account
- [ ] Enable Identity + Git Gateway
- [ ] Accept email invitation
- [ ] Log into CMS at /admin
- [ ] ✅ Can now edit content!

### This Month:
- [ ] Update all impact statistics
- [ ] Add 3-5 stories/testimonials
- [ ] Add all programs to CMS
- [ ] Add all awards to CMS
- [ ] ✅ Website fully up-to-date!

---

## 💡 Pro Tips

### For Best Results:

**Instagram Feed**:
- Post 3-5 times per week (keeps feed fresh)
- Use high-quality photos (well-lit, in focus)
- Mix content: field work, beneficiaries, products, behind-the-scenes
- Use consistent hashtags (#UnidosProjects)

**CMS Updates**:
- Update impact stats monthly (when numbers change)
- Add new stories as they happen (within 1 week)
- Keep metrics specific (not "many farmers" but "501 farmers")
- Upload images before writing content (easier workflow)

**Content Style** (Water Prompt):
- Use real numbers: ✅ "152 women trained"
- Name real people: ✅ "Furaha Bahati from Burundi"
- Be honest: ✅ "We only made 4 sites instead of 6"
- Avoid buzzwords: ❌ "transformative", "innovative"

---

## ❓ Common Questions

### "Where do I log in to edit content?"
**Answer**: https://unidos.ug/admin (after Netlify setup)

### "How long until changes appear on live site?"
**Answer**: 2-3 minutes (GitHub Pages rebuild time)

### "Can I break the website by editing content?"
**Answer**: No! Only content changes, not structure. Plus, everything is backed up in GitHub - can always revert.

### "Do I need to know HTML or coding?"
**Answer**: No! The CMS has a visual editor - like editing a Google Doc.

### "What if I make a mistake?"
**Answer**: Every change is saved in version history. Developer can restore previous version easily.

---

**Next**: Read [SETUP_GUIDE_FOR_FUNDER.md](./SETUP_GUIDE_FOR_FUNDER.md) for step-by-step setup instructions!
