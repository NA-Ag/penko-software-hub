import type { Language } from '../i18n/types';

// Every page is its own HTML file (see vite.config.ts), pre-rendered in every language:
// English at the site root, other languages under /<lang>/ (e.g. /es/vox/). Each HTML file
// declares its language and how to get back to the site root:
//   <html data-lang="es" data-root="../../">
// Links are built relative to that root, which keeps them working on GitHub Pages, in the
// offline cache, and in the desktop app's file:// build.

export type SitePath =
  | ''
  | 'privacy.html'
  | 'products/'
  | 'vox/'
  | 'vox/privacy/'
  | 'vox/terms/'
  | 'vox/guide/'
  | 'vox/press/'
  | 'vox/credits/';

export type PageKey = 'home' | 'plaza-privacy' | 'products' | 'vox' | 'vox-privacy' | 'vox-terms' | 'vox-guide' | 'vox-press' | 'vox-credits';

export const PAGE_PATHS: Record<PageKey, SitePath> = {
  home: '',
  'plaza-privacy': 'privacy.html',
  products: 'products/',
  vox: 'vox/',
  'vox-privacy': 'vox/privacy/',
  'vox-terms': 'vox/terms/',
  'vox-guide': 'vox/guide/',
  'vox-press': 'vox/press/',
  'vox-credits': 'vox/credits/',
};

interface SiteContext {
  root: string;
  lang: Language;
  file: boolean;
}

// Pre-rendering (scripts/prerender.mjs) has no document, so it sets the context explicitly
let serverContext: SiteContext | null = null;
export const setServerSiteContext = (context: SiteContext) => { serverContext = context; };

const siteContext = (): SiteContext => serverContext ?? {
  root: document.documentElement.dataset.root ?? './',
  // The dev server has no language folders, so pages there have no data-lang: links stay English
  lang: (document.documentElement.dataset.lang as Language | undefined) ?? 'en',
  file: window.location.protocol === 'file:',
};

export const sitePath = (path: SitePath, hash?: string, lang?: Language): string => {
  const { root, lang: pageLang, file } = siteContext();
  const language = lang ?? pageLang;
  let url = root + (language === 'en' ? '' : `${language}/`) + path;
  // file:// has no directory index, so point folders at their index.html explicitly
  if (file && (path === '' || path.endsWith('/'))) url += 'index.html';
  return (url || './') + (hash ? `#${hash}` : '');
};

// The current page in another language (used by the language picker)
export const localizedPagePath = (lang: Language): string => {
  const page = (document.documentElement.dataset.page as PageKey | undefined) ?? 'home';
  return sitePath(PAGE_PATHS[page] ?? '', undefined, lang);
};

// A file under the site root (e.g. synced Steam media), from any page depth
export const siteFile = (path: string): string => siteContext().root + path;
