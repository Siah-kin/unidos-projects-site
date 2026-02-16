### I18N & Navigation Implementation Guide

## Overview

Complete implementation guide for adding multilingual support (i18n) and updated navigation with REGESOIL and Women's Circle initiatives to all Unidos website pages.

## Languages Supported

Unidos operates in Nakivale Refugee Settlement, which hosts refugees from multiple countries. We support 6 languages:

| Code | Language | Native Name | Flag | Speakers |
|------|----------|-------------|------|----------|
| `en` | English | English | 🇬🇧 | Official/International |
| `sw` | Swahili | Kiswahili | 🇹🇿 | Regional lingua franca |
| `rw` | Kinyarwanda | Ikinyarwanda | 🇷🇼 | Rwandan refugees |
| `fr` | French | Français | 🇫🇷 | Congolese refugees |
| `rn` | Kirundi | Ikirundi | 🇧🇮 | Burundian refugees |
| `so` | Somali | Soomaali | 🇸🇴 | Somali refugees |

## Files Created

1. **`/static/js/i18n-enhanced.js`** - Enhanced i18n system with all translations
2. **`/static/css/language-switcher.css`** - Language switcher styling
3. **`/static/index-i18n-complete.html`** - Reference implementation

## Step-by-Step Implementation

### Step 1: Add CSS and JS Files

Add these lines to the `<head>` section of ALL HTML files:

```html
<!-- Existing styles -->
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/navigation-redesign.css">

<!-- NEW: Add these two -->
<link rel="stylesheet" href="css/language-switcher.css">
```

Add this BEFORE closing `</body>` tag:

```html
<!-- NEW: Add i18n before navigation.js -->
<script src="js/i18n-enhanced.js"></script>
<script src="js/navigation.js"></script>
</body>
```

### Step 2: Update Header Navigation

Replace the entire `<header>` section with this new structure:

```html
<header class="header" id="header">
    <div class="container header-container">
        <!-- Logo -->
        <a href="index.html" class="logo">
            <img src="images/unidos-logo.png" alt="Unidos" class="logo-img">
            <span class="logo-text">Unidos Projects</span>
        </a>

        <!-- Navigation -->
        <nav class="nav" id="nav">
            <ul class="nav-list">
                <!-- About -->
                <li>
                    <a href="about.html" data-i18n="nav.about">About Us</a>
                </li>

                <!-- Initiatives Dropdown -->
                <li class="has-dropdown">
                    <a href="#initiatives" data-i18n="nav.initiatives">Initiatives</a>
                    <div class="dropdown-menu mega-dropdown">
                        <div class="mega-dropdown-grid">
                            <!-- REGESOIL -->
                            <div class="mega-dropdown-section">
                                <h3 class="dropdown-section-title">
                                    <span class="dropdown-section-icon">🌱</span>
                                    <span data-i18n="regesoil.name">REGESOIL</span>
                                </h3>
                                <p style="font-size: 0.9rem; color: var(--color-gray); margin-bottom: 1rem; padding: 0 1rem;" data-i18n="regesoil.description">
                                    Award-winning soil regeneration program
                                </p>
                                <ul class="dropdown-links">
                                    <li>
                                        <a href="regesoil.html" style="font-weight: 700; color: var(--color-primary);">
                                            📍 <span data-i18n="regesoil.overview_link">REGESOIL Overview</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="programs.html#vermicomposting" data-i18n="regesoil.vermicomposting">
                                            Permaculture & Vermicomposting
                                        </a>
                                    </li>
                                    <li>
                                        <a href="programs.html#biochar" data-i18n="regesoil.biochar">
                                            Biochar Production
                                        </a>
                                    </li>
                                    <li>
                                        <a href="programs.html#regenerative-agriculture" data-i18n="regesoil.food_forests">
                                            Food Forest Design
                                        </a>
                                    </li>
                                    <li>
                                        <a href="programs.html#arborloo" data-i18n="regesoil.arborloo">
                                            Arborloo Toilets
                                        </a>
                                    </li>
                                    <li>
                                        <a href="programs.html#education" data-i18n="regesoil.training">
                                            Farmer Training
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <!-- Women's Circle -->
                            <div class="mega-dropdown-section">
                                <h3 class="dropdown-section-title">
                                    <span class="dropdown-section-icon">👭</span>
                                    <span data-i18n="womens_circle.name">Women's Circle</span>
                                </h3>
                                <p style="font-size: 0.9rem; color: var(--color-gray); margin-bottom: 1rem; padding: 0 1rem;" data-i18n="womens_circle.description">
                                    Supporting women through health & income
                                </p>
                                <ul class="dropdown-links">
                                    <li>
                                        <a href="womens-circle.html" style="font-weight: 700; color: var(--color-accent);">
                                            📍 <span data-i18n="womens_circle.overview_link">Women's Circle Overview</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="programs.html#womens-circle" data-i18n="womens_circle.health_education">
                                            Women's Health Education
                                        </a>
                                    </li>
                                    <li>
                                        <a href="programs.html#mushroom-lab" data-i18n="womens_circle.mushroom_lab">
                                            Mushroom Cultivation
                                        </a>
                                    </li>
                                    <li>
                                        <a href="programs.html#womens-empowerment" data-i18n="womens_circle.empowerment">
                                            Economic Development
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- Blog -->
                <li>
                    <a href="blog.html" data-i18n="nav.blog">Blog</a>
                </li>

                <!-- History -->
                <li>
                    <a href="history.html" data-i18n="nav.history">History</a>
                </li>

                <!-- Contact -->
                <li>
                    <a href="contact.html" data-i18n="nav.contact">Contact</a>
                </li>
            </ul>
        </nav>

        <!-- Language Switcher -->
        <div id="language-switcher-placeholder"></div>

        <!-- Donate Button -->
        <a href="donate.html" class="btn btn-accent" data-i18n="nav.donate">Donate</a>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</header>
```

### Step 3: Add Language Attribute to HTML

Update the opening `<html>` tag:

```html
<!-- Before -->
<html lang="en">

<!-- After -->
<html lang="en">
```

The i18n JavaScript will automatically update this based on user selection.

### Step 4: Add i18n Attributes to Content

Add `data-i18n` attributes to translatable elements throughout your pages:

#### Example: Page Headings

```html
<!-- Before -->
<h1>About Unidos</h1>

<!-- After -->
<h1 data-i18n="about.page_title">About Unidos</h1>
```

#### Example: Buttons

```html
<!-- Before -->
<a href="donate.html" class="btn btn-primary">Donate</a>

<!-- After -->
<a href="donate.html" class="btn btn-primary" data-i18n="nav.donate">Donate</a>
```

#### Example: Paragraphs

```html
<!-- Before -->
<p>Training programs in agriculture...</p>

<!-- After -->
<p data-i18n="programs.page_subtitle">Training programs in agriculture...</p>
```

### Step 5: Update Footer

Add language switcher to footer:

```html
<footer class="footer" style="background: var(--color-dark); color: white; padding: 3rem 0;">
    <div class="container">
        <!-- Footer Language Switcher -->
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

        <!-- Copyright -->
        <div style="text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="margin: 0; color: rgba(255,255,255,0.7);" data-i18n="footer.copyright">
                © 2026 Unidos Projects. All rights reserved.
            </p>
        </div>
    </div>
</footer>
```

## Translation Keys Reference

### Navigation
```javascript
data-i18n="nav.about"          // About Us
data-i18n="nav.initiatives"    // Initiatives
data-i18n="nav.programs"       // Programs
data-i18n="nav.blog"           // Blog
data-i18n="nav.history"        // History
data-i18n="nav.contact"        // Contact
data-i18n="nav.donate"         // Donate
```

### REGESOIL
```javascript
data-i18n="regesoil.name"                // REGESOIL
data-i18n="regesoil.tagline"            // Regenerate the Soil
data-i18n="regesoil.description"        // Award-winning soil...
data-i18n="regesoil.overview_link"      // REGESOIL Overview
data-i18n="regesoil.vermicomposting"    // Permaculture & Vermicomposting
data-i18n="regesoil.biochar"            // Biochar Production
data-i18n="regesoil.food_forests"       // Food Forest Design
data-i18n="regesoil.arborloo"           // Arborloo Toilets
data-i18n="regesoil.training"           // Farmer Training
data-i18n="regesoil.farmers_trained"    // Farmers Trained
data-i18n="regesoil.compost_produced"   // Worm Compost/Year
data-i18n="regesoil.awards_count"       // 4-Time Award Winner
```

### Women's Circle
```javascript
data-i18n="womens_circle.name"              // Women's Circle
data-i18n="womens_circle.tagline"           // Health, Income, Independence
data-i18n="womens_circle.description"       // Supporting women...
data-i18n="womens_circle.overview_link"     // Women's Circle Overview
data-i18n="womens_circle.health_education"  // Women's Health Education
data-i18n="womens_circle.mushroom_lab"      // Mushroom Cultivation
data-i18n="womens_circle.empowerment"       // Economic Development
data-i18n="womens_circle.women_supported"   // Women Supported
data-i18n="womens_circle.women_trained"     // Trained in Mushroom Farming
```

### Common
```javascript
data-i18n="common.learn_more"       // Learn More
data-i18n="common.read_more"        // Read More
data-i18n="common.view_all"         // View All
data-i18n="common.select_language"  // Language
```

## Files to Update

Apply the navigation and i18n changes to all these files:

- [ ] `/static/index.html`
- [ ] `/static/about.html`
- [ ] `/static/programs.html`
- [ ] `/static/blog.html` (formerly stories.html)
- [ ] `/static/history.html` (formerly diary.html)
- [ ] `/static/contact.html`
- [ ] `/static/donate.html`
- [ ] `/static/awards.html`
- [ ] `/static/regesoil.html` (new)
- [ ] `/static/womens-circle.html` (new)

## Adding New Translations

To add a new translation key:

1. Open `/static/js/i18n-enhanced.js`
2. Add your key to the appropriate section:

```javascript
programs: {
    new_key: {
        en: "English text",
        sw: "Swahili text",
        rw: "Kinyarwanda text",
        fr: "French text",
        rn: "Kirundi text",
        so: "Somali text"
    }
}
```

3. Use in HTML with `data-i18n="programs.new_key"`

## Translation Workflow

### Getting Professional Translations

For content not yet translated:

1. **English First**: Write content in English
2. **French**: Get professional translation (for Congolese refugees)
3. **Swahili**: Get professional translation (regional lingua franca)
4. **Other Languages**: Community-source or professional translation

### Translation Resources

- **Google Translate**: Quick drafts only, not production-quality
- **Professional Services**: Gengo, Rev, local translators
- **Community**: Ask bilingual staff/beneficiaries to review

### Translation Quality Checklist

- [ ] Culturally appropriate
- [ ] Grammatically correct
- [ ] Maintains meaning and tone
- [ ] Fits in UI space (some languages are longer)
- [ ] Reviewed by native speaker

## Testing

### Browser Testing

Test language switching in all major browsers:
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

### Functionality Testing

- [ ] Language switcher appears in header
- [ ] Language switcher appears in footer
- [ ] Selected language is highlighted
- [ ] Language persists on page reload (localStorage)
- [ ] All text changes when switching languages
- [ ] No layout breaks with longer translations
- [ ] Navigation dropdown works in all languages

### Visual Testing

Check these for each language:

- [ ] Text fits in buttons
- [ ] Navigation items don't wrap awkwardly
- [ ] Dropdown menus are readable
- [ ] Footer looks good
- [ ] Mobile layout works

## Performance

The i18n system is lightweight:

- **JavaScript**: ~8 KB (gzipped: ~2.5 KB)
- **CSS**: ~3 KB (gzipped: ~1 KB)
- **Load Time**: < 50ms to switch languages
- **Storage**: 1 KB in localStorage (selected language)

## Troubleshooting

### Language not changing?

1. Check browser console for errors
2. Verify `data-i18n` attribute is correct
3. Ensure key exists in TRANSLATIONS object
4. Check that i18n-enhanced.js loads before navigation.js

### Layout breaking?

1. Some languages are longer (e.g., German, French)
2. Test with longest language
3. Use `white-space: nowrap` or adjust padding
4. Consider abbreviations for navigation

### Language not persisting?

1. Check localStorage is enabled in browser
2. Verify no errors in browser console
3. Test with different browsers

## Future Enhancements

### Phase 2 (Future)
- [ ] Separate translation files (JSON) instead of embedded
- [ ] Lazy load translations for faster initial load
- [ ] Add more languages (Amharic for Ethiopian refugees)
- [ ] RTL support for Arabic (if needed)
- [ ] Translation management dashboard
- [ ] Crowdsourced translations from community

### Phase 3 (Future)
- [ ] Automatic language detection from browser
- [ ] Geolocation-based language suggestion
- [ ] Translation memory for consistency
- [ ] Professional translation API integration

## Support

**Questions?**
- Check `i18n-enhanced.js` for all available translation keys
- Reference `index-i18n-complete.html` for example implementation
- Test each change incrementally

---

**Status**: Ready for implementation
**Priority**: High - serves multilingual refugee community
**Estimated Time**: 4-6 hours to update all pages
