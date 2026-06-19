# Lijun Zhang - Guzheng Artist & PhD Candidate

A modern, elegant portfolio website showcasing Lijun Zhang's career as a Guzheng performer, PhD candidate at the University of Leeds, and UK-China cultural ambassador.

## 🎯 Features

- **Hero Section**: Full-screen hero with video background and animated CTA buttons
- **About Section**: Professional biography with portrait and career highlights
- **Performance Timeline**: Interactive timeline of performances with filtering and image galleries
- **Performance Videos**: Masonry grid of video clips with lightbox modal player
- **Press & Media**: Grid of news articles and media coverage
- **Contact Section**: Contact form with email integration and social links
- **Responsive Design**: Mobile-first, fully responsive across all breakpoints
- **Smooth Animations**: Framer Motion animations for scroll-triggered reveals
- **Modern Typography**: Playfair Display for headings, Inter for body text
- **Brand Colors**: Custom gold (#C9A96E) and dark (#1A1A1A) theme

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Nodemailer
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Lucide React

## 📋 Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── api/
│       └── contact/
│           └── route.ts
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── PerformanceTimeline.tsx
│       ├── PerformanceVideos.tsx
│       ├── PressMedia.tsx
│       └── Contact.tsx
├── styles/
│   └── globals.css
└── types/
    └── index.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (for Next.js 14 compatibility)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MioMeo999/my-portfolio-site.git
   cd my-portfolio-site
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with:
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASSWORD=your-gmail-app-password
   EMAIL_RECIPIENT=zhanglijun109@gmail.com
   ```

4. Add placeholder assets:
   Create the `/public/images/` directory and add:
   - `portrait.jpg` (professional portrait)
   - `hero-fallback.jpg` (hero section fallback)
   - `video-*-poster.jpg` (video thumbnails)
   - Performance images: `performance-*.jpg`

5. Run development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📧 Email Configuration

The contact form uses Gmail with App Passwords for security:

1. Enable 2-Step Verification on your Google Account
2. Generate an [App Password](https://support.google.com/accounts/answer/185833)
3. Use the App Password in `EMAIL_PASSWORD` environment variable

Alternatively, you can configure a different email service in `src/app/api/contact/route.ts`.

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.ts` to modify:
- Primary (dark): `#1A1A1A`
- Secondary (gold): `#C9A96E`
- Accent (red): `#B22222`

### Content

- **Performance Timeline**: Edit `src/components/sections/PerformanceTimeline.tsx`
- **Videos**: Edit `src/components/sections/PerformanceVideos.tsx`
- **Press & Media**: Edit `src/components/sections/PressMedia.tsx`
- **About Text**: Edit `src/components/sections/About.tsx`

## 📱 Responsive Breakpoints

- **sm**: 640px (portrait phones)
- **md**: 768px (tablets)
- **lg**: 1024px (laptops)
- **xl**: 1280px (desktops)
- **2xl**: 1536px (large screens)

## ⚡ Performance Optimization

- Next.js Image component with lazy loading
- Dynamic imports for heavy sections
- Video preloading with `preload="metadata"`
- CSS grid and flexbox for efficient layouts
- Minified and optimized assets

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy with one click

### Other Platforms

Follow Next.js deployment documentation for Netlify, AWS, or other platforms.

## 🔍 SEO

- Meta tags and Open Graph setup in `src/app/layout.tsx`
- Semantic HTML structure
- Fast loading times for better SEO scores
- Mobile-friendly responsive design

## 📄 License

This project is the intellectual property of Lijun Zhang. All rights reserved.

## 👤 Author

Built for **Lijun Zhang** - Guzheng Performer & PhD Candidate  
University of Leeds, UK

---

**Last Updated**: June 2024
