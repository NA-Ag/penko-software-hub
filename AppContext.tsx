import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, ReactNode } from 'react';
import { getLoadedLocale, isLanguage, Language, loadLocale, Translation } from './i18n';
import { localizedPagePath } from './lib/sitePaths';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
  // Translates a product feature label (English text from constants.ts)
  tFeature: (label: string) => string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

// On the live site every page exists in every language, so changing language means going
// to that language's URL for this page; the dev server swaps text in place instead
const LANGUAGE_URLS = import.meta.env.PROD;

// localStorage can throw (private mode, blocked storage), so preferences degrade gracefully
const readPref = (key: string): string | null => {
  try { return localStorage.getItem(key); } catch { return null; }
};
const writePref = (key: string, value: string) => {
  try { localStorage.setItem(key, value); } catch { /* preference just won't persist */ }
};

// The visitor's preferred language: saved choice, else the browser's language if we have it
export const getPreferredLanguage = (): Language | null => {
  const saved = readPref('penko-language');
  if (saved && isLanguage(saved)) return saved;
  const browserLang = typeof navigator === 'undefined' ? '' : navigator.language.split('-')[0];
  return isLanguage(browserLang) ? browserLang : null;
};

// On the live site every page URL has a language (/es/vox/ is Spanish), and it wins;
// on the dev server pages have no language, so the visitor's preference applies
export const getInitialLanguage = (): Language => {
  const pageLang = typeof document === 'undefined' ? undefined : document.documentElement.dataset.lang;
  if (pageLang && isLanguage(pageLang)) return pageLang;
  return getPreferredLanguage() ?? 'en';
};

// Live site only: an English URL opened by someone who prefers another language is sent
// to that language's version of the page. Returns true when a redirect is under way.
export const redirectToPreferredLanguage = (): boolean => {
  if (!LANGUAGE_URLS || document.documentElement.dataset.lang !== 'en') return false;
  const preferred = getPreferredLanguage();
  if (!preferred || preferred === 'en') return false;
  window.location.replace(localizedPagePath(preferred) + window.location.hash);
  return true;
};

const getInitialTheme = (): boolean => {
  if (typeof window === 'undefined') return false; // pre-rendering
  const saved = readPref('penko-theme');
  if (saved) return saved === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// `language` is set when pre-rendering, where there's no document to read it from
export const AppProvider: React.FC<{ children: ReactNode; language?: Language }> = ({ children, language: fixedLanguage }) => {
  // The entry file preloads the initial locale, so it is available synchronously here
  const [language, setLanguageState] = useState<Language>(() => fixedLanguage ?? getInitialLanguage());
  const [locale, setLocale] = useState(() => getLoadedLocale(language));
  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialTheme);
  // Latest language the user picked; an older, slower chunk load must not override it
  const requestedLanguage = useRef(language);

  // Keep <html> in sync with the current preferences
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const setLanguage = useCallback((lang: Language) => {
    writePref('penko-language', lang);
    if (LANGUAGE_URLS) {
      window.location.href = localizedPagePath(lang) + window.location.hash;
      return;
    }
    requestedLanguage.current = lang;
    // Swap text only once the language's chunk has loaded, so the page never shows missing strings
    loadLocale(lang).then(loaded => {
      if (requestedLanguage.current !== lang) return;
      setLocale(loaded);
      setLanguageState(lang);
    }).catch(() => { /* chunk unavailable (offline and not yet cached): keep the current language */ });
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => {
      writePref('penko-theme', prev ? 'light' : 'dark');
      return !prev;
    });
  }, []);

  const value = useMemo<AppContextType>(() => ({
    language,
    setLanguage,
    t: locale.ui,
    tFeature: (label: string) => locale.features[label] ?? label,
    isDarkMode,
    toggleDarkMode,
  }), [language, locale, setLanguage, isDarkMode, toggleDarkMode]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
