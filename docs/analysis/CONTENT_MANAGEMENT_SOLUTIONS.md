# Content Management & Social Media Integration Solutions

**Date**: February 16, 2026
**Purpose**: Research solutions to enable non-technical content updates and social media integration
**Current Limitation**: Static HTML site requires developer skills to update content

---

## 🎯 Problem Statement

### Issue 1: Content Update Constraints
Currently, the Unidos website is built with static HTML files. This means:
- ✅ **Pros**: Fast, secure, free hosting on GitHub Pages
- ❌ **Cons**: Funder/staff cannot update content without HTML/Git knowledge
- ❌ **Bottleneck**: All content changes require developer intervention

### Issue 2: Social Media Integration
The homepage lacks live social media feeds, which could:
- Show real-time updates from field work
- Build trust through authentic, current content
- Reduce manual website updates (auto-pulls from social platforms)

---

## 💡 Solution 1: Git-Based CMS (Recommended)

### Option A: **Decap CMS** (formerly Netlify CMS)
**Best for**: GitHub Pages static sites

**How it works**:
1. Adds a `/admin` page to your website
2. Non-technical users log in with GitHub credentials
3. Edit content through a visual editor (no code required)
4. Changes are committed to GitHub automatically
5. GitHub Pages auto-deploys updated site

**Implementation**:
```
1. Add admin interface files:
   /admin/
   ├── index.html (CMS UI)
   └── config.yml (define editable content)

2. Configure editable sections:
   - Program descriptions
   - Impact metrics (3,000+ farmers, etc.)
   - Stories/testimonials
   - Founder profiles
   - Awards & recognition

3. Authentication via GitHub OAuth
```

**Pros**:
- ✅ Free and open-source
- ✅ Works with existing GitHub Pages setup
- ✅ No server needed (static files only)
- ✅ Version control built-in (git history)
- ✅ Easy rollback if mistakes happen
- ✅ Mobile-friendly editing interface

**Cons**:
- ⚠️ Requires initial dev setup (1-2 days)
- ⚠️ Users need GitHub accounts
- ⚠️ Limited media management (better for text)

**Effort**: ~8-12 hours setup, ~1 hour training
**Cost**: $0/month
**Best for**: Text-heavy updates (metrics, stories, descriptions)

---

### Option B: **TinaCMS** (Visual Editing)
**Best for**: Real-time visual editing experience

**How it works**:
1. Enables inline editing directly on the website
2. Click any text/image to edit it in place
3. See changes live before publishing
4. Commits to GitHub when saved

**Implementation**:
```
1. Add TinaCMS to existing HTML site
2. Mark editable regions with data attributes
3. Configure content schema (what can be edited)
4. Deploy with GitHub Pages
```

**Pros**:
- ✅ Visual editing (WYSIWYG)
- ✅ See changes before publishing
- ✅ Intuitive for non-technical users
- ✅ Works with static sites
- ✅ Free tier available

**Cons**:
- ⚠️ More complex initial setup
- ⚠️ May require React conversion (significant refactor)
- ⚠️ Paid plans for advanced features ($29/mo+)

**Effort**: ~16-24 hours setup (requires site refactor)
**Cost**: $0-29/month
**Best for**: If planning to modernize site architecture

---

### Option C: **Forestry.io / Tina Cloud**
**Best for**: User-friendly interface, minimal dev maintenance

**How it works**:
1. Connect GitHub repository to Forestry
2. Define content models (programs, stories, etc.)
3. Non-technical users edit through web interface
4. Forestry commits changes to GitHub
5. GitHub Pages auto-deploys

**Pros**:
- ✅ Best-in-class editing experience
- ✅ Media management (upload images easily)
- ✅ Content previews before publishing
- ✅ User roles (editor, admin, etc.)
- ✅ Mobile app available

**Cons**:
- ⚠️ Forestry.io sunset in 2023, now migrated to Tina Cloud
- ⚠️ Tina Cloud has usage limits on free tier
- ⚠️ Vendor lock-in

**Effort**: ~6-10 hours setup
**Cost**: $0-15/month (depending on usage)
**Best for**: Teams with multiple content editors

---

## 💡 Solution 2: Hybrid Approach (CMS + Traditional)

### Keep critical pages as static HTML, use CMS for dynamic sections

**Strategy**:
1. **Static (developer-maintained)**:
   - Homepage structure
   - Navigation
   - Core design/layout

2. **CMS-managed (funder-editable)**:
   - Impact metrics (3,000+ farmers → easily update)
   - Program descriptions
   - Stories/testimonials
   - News/updates section
   - Awards/recognition

**Implementation**:
```
/Unidos/
├── index.html (static structure)
├── programs.html (static structure)
├── _data/
│   ├── programs.yml (CMS-editable)
│   ├── metrics.yml (CMS-editable)
│   └── stories.yml (CMS-editable)
└── admin/ (Decap CMS interface)
```

**Pros**:
- ✅ Balances control (dev) with flexibility (funder)
- ✅ Reduces dev bottleneck for content updates
- ✅ Maintains site stability (structure unchanged)

**Cons**:
- ⚠️ Requires clear documentation (what's editable vs. not)

---

## 💡 Solution 3: Social Media Live Feed Integration

### Option A: **Juicer.io** (Aggregated Social Feed)
**Best for**: Multi-platform social feed (Instagram, Facebook, Twitter/X)

**How it works**:
1. Connect social media accounts to Juicer
2. Embed a single widget on homepage
3. Auto-pulls latest posts from all platforms
4. Updates in real-time (no manual work)

**Features**:
- ✅ Aggregates Instagram, Facebook, Twitter/X, YouTube, LinkedIn
- ✅ Customizable design (matches website colors)
- ✅ Filters (hide certain posts, hashtags)
- ✅ Mobile-responsive
- ✅ No coding required (embed code)

**Implementation**:
```html
<!-- Add to index.html -->
<section class="section social-feed">
  <div class="container">
    <h2>Latest Updates from the Field</h2>
    <script src="https://www.juicer.io/embed/unidos/embed-code.js"></script>
  </div>
</section>
```

**Pricing**:
- Free: 1 feed, 100 posts, Juicer branding
- Small ($19/mo): 3 feeds, remove branding, 500 posts
- Medium ($49/mo): 10 feeds, moderation tools, analytics

**Effort**: 30 minutes setup
**Cost**: $0-19/month
**Best for**: Quick wins, immediate social proof

---

### Option B: **Instagram Feed Widget** (Free, Instagram-Only)
**Best for**: Budget-conscious, Instagram-focused

**How it works**:
1. Use free tools like EmbedSocial, SnapWidget, or Behold
2. Generate embed code for Instagram feed
3. Add to homepage

**Implementation**:
```html
<!-- Add to index.html -->
<section class="section instagram-feed">
  <div class="container">
    <h2>Follow Our Journey on Instagram</h2>
    <iframe src="https://snapwidget.com/embed/XXXXX"
            class="snapwidget-widget"
            style="border:none; width:100%; height:600px;">
    </iframe>
  </div>
</section>
```

**Pros**:
- ✅ Free options available
- ✅ Easy to implement (copy-paste)
- ✅ Lightweight (fast page load)

**Cons**:
- ⚠️ Instagram only (no Facebook/Twitter)
- ⚠️ Limited customization
- ⚠️ May include provider branding

**Effort**: 15 minutes setup
**Cost**: $0
**Best for**: Instagram-heavy social strategy

---

### Option C: **Custom Social Feed** (Developer-Built)
**Best for**: Maximum control, no monthly fees

**How it works**:
1. Use social media APIs (Instagram Basic Display API, Twitter API, Facebook Graph API)
2. Fetch latest posts programmatically
3. Display in custom-designed feed

**Implementation**:
```javascript
// Example: Fetch Instagram posts
async function loadInstagramFeed() {
  const response = await fetch('https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=YOUR_TOKEN');
  const data = await response.json();

  // Render posts on page
  data.data.forEach(post => {
    // Create HTML elements for each post
  });
}
```

**Pros**:
- ✅ No monthly fees (after dev work)
- ✅ Full design control
- ✅ No third-party branding
- ✅ Can combine multiple platforms

**Cons**:
- ⚠️ Requires developer time (~8-12 hours)
- ⚠️ API maintenance (tokens expire)
- ⚠️ More complex troubleshooting

**Effort**: ~8-12 hours development
**Cost**: $0/month (after initial dev)
**Best for**: Long-term investment, unique design needs

---

## 📊 Recommendation Matrix

### For Content Management:

| Use Case | Recommended Solution | Reasoning |
|----------|---------------------|-----------|
| **Quick win, minimal budget** | Decap CMS | Free, works with GitHub Pages, 1-2 day setup |
| **Best user experience** | Forestry/Tina Cloud | Easiest for non-technical users, worth $15/mo |
| **Long-term flexibility** | Hybrid (CMS + static) | Balance stability with editability |
| **Planning site redesign** | TinaCMS + React refactor | Future-proof, modern stack |

### For Social Media Feed:

| Use Case | Recommended Solution | Reasoning |
|----------|---------------------|-----------|
| **Quick win, $0 budget** | Instagram Widget (Free) | 15 min setup, immediate results |
| **Multi-platform feed** | Juicer.io ($19/mo) | Aggregates all platforms, professional look |
| **Long-term investment** | Custom API Integration | No monthly fees, full control |
| **Best social proof** | Juicer.io ($19/mo) | Shows activity across platforms |

---

## 🚀 Recommended Implementation Plan

### Phase 1: Quick Wins (Week 1)
1. ✅ Add free Instagram feed widget to homepage
   - Tool: SnapWidget or EmbedSocial (free tier)
   - Location: Above "Get Involved" section on [index.html](../index.html)
   - Effort: 15 minutes
   - Cost: $0

2. ✅ Set up Decap CMS for basic content editing
   - Create `/admin` folder with CMS config
   - Define editable sections (metrics, stories, programs)
   - Train funder on how to log in and edit
   - Effort: 8 hours dev + 1 hour training
   - Cost: $0

**Result**: Funder can update text content + live social proof on homepage

---

### Phase 2: Enhanced Experience (Month 1)
1. ✅ Upgrade to Juicer.io for multi-platform feed
   - Connect Instagram, Facebook, Twitter/X
   - Customize design to match Unidos brand
   - Add moderation (filter out low-quality posts)
   - Effort: 1 hour
   - Cost: $19/month

2. ✅ Expand CMS coverage to all editable sections
   - Founder profiles (Paulinho, Maria)
   - Awards & recognition
   - Program metrics
   - Effort: 4 hours
   - Cost: $0

**Result**: Comprehensive content control + professional social feed

---

### Phase 3: Advanced (Quarter 2-3)
1. ✅ Build custom social API integration (optional)
   - Eliminate monthly fee for Juicer
   - Custom design matching site aesthetic
   - Effort: 12 hours
   - Cost: $0/month (saves $228/year)

2. ✅ Evaluate migration to TinaCMS + modern framework
   - If planning major site redesign
   - Future-proof for scaling
   - Effort: 16-24 hours
   - Cost: $0-29/month

---

## 📋 Next Steps

### Immediate Actions:
1. **Decision**: Which CMS solution? (Recommend: Decap CMS)
2. **Decision**: Which social feed? (Recommend: Free Instagram widget → Juicer.io)
3. **Setup**: Schedule 1 day for dev work (CMS + social feed)
4. **Training**: 1-hour session with funder on content editing

### Questions for Funder:
1. Which social platforms are most active? (Instagram, Facebook, Twitter/X?)
2. Who needs editing access? (Just funder, or multiple staff?)
3. What content is updated most frequently? (Metrics, stories, programs?)
4. Budget for social feed tool? ($0 vs. $19/mo vs. custom dev)

---

## 🔗 Resources

### Decap CMS:
- Documentation: https://decapcms.org/docs/intro/
- GitHub: https://github.com/decaporg/decap-cms
- Setup guide for GitHub Pages: https://decapcms.org/docs/github-backend/

### TinaCMS:
- Website: https://tina.io/
- Documentation: https://tina.io/docs/
- Pricing: https://tina.io/pricing/

### Social Feed Tools:
- Juicer.io: https://www.juicer.io/
- SnapWidget: https://snapwidget.com/
- EmbedSocial: https://embedsocial.com/products/embedfeed/
- Instagram Basic Display API: https://developers.facebook.com/docs/instagram-basic-display-api

---

## 💡 Alternative: No-Code Website Builders

If the HTML maintenance becomes too burdensome long-term, consider migrating to:

### Webflow (Recommended)
- Visual website builder (no code)
- Built-in CMS (funder can edit easily)
- Professional templates
- $14-23/month hosting

### WordPress + Elementor
- Most popular CMS globally
- Huge plugin ecosystem
- Easy content editing
- $5-15/month hosting (Cloudways, SiteGround)

**Trade-offs**:
- ❌ Migration effort (rebuild site)
- ❌ Monthly hosting costs
- ✅ Much easier long-term maintenance
- ✅ Non-technical user independence

**Timeline**: 2-4 weeks for full migration
**Cost**: $14-23/month

---

*This document provides pathways to empower the funder with content control while maintaining site quality and adding live social proof to the homepage.*
