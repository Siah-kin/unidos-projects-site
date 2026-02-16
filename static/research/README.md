# Unidos Research Portal - Setup Instructions

**Purpose**: Members-only research portal for DAO transformation documentation

**Access Level**: 🔒 Private (Email-based authentication required)

---

## 🚀 Quick Start (For Administrators)

### Step 1: Create Firebase Project

1. **Go to Firebase Console**: https://console.firebase.google.com/
2. **Create new project**: Click "Add project"
   - Project name: `unidos-research` (or your choice)
   - Disable Google Analytics (optional, not needed for auth)
3. **Enable Authentication**:
   - Navigate to **Build** > **Authentication**
   - Click **Get Started**
   - Enable **Email/Password** sign-in method
   - Click **Save**

---

### Step 2: Get Firebase Configuration

1. **Register web app**:
   - In Firebase Console, click ⚙️ (Settings) > **Project settings**
   - Scroll down to "Your apps" section
   - Click **Web** icon (</>) to register a web app
   - App nickname: `Unidos Research Portal`
   - Click **Register app**

2. **Copy Firebase config**:
   ```javascript
   const firebaseConfig = {
       apiKey: "AIza...",
       authDomain: "unidos-research.firebaseapp.com",
       projectId: "unidos-research",
       storageBucket: "unidos-research.appspot.com",
       messagingSenderId: "123456789",
       appId: "1:123456789:web:abc123def456"
   };
   ```

---

### Step 3: Update HTML Files

**Replace Firebase config in BOTH files**:

1. **`login.html`** (Line 215):
   ```javascript
   const firebaseConfig = {
       apiKey: "YOUR_API_KEY",  // ← Replace with your actual config
       authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_PROJECT_ID.appspot.com",
       messagingSenderId: "YOUR_MESSAGING_ID",
       appId: "YOUR_APP_ID"
   };
   ```

2. **`index.html`** (Line 307):
   - Replace with same config (MUST MATCH login.html)

---

### Step 4: Deploy to GitHub Pages

1. **Commit files**:
   ```bash
   git add static/research/
   git commit -m "Add members-only research portal with Firebase auth"
   git push origin main
   ```

2. **Access portal**:
   - URL: `https://unidos.ug/research/login.html`
   - Create first account (sign up with your email)
   - Subsequent users sign up at same URL

---

## 👥 Managing Members

### Add New Members

**Option 1: Self-Registration** (Recommended)
- Share login URL: `https://unidos.ug/research/login.html`
- Users click "Sign up here"
- Enter email + password (min 8 characters)
- Account created automatically

**Option 2: Firebase Console** (Manual)
- Go to **Authentication** > **Users** tab
- Click **Add user**
- Enter email + password
- User receives credentials via email (optional, requires Email templates setup)

---

### Remove Members

1. Go to **Firebase Console** > **Authentication** > **Users**
2. Find user by email
3. Click ⋮ (three dots) > **Delete user**
4. User immediately loses access

---

### View Active Members

- **Firebase Console** > **Authentication** > **Users** tab
- Shows: Email, creation date, last sign-in
- Export user list (CSV) via **⋮** menu

---

## 🔒 Security Best Practices

### 1. **Restrict Authorized Domains**

Firebase Console > **Authentication** > **Settings** > **Authorized domains**
- Add: `unidos.ug`
- Remove: `localhost` (once testing complete)
- Prevents auth from unauthorized domains

---

### 2. **Set Up Email Verification** (Optional but Recommended)

Firebase Console > **Authentication** > **Templates** > **Email address verification**

Update `login.html` signup handler (line 282):
```javascript
const userCredential = await auth.createUserWithEmailAndPassword(email, password);

// Send verification email
await userCredential.user.sendEmailVerification();
showSuccess('Account created! Please check your email to verify.');
```

---

### 3. **Enable Password Reset**

Already configured via Firebase Auth. Users can:
1. Click "Forgot password?" (add link to `login.html` if desired)
2. Firebase sends password reset email automatically

To add password reset link, insert below password input in `login.html`:
```html
<div style="text-align: right; margin-top: -16px; margin-bottom: 16px;">
    <a href="#" id="forgotPassword" style="color: #2a5934; font-size: 13px; text-decoration: none;">Forgot password?</a>
</div>
```

Add handler:
```javascript
document.getElementById('forgotPassword').addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    if (!email) {
        showError('Please enter your email address first.');
        return;
    }
    try {
        await auth.sendPasswordResetEmail(email);
        showSuccess('Password reset email sent! Check your inbox.');
    } catch (error) {
        showError(getErrorMessage(error.code));
    }
});
```

---

## 📊 Analytics & Monitoring

### Track User Activity (Optional)

1. **Enable Google Analytics** in Firebase project settings
2. **Add Analytics SDK** to HTML files:
   ```html
   <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics-compat.js"></script>
   ```
3. **Log events**:
   ```javascript
   const analytics = firebase.analytics();
   analytics.logEvent('research_document_viewed', { document: 'introduction' });
   ```

---

## 🛡️ Firestore Security (If Adding Database Later)

If you want to store member metadata (name, organization, access level):

1. **Enable Firestore** (Firebase Console > **Build** > **Firestore Database**)
2. **Add security rules**:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Users can only read/write their own data
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }

       // All authenticated users can read research documents
       match /research/{document} {
         allow read: if request.auth != null;
       }
     }
   }
   ```

---

## 📝 Creating Research Content Pages

Convert Markdown research documents to HTML:

**Option 1: Manual HTML** (simple but tedious)
- Copy markdown content → Convert to HTML manually
- Use same styling as `index.html`

**Option 2: Markdown-to-HTML Converter** (recommended)
- Tool: https://markdowntohtml.com/
- Upload `.md` files from `/leadership/scout/`
- Download generated HTML
- Wrap in same header/footer as `index.html`

**Option 3: JavaScript Markdown Renderer** (dynamic)
- Use library like `marked.js`: https://marked.js.org/
- Load `.md` files dynamically
- Render client-side

**Example** (Option 3 - Dynamic Markdown):

Create `introduction.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction - Unidos Research Portal</title>
    <link rel="stylesheet" href="style.css"> <!-- Reuse styles -->
</head>
<body>
    <div class="header"><!-- Same header as index.html --></div>

    <div class="container">
        <div id="content" class="markdown-content"></div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script>
        // Fetch markdown file from GitHub or local path
        fetch('/leadership/scout/INTRODUCTION_DAO_TRANSFORMATION.md')
            .then(response => response.text())
            .then(markdown => {
                document.getElementById('content').innerHTML = marked.parse(markdown);
            });
    </script>
</body>
</html>
```

---

## 🔧 Troubleshooting

### "Firebase config not found"
- Check that you replaced `YOUR_API_KEY` with actual config in BOTH files
- Ensure config matches exactly between `login.html` and `index.html`

### "User creation disabled"
- Firebase Console > **Authentication** > **Sign-in method**
- Ensure **Email/Password** is **Enabled**

### "Unauthorized domain"
- Firebase Console > **Authentication** > **Settings** > **Authorized domains**
- Add your domain (`unidos.ug`)

### "Too many requests"
- Firebase has rate limits (100 auth requests/hour for free tier)
- Upgrade to Blaze plan (pay-as-you-go) for higher limits

---

## 💰 Firebase Pricing

### Spark Plan (Free)
- 10,000 verifications/month
- 50,000 authentications/month
- Sufficient for <100 members

### Blaze Plan (Pay-as-you-go)
- $0.0055 per verification (after free tier)
- Required for >10K verifications/month
- Recommended if scaling to 100+ members

**Unidos projected cost**: $0/month (well within free tier limits)

---

## 📞 Support

**Technical Issues**:
- Firebase docs: https://firebase.google.com/docs/auth
- Unidos technical lead: [your email]

**Access Requests**:
- Email: [admin email] with:
  - Full name
  - Organization
  - Reason for access

---

*Last updated: February 2026*
*Maintained by: Unidos Leadership Team*
