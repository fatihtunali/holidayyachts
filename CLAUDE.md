# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Holiday Yachts is a luxury gulet charter booking website for Turkey's Turquoise Coast. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

## Common Commands

```bash
# Development
npm run dev          # Start dev server (port 3000)

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint

# Deploy to production server (run as root, executes as holidaygulet user)
ssh root@142.93.136.228 'su - holidaygulet -c "cd ~/holidaygulet/holidayyachts && git pull && source ~/.bashrc && npm install && npm run build && pm2 restart all"'
```

## Architecture

### Data Layer (Static Data)
All content is stored in TypeScript files under `src/data/`:
- `yachts.ts` - Fleet data with seasonal pricing, translations, amenities
- `itineraries.ts` - Sailing routes with day-by-day schedules
- `destinations.ts` - Port/destination information
- `blog.ts` - Blog articles

### Internationalization
- Three languages: English (en), German (de), French (fr)
- Translation system in `src/contexts/LanguageContext.tsx`
- All UI strings use the `t()` function: `const { t } = useLanguage()`
- Content translations embedded in data objects (e.g., `yacht.translations.de`)

### Pricing System
Yachts support two pricing models:
1. **Daily pricing** (`pricePerDay`): Seasonal rates for April-May, June/Sept, July-Aug, October
2. **Weekly pricing** (`pricePerWeek`): Low, mid, high season tiers

### API Routes
- `POST /api/booking` - Booking submissions
- `POST /api/contact` - Contact form submissions
- `POST /api/newsletter` - Newsletter subscriptions

### Database Abstraction
`src/lib/db/index.ts` implements an in-memory database adapter. The `DatabaseAdapter` interface in `src/types/database.ts` defines the contract for swapping to a real database.

### Key Contexts
- `LanguageContext` - i18n state and translation function
- `FavoritesContext` - User favorites (localStorage)

### Component Organization
- `src/components/ui/` - Reusable UI components (Button, Toast, Lightbox, etc.)
- `src/components/layout/` - Header, Footer
- `src/components/yacht/` - Yacht-specific components
- `src/components/booking/` - Booking form, calendar
- `src/components/seo/` - Structured data schemas

## Server Details

- **Server IP**: 142.93.136.228
- **Reserved IP**: 174.138.106.79
- **Region**: Amsterdam (AMS3)
- **User**: holidaygulet
- **Process manager**: PM2
- **App location**: /home/holidaygulet/holidaygulet/holidayyachts

## Database Credentials

- **Host**: 142.93.136.228
- **Database**: holidaygulet
- **User**: holidaygulet
- **Password**: Sk235672.-Yt

## Related Projects

- kayalarturistik.com (port 3006) - lighttours repo
- maviyolculukgezisi.com (port 3007) - maviyolculukgezisi repo
