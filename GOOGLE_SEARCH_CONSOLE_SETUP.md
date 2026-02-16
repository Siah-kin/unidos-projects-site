# Google Search Console Setup Instructions for Unidos Projects

## Critical Priority: Get Site Indexed

Your site is currently **NOT indexed** by Google. Follow these steps to get indexed within 7-14 days.

---

## Step 1: Create Google Search Console Property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account (or create one if needed)
3. Click **"Add Property"**
4. Choose **"URL prefix"** (not Domain property)
5. Enter: `https://unidosprojects.com`
6. Click **"Continue"**

---

## Step 2: Verify Ownership (HTML File Method - Recommended for GitHub Pages)

### Option A: HTML File Upload (Easiest for GitHub Pages)

1. Google will provide an HTML verification file (e.g., `google123abc456def.html`)
2. Download this file
3. Place it in the **root directory** of your Unidos repository: `/Users/ginoludikhuyze/Developer/GitHub/Unidos/`
4. Commit and push to GitHub:
   ```bash
   cd /Users/ginoludikhuyze/Developer/GitHub/Unidos
   git add google*.html
   git commit -m "Add Google Search Console verification file"
   git push origin main
   ```
5. Wait 2-3 minutes for GitHub Pages to deploy
6. Return to Search Console and click **"Verify"**

### Option B: HTML Meta Tag (Alternative)

1. Google will provide a meta tag like:
   ```html
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```
2. Add this tag to the `<head>` section of `index.html` (after the existing meta tags)
3. Commit and push to GitHub
4. Wait for deployment, then click "Verify" in Search Console

---

## Step 3: Submit Sitemap

Once verified:

1. In Google Search Console, go to **"Sitemaps"** (left sidebar)
2. Enter: `https://unidosprojects.com/sitemap.xml`
3. Click **"Submit"**

You should see:
- **Status:** "Success"
- **Discovered URLs:** 19 URLs

---

## Step 4: Request Indexing for Priority Pages

Google will automatically crawl your sitemap, but you can accelerate indexing for key pages:

1. Go to **"URL Inspection"** tool (left sidebar)
2. Enter each URL below, click **"Request Indexing"**:
   - `https://unidosprojects.com/`
   - `https://unidosprojects.com/about.html`
   - `https://unidosprojects.com/programs.html`
   - `https://unidosprojects.com/donate.html`
   - `https://unidosprojects.com/contact.html`
   - `https://unidosprojects.com/founders/paulinho.html`
   - `https://unidosprojects.com/founders/maria.html`
   - `https://unidosprojects.com/stories/html/biochar.html`
   - `https://unidosprojects.com/stories/html/mushroom-project.html`
   - `https://unidosprojects.com/stories/html/women-circle.html`

**Note:** You can only request indexing for a limited number of URLs per day (~10-12). Submit the homepage and top 5 priority pages first, then do the rest over the next 2-3 days.

---

## Step 5: Monitor Indexing Progress

### Daily (Week 1-2):
1. Go to **"Coverage"** report in Search Console
2. Check **"Valid"** count - this should increase daily
3. Look for any **"Errors"** - fix if found

### Weekly (Month 1-2):
1. Go to **"Performance"** report
2. Monitor:
   - **Impressions:** How many times your site appeared in search
   - **Clicks:** How many clicks from search results
   - **Average Position:** Your average ranking (lower is better)

---

## Expected Timeline

- **Days 1-3:** Verification complete, sitemap submitted
- **Days 4-7:** Google begins crawling your site
- **Days 14-21:** First pages indexed (typically homepage + high-priority pages)
- **Days 30-45:** 80%+ of pages indexed (15+ pages)
- **Days 60-90:** Full site indexed, organic traffic begins

---

## Troubleshooting

### "URL is not on Google"
- **Normal for first 1-2 weeks.** Google needs time to crawl and index.
- **Action:** Request indexing via URL Inspection tool

### "Sitemap could not be read"
- **Check:** Visit https://unidosprojects.com/sitemap.xml in your browser
- **Fix:** If 404 error, verify sitemap.xml is in root directory and deployed

### "Canonical tag points to different URL"
- **Normal if using canonical tags.** This is expected behavior.
- **No action needed.**

### "Duplicate without user-selected canonical"
- **Fix:** Ensure canonical tags are added to ALL pages (see implementation plan)

---

## Set Up Bing Webmaster Tools (Bonus)

After Google Search Console is set up:

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Click **"Import from Google Search Console"**
3. Authorize access
4. **Done!** Bing will automatically:
   - Verify your site
   - Import your sitemap
   - Begin indexing

---

## Next Steps After Setup

1. ✅ Verify Search Console property
2. ✅ Submit sitemap.xml
3. ✅ Request indexing for top 10 URLs
4. ✅ Monitor coverage report daily for 2 weeks
5. ✅ Deploy remaining SEO improvements (canonical tags, schemas, Open Graph tags)
6. ✅ Check indexing status with: `site:unidosprojects.com` in Google

---

## Questions or Issues?

Common questions:

**Q: How long until I see traffic from Google?**
A: Indexing takes 2-4 weeks. Meaningful traffic usually starts in Month 2-3 as you build authority.

**Q: Do I need to pay for Google Search Console?**
A: No! It's completely free and essential for all websites.

**Q: Can I use a different Google account?**
A: Yes, any Google account works. Recommend using your organization's email (e.g., info@unidosprojects.com) if you have a Google Workspace account.

**Q: What if I see indexing errors?**
A: Check the "Coverage" report for details. Most errors are fixable by updating robots.txt or fixing broken links.

---

## Files Already Created

✅ `/robots.txt` - Tells search engines what to crawl
✅ `/sitemap.xml` - Lists all your pages for Google

**Next:** Deploy these files to GitHub, then follow the steps above to verify your site with Google Search Console.

**Command to deploy:**
```bash
cd /Users/ginoludikhuyze/Developer/GitHub/Unidos
git add robots.txt sitemap.xml
git commit -m "feat: Add robots.txt and sitemap.xml for search engine indexing"
git push origin main
```

Wait 2-3 minutes for GitHub Pages to deploy, then proceed with Search Console verification.
