# Personal Portfolio Website

A modern, responsive portfolio website inspired by [brittanychiang.com](https://brittanychiang.com/). Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, clean design
- 🌓 Dark mode toggle
- 📱 Fully responsive
- ⚡ Fast and optimized
- 🎨 Smooth animations and transitions
- ♿ Accessible components

## Sections

- **Hero**: Introduction and call-to-action
- **About**: Personal information and skills
- **Experience**: Work history with interactive tabs
- **Projects**: Showcase of your work
- **Footer**: Social links and credits

## Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn (or npm)

### Installation

1. Install dependencies:

```bash
yarn install
# or
npm install
```

2. Run the development server:

```bash
yarn dev
# or
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note**: This project uses the **App Router** (Next.js 13+), which is the recommended approach for new Next.js applications. The App Router provides Server Components by default, improved data fetching, and better performance.

## Customization

### Update Your Information

1. **Name and Title**: 
   - Update in `app/layout.tsx` (metadata title)
   - Update in `components/Navbar.tsx` (line 54)
   - Update in `components/sections/Hero.tsx` (lines 6, 9, 12)

2. **About Section**: 
   - Edit `components/sections/About.tsx` to update your bio and skills

3. **Experience**: 
   - Modify the `experiences` array in `components/sections/Experience.tsx`

4. **Projects**: 
   - Update the `projects` array in `components/sections/Projects.tsx`

5. **Social Links**: 
   - Update links in `components/Navbar.tsx` (socialLinks array)
   - Update links in `components/sections/Footer.tsx` (socialLinks array)

### Styling

- Colors are defined in `tailwind.config.js`
- Global styles are in `styles/globals.css`
- Customize the color scheme by modifying the Tailwind config

### Fonts

The site uses Inter font from Google Fonts. To change:
1. Update the import in `styles/globals.css`
2. Update the font-family in `tailwind.config.js`

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons
- **Dark Mode**: Custom implementation with localStorage

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout (App Router)
│   └── page.tsx            # Home page
├── components/
│   ├── Navbar.tsx          # Navigation bar (Client Component)
│   ├── Switcher.tsx        # Dark mode toggle (Client Component)
│   └── sections/
│       ├── Hero.tsx        # Hero section (Server Component)
│       ├── About.tsx       # About section (Server Component)
│       ├── Experience.tsx  # Experience section (Client Component)
│       ├── Projects.tsx    # Projects section (Server Component)
│       └── Footer.tsx       # Footer section (Server Component)
├── hooks/
│   └── useDarkSide.tsx     # Dark mode hook
├── styles/
│   └── globals.css         # Global styles
└── public/                 # Static assets
```

### App Router vs Pages Router

This project uses the **App Router** (introduced in Next.js 13):
- `app/layout.tsx` replaces `pages/_app.tsx`
- `app/page.tsx` replaces `pages/index.tsx`
- Server Components by default (better performance)
- Client Components marked with `'use client'` directive
- Built-in metadata API for SEO

## Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy!

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- Render

## License

This project is open source and available under the MIT License.

## Credits

Design inspired by [Brittany Chiang's portfolio](https://brittanychiang.com/).
