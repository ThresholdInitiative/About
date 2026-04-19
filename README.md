# Vospek About Page

A modern, responsive About page for Vospek company, built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🌍 **Internationalization (i18n)**: Support for English and Chinese languages
- 🎨 **Modern Design**: Clean, professional design inspired by Google Chrome's About page
- ✨ **Smooth Animations**: Built with Framer Motion for engaging user experience
- 📱 **Responsive Design**: Fully responsive across all devices
- 🌙 **Dark Mode Support**: Automatic dark mode based on system preferences
- ⚡ **Performance**: Optimized with Next.js App Router and server components

## Tech Stack

- **Framework**: Next.js 16.2.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Internationalization**: next-intl
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
vospek-about/
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── layout.tsx       # Locale-specific layout
│   │       └── page.tsx         # About page
│   ├── components/
│   │   ├── about/               # About page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── MissionVisionSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── ProductsSection.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── Navbar.tsx           # Navigation bar
│   │   └── LanguageSwitcher.tsx # Language switcher component
│   ├── i18n/
│   │   ├── config.ts            # i18n configuration
│   │   ├── request.ts           # i18n request configuration
│   │   └── locales/
│   │       ├── en.json          # English translations
│   │       └── zh.json          # Chinese translations
│   └── app/
│       ├── globals.css          # Global styles
│       └── layout.tsx            # Root layout
├── middleware.ts                # i18n middleware
├── next.config.ts              # Next.js configuration
└── package.json
```

## Sections

The About page includes the following sections:

1. **Hero Section**: Company introduction with animated background
2. **Mission & Vision**: Company mission and vision statements
3. **Values**: Core company values with icons
4. **Stats**: Key metrics and achievements
5. **Products**: Overview of company products
6. **Team**: Leadership team profiles
7. **Contact**: Contact information and footer

## Customization

### Adding New Languages

1. Create a new translation file in `src/i18n/locales/` (e.g., `fr.json`)
2. Add the locale to `src/i18n/config.ts`:
```typescript
export const locales = ['en', 'zh', 'fr'] as const;
```

### Modifying Content

Edit the translation files in `src/i18n/locales/`:
- `en.json` - English content
- `zh.json` - Chinese content

### Styling

The project uses Tailwind CSS for styling. You can customize the design by:
- Modifying component classes
- Updating `src/app/globals.css` for global styles
- Adding custom Tailwind configurations

## License

This project is private and proprietary to Vospek.

## Support

For questions or support, please contact hello@vospek.com
