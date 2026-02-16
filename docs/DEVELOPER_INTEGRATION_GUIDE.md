# Developer Integration Guide - CMS & Social Feed

**Purpose**: Technical guide for developers to complete the CMS integration
**Audience**: Developers with HTML/JavaScript knowledge
**Time**: ~2-4 hours for full integration

---

## 🎯 What's Been Set Up

### ✅ Completed:
1. **Social media feed section** added to [index.html](../index.html) (line ~270)
2. **CSS styling** for social feed added to [css/style.css](../css/style.css)
3. **Decap CMS admin interface** created at `/admin`
4. **Data structure** created in `/_data` folder with YAML files
5. **CMS configuration** at `/admin/config.yml`

### ⚠️ Needs Integration:
1. **YAML data → HTML rendering** (manual or via Jekyll/11ty)
2. **GitHub OAuth setup** for CMS access
3. **Instagram widget embed code** replacement
4. **Media library configuration** (optional)

---

## 📋 Option 1: Quick Integration (Manual, No Build Process)

### Use Case:
- Want to keep static HTML
- Don't want to add a build process
- Funder updates YAML, dev manually updates HTML

### Steps:

1. **Funder edits YAML files** via CMS (`/_data/*.yml`)
2. **Developer reads YAML and updates HTML** manually or via script
3. **Changes committed to GitHub**

### Implementation:

#### Add JavaScript to Read YAML (Optional)

Create `js/data-loader.js`:

```javascript
// Load YAML data and update HTML
async function loadSiteData() {
  try {
    // Load impact stats
    const statsResponse = await fetch('/_data/impact_stats.yml');
    const statsText = await statsResponse.text();
    const stats = parseYAML(statsText);  // Use js-yaml library

    // Update DOM
    updateImpactStats(stats);
  } catch (error) {
    console.error('Error loading site data:', error);
  }
}

// Simple YAML parser (or use js-yaml library)
function parseYAML(text) {
  // Use https://github.com/nodeca/js-yaml
  return jsyaml.load(text);
}

function updateImpactStats(data) {
  const statsGrid = document.querySelector('.stats-grid');
  statsGrid.innerHTML = '';

  data.stats.forEach(stat => {
    const card = `
      <div class="stat-card">
        <span class="stat-number">${stat.number}</span>
        <span class="stat-label">${stat.label}</span>
        <p>${stat.description}</p>
      </div>
    `;
    statsGrid.innerHTML += card;
  });
}

// Run on page load
document.addEventListener('DOMContentLoaded', loadSiteData);
```

Add to `index.html` before closing `</body>`:
```html
<script src="https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js"></script>
<script src="js/data-loader.js"></script>
```

**Pros**: No build process, simple
**Cons**: Manual updates, not ideal for complex data

---

## 📋 Option 2: Full Integration (Jekyll, Recommended)

### Use Case:
- Want automated YAML → HTML conversion
- Funder edits, site auto-rebuilds
- Professional setup

### Steps:

1. **Install Jekyll** (GitHub Pages supports this natively)
2. **Convert HTML to Jekyll templates**
3. **Use Liquid to render YAML data**
4. **GitHub Pages auto-builds on push**

### Implementation:

#### Step 1: Enable Jekyll

Create `_config.yml` in root:

```yaml
# Jekyll Configuration
title: Unidos Social Innovation Center
description: Award-winning refugee-led organization in Nakivale, Uganda
url: https://unidos.ug
baseurl: ""

# Collections
collections:
  programs:
    output: false
  stories:
    output: true
    permalink: /stories/:title/
  awards:
    output: false
  founders:
    output: true
    permalink: /founders/:title/

# Defaults
defaults:
  - scope:
      path: ""
    values:
      layout: default

# Plugins (GitHub Pages compatible)
plugins:
  - jekyll-feed
  - jekyll-seo-tag

# Exclude from build
exclude:
  - README.md
  - docs/
  - leadership/
```

#### Step 2: Create Layout Template

Create `_layouts/default.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ page.title | default: site.title }}</title>
    <link rel="stylesheet" href="/css/style.css">
    {% seo %}
</head>
<body>
    {% include header.html %}

    {{ content }}

    {% include footer.html %}
    <script src="/js/main.js"></script>
</body>
</html>
```

#### Step 3: Convert index.html to Use Data

Rename `index.html` → `index.md` (or keep `.html`) and add front matter:

```html
---
layout: default
title: Home
---

<!-- Hero Section -->
<section class="hero">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
        <h1>{{ site.data.homepage_hero.title }}</h1>
        <p class="hero-subtitle">{{ site.data.homepage_hero.subtitle }}</p>
        <div class="hero-buttons">
            <a href="#programs" class="btn btn-primary">{{ site.data.homepage_hero.primary_button }}</a>
            <a href="#donate" class="btn btn-outline">{{ site.data.homepage_hero.secondary_button }}</a>
        </div>
    </div>
</section>

<!-- Impact Section -->
<section class="section impact" id="impact">
    <div class="impact-overlay"></div>
    <div class="container">
        <div class="section-header centered light">
            <span class="section-label">Our Impact</span>
            <h2>Creating Lasting Change</h2>
        </div>
        <div class="stats-grid">
            {% for stat in site.data.impact_stats.stats %}
            <div class="stat-card">
                <span class="stat-number">{{ stat.number }}</span>
                <span class="stat-label">{{ stat.label }}</span>
                <p>{{ stat.description }}</p>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<!-- Programs Section -->
<section class="section programs" id="programs">
    <div class="container">
        <div class="section-header centered">
            <span class="section-label">What We Do</span>
            <h2>Our Programs</h2>
        </div>
        <div class="programs-grid">
            {% assign sorted_programs = site.data.programs | sort: 'order' %}
            {% for program_hash in sorted_programs %}
                {% assign program = program_hash[1] %}
                <div class="program-card">
                    <div class="program-icon">
                        {{ program.icon }}
                    </div>
                    <h3>{{ program.title }}</h3>
                    <p>{{ program.description }}</p>
                    {% if program.metrics %}
                        <p class="program-metrics"><strong>{{ program.metrics }}</strong></p>
                    {% endif %}
                </div>
            {% endfor %}
        </div>
    </div>
</section>
```

#### Step 4: Test Locally

```bash
# Install Jekyll
gem install bundler jekyll

# Create Gemfile
echo "source 'https://rubygems.org'
gem 'github-pages', group: :jekyll_plugins" > Gemfile

# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Visit http://localhost:4000
```

#### Step 5: Deploy

```bash
# Commit changes
git add .
git commit -m "feat: integrate Jekyll with Decap CMS"
git push origin main

# GitHub Pages will auto-build Jekyll site
# CMS edits → YAML updates → Jekyll rebuilds → Live site updates
```

**Pros**: Fully automated, professional, scalable
**Cons**: Requires Jekyll knowledge, more complex setup

---

## 🔐 Setting Up GitHub OAuth

### Option A: Netlify (Easiest)

1. **Deploy to Netlify**:
   ```bash
   # Connect GitHub repo to Netlify via dashboard
   # Settings:
   # - Build command: jekyll build (or leave empty for plain HTML)
   # - Publish directory: _site (or / for plain HTML)
   ```

2. **Enable Identity**:
   - Netlify Dashboard → Site Settings → Identity → Enable Identity
   - Scroll to Git Gateway → Enable Git Gateway

3. **Update CMS config** (`admin/config.yml`):
   ```yaml
   backend:
     name: git-gateway
     branch: main
   ```

4. **Invite users**:
   - Identity tab → Invite users → Enter email
   - User receives invite → Sets password

### Option B: GitHub OAuth App (Advanced)

1. **Create OAuth App**:
   - GitHub → Settings → Developer settings → OAuth Apps → New
   - Application name: `Unidos CMS`
   - Homepage URL: `https://unidos.ug`
   - Callback URL: `https://api.netlify.com/auth/done` (or your auth endpoint)

2. **Save credentials**:
   - Copy Client ID and Client Secret

3. **Deploy OAuth proxy**: https://github.com/vencax/netlify-cms-github-oauth-provider

4. **Update CMS config**:
   ```yaml
   backend:
     name: github
     repo: ginoludikhuyze/Unidos
     branch: main
     base_url: https://your-oauth-proxy.herokuapp.com
   ```

---

## 📱 Replacing Instagram Placeholder

### Step 1: Get SnapWidget Code

Funder should follow instructions in [SETUP_GUIDE_FOR_FUNDER.md](./SETUP_GUIDE_FOR_FUNDER.md)

### Step 2: Replace Placeholder

In `index.html`, find (around line 290):

```html
<div class="instagram-feed-wrapper">
    <div class="instagram-placeholder">
        <!-- Placeholder content -->
    </div>
</div>
```

Replace with:

```html
<div class="instagram-feed-wrapper">
    <!-- PASTE SNAPWIDGET CODE HERE -->
    <iframe src="https://snapwidget.com/embed/XXXXX"
            class="snapwidget-widget"
            allowtransparency="true"
            frameborder="0"
            scrolling="no"
            style="border:none; overflow:hidden; width:100%; max-width:1200px; margin: 0 auto; display: block;">
    </iframe>
</div>
```

### Step 3: (Optional) Make it Editable via CMS

Add to `admin/config.yml`:

```yaml
- name: "settings"
  label: "Site Settings"
  files:
    - name: "social_feed"
      label: "Social Media Feed"
      file: "_data/social_feed.yml"
      fields:
        - {label: "Instagram Embed Code", name: "instagram_embed", widget: "text", hint: "Paste SnapWidget embed code"}
```

Then use in HTML:

```html
<div class="instagram-feed-wrapper">
    {{ site.data.social_feed.instagram_embed }}
</div>
```

---

## 🎨 Customization Options

### Theme Colors

Update in `admin/config.yml`:

```yaml
# After publish_mode line:
logo_url: https://unidos.ug/images/unidos-logo.png
site_url: https://unidos.ug
display_url: https://unidos.ug

# Optional: custom preview styles
media_folder: "images"
public_folder: "/images"

# Custom CSS for editor
editor:
  preview: true
```

### Custom Preview Templates

Create `admin/preview-templates/ProgramPreview.js`:

```javascript
var ProgramPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    return h('div', {"className": "program-card"},
      h('h3', {}, entry.getIn(['data', 'title'])),
      h('p', {}, entry.getIn(['data', 'description'])),
      h('p', {"className": "program-metrics"},
        h('strong', {}, entry.getIn(['data', 'metrics']))
      )
    );
  }
});

CMS.registerPreviewTemplate("programs", ProgramPreview);
```

Add to `admin/index.html`:
```html
<script src="preview-templates/ProgramPreview.js"></script>
```

---

## 🧪 Testing Checklist

### Before Deploying:

- [ ] CMS accessible at `/admin`
- [ ] Can log in with GitHub/Netlify Identity
- [ ] Can edit YAML files via CMS
- [ ] Changes save to GitHub
- [ ] Site rebuilds after changes (if using Jekyll)
- [ ] Instagram feed loads correctly
- [ ] Mobile responsive (test on phone)
- [ ] All images load
- [ ] No console errors (check DevTools)
- [ ] Links work (especially social links)

### After Deploying:

- [ ] Train funder on CMS access (15 min)
- [ ] Test adding a new story
- [ ] Test updating impact stats
- [ ] Verify changes appear on live site (2-3 min delay)
- [ ] Test rollback (if mistake made)

---

## 📊 Performance Monitoring

### Add to `index.html` `<head>`:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    'anonymize_ip': true,
    'cookie_flags': 'SameSite=None;Secure'
  });
</script>
```

Track social feed engagement:

```javascript
// Already added to "Follow Us on Instagram" button:
onclick="gtag('event', 'click', {'event_category': 'social', 'event_label': 'instagram_follow'});"
```

---

## 🔧 Troubleshooting

### CMS not loading
- Check `admin/config.yml` syntax (use YAML validator)
- Verify GitHub repo path is correct
- Check browser console for errors

### Changes not appearing
- Wait 2-3 min for GitHub Pages rebuild
- Check GitHub Actions for build errors
- Hard refresh browser (Cmd+Shift+R)

### YAML parsing errors
- Validate YAML at https://www.yamllint.com/
- Check indentation (use spaces, not tabs)
- Ensure colons have space after them (`key: value` not `key:value`)

---

## 📚 Resources

- **Decap CMS**: https://decapcms.org/docs/
- **Jekyll**: https://jekyllrb.com/docs/
- **Liquid Templates**: https://shopify.github.io/liquid/
- **GitHub Pages**: https://docs.github.com/en/pages
- **YAML Syntax**: https://yaml.org/spec/1.2/spec.html

---

*For non-technical setup, see [SETUP_GUIDE_FOR_FUNDER.md](./SETUP_GUIDE_FOR_FUNDER.md)*
