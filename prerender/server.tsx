// Server-side entry used only at build time (see scripts/prerender.mjs): renders any page
// in any language to static HTML, so every URL arrives fully rendered.
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../App';
import { AppProvider } from '../AppContext';
import SitePage, { PageId } from '../pages/SitePage';
import { LANGUAGES, Language, loadLocale } from '../i18n';
import { loadDocs } from '../i18n/docs';
import { PAGE_PATHS, PageKey, setServerSiteContext } from '../lib/sitePaths';

export { LANGUAGES, PAGE_PATHS };

// Which docs.meta entry holds each page's <title> and description
const META_KEYS = {
  home: 'home',
  'plaza-privacy': 'plazaPrivacy',
  products: 'products',
  vox: 'vox',
  'vox-privacy': 'voxPrivacy',
  'vox-terms': 'voxTerms',
  'vox-guide': 'voxGuide',
  'vox-press': 'voxPress',
  'vox-credits': 'voxCredits',
} as const;

export const renderPage = async (page: PageKey, lang: Language, root: string) => {
  setServerSiteContext({ root, lang, file: false });
  const [, docs] = await Promise.all([loadLocale(lang), loadDocs(lang)]);
  const html = renderToString(
    <AppProvider language={lang}>
      {page === 'home' ? <App /> : <SitePage page={page as PageId} />}
    </AppProvider>
  );
  return { html, meta: docs.meta[META_KEYS[page]] };
};
