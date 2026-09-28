import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, ReactNode } from 'react';
import { getLoadedLocale, isLanguage, Language, loadLocale, Translation } from './i18n';

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

// localStorage can throw (private mode, blocked storage), so preferences degrade gracefully
const readPref = (key: string): string | null => {
  try { return localStorage.getItem(key); } catch { return null; }
};
const writePref = (key: string, value: string) => {
  try { localStorage.setItem(key, value); } catch { /* preference just won't persist */ }
};

export const getInitialLanguage = (): Language => {
  const saved = readPref('penko-language');
  if (saved && isLanguage(saved)) return saved;
  // Try to match browser language
  const browserLang = navigator.language.split('-')[0];
  return isLanguage(browserLang) ? browserLang : 'en';
};

const getInitialTheme = (): boolean => {
  const saved = readPref('penko-theme');
  if (saved) return saved === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // index.tsx preloads the initial locale, so it is available synchronously here
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
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
