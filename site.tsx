import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider, getInitialLanguage, redirectToPreferredLanguage } from './AppContext';
import { loadLocale } from './i18n';
import { loadDocs } from './i18n/docs';
import SitePage, { PageId } from './pages/SitePage';
import '@fontsource-variable/inter';
import './index.css';
import { registerServiceWorker } from './lib/registerServiceWorker';
import { applyReadingPrefs, readReadingPrefs } from './lib/readingPrefs';

// Entry point for the studio's standalone pages (paid apps hub, Penko Vox site, legal pages).
// The home page uses index.tsx; see vite.config.ts for the list of pages.
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}
const page = document.documentElement.dataset.page as PageId;

// Load the visitor's language (UI text and long-form text) before the first render
const language = getInitialLanguage();
if (!redirectToPreferredLanguage()) Promise.all([loadLocale(language), loadDocs(language)]).catch(() => undefined).then(() => {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AppProvider>
        <SitePage page={page} />
      </AppProvider>
    </React.StrictMode>
  );
});

registerServiceWorker();
applyReadingPrefs(readReadingPrefs());
