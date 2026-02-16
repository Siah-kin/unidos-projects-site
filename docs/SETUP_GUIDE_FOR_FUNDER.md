# Unidos Website - Setup Guide for Content Managers

**Welcome!** This guide will help you set up and use your new content management system and social media feed.

---

## 🎉 What's Been Installed

### 1. **Social Media Feed** (Instagram Widget)
- **Location**: Homepage, between Stories and Get Involved sections
- **Status**: ✅ Placeholder installed, needs Instagram connection
- **Time to complete**: 15 minutes

### 2. **Content Management System** (Decap CMS)
- **Location**: https://unidos.ug/admin
- **Status**: ✅ Interface installed, needs GitHub OAuth setup
- **Time to complete**: 30 minutes (one-time setup)

---

## 📱 Part 1: Setting Up Instagram Feed (15 minutes)

### Step 1: Get Your Instagram Widget Code

1. Go to **https://snapwidget.com/**
2. Click the blue **"Create Widget"** button
3. **Configure your widget**:
   - Layout: Choose **"Grid"**
   - Username: Enter your Instagram handle (e.g., `unidosprojects`)
   - Number of posts: **6** or **9** (recommended)
   - Columns: **3** (looks best)
   - Padding: **10 pixels**
   - Background: **White** or **#f8f9fa** (matches site)

4. Click **"Get Widget"**
5. Copy the **embed code** (looks like this):
   ```html
   <iframe src="https://snapwidget.com/embed/XXXXX" ...></iframe>
   ```

### Step 2: Add Code to Website

**Option A: If you have a developer**
Send them this message:
```
Please replace the Instagram placeholder on index.html (line ~290)
with this SnapWidget embed code: [paste code here]

Location: Inside the <div class="instagram-feed-wrapper"> element
File: index.html, around line 290
```

**Option B: Edit yourself**
1. Open `index.html` in a code editor
2. Find this section (around line 290):
   ```html
   <div class="instagram-placeholder">
   ```
3. **Replace everything** inside `<div class="instagram-feed-wrapper">...</div>` with your SnapWidget code
4. Save and push to GitHub

### Step 3: Verify It Works

1. Visit **https://unidos.ug/**
2. Scroll down to the social feed section
3. You should see your latest Instagram posts!

**Troubleshooting:**
- Feed not showing? Check your Instagram account is **public** (not private)
- Only 3-4 posts showing? That's normal if you haven't posted much recently
- Want to show only curated posts? Use a specific **hashtag filter** in SnapWidget settings

---

## 🎨 Part 2: Setting Up the CMS (30 minutes, one-time)

### What is the CMS?

The **Content Management System** lets you edit your website content (metrics, stories, programs, etc.) through a user-friendly interface - **no coding required!**

### Step 1: Enable GitHub OAuth (Required)

To access the CMS, you need to enable GitHub authentication.

#### Option 1: Using Netlify (Recommended - Free)

1. **Sign up for Netlify**:
   - Go to https://www.netlify.com/
   - Click "Sign up" → Choose "Sign up with GitHub"
   - Authorize Netlify to access your GitHub

2. **Connect your repository**:
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and select your `Unidos` repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `/` (root)
   - Click "Deploy site"

3. **Enable Identity & Git Gateway**:
   - In your Netlify dashboard, go to **Site settings** → **Identity**
   - Click "Enable Identity"
   - Scroll down to **Git Gateway** → Click "Enable Git Gateway"
   - Under **Registration preferences**, choose:
     - "Invite only" (recommended - you control who has access)

4. **Update CMS config**:
   - Edit `admin/config.yml` in your repository
   - Change the `backend` section to:
     ```yaml
     backend:
       name: git-gateway
       branch: main
     ```
   - Commit and push changes

5. **Invite yourself**:
   - In Netlify, go to **Identity** tab
   - Click "Invite users"
   - Enter your email address
   - Check your email and accept the invitation
   - Set your password

6. **Access the CMS**:
   - Go to https://unidos.ug/admin
   - Log in with your email and password
   - ✅ You're in!

#### Option 2: Using GitHub OAuth App (More technical)

See detailed instructions here: https://decapcms.org/docs/github-backend/

---

### Step 2: Understanding the CMS Interface

Once logged in, you'll see these sections:

#### **Homepage**
- **Hero Section**: Edit main headline and subtitle
- **Impact Statistics**: Update numbers (3,000+ → 3,500+, etc.)
- **About Section**: Edit the "Who We Are" content

#### **Programs**
- Add new programs (Biochar, REGESOIL, etc.)
- Edit descriptions and metrics
- Upload program images

#### **Stories**
- Add testimonials from beneficiaries
- Edit existing stories
- Mark stories as "featured" for homepage

#### **Awards & Recognition**
- Add new awards as you win them
- Update prize amounts
- Link to award websites

#### **Founder Profiles**
- Edit Paulinho and Maria's bios
- Update achievements
- Add new awards

#### **Partners**
- Add new funding partners
- Upload partner logos
- Reorder partners

#### **Site Settings**
- Update contact email
- Change social media links
- Edit navigation menu

---

### Step 3: Editing Content

#### How to Edit Existing Content:

1. **Click on a collection** (e.g., "Impact Statistics")
2. **Click on the item** you want to edit
3. **Make your changes** in the editor
4. **Click "Save"** (top right)
5. **Publish** (if using editorial workflow):
   - Click "Status: Draft" → "Set status to 'Ready'"
   - Go to "Workflow" tab → Click "Publish"
6. Changes will appear on the live site in ~2 minutes (GitHub Pages rebuild)

#### How to Add New Content:

1. **Click on a collection** (e.g., "Awards")
2. **Click "New Award"** button
3. **Fill in the form**:
   - Award Name
   - Organization
   - Year
   - Description
   - Upload logo
4. **Save and Publish**

#### How to Upload Images:

1. When editing content, click the **image field**
2. Click "Choose an image"
3. **Drag and drop** your image or click to browse
4. Image will be uploaded to `/images` folder automatically

---

## 📊 Part 3: Updating Content Regularly

### What to Update Weekly:

✅ **Impact Statistics** (when numbers change)
- Example: "3,000+ Refugees Trained" → "3,200+ Refugees Trained"
- Location: Homepage → Impact Statistics

✅ **New Stories** (add beneficiary testimonials)
- Location: Stories → New Story
- Include: Name, quote, photo, story

✅ **Program Metrics** (update production numbers)
- Example: Mushroom Lab: "152 women" → "165 women"
- Location: Programs → Select program → Edit metrics

### What to Update Monthly:

✅ **About Section** (if major changes)
✅ **New Programs** (when launching new initiatives)
✅ **Awards** (when you win recognition)

### What to Update Yearly:

✅ **Founder Profiles** (annual achievement updates)
✅ **Partner Logos** (new funders)
✅ **Hero Section Subtitle** (annual impact summary)

---

## 🎯 Best Practices

### Writing Content (Water Prompt Style)

**DO:**
- ✅ Use specific numbers ("501 farmers trained")
- ✅ Name real people ("Furaha Bahati from Burundi")
- ✅ Be honest about challenges ("We only made 4 sites instead of 6")
- ✅ Use active voice ("We trained 700 women")

**DON'T:**
- ❌ Use buzzwords ("innovative", "transformative", "holistic")
- ❌ Write vague claims ("Creating lasting change")
- ❌ Use mission statements ("Turning refugees into change makers")

### Image Guidelines

**Best sizes:**
- Program cards: 800x600 pixels
- Stories/testimonials: 1200x800 pixels
- Partner logos: 400x200 pixels (transparent PNG)
- Founder photos: 600x600 pixels (square)

**File formats:**
- Photos: **JPEG** (smaller file size)
- Logos: **PNG** (supports transparency)
- Maximum file size: **500 KB** (compress at https://tinypng.com/)

---

## 🔒 User Access & Security

### Who Has Access?

**CMS Access** (via Netlify Identity):
- Only invited users can log in
- You control who gets invitations
- Recommended: 1-3 trusted staff members

**GitHub Access** (for developers):
- Full repository access
- Can edit code directly
- Recommended: 1-2 technical staff

### How to Add/Remove Users:

1. Log into **Netlify dashboard**
2. Go to **Identity** tab
3. **Add user**: Click "Invite users" → Enter email
4. **Remove user**: Click user → "Delete user"

---

## 🚀 Next Steps

### This Week:
- [ ] Set up Instagram widget (15 min)
- [ ] Test CMS access via Netlify (30 min)
- [ ] Update impact statistics with latest numbers (10 min)
- [ ] Add one new story/testimonial (20 min)

### This Month:
- [ ] Train 1-2 staff members on CMS
- [ ] Add all existing programs to CMS
- [ ] Add all awards to CMS
- [ ] Update founder profiles
- [ ] Consider upgrading Instagram feed to Juicer.io ($19/mo) for multi-platform

### This Quarter:
- [ ] Establish weekly content update schedule
- [ ] Create content calendar (stories, updates, achievements)
- [ ] Review and update all program metrics
- [ ] Evaluate if CMS is meeting needs

---

## ❓ Troubleshooting

### "I can't access /admin"
**Solution**:
1. Check you completed Netlify setup
2. Verify you accepted the email invitation
3. Try clearing browser cache
4. Try incognito/private window

### "Changes aren't showing on live site"
**Solution**:
1. Wait 2-3 minutes for GitHub Pages to rebuild
2. Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
3. Check GitHub for failed deployments

### "Instagram feed not loading"
**Solution**:
1. Verify Instagram account is public
2. Check SnapWidget embed code is correct
3. Try regenerating widget code

### "I accidentally deleted something!"
**Solution**:
1. Go to GitHub repository
2. Click "History" on the file
3. View previous version
4. Copy content back
5. OR: Ask developer to restore from git history

---

## 📞 Getting Help

**Technical Issues** (CMS, deployment, errors):
- Contact your developer
- GitHub Issues: https://github.com/ginoludikhuyze/Unidos/issues

**Content Questions** (what to write, style guide):
- Review: `/docs/analysis/CONTENT_MANAGEMENT_SOLUTIONS.md`
- Water Prompt guide: `/policies/WATER_PROMPT.md` (coming soon)

**Feature Requests** (new CMS fields, functionality):
- Discuss with developer
- Document in `/docs/analysis/`

---

## 📚 Additional Resources

- **Decap CMS Docs**: https://decapcms.org/docs/intro/
- **Netlify Identity**: https://docs.netlify.com/visitor-access/identity/
- **SnapWidget Help**: https://snapwidget.com/support
- **Image Compression**: https://tinypng.com/
- **Markdown Guide**: https://www.markdownguide.org/basic-syntax/

---

**Questions?** Reach out to your developer or reference the full research docs in `/docs/analysis/`.

*Last updated: February 16, 2026*
