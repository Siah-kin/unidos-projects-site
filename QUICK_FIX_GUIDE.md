# Quick Fix Guide - Unidos Website Broken Links

## THE PROBLEM
Links to story pages are broken because files are in `/stories/html/` but pages link to `/stories/`.

**Example:** `/blog.html` links to `stories/permaculture-training.html` → 404
**Reality:** File is at `stories/html/permaculture-training.html`

---

## QUICK FIX (15 minutes)

### Step 1: Move Story Files
```bash
# From the Unidos project root directory
cd /Users/ginoludikhuyze/Developer/GitHub/Unidos

# Move all story HTML files up one level
mv stories/html/*.html stories/

# Remove empty directory
rmdir stories/html
```

### Step 2: Update Story Files Navigation

In each of these 9 files:
- `stories/arborloo-toilets.html`
- `stories/biochar.html`
- `stories/gene-dewey-award.html`
- `stories/mushroom-project.html`
- `stories/permaculture-award.html`
- `stories/permaculture-training.html`
- `stories/vermicomposting.html`
- `stories/women-circle.html`
- `stories/women-empowerment.html`

**Find and replace:**

1. Change `<a href="../stories.html"` to `<a href="../blog.html"`
2. Change `<a href="../diary.html"` to `<a href="../history.html"`

**DO NOT change:**
- CSS paths (`href="../css/style.css"` is correct)
- Image paths (`src="../images/*"` is correct)
- Other navigation links (they're already correct with `../`)

### Step 3: Test

Visit these URLs and verify they work:
- http://localhost:8000/stories/permaculture-training.html
- http://localhost:8000/blog.html (click any story link)
- http://localhost:8000/programs.html (click story links)

---

## WHAT THIS FIXES

- ✅ All 9 story pages become accessible
- ✅ Fixes 192 broken links across the site
- ✅ Story pages will load CSS properly
- ✅ Story page navigation will work
- ✅ Blog and Programs page story links work

---

## BONUS FIX: Remove Duplicate File

```bash
# There's a duplicate biochar.html in the wrong location
rm stories/biochar.html

# The correct one will be at stories/biochar.html after Step 1
```

---

## FIND & REPLACE COMMANDS

If using VS Code or similar editor:

**Find:** `href="../stories.html"`
**Replace:** `href="../blog.html"`
**Files:** `stories/*.html`

**Find:** `href="../diary.html"`
**Replace:** `href="../history.html"`
**Files:** `stories/*.html`

---

## ONE-LINE COMMAND FIX

If you're comfortable with sed (macOS version):

```bash
# Move files first
mv stories/html/*.html stories/

# Fix navigation in all story files
for file in stories/*.html; do
    sed -i '' 's|href="../stories\.html"|href="../blog.html"|g' "$file"
    sed -i '' 's|href="../diary\.html"|href="../history.html"|g' "$file"
done

# Remove duplicate
rm stories/html/biochar.html 2>/dev/null || true

# Remove empty directory
rmdir stories/html 2>/dev/null || true

echo "✅ Story links fixed!"
```

---

## VERIFICATION CHECKLIST

After making changes:

- [ ] Story files are in `/stories/` (not `/stories/html/`)
- [ ] `/stories/html/` directory no longer exists
- [ ] Story pages load with proper CSS styling
- [ ] Story page header logo displays
- [ ] Story navigation links work
- [ ] "Back to Stories" button goes to blog.html
- [ ] Links from blog.html to stories work
- [ ] Links from programs.html to stories work
- [ ] No 404 errors in browser console

---

## IF SOMETHING BREAKS

**Undo with git:**
```bash
git checkout stories/
```

**Start over:**
```bash
git checkout stories/html/
```

---

## NEED MORE DETAILS?

See the full `LINK_AUDIT_REPORT.md` for:
- Complete list of all 192 broken links
- Explanation of root causes
- Additional issues (duplicate files, research portal)
- Alternative solutions
- Long-term recommendations
