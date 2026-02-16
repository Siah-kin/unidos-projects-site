# Parallel Development Plan

## Overview

This guide divides the i18n and navigation implementation work among **3-4 developers** working in parallel, with minimal conflicts and clear responsibilities.

## Team Structure

```
Project Lead
├── Developer A: Core Pages (Homepage, About, Contact)
├── Developer B: Program Pages (Programs, REGESOIL, Women's Circle)
├── Developer C: Blog/Content Pages (Blog, History, Stories)
└── Developer D: Testing & QA (Optional - can parallelize testing)
```

## ⚡ Quick Start (All Developers)

### Prerequisites (5 minutes)

Everyone does this **BEFORE** starting their assigned tasks:

1. **Pull latest code**
   ```bash
   git pull origin main
   ```

2. **Create feature branch**
   ```bash
   # Developer A
   git checkout -b feature/i18n-core-pages

   # Developer B
   git checkout -b feature/i18n-program-pages

   # Developer C
   git checkout -b feature/i18n-content-pages

   # Developer D
   git checkout -b feature/i18n-testing
   ```

3. **Verify files exist**
   ```bash
   # Check these files are present:
   ls static/js/i18n-enhanced.js
   ls static/css/language-switcher.css
   ls static/css/navigation-redesign.css
   ```

## 🎯 Task Assignments

### Developer A: Core Pages (2-3 hours)

**Files to Update:**
- ✅ `static/index.html`
- ✅ `static/about.html`
- ✅ `static/contact.html`
- ✅ `static/donate.html`

**Tasks:**
1. Update `<head>` section (add CSS/JS)
2. Replace `<header>` with new navigation
3. Add `data-i18n` attributes to all text
4. Add language switcher to footer
5. Test language switching on each page

**Time Estimate:** 2-3 hours

**Deliverables:**
- 4 updated HTML files with i18n support
- Screenshots of each page in 2+ languages
- List of any issues encountered

---

### Developer B: Program Pages (2-3 hours)

**Files to Update:**
- ✅ `static/programs.html`
- ✅ `static/regesoil.html` (already created, just add i18n)
- ✅ `static/womens-circle.html` (already created, just add i18n)
- ✅ `static/awards.html`

**Tasks:**
1. Update `<head>` section (add CSS/JS)
2. Replace `<header>` with new navigation
3. Add `data-i18n` attributes to all text
4. Ensure program components are translated
5. Test navigation dropdowns work correctly

**Time Estimate:** 2-3 hours

**Deliverables:**
- 4 updated HTML files with i18n support
- Verification that initiative dropdowns work
- Screenshots showing REGESOIL/Women's Circle in multiple languages

---

### Developer C: Blog/Content Pages (2-3 hours)

**Files to Update:**
- ✅ `static/blog.html` (formerly stories.html)
- ✅ `static/history.html` (formerly diary.html)
- ✅ All blog post pages in `stories/` directory

**Tasks:**
1. Update `<head>` section (add CSS/JS)
2. Replace `<header>` with new navigation
3. Add `data-i18n` attributes to navigation/common elements
4. Update internal links (stories → blog, diary → history)
5. Test that all story pages load correctly

**Time Estimate:** 2-3 hours

**Deliverables:**
- Updated blog/history pages with i18n
- Updated story pages with new navigation
- Documentation of any broken links fixed

---

### Developer D: Testing & QA (2-3 hours, can overlap)

**Responsibilities:**
1. Create test checklist
2. Test each page as devs complete them
3. Verify language switching works
4. Check mobile responsiveness
5. Browser compatibility testing
6. Document bugs/issues

**Time Estimate:** 2-3 hours (ongoing)

**Deliverables:**
- Test report with pass/fail for each page
- Bug list with priority levels
- Browser compatibility matrix

---

## 📝 Step-by-Step Instructions (For Each Developer)

### Step 1: Update HTML `<head>` (5 min per file)

Add these lines **AFTER** existing stylesheets:

```html
<!-- Existing styles -->
<link rel="stylesheet" href="css/style.css">

<!-- ADD THESE TWO LINES -->
<link rel="stylesheet" href="css/navigation-redesign.css">
<link rel="stylesheet" href="css/language-switcher.css">
```

### Step 2: Update HTML `<body>` (2 min per file)

Add **BEFORE** closing `</body>` tag:

```html
<!-- ADD THESE TWO LINES (before existing scripts if any) -->
<script src="js/i18n-enhanced.js"></script>
<script src="js/navigation.js"></script>
</body>
```

### Step 3: Replace Header (10 min per file)

**IMPORTANT:** Use the exact same header for ALL pages!

Copy from: `static/index-i18n-complete.html` lines 26-94

```html
<!-- Replace entire <header> block with new one -->
<header class="header" id="header">
    <!-- ... full navigation from reference file ... -->
</header>
```

**Why same header?**
- Ensures consistency
- Prevents merge conflicts
- Makes maintenance easier

### Step 4: Add i18n Attributes (15-30 min per file)

Add `data-i18n` to translatable elements:

**Common Patterns:**

```html
<!-- Headings -->
<h1 data-i18n="page.title">Page Title</h1>

<!-- Buttons -->
<a href="..." class="btn" data-i18n="common.learn_more">Learn More</a>

<!-- Paragraphs (only if translating) -->
<p data-i18n="page.description">Description text</p>

<!-- Form labels -->
<label data-i18n="contact.name_label">Your Name</label>
```

**What NOT to translate:**
- Numbers (3,000+, 700, etc.)
- Email addresses
- URLs
- Code snippets
- Proper names (Unidos, Nakivale, etc.)

### Step 5: Add Footer Language Switcher (5 min per file)

Add to footer:

```html
<footer class="footer">
    <div class="container">
        <!-- ADD THIS SECTION -->
        <div class="footer-language-switcher">
            <span class="language-label" data-i18n="common.select_language">Language</span>
            <div class="language-switcher-buttons">
                <button class="lang-btn" data-lang="en" onclick="setLanguage('en')">🇬🇧 English</button>
                <button class="lang-btn" data-lang="sw" onclick="setLanguage('sw')">🇹🇿 Kiswahili</button>
                <button class="lang-btn" data-lang="rw" onclick="setLanguage('rw')">🇷🇼 Kinyarwanda</button>
                <button class="lang-btn" data-lang="fr" onclick="setLanguage('fr')">🇫🇷 Français</button>
                <button class="lang-btn" data-lang="rn" onclick="setLanguage('rn')">🇧🇮 Kirundi</button>
                <button class="lang-btn" data-lang="so" onclick="setLanguage('so')">🇸🇴 Soomaali</button>
            </div>
        </div>

        <!-- Existing footer content -->
        <p data-i18n="footer.copyright">© 2026 Unidos...</p>
    </div>
</footer>
```

### Step 6: Test Your Changes (5 min per file)

```bash
# Open file in browser
open static/your-file.html

# Test checklist:
□ Page loads without errors (check console)
□ Language dropdown appears in header
□ Language buttons appear in footer
□ Clicking language changes text
□ Selected language is highlighted
□ Navigation dropdown works
□ Initiatives show REGESOIL and Women's Circle
□ Mobile menu works
```

---

## 🔄 Coordination & Communication

### Before Starting
- ✅ Announce in team chat: "Starting work on [pages]"
- ✅ Pull latest code: `git pull origin main`
- ✅ Create feature branch

### During Work
- ✅ Commit frequently with clear messages
- ✅ Share screenshots in team chat
- ✅ Ask questions in team channel (don't block yourself)
- ✅ Update progress tracker

### After Completing Each Page
- ✅ Test thoroughly before committing
- ✅ Commit with descriptive message
- ✅ Push to your feature branch
- ✅ Mark task as complete

---

## 🚫 Avoiding Merge Conflicts

### Files Multiple Devs Touch

**Shared Files** (potential conflicts):
- `static/js/i18n-enhanced.js` - **DON'T EDIT** (already complete)
- `static/css/navigation-redesign.css` - **DON'T EDIT** (already complete)
- `static/css/language-switcher.css` - **DON'T EDIT** (already complete)

**Rule:** If you need to add translations:
1. **Don't edit i18n-enhanced.js directly**
2. Create a text file: `translations-needed-[your-name].txt`
3. List translations you need
4. Project lead will add them centrally

### Safe Division of Work

```
Developer A     Developer B     Developer C
    ↓               ↓               ↓
index.html      programs.html   blog.html
about.html      regesoil.html   history.html
contact.html    womens-circle   stories/
donate.html     awards.html
    ↓               ↓               ↓
No overlap = No conflicts!
```

---

## 📊 Progress Tracking

### Shared Checklist (Google Sheet or Notion)

| Page | Assigned To | Status | Tested | Issues |
|------|-------------|--------|--------|--------|
| index.html | Dev A | ✅ Done | ✅ Pass | None |
| about.html | Dev A | 🔄 In Progress | ⏳ Pending | - |
| contact.html | Dev A | ⏳ Not Started | ⏳ Pending | - |
| donate.html | Dev A | ⏳ Not Started | ⏳ Pending | - |
| programs.html | Dev B | ⏳ Not Started | ⏳ Pending | - |
| regesoil.html | Dev B | ⏳ Not Started | ⏳ Pending | - |
| womens-circle.html | Dev B | ⏳ Not Started | ⏳ Pending | - |
| awards.html | Dev B | ⏳ Not Started | ⏳ Pending | - |
| blog.html | Dev C | ⏳ Not Started | ⏳ Pending | - |
| history.html | Dev C | ⏳ Not Started | ⏳ Pending | - |

### Status Codes
- ⏳ **Not Started** - Waiting to begin
- 🔄 **In Progress** - Currently working
- ✅ **Done** - Completed and committed
- ⚠️ **Blocked** - Waiting for something
- 🐛 **Issues** - Has bugs/problems

---

## 🧪 Testing Strategy

### Phase 1: Individual Testing (Each Dev)
Each developer tests their own pages:
```bash
# For each file you update:
1. Open in Chrome
2. Test language switching (all 6 languages)
3. Test navigation dropdown
4. Test mobile view (DevTools)
5. Check browser console for errors
6. Take screenshot of working page
```

### Phase 2: Cross-Testing (Developer D or rotating)
Developer D tests everything:
```bash
# Test matrix:
□ All pages load
□ All pages have language switcher
□ All languages work on all pages
□ Navigation consistent across all pages
□ No broken links
□ Mobile responsive
□ No console errors
```

### Phase 3: Integration Testing (All Devs)
Before merging:
```bash
# One person creates integration branch:
git checkout -b integration/i18n-all-pages

# Merge all feature branches:
git merge feature/i18n-core-pages
git merge feature/i18n-program-pages
git merge feature/i18n-content-pages

# Test the integrated result
# Fix any conflicts or issues
# Deploy to staging
```

---

## 🔀 Git Workflow

### Individual Work
```bash
# 1. Create feature branch (already done)
git checkout -b feature/i18n-core-pages

# 2. Make changes to your assigned files

# 3. Commit frequently
git add static/index.html
git commit -m "Add i18n support to index.html"

git add static/about.html
git commit -m "Add i18n support to about.html"

# 4. Push to remote
git push origin feature/i18n-core-pages

# 5. Repeat for each file
```

### Creating Pull Request
```bash
# When all your files are done:
1. Go to GitHub
2. Create Pull Request from your branch
3. Title: "Add i18n to [core/program/content] pages"
4. Description: List pages updated
5. Request review from Project Lead
6. Include screenshots
```

### Merging Strategy

**Option 1: Sequential Merge** (Safer)
```bash
Day 1: Merge Dev A (core pages)
Day 2: Merge Dev B (program pages)
Day 3: Merge Dev C (content pages)
```

**Option 2: Integration Branch** (Faster)
```bash
# Project lead creates integration branch
git checkout -b integration/i18n-all-pages

# Merges all feature branches
git merge feature/i18n-core-pages
git merge feature/i18n-program-pages
git merge feature/i18n-content-pages

# Resolves any conflicts
# Tests thoroughly
# Merges to main
```

---

## ⚠️ Common Issues & Solutions

### Issue: "Language not changing"
**Solution:**
```javascript
// Check browser console for errors
// Verify i18n-enhanced.js loads before navigation.js
// Check data-i18n attribute spelling
```

### Issue: "Navigation dropdown not showing"
**Solution:**
```html
<!-- Ensure navigation-redesign.css loads -->
<!-- Check that dropdown HTML is correct -->
<!-- Verify navigation.js loads -->
```

### Issue: "Merge conflict in HTML file"
**Solution:**
```bash
# Don't panic! This is normal.
# Accept your changes for your assigned files
# Accept their changes for other files
# If unsure, ask in team chat
```

### Issue: "Layout breaks in Somali/French"
**Solution:**
```css
/* Some languages are longer */
/* Add to your local CSS if needed: */
.nav-list > li > a {
    font-size: 0.95rem; /* Slightly smaller */
}
```

---

## 📞 Communication Channels

### Team Chat (Slack/Discord/WhatsApp)
```
📢 Announcements:
- "Starting work on about.html"
- "Completed index.html, ready for review"
- "Found issue with language switcher on mobile"

❓ Questions:
- "Which translation key for 'Learn More'?"
- "Should program names be translated?"

🐛 Bugs:
- "Language dropdown not showing on contact.html"
```

### Daily Standup (Optional)
- What did you complete yesterday?
- What will you work on today?
- Any blockers?

### Code Review
- Each PR reviewed by at least one other dev
- Check for consistent header implementation
- Verify i18n attributes are correct

---

## ⏱️ Timeline

### Optimistic (All devs work simultaneously)
```
Hour 0-1: Setup & assign tasks
Hour 1-3: Parallel development
Hour 3-4: Individual testing
Hour 4-5: Integration & cross-testing
Hour 5-6: Bug fixes & final review
Total: 6 hours to complete entire site
```

### Realistic (With reviews & breaks)
```
Day 1 (4 hours):
  - Morning: Setup, assign, start work
  - Afternoon: Complete first round of pages

Day 2 (4 hours):
  - Morning: Complete remaining pages
  - Afternoon: Testing & bug fixes

Day 3 (2 hours):
  - Morning: Integration & final review
  - Afternoon: Deploy to staging/production

Total: 10 hours spread over 3 days
```

---

## ✅ Definition of Done

A page is "done" when:

- [ ] HTML updated with new `<head>` includes
- [ ] Header replaced with i18n navigation
- [ ] All major text has `data-i18n` attributes
- [ ] Footer includes language switcher
- [ ] Page tested in all 6 languages
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Screenshots taken
- [ ] Code committed & pushed
- [ ] PR created (if applicable)
- [ ] Reviewed by another dev

---

## 🎯 Success Criteria

Project is successful when:

- [ ] All 10+ pages have i18n support
- [ ] Users can switch between 6 languages
- [ ] Language preference persists
- [ ] Navigation shows REGESOIL & Women's Circle
- [ ] No broken links
- [ ] Works on desktop & mobile
- [ ] All browsers tested (Chrome, Firefox, Safari)
- [ ] No merge conflicts
- [ ] Deployed to production
- [ ] Team celebrates! 🎉

---

## 📚 Resources for Developers

### Reference Files
- `static/index-i18n-complete.html` - Perfect example
- `I18N_IMPLEMENTATION_GUIDE.md` - Detailed instructions
- `NAVIGATION_REDESIGN_GUIDE.md` - Navigation details

### Translation Keys
See `static/js/i18n-enhanced.js` for all available keys

### Getting Help
1. Check documentation first
2. Ask in team chat
3. Review reference implementation
4. Escalate to project lead

---

**Ready to start?** Each developer should:
1. ✅ Review their assigned pages
2. ✅ Create their feature branch
3. ✅ Start with easiest page first
4. ✅ Test as you go
5. ✅ Communicate progress

**Estimated completion:** 6-10 hours with 3 devs working in parallel! 🚀
