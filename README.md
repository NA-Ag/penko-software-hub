# Penko Station

The official hub for Penko Software: a free, open-source app store for our Progressive Web Apps (PWAs) covering office, learning, music, and creative tools. Installable, works offline, and available as a desktop app.

**Live site:** https://penkosoftware.org/

## Features

- **Installable & offline-first** - Works as a PWA; everything, including fonts, is cached for offline use
- **Desktop app** - Packaged with Electron for Linux (AppImage/deb), Windows, and macOS
- **16 languages** - English, Español, Français, Deutsch, Italiano, Português, Polski, Türkçe, Русский, Українська, हिन्दी, Bahasa Indonesia, Tiếng Việt, 中文, 日本語, 한국어. Each loads on demand and is cached for offline use
- **Light & dark mode** - Follows your system setting, remembered locally
- **Accessible** - Keyboard navigable, screen-reader labelled, WCAG AA contrast, respects reduced motion
- **Privacy-first** - No tracking, no ads, no data collection

## Technology Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6 with `vite-plugin-pwa`
- **Styling**: Tailwind CSS 3 (compiled at build time, no CDN)
- **Icons**: Lucide React
- **Desktop**: Electron + electron-builder
- **Tests**: Vitest

## Getting Started

Requires Node.js 20 or newer.

```bash
git clone https://github.com/NA-Ag/penko-software-hub.git
cd penko-software-hub
npm install
npm run dev
```

Open http://localhost:3000

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server on port 3000 |
| `npm test` | Run the translation and content checks |
| `npm run build` | Type-check and build the site into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run electron:dev` | Run the desktop app against the dev server |
| `npm run electron:build` | Build desktop installers into `release/` |
| `node generate-icons.js` | Regenerate the favicon and app icons from the Penko sprite |

## Project Structure

```
penko-software-hub/
├── components/            # UI sections (Navbar, Hero, ProductGrid, DonationSection, ...)
│   ├── PenkoIcon.tsx      # Pixel-art mascot renderer with per-app costumes
│   ├── productMeta.ts     # Maps product ids to costumes and description keys
│   └── productIcons.ts    # Lucide icons used by products
├── hooks/                 # Shared React hooks
├── penko_anim/            # Mascot animation frames (16x16 pixel grids)
├── assets/                # Images bundled by Vite (Vox capsule art)
├── public/                # Static files (favicon, PWA icons, social image, CNAME)
├── electron/              # Desktop app entry point
├── tests/                 # Vitest suites
├── i18n/
│   ├── index.ts           # Language list, picker names, and lazy locale loaders
│   ├── types.ts           # The Translation interface every language implements
│   └── locales/           # One file per language: UI text + feature label translations
├── constants.ts           # Product catalog and external links
└── AppContext.tsx         # Language and theme state
```

## Common Tasks

### Adding or updating an app

Edit the `PRODUCTS` array in `constants.ts`:

```typescript
{
  id: 'penko-example',            // also picks the mascot costume and description key
  name: 'Penko Example',
  description: 'English fallback description',
  category: ProductCategory.OFFICE,
  iconName: 'FileText',           // must be listed in components/productIcons.ts
  repoUrl: 'https://github.com/NA-Ag/penko-example',
  liveUrl: 'https://example.penkosoftware.org/',
  features: ['Offline Mode', 'PDF Export'],
  status: 'alpha',                // 'live' | 'beta' | 'alpha' | 'coming-soon'
  version: 'v0.1.0'
}
```

Then add a `descPenkoExample` entry to the `ui` object in every file in `i18n/locales/`, and translations for any new feature labels to each file's `features` object. `npm test` fails if anything is missing.

### Adding translation text

Add the key to the `Translation` interface in `i18n/types.ts` and to every file in `i18n/locales/`. TypeScript and `npm test` both catch missing keys.

### Adding a language

1. Copy `i18n/locales/en.ts` to `i18n/locales/<code>.ts` and translate it, filling in `features` too
2. Add the code to `Language` in `i18n/types.ts`
3. Add its native name and loader in `i18n/index.ts`
4. Run `npm test`

## Deployment

- **Website** - Every push to `main` runs the tests, builds, and deploys to GitHub Pages
- **Desktop** - Pushing a `v*` tag builds installers for Linux, Windows, and macOS and attaches them to a GitHub release

## Support

Penko apps are free. If you'd like to support development, check out our paid apps on Steam:

- **Penko Vox: Japanese** (Early Access): https://store.steampowered.com/app/4836870/Penko_Vox_Japanese/

## License

GPL-3.0. See [LICENSE.md](LICENSE.md).

---

**Penko Station** — Offline-First Productivity, Learning & Creativity | GPL-3.0 Licensed
