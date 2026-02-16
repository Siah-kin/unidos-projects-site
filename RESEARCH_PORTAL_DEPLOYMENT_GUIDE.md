# Unidos Research Portal - Deployment Guide

**Version**: 1.0.0
**Date**: February 16, 2026
**Status**: Ready for Q2 2026 Launch

---

## 📋 Overview

This guide walks you through deploying the Unidos Research Portal with:
- Member registration & authentication (Firebase)
- Member directory with cooperation scores
- Interactive framework visualization (Oracle 6 + SIAH Protocol)
- 8 research documents (14 supporting files, 80,000+ words)
- Data Vault opt-in system
- Credit Union preparation (launches Q4 2026)

**Live URL**: https://unidosprojects.org/research (to be deployed)

---

## 🎯 Prerequisites

### Required Accounts

1. **Firebase Account** (Free tier sufficient for 100-500 users)
   - Create at: https://console.firebase.google.com
   - Enable Authentication (Email/Password)
   - Enable Firestore Database

2. **GitHub Account** (for version control)
   - Repository: https://github.com/unidos/unidos

3. **Domain/Hosting** (choose one)
   - **Option A**: Existing unidosprojects.org (add /research subdirectory)
   - **Option B**: Netlify/Vercel (free tier, automatic deploys)
   - **Option C**: GitHub Pages (free, static hosting)

### Required Tools

```bash
# Install Node.js (for local testing)
# Download from: https://nodejs.org

# Verify installation
node --version  # Should be v16+ or higher
npm --version   # Should be v8+ or higher

# Install simple HTTP server (for local testing)
npm install -g http-server
```

---

## 🚀 Quick Start (30 Minutes)

### Step 1: Firebase Setup (10 minutes)

**1.1 Create Firebase Project**

```bash
# Go to: https://console.firebase.google.com
# Click: "Add Project"
# Project name: "unidos-research-portal"
# Disable Google Analytics (not needed for this project)
# Click: "Create Project"
```

**1.2 Enable Authentication**

```bash
# In Firebase Console:
# Left sidebar → Build → Authentication
# Click: "Get Started"
# Sign-in method → Email/Password → Enable
# Click: "Save"
```

**1.3 Create Firestore Database**

```bash
# In Firebase Console:
# Left sidebar → Build → Firestore Database
# Click: "Create Database"
# Start in: "Test mode" (we'll add security rules later)
# Location: Choose closest to Uganda (europe-west or asia-south)
# Click: "Enable"
```

**1.4 Get Firebase Configuration**

```bash
# In Firebase Console:
# Project Overview (gear icon) → Project Settings
# Scroll to "Your apps" section
# Click: Web icon (</>)
# App nickname: "Unidos Research Portal"
# Don't check "Firebase Hosting" (we'll deploy elsewhere)
# Click: "Register app"

# Copy the firebaseConfig object:
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "unidos-research-portal.firebaseapp.com",
  projectId: "unidos-research-portal",
  storageBucket: "unidos-research-portal.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};

# Save this config — you'll need it in Step 2
```

---

### Step 2: Update Firebase Config (5 minutes)

**Files to Update** (replace `YOUR_API_KEY` placeholders):

```bash
# List of files with Firebase config:
static/research/login.html
static/research/index.html
static/research/member-registration.html
static/research/member-directory.html
static/research/global-barter-system.html
static/research/framework.html
```

**Search and Replace**:

```javascript
// OLD (placeholder):
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_ID",
    appId: "YOUR_APP_ID"
};

// NEW (your actual config):
const firebaseConfig = {
    apiKey: "AIza...",  // YOUR ACTUAL API KEY
    authDomain: "unidos-research-portal.firebaseapp.com",
    projectId: "unidos-research-portal",
    storageBucket: "unidos-research-portal.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123"
};
```

**Quick Replace Command** (Mac/Linux):

```bash
# Navigate to project root
cd /Users/ginoludikhuyze/Developer/GitHub/Unidos

# Replace in all research portal files
find static/research -name "*.html" -type f -exec sed -i '' \
  's/YOUR_API_KEY/AIza.../g' {} +

# Verify changes
grep -r "YOUR_API_KEY" static/research  # Should return no results
```

---

### Step 3: Test Locally (5 minutes)

**3.1 Start Local Server**

```bash
# Navigate to project root
cd /Users/ginoludikhuyze/Developer/GitHub/Unidos

# Start HTTP server
http-server -p 8080

# Alternative (Python):
python3 -m http.server 8080
```

**3.2 Test Pages**

Open browser to:

```bash
# Homepage
http://localhost:8080/static/index.html

# Research Portal Login
http://localhost:8080/static/research/login.html

# Try creating account:
# 1. Click "Complete registration form →"
# 2. Fill out 4-step form
# 3. Submit
# 4. Should redirect to research portal index

# Verify authentication:
# 1. Open browser DevTools (F12)
# 2. Console tab → should see "User logged in: your@email.com"
# 3. Network tab → should see Firebase API calls (200 OK)
```

**3.3 Test Member Registration**

```bash
# Create test account:
http://localhost:8080/static/research/member-registration.html

# Fill out form:
Step 1: test@unidos.ug / password123
Step 2: Test User, Nakivale Uganda, Refugee, Unidos, "I'm testing the system"
Step 3: Select 2+ interests, "Yes anytime" for interview
Step 4: Check all consent boxes

# Submit → Should see success message
# Go to Firebase Console → Authentication → Users
# Verify: test@unidos.ug appears in list
```

---

### Step 4: Deploy to Production (10 minutes)

**Option A: Deploy to Netlify** (Recommended - Easiest)

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Login to Netlify
netlify login

# 3. Create netlify.toml in project root
cat > netlify.toml << EOF
[build]
  publish = "static"

[[redirects]]
  from = "/research/*"
  to = "/research/:splat"
  status = 200
EOF

# 4. Deploy
netlify deploy --prod

# 5. Follow prompts:
# - Create & configure new site? Yes
# - Site name: unidos-research-portal (or leave blank for random)
# - Publish directory: static

# 6. Get live URL (e.g., https://unidos-research-portal.netlify.app)
```

**Option B: Deploy to Vercel**

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
cd /Users/ginoludikhuyze/Developer/GitHub/Unidos
vercel --prod

# 4. Follow prompts:
# - Set up and deploy? Yes
# - Scope: Your account
# - Link to existing project? No
# - Project name: unidos-research-portal
# - Directory: ./static

# 5. Get live URL (e.g., https://unidos-research-portal.vercel.app)
```

**Option C: Deploy to Existing unidosprojects.org**

```bash
# 1. Copy research portal to server
scp -r static/research user@unidosprojects.org:/var/www/html/

# 2. SSH into server
ssh user@unidosprojects.org

# 3. Set permissions
cd /var/www/html
chmod -R 755 research/
chown -R www-data:www-data research/

# 4. Update Apache/Nginx config (if needed)
# Add location block for /research

# 5. Test live URL
https://unidosprojects.org/research/login.html
```

---

## 🔐 Security Setup (Critical - Do This!)

### Firestore Security Rules

**Current**: Test mode (allows all reads/writes - INSECURE!)
**Required**: Production rules (only authenticated users)

```bash
# In Firebase Console:
# Firestore Database → Rules tab
# Replace with:
```

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated users can read/write members collection
    match /members/{memberId} {
      // Users can read all member profiles
      allow read: if request.auth != null;

      // Users can only write their own profile
      allow write: if request.auth != null && request.auth.uid == memberId;
    }

    // Block all other access
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

```bash
# Click: "Publish"
# Verify: Test mode warning disappears
```

---

### Firebase Authentication Security

**Enable Email Verification** (Optional but recommended):

```bash
# In Firebase Console:
# Authentication → Templates → Email verification
# Customize template (add Unidos branding)
# Enable "Send verification email"
```

**Update registration flow** (member-registration.html):

```javascript
// After user registration, send verification email
const userCredential = await auth.createUserWithEmailAndPassword(email, password);
await userCredential.user.sendEmailVerification();

alert('Account created! Please check your email to verify your account.');
```

---

## 📊 Testing Checklist

### Functionality Tests

```bash
□ User Registration
  □ Create account with email/password
  □ Receives welcome email (if configured)
  □ Redirects to research portal after registration
  □ Firebase Authentication shows new user
  □ Firestore members collection has new document

□ User Login
  □ Can login with registered email/password
  □ Shows user email in header
  □ Can access all research pages
  □ Can sign out successfully

□ Member Directory
  □ Shows all registered members (profileVisible = true)
  □ Search filter works
  □ Role filter works
  □ Interest filter works
  □ Click member card shows profile (when implemented)

□ Research Documents
  □ All 8 cards clickable
  □ Global Barter System page loads with animations
  □ Framework page tabs work (Oracle 6, SIAH, Data Flow, Action)
  □ All links functional

□ Framework Visualization
  □ Tab switching works smoothly
  □ Oracle 6 cards show correctly (6 cards)
  □ SIAH layers show correctly (5 layers)
  □ Data flow steps show correctly (5 steps)
  □ Action cards show correctly (6 cards)
  □ All CTAs functional

□ Mobile Responsiveness
  □ Login page works on mobile
  □ Registration form works on mobile
  □ Member directory grid adapts to mobile
  □ Framework tabs stack on mobile
  □ All pages responsive (test on 375px width)
```

---

### Browser Compatibility

```bash
□ Chrome (latest)
□ Firefox (latest)
□ Safari (latest)
□ Edge (latest)
□ Mobile Safari (iOS)
□ Mobile Chrome (Android)
```

---

### Performance Tests

```bash
□ Page Load Time < 3 seconds (desktop)
□ Page Load Time < 5 seconds (mobile)
□ Firebase API calls < 1 second response
□ No console errors
□ No broken images/links
□ Lighthouse score > 80 (Performance, Accessibility, Best Practices)
```

**Run Lighthouse Test**:

```bash
# In Chrome DevTools:
# 1. Right-click page → Inspect
# 2. Lighthouse tab
# 3. Categories: Performance, Accessibility, Best Practices
# 4. Device: Desktop & Mobile
# 5. Click "Analyze page load"
# 6. Target scores: All > 80
```

---

## 🎓 User Management

### Create First Admin User

```bash
# Method 1: Through registration page
# 1. Go to: /research/member-registration.html
# 2. Register with: admin@unidos.ug
# 3. Complete all 4 steps
# 4. Verify in Firebase Console

# Method 2: Manually in Firebase Console
# 1. Authentication → Users → Add User
# 2. Email: admin@unidos.ug
# 3. Password: [generate secure password]
# 4. User UID: [auto-generated]
# 5. Firestore → members → Add Document
# 6. Document ID: [same as User UID]
# 7. Fields: fullName, email, role: "admin", etc.
```

---

### Add Demo Members (Optional)

```bash
# In Firestore Console:
# members collection → Add Document

# Document 1: Paulinho
{
  fullName: "Paulinho Ginoludikhuyze",
  location: "Nakivale, Uganda",
  role: "refugee",
  organization: "Unidos Social Innovation Center",
  bio: "Founder of Unidos. UNHCR Gene Dewey Award 2024 recipient...",
  interests: ["dao-governance", "data-sovereignty", "regenerative-ag"],
  cooperationScore: 250,
  dataVault: true,
  profileVisible: true,
  joinedAt: [timestamp]
}

# Document 2: Dr. Sarah Kimani
{
  fullName: "Dr. Sarah Kimani",
  location: "Nairobi, Kenya",
  role: "researcher",
  organization: "University of Nairobi",
  bio: "Research fellow studying refugee entrepreneurship...",
  interests: ["financial-inclusion", "refugee-entrepreneurship"],
  cooperationScore: 180,
  dataVault: true,
  profileVisible: true,
  joinedAt: [timestamp]
}

# Repeat for other demo members (Marcus Chen, Amina Hassan, Jean-Paul Mukendi)
```

---

## 📧 Email Configuration (Optional)

### Welcome Email Setup

**Option A: Mailchimp**

```bash
# 1. Create Mailchimp account (free up to 500 subscribers)
# 2. Create audience: "Unidos Research Members"
# 3. Create automation: "Welcome Email"
# 4. Trigger: Tag added "new_member"
# 5. Email template:

Subject: Welcome to Unidos Research Community!
Body:
Hi {{FNAME}},

Welcome to the Unidos Research Portal!

Your account has been created successfully. Here's what's next:

✅ Complete your first survey (15 min): [Survey Link]
📅 Schedule a perspective interview (30 min): [Calendly Link]
👥 Browse member directory: https://unidosprojects.org/research/member-directory.html
📚 Explore research documents: https://unidosprojects.org/research/

Your Member ID: UNIDOS-2026-{{SUBSCRIBER_ID}}
Cooperation Score: 0 (start earning points by completing surveys!)

Questions? Reply to this email or contact: contact@unidos.ug

Best regards,
Unidos Research Team
```

**Option B: SendGrid** (more technical, better for automation)

```bash
# 1. Create SendGrid account
# 2. Verify sender email: contact@unidos.ug
# 3. Create template: "welcome-email"
# 4. Integrate with Firebase Functions (Cloud Functions):

# functions/index.js
const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(functions.config().sendgrid.key);

exports.sendWelcomeEmail = functions.firestore
  .document('members/{memberId}')
  .onCreate(async (snap, context) => {
    const member = snap.data();

    const msg = {
      to: member.email,
      from: 'contact@unidos.ug',
      templateId: 'd-welcome-email-template-id',
      dynamicTemplateData: {
        fullName: member.fullName,
        memberId: context.params.memberId
      }
    };

    await sgMail.send(msg);
  });
```

---

## 🔧 Maintenance & Updates

### Regular Tasks

**Weekly**:
```bash
□ Check Firebase Authentication for suspicious activity
□ Review new member registrations (cooperationScore accuracy)
□ Monitor Firestore quota (free tier: 20K writes/day, 50K reads/day)
□ Respond to member support emails
```

**Monthly**:
```bash
□ Update research documents (add new findings)
□ Review member directory (remove inactive/spam accounts)
□ Check Firebase billing (ensure still on free tier)
□ Backup Firestore data (export to JSON)
□ Update cooperation scores (manual for now, automated in Q3 2026)
```

**Quarterly**:
```bash
□ Security audit (review Firestore rules, check for vulnerabilities)
□ Performance audit (Lighthouse scores, page load times)
□ User feedback survey (NPS score, feature requests)
□ Update research documentation (new papers, case studies)
```

---

### Backup Strategy

**Firestore Backup** (Critical):

```bash
# Method 1: Manual Export (Firebase Console)
# 1. Firestore Database → Import/Export tab
# 2. Click "Export"
# 3. Select "members" collection
# 4. Bucket: Create Cloud Storage bucket first
# 5. Download exported files to local

# Method 2: Automated Backup (Cloud Scheduler + Cloud Functions)
# Set up daily backups at 2 AM UTC
# Store in Google Cloud Storage
# Retention: 30 days
```

**Code Backup** (GitHub):

```bash
# Already version-controlled in GitHub
# Ensure all changes committed and pushed regularly
git add .
git commit -m "Update research portal"
git push origin main
```

---

## 📈 Analytics Setup (Optional)

### Google Analytics

```html
<!-- Add to all research portal pages (before </head>) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Track Events**:

```javascript
// Login success
gtag('event', 'login', {
  method: 'Email'
});

// Registration complete
gtag('event', 'sign_up', {
  method: 'Email'
});

// Data Vault opt-in
gtag('event', 'data_vault_optin', {
  event_category: 'engagement',
  event_label: 'Data Vault Consent'
});

// Framework tab view
gtag('event', 'framework_tab_view', {
  event_category: 'engagement',
  event_label: tab_name  // 'oracle', 'siah', 'data-flow', 'action'
});
```

---

## 🐛 Troubleshooting

### Common Issues

**Issue 1: "Firebase not defined" error**

```bash
# Cause: Firebase SDK not loaded
# Fix: Check script order in HTML

<!-- CORRECT ORDER: -->
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js"></script>
<script>
  // Your Firebase config here
  const firebaseConfig = { ... };
  firebase.initializeApp(firebaseConfig);
</script>
```

**Issue 2: "Permission denied" on Firestore**

```bash
# Cause: Firestore security rules too restrictive
# Fix: Check Firestore rules (see Security Setup section)
# Temporary workaround: Test mode (INSECURE, only for testing!)
```

**Issue 3: Registration form not submitting**

```bash
# Check browser console for errors
# Common causes:
# - Missing required fields
# - Password too short (< 8 characters)
# - Email already registered
# - Firebase quota exceeded (unlikely on free tier)

# Debug:
console.log('Form data:', {
  email: document.getElementById('email').value,
  password: document.getElementById('password').value
});
```

**Issue 4: Member directory empty**

```bash
# Cause: No members with profileVisible = true
# Fix: Check Firestore members collection
# Verify: At least one document has profileVisible: true

# Fallback: Demo members display by default
# If Firestore query fails, loadDemoMembers() function activates
```

---

## 📞 Support & Resources

### Documentation

- **Firebase Docs**: https://firebase.google.com/docs
- **Firestore Security Rules**: https://firebase.google.com/docs/firestore/security/get-started
- **Firebase Authentication**: https://firebase.google.com/docs/auth

### Unidos Support

- **Email**: contact@unidos.ug
- **GitHub Issues**: https://github.com/unidos/unidos/issues
- **Research Portal README**: /leadership/scout/README_COMPLETE.md

### Emergency Contacts

- **Technical Issues**: dev@unidos.ug
- **Security Issues**: security@unidos.ug (report vulnerabilities)
- **Billing/Account**: admin@unidos.ug

---

## ✅ Pre-Launch Checklist

**Final checks before public launch**:

```bash
□ Firebase config updated (no placeholders)
□ Firestore security rules set (not test mode)
□ Email verification enabled (optional)
□ Welcome email configured (optional)
□ Analytics tracking installed (optional)
□ All pages tested (registration → login → directory → framework)
□ Mobile responsive verified
□ Browser compatibility verified
□ Performance scores > 80 (Lighthouse)
□ No console errors
□ Backup strategy configured
□ Support email monitored (contact@unidos.ug)
□ Launch announcement prepared (email, social media)
□ Press kit ready (screenshots, demo accounts)

□ FINAL: Announce launch to Unidos community!
```

---

## 🎉 Post-Launch

### Week 1

```bash
□ Monitor Firebase quota (ensure within free tier limits)
□ Check first member registrations (validate data quality)
□ Respond to support emails within 24 hours
□ Fix any critical bugs immediately
□ Share early user feedback with team
```

### Month 1

```bash
□ Reach 100 member registrations target
□ Conduct 20 perspective interviews
□ Analyze cooperation score distribution (0-250 range)
□ Publish first research update (blog post or email)
□ Prepare for Q3 2026: Data Vault pilot (50 users)
```

### Quarter 1 (Q2 2026)

```bash
□ 100+ members registered
□ 50+ Data Vault opt-ins
□ Academic paper submitted (peer-review process)
□ Partnership outreach (CGIAR, Microsoft Climate)
□ Prepare Q3 2026 Credit Union pilot
```

---

**🚀 Ready to launch! Follow this guide step-by-step and you'll have the Unidos Research Portal live in under 1 hour.**

---

*Last updated: February 16, 2026*
*Version: 1.0.0*
*Contact: contact@unidos.ug*
