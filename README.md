# Unidos Projects Website

A clean, maintainable static website for Unidos Social Innovation Center.

## About

Unidos is a refugee-led organization in Nakivale, Uganda that empowers communities through regenerative agriculture, education, and sustainable livelihoods.

## Structure

```
unidos-projects-site/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # Add your images here
│   ├── hero-bg.jpg
│   ├── about-community.jpg
│   ├── soap-making.jpg
│   └── impact-bg.jpg
└── README.md
```

## Setup

1. Add images to the `images/` folder
2. Update social media links in `index.html`
3. Configure contact form (see below)

## Deployment Options

### GitHub Pages (Free)
1. Push to GitHub
2. Go to Settings > Pages
3. Select branch and save

### Netlify (Free)
1. Connect to GitHub repo
2. Auto-deploys on push

### Render (Free static hosting)
1. Create new Static Site
2. Connect repo
3. Build command: (leave empty)
4. Publish directory: `.`

## Contact Form

The form currently shows an alert. To make it functional:

**Option 1: Formspree**
Replace the form action:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Option 2: Netlify Forms**
Add to form tag:
```html
<form name="contact" netlify>
```

## Images Needed

Replace placeholder divs with actual images:
- `hero-bg.jpg` - Community/farming scene
- `about-community.jpg` - Group working together
- `soap-making.jpg` - Women making soap
- `impact-bg.jpg` - Agricultural scene

## Customization

Colors and fonts are CSS variables in `:root`:
```css
--color-primary: #268575;    /* Teal */
--color-accent: #ffa62b;     /* Orange */
--font-heading: 'Vollkorn';
--font-body: 'Lato';
```

## License

Content belongs to Unidos Projects.
