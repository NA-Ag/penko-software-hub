import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, Translation } from './translations';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
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

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // Load preferences from localStorage or default to browser language
  const getInitialLanguage = (): Language => {
    const saved = localStorage.getItem('penko-language');
    if (saved && saved in translations) {
      return saved as Language;
    }
    // Try to match browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang in translations) {
      return browserLang as Language;
    }
    return 'en';
  };

  const getInitialTheme = (): boolean => {
    const saved = localStorage.getItem('penko-theme');
    if (saved) {
      return saved === 'dark';
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialTheme);

  // Update localStorage and document when language changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('penko-language', lang);
    document.documentElement.lang = lang;
  };

  // Update localStorage and document when theme changes
  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newValue = !prev;
      localStorage.setItem('penko-theme', newValue ? 'dark' : 'light');
      if (newValue) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newValue;
    });
  };

  // Initialize theme on mount
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.documentElement.lang = language;
  }, []);

  const value: AppContextType = {
    language,
    setLanguage,
    t: translations[language],
    isDarkMode,
    toggleDarkMode
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
