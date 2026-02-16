# Unidos Website Link Audit Report

**Date:** February 16, 2026
**Total HTML Files Analyzed:** 33
**Total Broken Links Found:** 192
**Missing Files:** 32

---

## Executive Summary

This comprehensive audit revealed critical structural issues with the Unidos website that are causing widespread 404 errors. The primary issues are:

1. **Story files location mismatch**: Blog/Programs pages link to `stories/*.html` but actual files are in `stories/html/*.html`
2. **Duplicate file structure**: 6 files exist in both root and `static/` directories causing confusion
3. **Navigation inconsistencies**: Story HTML files use outdated navigation links
4. **Missing research portal pages**: 6 research section pages are referenced but don't exist

---

## Critical Issue #1: Story Files Path Mismatch

### The Problem

**Root cause of the 404 error for `/stories/permaculture-training.html`:**

- **What pages expect**: `stories/permaculture-training.html`
- **Where file actually is**: `stories/html/permaculture-training.html`

### Affected Files

The following pages have broken story links:

#### Root-level pages (linking from `/`)
- `/blog.html` - 9 broken story links
- `/programs.html` - 2 broken story links

#### Static folder pages (linking from `/static/`)
- `/static/stories.html` - 9 broken story links
- `/static/programs.html` - 5 broken story links

### Missing Story Files (Expected but Don't Exist)

Files that are linked to but missing at the expected location:

```
❌ /stories/gene-dewey-award.html          → exists at: /stories/html/gene-dewey-award.html
❌ /stories/mushroom-project.html          → exists at: /stories/html/mushroom-project.html
❌ /stories/vermicomposting.html           → exists at: /stories/html/vermicomposting.html
❌ /stories/permaculture-award.html        → exists at: /stories/html/permaculture-award.html
❌ /stories/permaculture-training.html     → exists at: /stories/html/permaculture-training.html ⭐ REPORTED ISSUE
❌ /stories/women-empowerment.html         → exists at: /stories/html/women-empowerment.html
❌ /stories/women-circle.html              → exists at: /stories/html/women-circle.html
❌ /stories/biochar.html                   → exists at: /stories/html/biochar.html (also duplicate at /stories/biochar.html)
❌ /stories/arborloo-toilets.html          → exists at: /stories/html/arborloo-toilets.html
```

### Actual Story Files Location

All story files actually exist in: `/stories/html/`

```
✅ /stories/html/arborloo-toilets.html
✅ /stories/html/biochar.html
✅ /stories/html/gene-dewey-award.html
✅ /stories/html/mushroom-project.html
✅ /stories/html/permaculture-award.html
✅ /stories/html/permaculture-training.html
✅ /stories/html/vermicomposting.html
✅ /stories/html/women-circle.html
✅ /stories/html/women-empowerment.html
```

---

## Critical Issue #2: Story Files Have Broken Internal Links

### The Problem

All story HTML files in `/stories/html/` have broken navigation links because they reference files that don't exist in the `/stories/` directory.

### Example: `/stories/html/permaculture-training.html`

**Current broken links (16 per file × 9 files = 144 broken links total):**

```html
<!-- Broken CSS and images -->
<link rel="stylesheet" href="../css/style.css">           ❌ /stories/css/style.css (doesn't exist)
<img src="../images/unidos-logo.png">                     ❌ /stories/images/unidos-logo.png (doesn't exist)

<!-- Broken navigation links -->
<a href="../index.html">                                  ❌ /stories/index.html (doesn't exist)
<a href="../about.html">                                  ❌ /stories/about.html (doesn't exist)
<a href="../programs.html">                               ❌ /stories/programs.html (doesn't exist)
<a href="../stories.html">                                ❌ /stories/stories.html (doesn't exist)
<a href="../diary.html">                                  ❌ /stories/diary.html (doesn't exist)
<a href="../contact.html">                                ❌ /stories/contact.html (doesn't exist)
<a href="../donate.html">                                 ❌ /stories/donate.html (doesn't exist)
```

**What they should link to (going up TWO levels to root):**

```html
<!-- Correct paths -->
<link rel="stylesheet" href="../../css/style.css">        ✅
<img src="../../images/unidos-logo.png">                  ✅
<a href="../../index.html">                               ✅
<a href="../../about.html">                               ✅
<!-- etc... -->
```

### Impact

- Story pages have no styling (CSS doesn't load)
- Logo images don't display
- All navigation links are broken
- Footer links don't work

---

## Critical Issue #3: Duplicate File Structure

### The Problem

Six files exist in both the root directory (`/`) and the `static/` folder, creating confusion and maintenance issues.

### Duplicate Files

| Filename | Root Location | Static Location | Issue |
|----------|---------------|-----------------|-------|
| about.html | `/about.html` | `/static/about.html` | Redundant |
| awards.html | `/awards.html` | `/static/awards.html` | Redundant |
| contact.html | `/contact.html` | `/static/contact.html` | Redundant |
| donate.html | `/donate.html` | `/static/donate.html` | Redundant |
| index.html | `/index.html` | `/static/index.html` | Redundant |
| programs.html | `/programs.html` | `/static/programs.html` | Different content, both broken |

### Impact

- Unclear which file is the "canonical" version
- Risk of updating one and not the other
- SEO issues (duplicate content)
- Increased maintenance burden

---

## Critical Issue #4: Outdated Navigation Structure

### The Problem

The main website has been refactored with new navigation structure (using `blog.html` and `history.html`), but story HTML files still reference old structure (`stories.html` and `diary.html`).

### Current Navigation (New Structure)
```
- About Us
- Programs
- REGESOIL (links to founders/paulinho.html)
- Women's Circle (links to founders/maria.html)
- Blog (blog.html) ✅ NEW
- History (history.html) ✅ NEW
- Research
- Contact
```

### Story Files Navigation (Old Structure)
```
- About Us
- Programs
- Stories (stories.html) ❌ OLD - should be blog.html
- Diary (diary.html) ❌ OLD - should be history.html
- Contact
```

**Issue:** The `/stories/html/*.html` files link to pages that no longer exist:
- `../stories.html` → should be `../../blog.html`
- `../diary.html` → should be `../../history.html`

---

## Critical Issue #5: Missing Research Portal Pages

### The Problem

The research portal index (`/static/research/index.html`) links to 6 pages that don't exist.

### Missing Pages

```
❌ /static/research/introduction.html
❌ /static/research/dao-technology.html
❌ /static/research/funding-funnel.html
❌ /static/research/vetting-funnel.html
❌ /static/research/reputation-staking.html
❌ /static/research/dao-roadmap.html
```

**Note:** The research portal exists at both:
- `/research/index.html`
- `/static/research/index.html`

---

## Complete Broken Links by Source File

### `/blog.html` (9 broken links)
```
❌ stories/gene-dewey-award.html
❌ stories/mushroom-project.html
❌ stories/vermicomposting.html
❌ stories/permaculture-award.html
❌ stories/permaculture-training.html ⭐ REPORTED ISSUE
❌ stories/women-empowerment.html
❌ stories/gene-dewey-award.html (duplicate)
❌ stories/women-circle.html
❌ stories/arborloo-toilets.html
```

### `/programs.html` (2 broken links)
```
❌ stories/mushroom-project.html
❌ stories/permaculture-training.html ⭐
```

### `/static/programs.html` (5 broken links)
```
❌ stories/permaculture-training.html ⭐
❌ stories/mushroom-project.html
❌ stories/women-circle.html
❌ stories/biochar.html
❌ stories/arborloo-toilets.html
```

### `/static/stories.html` (10 broken links)
```
❌ stories/gene-dewey-award.html
❌ stories/mushroom-project.html
❌ stories/vermicomposting.html
❌ stories/permaculture-award.html
❌ stories/permaculture-training.html ⭐
❌ stories/women-empowerment.html
❌ stories/gene-dewey-award.html (duplicate)
❌ stories/women-circle.html
❌ stories/biochar.html
❌ stories/arborloo-toilets.html
```

### `/static/research/index.html` (6 broken links)
```
❌ introduction.html
❌ dao-technology.html
❌ funding-funnel.html
❌ vetting-funnel.html
❌ reputation-staking.html
❌ dao-roadmap.html
```

### Each `/stories/html/*.html` file (16 broken links each × 9 files = 144)
```
❌ ../css/style.css (CSS won't load)
❌ ../images/unidos-logo.png (logo won't display)
❌ ../index.html
❌ ../about.html
❌ ../programs.html
❌ ../stories.html (should be ../../blog.html)
❌ ../diary.html (should be ../../history.html)
❌ ../contact.html
❌ ../donate.html
(Each link appears twice - in nav and footer)
```

### `/stories/biochar.html` (16 broken links)
```
❌ css/style.css
❌ images/unidos-logo.png
❌ index.html
❌ about.html
❌ programs.html
❌ stories.html
❌ diary.html
❌ contact.html
❌ donate.html
(Each link appears twice)
```

---

## Recommendations

### Solution 1: Move Story Files (Recommended)

**Move all story HTML files from `/stories/html/` to `/stories/`**

This is the simplest fix that matches what the blog/programs pages expect.

**Actions:**
```bash
# Move all files
mv /stories/html/*.html /stories/

# Remove empty html directory
rmdir /stories/html/
```

**Update all story HTML files to fix paths:**
- Change `href="../css/style.css"` → `href="../css/style.css"` (already correct with one `..`)
- Change `href="../images/*"` → `href="../images/*"` (already correct)
- Change `href="../*.html"` → `href="../*.html"` (already correct)
- Change `href="../stories.html"` → `href="../blog.html"`
- Change `href="../diary.html"` → `href="../history.html"`

**Pros:**
- Matches existing links in blog.html and programs.html
- Only need to update the story HTML files themselves
- Simpler URL structure

**Cons:**
- Need to update all 9 story HTML files
- May break any external links to `/stories/html/` URLs

---

### Solution 2: Update Blog/Programs Links (Alternative)

**Update all blog.html and programs.html links to point to `/stories/html/`**

**Actions:**
- In `/blog.html`: Change all `stories/*.html` → `stories/html/*.html`
- In `/programs.html`: Change all `stories/*.html` → `stories/html/*.html`
- In `/static/stories.html`: Change all `stories/*.html` → `stories/html/*.html`
- In `/static/programs.html`: Change all `stories/*.html` → `stories/html/*.html`

**Still need to fix story HTML files:**
- Update relative paths to go up two levels (`../../`)
- Update navigation to use blog.html and history.html

**Pros:**
- Files stay in organized `/html/` subfolder
- External links to `/stories/html/` won't break

**Cons:**
- Longer URLs
- More files to update
- Still need to fix story HTML internal links

---

### Solution 3: Consolidate File Structure (Most Thorough)

**Eliminate duplicate root/static structure entirely**

**Decision needed:**
- Serve from root directory (`/`)? OR
- Serve from static directory (`/static/`)?

**If serving from root:**
1. Delete `/static/*.html` files
2. Keep root-level HTML files
3. Update all links

**If serving from static:**
1. Delete root-level HTML files (except index.html redirect)
2. Keep `/static/*.html` files
3. Update all links
4. Add redirect from `/index.html` to `/static/index.html`

---

### Solution 4: Research Portal Pages

**For missing research portal pages, you have two options:**

**Option A: Create the missing pages**
- Create 6 new HTML files with research content
- Ensure consistent styling and navigation

**Option B: Remove the links**
- Update `/static/research/index.html` to remove broken links
- Add "Coming Soon" placeholders or remove sections entirely

---

## Recommended Action Plan

### Phase 1: Fix Story Files (HIGH PRIORITY)

1. **Move story files** from `/stories/html/` to `/stories/`
   ```bash
   mv /stories/html/*.html /stories/
   ```

2. **Update each story HTML file** (9 files):
   - Keep CSS path as: `href="../css/style.css"`
   - Keep image paths as: `href="../images/*"`
   - Change `href="../stories.html"` → `href="../blog.html"`
   - Change `href="../diary.html"` → `href="../history.html"`
   - Verify all navigation links work

3. **Test all story links** from blog.html and programs.html

**This will fix 192 broken links!**

### Phase 2: Clean Up Duplicate Files (MEDIUM PRIORITY)

1. **Decide canonical location**: Root (`/`) or Static (`/static/`)

2. **If using root:**
   - Delete `/static/about.html`, `/static/awards.html`, `/static/contact.html`, `/static/donate.html`, `/static/index.html`, `/static/programs.html`
   - Keep root versions

3. **If using static:**
   - Move root files to static
   - Add redirects from root to static

4. **Update all internal links** to point to canonical location

### Phase 3: Research Portal (LOW PRIORITY)

1. **Decide on research portal content strategy**
2. **Either create missing pages or remove links**
3. **Update `/static/research/index.html` accordingly**

### Phase 4: Remove Duplicate Story File

1. **Delete** `/stories/biochar.html` (the one in root of stories/)
2. **Keep** `/stories/html/biochar.html` (or move it with the others in Phase 1)

---

## Testing Checklist

After implementing fixes, test these scenarios:

### Story Links
- [ ] Click story links from `/blog.html` - all should work
- [ ] Click story links from `/programs.html` - all should work
- [ ] Open any story page - CSS should load
- [ ] Open any story page - logo should display
- [ ] Click navigation links from story page - all should work
- [ ] Click "Back to Stories" link from story page - should go to blog.html

### Navigation
- [ ] Main navigation works from all pages
- [ ] Footer links work from all pages
- [ ] No 404 errors in browser console

### Duplicate Files
- [ ] Only one version of each page exists
- [ ] All internal links point to correct canonical URL

### Research Portal
- [ ] No broken links on research portal index
- [ ] Either pages exist or links are removed

---

## File Inventory

### Root Directory HTML Files
```
✅ /index.html
✅ /about.html
✅ /awards.html
✅ /blog.html (renamed from stories.html)
✅ /history.html (renamed from diary.html)
✅ /contact.html
✅ /donate.html
✅ /programs.html
✅ /founders/paulinho.html
✅ /founders/maria.html
✅ /research/index.html
✅ /research/login.html
✅ /admin/index.html
```

### Static Directory HTML Files
```
⚠️  /static/index.html (DUPLICATE)
⚠️  /static/about.html (DUPLICATE)
⚠️  /static/awards.html (DUPLICATE)
⚠️  /static/contact.html (DUPLICATE)
⚠️  /static/donate.html (DUPLICATE)
⚠️  /static/programs.html (DUPLICATE)
⚠️  /static/stories.html (OLD NAME - conflicts with blog.html)
⚠️  /static/diary.html (OLD NAME - conflicts with history.html)
✅ /static/research/index.html
✅ /static/research/login.html
```

### Story Files (Current Location)
```
⚠️  /stories/biochar.html (DUPLICATE - in wrong location)
✅ /stories/html/arborloo-toilets.html
✅ /stories/html/biochar.html
✅ /stories/html/gene-dewey-award.html
✅ /stories/html/mushroom-project.html
✅ /stories/html/permaculture-award.html
✅ /stories/html/permaculture-training.html ⭐ REPORTED 404
✅ /stories/html/vermicomposting.html
✅ /stories/html/women-circle.html
✅ /stories/html/women-empowerment.html
```

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| Total HTML files | 33 |
| Total broken links | 192 |
| Missing files referenced | 32 |
| Duplicate files (root vs static) | 6 |
| Story files in wrong location | 9 |
| Story files with broken internal links | 10 (including 9 in html/ + 1 in root) |
| Research portal broken links | 6 |

---

## Priority Matrix

| Issue | Severity | Files Affected | User Impact | Priority |
|-------|----------|----------------|-------------|----------|
| Story files path mismatch | HIGH | 9 story files + 4 linking pages | Users get 404 on all story links | **CRITICAL** |
| Story internal links broken | HIGH | 10 story files | No styling, broken navigation | **CRITICAL** |
| Duplicate file structure | MEDIUM | 6 files | Maintenance issues, SEO problems | **HIGH** |
| Research portal links | LOW | 1 file | Limited user impact | **MEDIUM** |
| Outdated navigation | MEDIUM | 10 story files | Confusing UX | **HIGH** |

---

## Conclusion

The Unidos website has significant structural issues causing widespread broken links. The root cause is a mismatch between where story files are located (`/stories/html/`) and where the blog/programs pages expect them (`/stories/`).

**The immediate fix:**
1. Move all story HTML files from `/stories/html/` to `/stories/`
2. Update story HTML files to fix their internal navigation links
3. Update navigation to use blog.html and history.html instead of stories.html and diary.html

This will resolve the reported 404 error for `/stories/permaculture-training.html` and fix 192 broken links across the site.

**Secondary fixes:**
- Consolidate duplicate root/static files
- Address research portal broken links
- Remove obsolete story file in wrong location

---

**Report Generated:** February 16, 2026
**Audit Tool:** Custom Python link checker
**Audit Scope:** All 33 HTML files in Unidos repository
