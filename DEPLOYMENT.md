# Saunter Landing Page - Deployment Guide

## Quick Deploy to Vercel (Recommended - Free)

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Initial Saunter landing page"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your `saunter` repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

3. **Custom Domain** (optional):
   - In Vercel dashboard, go to Project Settings → Domains
   - Add your custom domain (e.g., saunter.com)
   - Follow DNS instructions

## Before You Deploy

### Replace Hero Background Image
The current hero image is a placeholder. Replace it with your own:
- Place your image at: `public/images/hero-bg.jpg`
- Recommended: 1920x1080px or larger
- Subject: Chef cooking or dining scene
- The image will be auto-optimized by Next.js

### Update Logo
Replace the placeholder logo:
- Create your Saunter logo SVG
- Save it at: `public/images/logo.svg`
- Current dimensions: 140x28px

### Configure Email Collection
The waitlist form currently just prevents default. To collect emails:

#### Option 1: Use Formspree (Easy, Free)
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* existing form fields */}
</form>
```

#### Option 2: Use Mailchimp/ConvertKit
See their documentation for integration code.

#### Option 3: Build Custom API Route
Create `app/api/waitlist/route.ts` and handle submissions there.

## Local Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run start    # Start production server
```

## Environment Variables

If you add API integrations, create `.env.local`:
```
NEXT_PUBLIC_FORM_ENDPOINT=your_endpoint_here
```

## Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans, Sora (Google Fonts)
- **Icons**: Lucide React
- **Hosting**: Vercel (recommended)

## Support
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
