# Penko App Store

The official installable App Store for Penko Software - a collection of free, open-source Progressive Web Apps (PWAs) for office productivity, learning, music, creativity, and more. Functions as a "mini app store" on your device.

## Overview

Penko App Store is a modern, responsive Progressive Web App (PWA) that serves as the central station for discovering, installing, and accessing all Penko Software projects. Built with React and TypeScript, it features a clean interface with multi-language support, dark mode, and works offline once installed.

## Features

- **Installable App Store** - Works as a native app on your device to manage your Penko ecosystem
- **23 Projects Showcase** - Display of all Penko Software applications across 6 active categories
- **Multi-Language Support** - Full internationalization with support for multiple languages
- **Dark Mode** - Seamless light/dark theme switching with persistent preferences
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Category Filtering** - Easy browsing by project category
- **Project Status Badges** - Visual indicators for Live, Alpha, Beta, and Coming Soon projects
- **Steam Integration** - Support options via wishlisting our paid apps on Steam
- **Privacy-First** - No tracking, no ads, no data collection

## Technology Stack

- **Framework**: React 19.2.1
- **Desktop Wrapper**: Electron 40.0.0 (packaged using electron-builder)
- **Language**: TypeScript
- **Build Tool**: Vite 6.2.0
- **Icons**: Lucide React
- **Styling**: Tailwind CSS
- **Type Safety**: TypeScript with strict mode

## Project Categories

1. **Office Suite** - Productivity applications (Writer, Calc, Note, Slide, etc.)
2. **Learning** - Educational tools (Adventure, Typing, Reader, Soroban)
3. **Music Platform** - Music streaming and distribution (Tune)
4. **Creative Tools** - Design and editing software (PDF, Vector, Image, Cut)
5. **Enterprise Suite** - Business applications (DB, Campus, HCM, ERP)
6. **Privacy & Security** - Data protection tools (Private)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/penkosoftware/penko-software-hub.git
cd penko-software-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
penko-software-hub/
├── components/          # React components
│   ├── ProductGrid.tsx     # Main product showcase console
│   ├── DonationSection.tsx # Support console & Steam wishlist
│   ├── PenkoIcon.tsx       # Mascot custom vector pixel art renderer
│   ├── NewsTicker.tsx      # Scrolling updates banner
├── App.tsx             # Main application component
├── AppContext.tsx      # Global state management (theme, language)
├── constants.ts        # Product data and configuration
├── types.ts            # TypeScript type definitions
├── translations.ts     # Multi-language translations
├── index.tsx           # Application entry point
├── index.html          # HTML template with Tailwind CSS
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## Configuration

### Adding a New Project

Edit `constants.ts` and add a new product to the `PRODUCTS` array:

```typescript
{
  id: 'project-id',
  name: 'Project Name',
  description: 'Project description',
  category: ProductCategory.OFFICE,
  iconName: 'FileText', // Lucide icon name
  repoUrl: 'https://github.com/penkosoftware/project',
  liveUrl: 'https://project.penko.software',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  imageUrl: 'https://picsum.photos/id/1/800/600',
  status: 'alpha', // 'live' | 'alpha' | 'beta' | 'coming-soon'
  version: 'v1.0.0'
}
```

### Adding Translations

Update `translations.ts` with new translation keys for all supported languages.

### Customizing Theme

Theme colors and styling are defined in the inline `<style>` tag in `index.html` using Tailwind CSS utility classes.

## Active Projects

Currently showcased projects include:

- **Penko Adventure** (Alpha) - RPG-based language learning with AI storytelling
- **Penko Writer** (Alpha) - Privacy-first word processor
- **Penko Tune** (Alpha) - Music platform with 0% artist fees
- **Penko Typing** (Alpha) - Retro arcade-style typing game
- **Penko Reader** (Beta) - Accessibility-focused reading tool
- **Penko Soroban** (Alpha) - Digital Japanese abacus for mental math

and 17 more coming soon.

## Development

### Component Architecture

- `App.tsx` - Main layout with Navbar, Hero, ProductGrid, DonationSection, Privacy, and Footer
- `AppContext.tsx` - Provides global state for theme and language preferences
- `ProductGrid.tsx` - Renders filterable product cards
- `DonationSection.tsx` - Displays donation options

### State Management

The application uses React Context (`AppContext`) for managing:
- Dark mode preference (persisted to localStorage)
- Language selection (persisted to localStorage)
- Translations based on selected language

## License

This project is licensed under the GPL-3.0 License - see the LICENSE file for details.

## Privacy & Transparency

- **No tracking** - Zero analytics or telemetry
- **No data collection** - All preferences stored locally
- **No ads** - Completely ad-free experience
- **Open source** - Full source code available for audit
- **Free forever** - No hidden costs or subscriptions

## Support

If you find this project useful, consider supporting Penko Software development by wishlisting our paid apps:

- **Penko Vox Japanese**: https://store.steampowered.com/app/4836870/Penko_Vox_Japanese/

## Links

- **Website**: https://penkosoftware.org/
- **GitHub**: https://github.com/NA-Ag/penko-software-hub
- **Projects**: All projects are accessible through the hub interface

## Acknowledgments

- Built with [React](https://react.dev/)
- Icons by [Lucide](https://lucide.dev/)
- Powered by [Vite](https://vitejs.dev/)

---

**Penko Station** — Offline-First Productivity, Learning & Creativity | GPL-3.0 Licensed
