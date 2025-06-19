# Contact Form Email Setup Guide

Your contact form now has real email functionality using EmailJS! Here's how to set it up:

## Step 1: Create EmailJS Account
1. Go to https://emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Set up Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Templates

### Main Template (for emails to you)
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: {{subject}} - New Contact from Portfolio

Hello,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

### Auto-Reply Template (for confirmation to visitors)
1. Create another template for auto-replies:

```
Subject: Thank you for contacting me - I'll get back to you soon!

Hi {{to_name}},

Thank you for reaching out through my portfolio website! I've received your message about "{{subject}}" and I really appreciate you taking the time to contact me.

Here's a copy of what you sent:
---
Subject: {{subject}}
Message: {{original_message}}
---

I typically respond to all inquiries within 24-48 hours. I'll review your message and get back to you as soon as possible.

Best regards,
{{reply_from}}

---
This is an automated response. Please do not reply to this email directly.
For urgent matters, you can reach me at: 672023266@student.uksw.edu
```

## Step 4: Get Public Key
1. Go to "Account" > "General" in EmailJS dashboard
2. Find your **Public Key** (User ID)

## Step 5: Configure Environment Variables
1. Copy `.env.example` to `.env`
2. Add your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_main_template_id_here
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_autoreply_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 6: Test the Form
1. Make sure your `.env` file is properly configured
2. Restart your development server: `npm run dev`
3. Fill out and submit the contact form
4. Check your email for both the main message and auto-reply

## Features
- **Main email** sent to you with visitor's details
- **Auto-reply** sent to visitor with confirmation
- **Error handling** with user-friendly messages
- **Professional appearance** and user experience

## Important Notes
- Never commit your `.env` file to git (it's already in `.gitignore`)
- EmailJS free plan allows 200 emails per month
- The form will show error messages if EmailJS is not properly configured
- All form submissions will be sent to: 672023266@student.uksw.edu

## Troubleshooting
- If emails aren't sending, check the browser console for errors
- Verify your EmailJS service is properly connected
- Make sure your template variables match the ones in the code
- Check your spam folder for test emails
