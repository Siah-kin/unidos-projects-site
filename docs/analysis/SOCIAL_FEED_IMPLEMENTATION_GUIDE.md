# Social Media Feed - Quick Implementation Guide

**Date**: February 16, 2026
**Estimated Time**: 15-30 minutes
**Cost**: $0 (free tier)

---

## 📍 Recommended Placement on Homepage

Looking at your current [index.html](../../index.html), here are the best locations for a social media feed:

### **Option 1: Between "Stories" and "Get Involved" (RECOMMENDED)**

**Current flow**:
```
Hero → About → Programs → Impact Stats → Stories (Mariam) → Get Involved → Contact → Partners → Awards
```

**New flow**:
```
Hero → About → Programs → Impact Stats → Stories (Mariam) → 📱 SOCIAL FEED → Get Involved → Contact → Partners → Awards
```

**Why here?**:
- ✅ Builds on storytelling momentum (after Mariam's story)
- ✅ Shows live proof before donation ask
- ✅ Natural transition from "here's one story" → "here's what we're doing right now"
- ✅ Keeps users engaged scrolling down

**Insert location**: After line 176 (closing `</section>` of Stories section)

---

### **Option 2: Replace Static Impact Stats with Live Social Feed**

**Current**: Static numbers (3,000+ trained, 700+ women, etc.)

**Alternative**: Make this section dynamic with social posts showing:
- Photos from field work
- Video testimonials
- Real-time updates

**Why here?**:
- ✅ Proves impact with real content (not just numbers)
- ✅ More engaging than static stats
- ✅ High visibility (near top of page)

**Trade-off**: Loses quantitative metrics (could combine both)

---

## 🚀 Quick Implementation: Free Instagram Feed

### Step 1: Choose a Free Tool

#### **SnapWidget** (Recommended for beginners)
1. Go to https://snapwidget.com/
2. Click "Create Widget"
3. Select "Grid" layout
4. Enter Unidos Instagram username
5. Customize design (colors, spacing)
6. Copy embed code

#### **EmbedSocial** (More features, free tier)
1. Go to https://embedsocial.com/products/embedfeed/
2. Sign up for free account
3. Connect Instagram account
4. Choose layout (grid, carousel, masonry)
5. Generate embed code

---

### Step 2: Add to Homepage

#### HTML Code to Add:

```html
<!-- Social Media Feed Section -->
<section class="section social-feed" id="social">
    <div class="container">
        <div class="section-header centered">
            <span class="section-label">Live from the Field</span>
            <h2>What We're Working On <span class="highlight">Right Now</span></h2>
            <p>Follow our daily progress, stories, and impact through our social media channels.</p>
        </div>

        <!-- Instagram Feed Embed -->
        <div class="instagram-feed-wrapper">
            <!-- PASTE YOUR EMBED CODE HERE -->
            <!-- Example from SnapWidget: -->
            <iframe src="https://snapwidget.com/embed/XXXXX"
                    class="snapwidget-widget"
                    allowtransparency="true"
                    frameborder="0"
                    scrolling="no"
                    style="border:none; overflow:hidden; width:100%; max-width:1200px; margin: 0 auto;">
            </iframe>
        </div>

        <!-- Call to Action -->
        <div style="text-align: center; margin-top: 2rem;">
            <a href="https://instagram.com/unidosprojects"
               target="_blank"
               class="btn btn-secondary">
                Follow Us on Instagram
            </a>
        </div>
    </div>
</section>
```

#### CSS Styling (add to [css/style.css](../../css/style.css)):

```css
/* Social Media Feed Section */
.social-feed {
    background: #f9f9f9;
    padding: 4rem 0;
}

.instagram-feed-wrapper {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.instagram-feed-wrapper iframe {
    display: block;
    width: 100%;
    min-height: 600px;
}

/* Mobile responsive */
@media (max-width: 768px) {
    .instagram-feed-wrapper iframe {
        min-height: 400px;
    }
}
```

---

### Step 3: Insert into index.html

**Location**: After the Stories section (line 176)

**Before**:
```html
    </section>

    <!-- Get Involved Section -->
    <section class="section get-involved" id="donate">
```

**After**:
```html
    </section>

    <!-- Social Media Feed Section -->
    <section class="section social-feed" id="social">
        <!-- NEW CONTENT HERE -->
    </section>

    <!-- Get Involved Section -->
    <section class="section get-involved" id="donate">
```

---

## 🎨 Design Variations

### Variation 1: Grid Layout (Recommended)
- Shows 6-12 recent posts in a grid
- Clean, organized look
- Best for desktop + mobile

### Variation 2: Carousel/Slider
- Horizontal scrolling posts
- Saves vertical space
- More interactive

### Variation 3: Masonry/Pinterest Style
- Staggered heights
- Dynamic, visual interest
- Best for photo-heavy content

---

## 📊 Upgrade Path: Juicer.io (Multi-Platform)

If you want to combine Instagram + Facebook + Twitter/X:

### Setup:
1. Go to https://www.juicer.io/
2. Sign up for free account (or $19/mo for branded)
3. Connect social accounts:
   - Instagram: @unidosprojects
   - Facebook: Unidos page
   - Twitter/X: @unidos (if applicable)
4. Configure feed:
   - Select which posts appear
   - Filter by hashtag (#unidosprojects)
   - Moderate (hide low-quality posts)
5. Customize design:
   - Match Unidos colors (#4a7c2e green)
   - Grid or masonry layout
   - Hover effects
6. Generate embed code

### Embed Code Example:
```html
<script src="https://assets.juicer.io/embed.js" type="text/javascript"></script>
<link href="https://assets.juicer.io/embed.css" media="all" rel="stylesheet" type="text/css" />
<ul class="juicer-feed" data-feed-id="unidosprojects"></ul>
```

**Pricing**:
- Free: 100 posts, Juicer branding
- Small ($19/mo): Remove branding, 500 posts, 3 feeds
- Medium ($49/mo): 10 feeds, analytics, moderation

---

## ✅ Testing Checklist

Before deploying:

- [ ] Social feed loads on desktop
- [ ] Social feed loads on mobile
- [ ] Images display correctly
- [ ] Links open in new tab (target="_blank")
- [ ] Page load time is acceptable (<3 seconds)
- [ ] Feed auto-updates with new posts
- [ ] Styling matches Unidos brand colors
- [ ] "Follow Us" button works
- [ ] No console errors (check browser DevTools)

---

## 🔧 Troubleshooting

### Feed not loading?
- Check embed code is pasted correctly
- Verify Instagram account is public (not private)
- Clear browser cache and refresh

### Styling looks broken?
- Check CSS file loaded correctly
- Inspect element (F12) to see what styles are applying
- Ensure no conflicting CSS rules

### Instagram API limits?
- Free tools have rate limits (number of requests per hour)
- If exceed limits, feed may stop updating temporarily
- Solution: Upgrade to paid plan or use cached version

---

## 📈 Analytics & Tracking

To measure impact of social feed:

### Google Analytics Events:
Add tracking to "Follow Us" button:

```html
<a href="https://instagram.com/unidosprojects"
   target="_blank"
   class="btn btn-secondary"
   onclick="gtag('event', 'click', {'event_category': 'social', 'event_label': 'instagram_follow'});">
    Follow Us on Instagram
</a>
```

### Metrics to Track:
- Click-through rate to social profiles
- Time spent on page (does social feed increase engagement?)
- Scroll depth (do users scroll past social feed to donation section?)
- Conversion rate (donations before vs. after adding social feed)

---

## 🎯 Content Strategy for Social Feed

To maximize impact, ensure social media posts include:

### Best Practices:
1. **High-quality photos** (field work, beneficiaries, products)
2. **Specific metrics** ("Today we trained 15 farmers in biochar production")
3. **Real people** (names, villages, testimonials)
4. **Behind-the-scenes** (compost piles, mushroom labs, workshops)
5. **Consistency** (post 3-5x/week minimum for active feed)

### Hashtag Strategy:
- #UnidosProjects (brand hashtag)
- #RefugeeLedInnovation
- #RegenerativeAgriculture
- #NakivaleRefugeeCamp
- #SocialEnterprise
- #UgandaNGO

---

## 📱 Mobile Optimization

**Critical**: Most visitors view on mobile, so ensure:

```css
/* Mobile-first social feed */
@media (max-width: 768px) {
    .social-feed {
        padding: 2rem 0;
    }

    .section-header h2 {
        font-size: 1.8rem;
    }

    .instagram-feed-wrapper {
        padding: 0;
    }

    /* Stack posts vertically on mobile */
    .instagram-feed-wrapper iframe {
        min-height: 500px;
    }
}
```

---

## 🚀 Next Steps

### Immediate (Today):
1. [ ] Choose free Instagram widget tool (SnapWidget recommended)
2. [ ] Generate embed code
3. [ ] Test on local copy of website
4. [ ] Verify mobile responsiveness
5. [ ] Deploy to live site

### Week 1:
1. [ ] Monitor feed performance
2. [ ] Gather feedback from team
3. [ ] Adjust styling if needed
4. [ ] Create social posting schedule (3-5x/week)

### Month 1:
1. [ ] Evaluate upgrade to Juicer.io ($19/mo) for multi-platform
2. [ ] Connect Facebook + Twitter/X feeds
3. [ ] Analyze engagement metrics
4. [ ] Decide if worth investment

---

## 💡 Pro Tips

1. **Curate content**: Use hashtags to filter which posts appear (#unidosofficial for curated posts only)
2. **Update regularly**: Social feed is only valuable if social accounts are active
3. **Moderate**: Hide low-quality posts using feed settings
4. **Test on mobile first**: Most users will see feed on phones
5. **Measure impact**: Track if social feed increases donations/engagement

---

**Questions?** Test the free Instagram widget first, then decide if multi-platform aggregation (Juicer) is worth the $19/month investment.
