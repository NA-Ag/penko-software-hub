import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider, getInitialLanguage, redirectToPreferredLanguage } from './AppContext';
import { loadLocale } from './i18n';
import '@fontsource-variable/inter';
import './index.css';
import { registerServiceWorker } from './lib/registerServiceWorker';
import { applyReadingPrefs, readReadingPrefs } from './lib/readingPrefs';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Load the visitor's language before the first render so the page never flashes English.
// If the chunk can't load (e.g. offline before it was cached), fall back to English.
if (!redirectToPreferredLanguage()) loadLocale(getInitialLanguage()).catch(() => undefined).then(() => {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>
  );
});

registerServiceWorker();
applyReadingPrefs(readReadingPrefs());
