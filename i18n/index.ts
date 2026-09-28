import type { Language, LocaleModule } from './types';
import * as en from './locales/en';

export type { Language, LocaleModule, Translation } from './types';

// Native names shown in the language picker, in picker order
export const languageNames: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  pl: 'Polski',
  tr: 'Türkçe',
  ru: 'Русский',
  uk: 'Українська',
  hi: 'हिन्दी',
  id: 'Bahasa Indonesia',
  vi: 'Tiếng Việt',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
};

export const LANGUAGES = Object.keys(languageNames) as Language[];

export const isLanguage = (value: string): value is Language => value in languageNames;

// English ships in the main bundle as the fallback; every other language is its own
// chunk, downloaded only when chosen (and precached by the service worker for offline use).
const loaders: Record<Language, () => Promise<LocaleModule>> = {
  en: () => Promise.resolve(en),
  es: () => import('./locales/es'),
  fr: () => import('./locales/fr'),
  de: () => import('./locales/de'),
  it: () => import('./locales/it'),
  pt: () => import('./locales/pt'),
  pl: () => import('./locales/pl'),
  tr: () => import('./locales/tr'),
  ru: () => import('./locales/ru'),
  uk: () => import('./locales/uk'),
  hi: () => import('./locales/hi'),
  id: () => import('./locales/id'),
  vi: () => import('./locales/vi'),
  zh: () => import('./locales/zh'),
  ja: () => import('./locales/ja'),
  ko: () => import('./locales/ko'),
};

const cache = new Map<Language, LocaleModule>([['en', en]]);

export const loadLocale = async (lang: Language): Promise<LocaleModule> => {
  const cached = cache.get(lang);
  if (cached) return cached;
  const locale = await loaders[lang]();
  cache.set(lang, locale);
  return locale;
};

// Synchronous access for locales that are already loaded (falls back to English)
export const getLoadedLocale = (lang: Language): LocaleModule => cache.get(lang) ?? en;
