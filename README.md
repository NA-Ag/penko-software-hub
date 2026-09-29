# Penko Software website

The website of Penko Software, split into two parts on one domain:

- **Penko Plaza** (`/`) - our free, open-source (GPL-3.0) apps for office, learning, music, and creativity: what's new, the apps you can use today, what's next, and how the project is funded.
- **Paid apps** (`/products/`) - our closed-source apps, which fund Penko Plaza. Each has its own product site with its own privacy policy, terms, guide and press kit, starting with **Penko Vox: Japanese** at `/vox/`.

Installable, works offline, and available as a desktop app.

**Live site:** https://penkosoftware.org/

## Features

- **Installable & offline-first** - Works as a PWA; everything, including fonts, is cached for offline use
- **Desktop app** - Packaged with Electron for Linux (AppImage/deb), Windows, and macOS
- **16 languages, each with its own URLs** - English, Español, Français, Deutsch, Italiano, Português, Polski, Türkçe, Русский, Українська, हिन्दी, Bahasa Indonesia, Tiếng Việt, 中文, 日本語, 한국어. English lives at the root, other languages under `/<lang>/` (e.g. `/es/vox/`); every page is pre-rendered with translated titles, hreflang links and a sitemap, so each language can be found in search
- **Light & dark mode** - Follows your system setting, remembered locally
- **Accessible** - Keyboard navigable, screen-reader labelled, WCAG AA contrast, respects reduced motion, plus reading options (text size, Atkinson Hyperlegible or OpenDyslexic font, wider spacing, underlined links, reduced motion)
- **Smooth navigation** - Cross-page transitions and background preloading of linked pages in supporting browsers
- **Privacy-first** - No tracking, no ads, no data collection

## Technology Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6 with `vite-plugin-pwa`
- **Styling**: Tailwind CSS 3 (compiled at build time, no CDN)
- **Icons**: Lucide React
- **Desktop**: Electron + electron-builder
- **Tests**: Vitest

## Getting Started

Requires Node.js 22.22 or newer (the test suite's jsdom needs it).

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
| `npm test` | Run the translation, content, and page interaction tests |
| `npm run build` | Type-check, build, and pre-render every page in every language into `dist/` |
| `npm run fetch:steam-media` | Re-sync Penko Vox screenshots and trailer from Steam now (also runs automatically before `dev` and `build`) |
| `npm run preview` | Serve the production build locally |
| `npm run electron:dev` | Run the desktop app against the dev server |
| `npm run electron:build` | Build desktop installers into `release/` |
| `node generate-icons.js` | Regenerate the favicon and app icons from the Penko sprite |

## Project Structure

```
penko-software-hub/
├── index.html / index.tsx  # Home page: Penko Plaza (App.tsx)
├── site.tsx                # Entry for every other page (see "Pages" below)
├── components/             # Shared UI and Plaza sections (Navbar, Footer, PageShell, Hero, ...)
├── pages/                  # Studio pages: paid apps hub, Vox product page, legal/guide/press
├── lib/                    # Site-wide helpers (language-aware links, reading options, service worker)
├── prerender/              # Server-side entry used to pre-render pages at build time
├── scripts/                # Build helpers: Steam media sync, pre-rendering
├── hooks/                  # Shared React hooks
├── penko_anim/             # Mascot animation frames (16x16 pixel grids)
├── assets/                 # Images bundled by Vite (Vox art)
├── public/                 # Static files (favicon, PWA icons, social image, CNAME)
├── electron/               # Desktop app entry point
├── tests/                  # Vitest suites
├── i18n/
│   ├── index.ts            # Language list, picker names, and lazy locale loaders
│   ├── types.ts            # The Translation interface for UI text
│   ├── locales/            # One file per language: UI text + feature label translations
│   └── docs/               # One file per language: long-form text for the studio pages
│       └── confirm.ts      # Notes to verify before publishing (shown on the dev server only)
├── constants.ts            # Product catalog, contact and store links
└── AppContext.tsx          # Language and theme state
```

### Pages

Every page is its own HTML file, so each URL works on GitHub Pages, offline, and in the desktop app. Each file sets `data-page` (which page to render) and `data-root` (the path back to the site root, used for links).

At build time, `scripts/prerender.mjs` renders every page in every language (via `prerender/server.tsx`) into finished HTML: English at the paths below, other languages under `/<lang>/` with `data-lang` set. On the live site the language picker moves between these URLs, and an English URL opened by someone who prefers another language redirects to it. The dev server has no language folders, so there the language switches in place.

| URL | File | Contents |
| --- | --- | --- |
| `/` | `index.html` | Penko Plaza |
| `/privacy.html` | `privacy.html` | Penko Plaza privacy policy |
| `/products/` | `products/index.html` | Paid apps hub |
| `/vox/` | `vox/index.html` | Penko Vox: Japanese product page (Steam "Game Website") |
| `/vox/privacy/` | `vox/privacy/index.html` | Vox privacy policy (Steam "Privacy Policy" URL) |
| `/vox/terms/` | `vox/terms/index.html` | Vox terms of use (EULA) |
| `/vox/guide/` | `vox/guide/index.html` | Getting-started guide (Steam "Online Manual" URL) |
| `/vox/press/` | `vox/press/index.html` | Press kit |

To add a page: create its HTML file (copy an existing one and adjust `data-page`, `data-root` and the meta tags), add it to `build.rollupOptions.input` in `vite.config.ts`, add a case in `pages/SitePage.tsx`, add its path to `PAGE_PATHS` in `lib/sitePaths.ts`, and add its title and description to `meta` in every `i18n/docs/<lang>.ts`.

### Penko Vox screenshots and trailer

The Vox page shows the screenshots and trailer from its Steam store page. `scripts/fetch-steam-media.mjs` downloads the screenshots into `public/media/vox/` (served from our own site, so visitors don't contact Steam and images work offline) and records the trailer's stream, which only loads from Steam when a visitor presses play. It runs before every dev start and build, and the deploy workflow rebuilds daily, so changes on Steam appear within a day. Both `public/media/` and `generated/` are build output and aren't committed.

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
2. Copy `i18n/docs/en.ts` to `i18n/docs/<code>.ts` and translate it (it's picked up automatically). Keep every `id`, email and URL unchanged; legal pages show a notice that the English version is binding
3. Add the code to `Language` in `i18n/types.ts`
4. Add its native name and loader in `i18n/index.ts`
5. Run `npm test`

## Deployment

- **Website** - Every push to `main` runs the tests, builds, and deploys to GitHub Pages. It also rebuilds daily to pick up Steam media changes
- **Desktop** - Pushing a `v*` tag builds installers for Linux, Windows, and macOS and attaches them to a GitHub release

## Support

Penko apps are free. If you'd like to support development, check out our paid apps on Steam:

- **Penko Vox: Japanese** (Early Access): https://store.steampowered.com/app/4836870/Penko_Vox_Japanese/

## License

GPL-3.0. See [LICENSE.md](LICENSE.md).

---

**Penko Plaza** — Offline-First Productivity, Learning & Creativity | GPL-3.0 Licensed
