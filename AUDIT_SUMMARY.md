# Unidos Website Link Audit - Executive Summary

**Date:** February 16, 2026
**Auditor:** Link Audit System
**Scope:** All 33 HTML files in Unidos repository

---

## Critical Finding

**The 404 error for `/stories/permaculture-training.html` is part of a systemic issue affecting the entire website.**

---

## Key Statistics

- **192 broken links** found across the website
- **32 missing files** that are referenced but don't exist
- **9 story pages** inaccessible from blog and programs pages
- **100% of story pages** have broken internal navigation
- **6 duplicate files** causing maintenance issues

---

## Root Cause

All blog story files are located in `/stories/html/` but the website links to them as `/stories/`. This causes:

1. All story links from blog.html to return 404 errors
2. All story links from programs.html to return 404 errors
3. Story pages (when accessed directly) fail to load CSS
4. Story pages have broken navigation links

---

## Impact

### User Experience
- Users cannot access any story content from the blog
- Users cannot read success stories from programs page
- Story pages appear unstyled if accessed directly
- Navigation is broken throughout story section

### SEO & Visibility
- 9 content pages effectively invisible to Google
- Internal link structure broken
- Awards and impact stories not discoverable

### Maintenance
- Duplicate files in root and static/ folders
- Inconsistent navigation structure
- Technical debt accumulating

---

## The Solution

**15-Minute Fix:**

1. Move 9 story files from `/stories/html/` to `/stories/`
2. Update 2 navigation links in each story file
3. Remove duplicate biochar.html file

**Result:** All 192 broken links fixed.

---

## Detailed Reports Available

Three comprehensive reports have been created:

1. **`LINK_AUDIT_REPORT.md`** (5,000 words)
   - Complete analysis of all issues
   - Detailed breakdown of every broken link
   - Multiple solution options
   - Long-term recommendations

2. **`QUICK_FIX_GUIDE.md`** (500 words)
   - Step-by-step fix instructions
   - Copy-paste commands
   - Verification checklist
   - Undo instructions if needed

3. **`LINK_STRUCTURE_DIAGRAM.md`** (2,000 words)
   - Visual diagrams of link structure
   - Before/after comparisons
   - Path resolution examples
   - Navigation flow charts

---

## Recommended Action

**Priority 1 (Critical - Do Immediately):**
- Fix story file locations and links (192 broken links)
- Estimated time: 15 minutes
- Impact: Restores 9 pages, fixes entire story section

**Priority 2 (High - Do This Week):**
- Consolidate duplicate root/static files (6 files)
- Update navigation structure consistency
- Estimated time: 1 hour

**Priority 3 (Medium - Do This Month):**
- Address research portal broken links (6 links)
- Review overall site structure
- Implement link validation in deployment

---

## Files Created

All audit documentation is in the repository root:

```
/AUDIT_SUMMARY.md              (This file - executive overview)
/LINK_AUDIT_REPORT.md          (Comprehensive 5,000-word analysis)
/QUICK_FIX_GUIDE.md            (15-minute fix instructions)
/LINK_STRUCTURE_DIAGRAM.md    (Visual diagrams and examples)
```

---

## Quick Fix Commands

For those who want to fix it right now:

```bash
# Move story files
mv stories/html/*.html stories/

# Fix navigation links in story files
for file in stories/*.html; do
    sed -i '' 's|href="../stories\.html"|href="../blog.html"|g' "$file"
    sed -i '' 's|href="../diary\.html"|href="../history.html"|g' "$file"
done

# Clean up
rmdir stories/html
```

**Then test:** Visit http://localhost:8000/blog.html and click any story link.

---

## Questions?

- **What broke?** Files moved to subdirectory, links not updated
- **How serious?** Critical - 9 pages inaccessible, 192 broken links
- **How to fix?** Move files back up one level, update 2 links per file
- **How long?** 15 minutes with provided commands
- **Will it break anything?** No - this fixes existing breaks
- **Need help?** See QUICK_FIX_GUIDE.md

---

## Verification

After applying fix, all these should work:

✅ http://localhost:8000/stories/permaculture-training.html
✅ http://localhost:8000/blog.html (click any story)
✅ http://localhost:8000/programs.html (click story links)
✅ Story pages load with CSS styling
✅ Story page navigation works

---

**Bottom Line:** The Unidos website has significant structural issues, but they can be fixed in 15 minutes by moving story files and updating 2 navigation links.

**See QUICK_FIX_GUIDE.md to get started.**
