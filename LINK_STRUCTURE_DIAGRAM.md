# Unidos Website Link Structure Visualization

## Current Broken Structure

```
Unidos/
│
├── index.html ✅
├── blog.html ✅
│   └── Links to: stories/permaculture-training.html ❌ (404 - file doesn't exist here)
│   └── Links to: stories/mushroom-project.html ❌
│   └── Links to: stories/gene-dewey-award.html ❌
│   └── ... (9 broken story links total)
│
├── programs.html ✅
│   └── Links to: stories/permaculture-training.html ❌
│   └── Links to: stories/mushroom-project.html ❌
│
├── stories/
│   ├── biochar.html ⚠️ (duplicate, wrong location)
│   │   └── Links to: css/style.css ❌ (expects /stories/css/style.css)
│   │   └── Links to: images/unidos-logo.png ❌ (expects /stories/images/unidos-logo.png)
│   │   └── Links to: stories.html ❌ (expects /stories/stories.html)
│   │   └── Links to: diary.html ❌ (expects /stories/diary.html)
│   │
│   └── html/
│       ├── permaculture-training.html ✅ FILE EXISTS HERE
│       │   └── Links to: ../css/style.css ❌ (expects /stories/css/style.css - doesn't exist)
│       │   └── Links to: ../images/unidos-logo.png ❌ (expects /stories/images/unidos-logo.png - doesn't exist)
│       │   └── Links to: ../stories.html ❌ (expects /stories/stories.html - doesn't exist)
│       │   └── Links to: ../diary.html ❌ (expects /stories/diary.html - doesn't exist)
│       │   └── Links to: ../index.html ❌ (expects /stories/index.html - doesn't exist)
│       │   └── Links to: ../about.html ❌ (expects /stories/about.html - doesn't exist)
│       │
│       ├── mushroom-project.html ✅ (same 16 broken links)
│       ├── gene-dewey-award.html ✅ (same 16 broken links)
│       ├── permaculture-award.html ✅ (same 16 broken links)
│       ├── vermicomposting.html ✅ (same 16 broken links)
│       ├── women-empowerment.html ✅ (same 16 broken links)
│       ├── women-circle.html ✅ (same 16 broken links)
│       ├── biochar.html ✅ (same 16 broken links)
│       └── arborloo-toilets.html ✅ (same 16 broken links)
│
├── css/
│   └── style.css ✅ (exists at root level)
│
└── images/
    └── unidos-logo.png ✅ (exists at root level)
```

---

## Fixed Structure (After Applying Solution)

```
Unidos/
│
├── index.html ✅
├── blog.html ✅
│   └── Links to: stories/permaculture-training.html ✅ (works!)
│   └── Links to: stories/mushroom-project.html ✅
│   └── Links to: stories/gene-dewey-award.html ✅
│   └── ... (all 9 story links work)
│
├── programs.html ✅
│   └── Links to: stories/permaculture-training.html ✅
│   └── Links to: stories/mushroom-project.html ✅
│
├── stories/
│   ├── permaculture-training.html ✅ MOVED HERE
│   │   └── Links to: ../css/style.css ✅ (correctly points to /css/style.css)
│   │   └── Links to: ../images/unidos-logo.png ✅ (correctly points to /images/unidos-logo.png)
│   │   └── Links to: ../blog.html ✅ UPDATED (was ../stories.html)
│   │   └── Links to: ../history.html ✅ UPDATED (was ../diary.html)
│   │   └── Links to: ../index.html ✅ (correctly points to /index.html)
│   │   └── Links to: ../about.html ✅ (correctly points to /about.html)
│   │
│   ├── mushroom-project.html ✅ (all 16 links work)
│   ├── gene-dewey-award.html ✅ (all 16 links work)
│   ├── permaculture-award.html ✅ (all 16 links work)
│   ├── vermicomposting.html ✅ (all 16 links work)
│   ├── women-empowerment.html ✅ (all 16 links work)
│   ├── women-circle.html ✅ (all 16 links work)
│   ├── biochar.html ✅ (all 16 links work)
│   └── arborloo-toilets.html ✅ (all 16 links work)
│
├── css/
│   └── style.css ✅
│
└── images/
    └── unidos-logo.png ✅
```

---

## URL Path Resolution Examples

### Example 1: Blog Page Linking to Story

**Current (BROKEN):**
```
User visits:      /blog.html
Clicks link:      <a href="stories/permaculture-training.html">
Browser looks at: /stories/permaculture-training.html
Result:           404 ❌ (file is at /stories/html/permaculture-training.html)
```

**After Fix (WORKS):**
```
User visits:      /blog.html
Clicks link:      <a href="stories/permaculture-training.html">
Browser looks at: /stories/permaculture-training.html
Result:           200 ✅ (file was moved here)
```

---

### Example 2: Story Page Loading CSS

**Current (BROKEN):**
```
User visits:      /stories/html/permaculture-training.html
Page loads:       <link href="../css/style.css">
Browser looks at: /stories/css/style.css
Result:           404 ❌ (css folder doesn't exist in stories/)
Effect:           No styling, page looks broken
```

**After Fix (WORKS):**
```
User visits:      /stories/permaculture-training.html (new location)
Page loads:       <link href="../css/style.css">
Browser looks at: /css/style.css
Result:           200 ✅
Effect:           Page styled correctly
```

---

### Example 3: Story Page Navigation Links

**Current (BROKEN):**
```
User on:          /stories/html/permaculture-training.html
Clicks:           <a href="../stories.html">Stories</a>
Browser looks at: /stories/stories.html
Result:           404 ❌ (stories.html doesn't exist in stories folder)
Additionally:     stories.html was renamed to blog.html
```

**After Fix (WORKS):**
```
User on:          /stories/permaculture-training.html (new location)
Clicks:           <a href="../blog.html">Blog</a> (updated link)
Browser looks at: /blog.html
Result:           200 ✅
```

---

## Relative Path Reference Guide

### From `/blog.html` (root level)

| Link | Resolves To | Status |
|------|-------------|--------|
| `stories/permaculture-training.html` | `/stories/permaculture-training.html` | ✅ After fix |
| `css/style.css` | `/css/style.css` | ✅ |
| `images/logo.png` | `/images/logo.png` | ✅ |

### From `/stories/permaculture-training.html` (one level deep)

| Link | Resolves To | Status |
|------|-------------|--------|
| `../blog.html` | `/blog.html` | ✅ After fix |
| `../css/style.css` | `/css/style.css` | ✅ |
| `../images/logo.png` | `/images/logo.png` | ✅ |
| `../index.html` | `/index.html` | ✅ |

### From `/stories/html/permaculture-training.html` (two levels deep) - OLD LOCATION

| Link | Resolves To | Status |
|------|-------------|--------|
| `../css/style.css` | `/stories/css/style.css` | ❌ Doesn't exist |
| `../../css/style.css` | `/css/style.css` | ✅ Would work |
| `../stories.html` | `/stories/stories.html` | ❌ Doesn't exist |
| `../../blog.html` | `/blog.html` | ✅ Would work |

---

## Link Audit Statistics

### Broken Links by Category

```
Story Location Mismatch:        48 links
  - blog.html → stories           9 links
  - programs.html → stories       2 links
  - static/stories.html           10 links
  - static/programs.html          5 links
  - stories/biochar.html          16 links
  - research portal               6 links

Story Internal Broken Links:   144 links
  - 9 files × 16 links each
  - CSS/images/navigation
```

### Broken Link Impact

| Component | Current State | After Fix |
|-----------|---------------|-----------|
| Story page CSS | ❌ Not loading | ✅ Loads |
| Story page images | ❌ Not showing | ✅ Shows |
| Story page navigation | ❌ All broken | ✅ All work |
| Blog → Story links | ❌ 9 broken | ✅ 9 work |
| Programs → Story links | ❌ 2 broken | ✅ 2 work |
| **Total** | **192 broken** | **0 broken** |

---

## Directory Tree Comparison

### BEFORE (Current - Broken)

```
Unidos/
├── blog.html (links to stories/*.html)
├── programs.html (links to stories/*.html)
├── css/
│   └── style.css
├── images/
│   └── *.png
└── stories/
    ├── biochar.html (orphaned duplicate)
    └── html/
        ├── permaculture-training.html (can't find ../css/, ../images/)
        ├── mushroom-project.html
        ├── gene-dewey-award.html
        ├── permaculture-award.html
        ├── vermicomposting.html
        ├── women-empowerment.html
        ├── women-circle.html
        ├── biochar.html
        └── arborloo-toilets.html
```

### AFTER (Fixed)

```
Unidos/
├── blog.html (links to stories/*.html) ✅
├── programs.html (links to stories/*.html) ✅
├── css/
│   └── style.css ✅
├── images/
│   └── *.png ✅
└── stories/
    ├── permaculture-training.html ✅ (finds ../css/, ../images/)
    ├── mushroom-project.html ✅
    ├── gene-dewey-award.html ✅
    ├── permaculture-award.html ✅
    ├── vermicomposting.html ✅
    ├── women-empowerment.html ✅
    ├── women-circle.html ✅
    ├── biochar.html ✅
    └── arborloo-toilets.html ✅
```

---

## Navigation Flow Diagram

### Current Broken Flow

```
User Journey 1: Blog → Story
┌─────────────┐
│  blog.html  │
└──────┬──────┘
       │ clicks "Read Story"
       │ href="stories/permaculture-training.html"
       ↓
┌─────────────┐
│   404 ❌    │ File not found at /stories/permaculture-training.html
└─────────────┘

User Journey 2: Story Page (if somehow accessed)
┌──────────────────────────────────┐
│ stories/html/permaculture-       │
│ training.html                     │
└──────┬───────────────────────────┘
       │ Page tries to load CSS
       │ <link href="../css/style.css">
       ↓
┌─────────────┐
│ 404 ❌      │ /stories/css/style.css doesn't exist
└──────┬──────┘
       │ Result: No styling
       │
       │ User clicks "Stories" link
       │ <a href="../stories.html">
       ↓
┌─────────────┐
│ 404 ❌      │ /stories/stories.html doesn't exist
└─────────────┘
```

### Fixed Flow

```
User Journey 1: Blog → Story
┌─────────────┐
│  blog.html  │
└──────┬──────┘
       │ clicks "Read Story"
       │ href="stories/permaculture-training.html"
       ↓
┌─────────────┐
│   200 ✅    │ File found at /stories/permaculture-training.html
└──────┬──────┘
       │ Page loads CSS
       │ <link href="../css/style.css">
       ↓
┌─────────────┐
│ 200 ✅      │ /css/style.css loads correctly
└──────┬──────┘
       │ Result: Styled page
       │
       │ User clicks "Blog" link
       │ <a href="../blog.html">
       ↓
┌─────────────┐
│ 200 ✅      │ /blog.html loads correctly
└─────────────┘
```

---

## The Fix in Action

### Step-by-Step Transformation

**1. Initial State:**
```
stories/html/permaculture-training.html exists
blog.html links to stories/permaculture-training.html
Result: 404 ❌
```

**2. After Moving File:**
```bash
mv stories/html/permaculture-training.html stories/permaculture-training.html
```

```
stories/permaculture-training.html exists
blog.html links to stories/permaculture-training.html
Result: Link works ✅
But: Page has no CSS ❌ (still looking at ../css from old depth)
```

**3. Wait, the CSS path is already correct!**

When the file is at `stories/permaculture-training.html`:
- CSS link: `href="../css/style.css"`
- Resolves to: `/css/style.css` ✅

The CSS was broken because from `stories/html/permaculture-training.html`:
- CSS link: `href="../css/style.css"`
- Resolved to: `/stories/css/style.css` ❌

**So moving the file automatically fixes the CSS path!**

**4. Just Update Navigation:**
```
Change: <a href="../stories.html"> to <a href="../blog.html">
Change: <a href="../diary.html"> to <a href="../history.html">
Result: All navigation works ✅
```

---

## Summary: What Gets Fixed

| Issue | Before | After |
|-------|--------|-------|
| Blog → Story links | 404 ❌ | 200 ✅ |
| Programs → Story links | 404 ❌ | 200 ✅ |
| Story page CSS | 404 ❌ | 200 ✅ |
| Story page images | 404 ❌ | 200 ✅ |
| Story page navigation | 404 ❌ | 200 ✅ |
| Story → Blog link | 404 ❌ | 200 ✅ |
| Story → History link | 404 ❌ | 200 ✅ |
| **Total broken links** | **192** | **0** |

---

**This visualization makes it clear:**
1. Files are one level too deep (`html/` subdirectory)
2. Moving them up one level fixes path resolution
3. Only need to update 2 navigation links in each file
4. All 192 broken links will be resolved
