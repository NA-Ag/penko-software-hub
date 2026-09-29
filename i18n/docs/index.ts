import { useEffect, useState } from 'react';
import type { Language } from '../types';
import type { Docs } from './types';
import { docs as en } from './en';
import { useApp } from '../../AppContext';

export type { Block, Docs, DocSection, LegalDoc } from './types';

// One lazily loaded chunk per language; only the standalone pages ever import this module
const modules = import.meta.glob<{ docs: Docs }>(['./*.ts', '!./en.ts', '!./index.ts', '!./types.ts', '!./confirm.ts']);

const cache = new Map<Language, Docs>([['en', en]]);

export const loadDocs = async (lang: Language): Promise<Docs> => {
  const cached = cache.get(lang);
  if (cached) return cached;
  const load = modules[`./${lang}.ts`];
  // A language without a docs file yet falls back to English
  const loaded = load ? (await load()).docs : en;
  cache.set(lang, loaded);
  return loaded;
};

export const hasDocsTranslation = (lang: Language) => lang === 'en' || `./${lang}.ts` in modules;

// Current-language docs; shows the previous language until the new chunk arrives
export const useDocs = (): Docs => {
  const { language } = useApp();
  const [docs, setDocs] = useState<Docs>(() => cache.get(language) ?? en);

  useEffect(() => {
    let active = true;
    loadDocs(language).then(loaded => { if (active) setDocs(loaded); }).catch(() => undefined);
    return () => { active = false; };
  }, [language]);

  return docs;
};
