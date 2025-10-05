# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Personal portfolio website for Quentin BENDER (DevSecOps Engineer) built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. The site is deployed to GitHub Pages with static export.

## Development Commands
```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build (static export for GitHub Pages)
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Key Architecture Patterns

### Static Export Configuration
- **Output mode**: Static export (`output: 'export'` in next.config.ts)
- **Base path**: Uses `/porfolio` in production for GitHub Pages
- **Images**: Unoptimized for static export compatibility
- **Console removal**: Automatic in production builds

### Multilingual System
All text content is managed through a custom i18n system:
- **Context**: `contexts/LanguageContext.tsx` - centralized translations dictionary
- **Languages**: French (fr) and English (en)
- **Storage**: User preference saved in localStorage
- **Auto-detection**: Browser language detection on first visit
- **Usage**: Access via `const { t } = useLanguage()` hook, then `t('key.path')`
- **Adding translations**: Update the `translations` object in LanguageContext.tsx with both fr/en keys

### Component Organization
- **Component structure**: Each component has its own directory with `.tsx` and `.module.css` files
- **Location**: All components in `app/components/`
- **CSS Modules**: Used for component-scoped styling (e.g., `Home.module.css`, `Navbar.module.css`)
- **Global styles**: `app/globals.css` contains Tailwind imports and CSS variables
- **Styling approach**: Hybrid of Tailwind utility classes and CSS Modules

### Layout & Navigation
- **Root layout**: `app/layout.tsx` wraps all pages with LanguageProvider, Navbar, and Footer
- **Animations**: Framer Motion used for page transitions (PageTransition component)
- **Navigation**: Bottom fixed navbar (Navbar component) for mobile-first design
- **Language toggle**: Floating button (FloatingLanguageToggle) for language switching

### Page Structure
- **Home**: `app/page.tsx` - landing page with intro and profile image
- **Career**: `app/career/page.tsx` - timeline of professional experience
- **Projects**: `app/projects/page.tsx` - showcase of projects
- **Contact**: `app/contact/page.tsx` - contact form and information
- **AI Tools**: `app/ai-tools/page.tsx` - AI usage information

### SEO Configuration
Comprehensive SEO setup in `app/layout.tsx`:
- Open Graph tags for social sharing
- Twitter card metadata
- JSON-LD structured data (Person schema)
- Keywords optimized for DevSecOps/cybersecurity

## Important Implementation Details

### Path Aliases
- `@/*` maps to project root for cleaner imports

### Image Handling
- External images allowed (GitHub avatars)
- Background image: `public/background.avif`
- Project SVGs stored in `public/` directory
- Images are unoptimized for static export compatibility

### Client vs Server Components
- Most pages use `'use client'` directive for interactivity
- LanguageContext and all pages consuming it must be client components
- Layout.tsx uses suppressHydrationWarning for dark mode compatibility

### Styling Variables
CSS variables defined in globals.css:
- `--background`: white/dark based on color scheme
- `--foreground`: text color
- Dark mode support via `@media (prefers-color-scheme: dark)`

## Adding New Translations
When adding new text to the UI:
1. Add translation keys to `translations.fr` and `translations.en` in `contexts/LanguageContext.tsx`
2. Use the `t()` function in components: `t('section.key')`
3. Follow existing naming convention: `'page.section.element'`

## GitHub Pages Deployment Notes
- Static export generates files in `out/` directory
- BasePath `/porfolio` is applied in production
- Asset prefix ensures correct resource loading
- Images must be unoptimized for static hosting
