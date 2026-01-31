# Contact Form Setup Guide

Your website now has a contact form where visitors can request download links! Here's how to set it up so form submissions are sent to **YOUR email address**.

> 💡 **Where do forms go?** See `FORM-EMAIL-OPTIONS.md` for all email service options and detailed comparisons.

## Quick Setup (5 minutes)

### Step 1: Create a Free Formspree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Click "Sign Up" and **use YOUR email address** (e.g., `yourname@gmail.com`)
3. All form submissions will be sent to this email address!

### Step 2: Create a New Form

1. After logging in, click "New Form" or "+ New Project"
2. Give it a name like "SlideScope Download Requests"
3. Formspree will generate a unique form ID (looks like `xyzabc123` or `mpzoabcd`)
4. Copy this form ID - you'll need it in the next step

### Step 3: Update Your Website

Open `website/index.html` and search for `YOUR_FORM_ID` (around line 455):

**Find this line:**
```html
<form id="contact-form" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Replace `YOUR_FORM_ID` with your actual Formspree form ID:**
```html
<form id="contact-form" class="contact-form" action="https://formspree.io/f/mpzoabcd" method="POST">
```

💡 **Example**: If your form ID is `mpzoabcd`, the full URL becomes:
`https://formspree.io/f/mpzoabcd`

### Step 4: Test It!

1. Open your website in a browser
2. Fill out the contact form
3. Submit it
4. Check your email - you should receive the form submission!

## What Data Gets Sent to Your Email

When someone submits the form, **you'll receive an email at the address you configured** with:
- **Name**: The visitor's name
- **Email**: Their email address (you can reply directly to them!)
- **Platform**: Windows, macOS, or Both
- **Institution**: Optional - their organization
- **Message**: Optional - any additional comments
- **Newsletter**: Whether they want updates

**Example**: If you signed up with `yourname@gmail.com`, all submissions will arrive in that inbox!

## Alternative: Use Web3Forms (Free & Unlimited)

If you prefer unlimited free submissions with simpler setup:

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. **Enter YOUR email address** (e.g., `yourname@gmail.com`) - this is where submissions will be sent
3. Click "Get Access Key" - you'll instantly receive your key
4. Update the form in `index.html`:

```html
<form id="contact-form" class="contact-form" action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
    <!-- rest of form fields -->
</form>
```

## Custom Email Backend (Advanced)

If you want more control, you can:
- Use AWS SES + API Gateway + Lambda
- Use SendGrid API
- Use your own backend server
- Use Netlify Forms (if hosting on Netlify)

## Form Features

The form includes:
- ✓ Required field validation
- ✓ Email format validation
- ✓ Loading states during submission
- ✓ Success/error messages
- ✓ Responsive design for mobile
- ✓ Accessible labels and inputs
- ✓ Platform-specific information

## Spam Protection

Formspree includes basic spam protection. For additional protection:
1. Enable reCAPTCHA in your Formspree dashboard
2. Set up email notifications only for verified submissions
3. Enable the honeypot field in Formspree settings

## Customization

You can customize the form by editing:
- **HTML**: `website/index.html` (search for "contact-section")
- **CSS**: `website/styles.css` (search for "Contact Form Section")
- **JavaScript**: `website/script.js` (search for "Contact form handling")

## Testing Locally

To test the form locally:
1. Set up the Formspree form ID first
2. Open `index.html` in your browser
3. Fill out and submit the form
4. You should see a success message and receive an email

## Troubleshooting

**Form not submitting?**
- Check that you replaced `YOUR_FORM_ID` with your actual Formspree ID
- Check browser console (F12) for any JavaScript errors
- Make sure you're connected to the internet

**Not receiving emails?**
- Check your spam folder
- Verify the email address in your Formspree account
- Check Formspree dashboard to see if submissions are being received

**Styling issues?**
- Clear your browser cache
- Make sure all CSS files are loading
- Check for CSS conflicts with browser extensions

## Support

If you need help:
- Formspree documentation: https://help.formspree.io/
- Web3Forms documentation: https://docs.web3forms.com/

---

**Need to make changes to the form?** The form code is in `website/index.html` starting around line 450.
