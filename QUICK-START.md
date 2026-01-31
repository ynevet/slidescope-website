# Quick Start: Contact Form

## ✅ What's Been Done

All download buttons and links now redirect visitors to the contact form:
- ✅ Hero section "Request Download Link" button → Contact form
- ✅ Pricing section "Request Download Link" button → Contact form  
- ✅ Download section "Request Windows/macOS Download" buttons → Contact form
- ✅ Navigation "Get App" link → Contact form

## 🚀 To Activate the Form (Choose One)

### Option 1: Formspree (Recommended)
1. Sign up at https://formspree.io with **YOUR email address**
2. Create a new form, get your form ID (e.g., `mpzoabcd`)
3. Open `website/index.html` and replace `YOUR_FORM_ID` with your actual ID:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
4. All submissions → Your email inbox!

**Free tier**: 50 submissions/month

---

### Option 2: Web3Forms (Free Unlimited)
1. Go to https://web3forms.com
2. Enter **YOUR email address** and get access key
3. In `website/index.html`, find the form tag and replace with:
   ```html
   <form id="contact-form" class="contact-form" action="https://api.web3forms.com/submit" method="POST">
       <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
   ```
4. All submissions → Your email inbox!

**Free tier**: Unlimited

---

## 📧 Where Do Forms Go?

**To YOUR email address** - whatever email you use when signing up for Formspree or Web3Forms.

Examples:
- If you sign up with `john@gmail.com` → Forms go to `john@gmail.com`
- If you sign up with `contact@yourcompany.com` → Forms go to `contact@yourcompany.com`

You can use:
- Gmail, Outlook, Yahoo, iCloud, ProtonMail
- Custom domain emails
- Business emails (Google Workspace, Microsoft 365)

## 📋 What You'll Receive

Email with visitor's info:
- Name and email (you can reply directly!)
- Platform choice (Windows/macOS/Both)
- Institution (optional)
- Comments (optional)
- Newsletter preference

## 📚 More Info

- **All email options**: See `FORM-EMAIL-OPTIONS.md`
- **Detailed setup**: See `CONTACT-FORM-SETUP.md`
- **Troubleshooting**: See setup guide's troubleshooting section

## ⚡ 2-Minute Setup

1. Go to https://web3forms.com (fastest option)
2. Enter your email → Get access key
3. Replace `YOUR_FORM_ID` in `index.html` with your key
4. Done! Test by submitting the form on your website

---

**Need help?** Check the detailed guides or message me!
