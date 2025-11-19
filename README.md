# Saunter Landing Page

A modern landing page for Saunter - connecting private chefs with clients for exceptional dining experiences.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Fonts**: Geist Sans, Sora (Google Fonts)
- **Icons**: Lucide React

## Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
saunter/
├── app/
│   ├── components/
│   │   └── WaitlistModal.tsx    # Chef/Client waitlist modal
│   ├── globals.css              # Global styles & brand colors
│   ├── layout.tsx               # Root layout with fonts
│   └── page.tsx                 # Main landing page
├── components/ui/               # shadcn/ui components
├── public/
│   └── images/
│       ├── hero-bg.jpg         # Hero background image
│       └── logo.svg            # Saunter logo
└── lib/
    └── utils.ts                # Utility functions
```

## Features

- **Hero Section**: Eye-catching introduction with CTA
- **Why Saunter**: Value proposition section
- **Dual Waitlist**: Separate flows for chefs and clients with tailored questions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Modal Experience**: Clean shadcn/ui modals for waitlist signup

## Customization

### Brand Colors

Edit in `app/globals.css`:
- Primary: `#44745b` (Forest green)
- Accent: `#64f8a9` (Mint green)

### Replace Images

- Hero background: `public/images/hero-bg.jpg`
- Logo: `public/images/logo.svg`

### Email Collection

The waitlist form logs to console. To collect actual submissions, integrate:
- **Formspree**: Add `action` attribute to form
- **API Route**: Create `app/api/waitlist/route.ts`
- **Email Service**: Mailchimp, ConvertKit, etc.

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Environment Variables

Add to `.env.local` if needed:
```
NEXT_PUBLIC_FORM_ENDPOINT=your_endpoint
```

## License

Private project for Saunter.
