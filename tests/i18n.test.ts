import { beforeAll, describe, expect, it } from 'vitest';
import { LANGUAGES, Language, LocaleModule, loadLocale } from '../i18n';
import { PRODUCTS } from '../constants';
import { getDescriptionKey } from '../components/productMeta';

const OTHER_LANGUAGES = LANGUAGES.filter(l => l !== 'en');
const locales = {} as Record<Language, LocaleModule>;

beforeAll(async () => {
  // Goes through the same lazy loaders the app uses, so a broken or missing locale file fails here
  for (const lang of LANGUAGES) locales[lang] = await loadLocale(lang);
});

const enUi = () => locales.en.ui as unknown as Record<string, string>;
const ui = (lang: Language) => locales[lang].ui as unknown as Record<string, string>;

describe('translations', () => {
  it.each(LANGUAGES)('%s has exactly the same keys as English', lang => {
    expect(Object.keys(ui(lang)).sort()).toEqual(Object.keys(enUi()).sort());
  });

  it.each(LANGUAGES)('%s has no empty strings', lang => {
    const empty = Object.entries(ui(lang)).filter(([, v]) => typeof v !== 'string' || !v.trim());
    expect(empty.map(([k]) => k)).toEqual([]);
  });

  // Short labels like "Menu" or "Open source" can legitimately match English,
  // but a whole sentence identical to English is almost certainly untranslated.
  it.each(OTHER_LANGUAGES)('%s has no sentences left in English', lang => {
    const untranslated = Object.entries(enUi())
      .filter(([key, en]) => en.split(/\s+/).length >= 4 && ui(lang)[key] === en)
      .map(([key]) => key);
    expect(untranslated).toEqual([]);
  });
});

describe('Penko Vox: Japanese naming', () => {
  // Must match the Steam store name exactly, in every language
  it.each(LANGUAGES)('%s uses the exact product name', lang => {
    expect(ui(lang).voxJapaneseTitle).toBe('Penko Vox: Japanese');
    const wrong = Object.entries(ui(lang)).filter(([, v]) => /Penko Vox Japanese/.test(v)).map(([k]) => k);
    expect(wrong).toEqual([]);
  });
});

describe('products', () => {
  it.each(PRODUCTS.map(p => p.id))('%s has a description in every language', id => {
    const key = getDescriptionKey(id);
    for (const lang of LANGUAGES) {
      expect(ui(lang)[key], `${lang}.${String(key)}`).toBeTruthy();
    }
  });

  it.each(OTHER_LANGUAGES)('every feature label is translated to %s', lang => {
    const labels = new Set(PRODUCTS.flatMap(p => p.features));
    const missing = [...labels].filter(label => !locales[lang].features[label]?.trim());
    expect(missing).toEqual([]);
  });
});
