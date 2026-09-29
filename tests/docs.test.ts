import { beforeAll, describe, expect, it } from 'vitest';
import { LANGUAGES, Language } from '../i18n';
import { hasDocsTranslation, loadDocs } from '../i18n/docs';
import type { Docs } from '../i18n/docs';

const all = {} as Record<Language, Docs>;

beforeAll(async () => {
  for (const lang of LANGUAGES) all[lang] = await loadDocs(lang);
});

// Reduce a value to its shape: object keys, array lengths, and section ids (which must never be translated)
const shape = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [k, k === 'id' ? v : shape(v)])
    );
  }
  return typeof value;
};

const strings = (value: unknown): string[] =>
  typeof value === 'string' ? [value]
    : Array.isArray(value) ? value.flatMap(strings)
    : value && typeof value === 'object' ? Object.values(value).flatMap(strings)
    : [];

describe('studio page docs', () => {
  it.each(LANGUAGES)('%s has its own docs file', lang => {
    expect(hasDocsTranslation(lang)).toBe(true);
  });

  it.each(LANGUAGES)('%s has the same structure as English', lang => {
    expect(shape(all[lang])).toEqual(shape(all.en));
  });

  it.each(LANGUAGES)('%s has no empty strings', lang => {
    expect(strings(all[lang]).filter(s => !s.trim())).toEqual([]);
  });

  it.each(LANGUAGES)('%s keeps every email and URL exactly', lang => {
    // Trailing punctuation (".", "。", ")") belongs to the sentence, not the address
    const links = (d: Docs) =>
      (strings(d).join(' ').match(/[\w.+-]+@[\w-]+\.[\w.]+|https?:\/\/[^\s)）。、，।]+/g) ?? []).map(l => l.replace(/[.,]+$/, '')).sort();
    expect(new Set(links(all[lang]))).toEqual(new Set(links(all.en)));
  });

  it.each(LANGUAGES)('%s never mentions a solo developer', lang => {
    const text = strings(all[lang]).join(' ').toLowerCase();
    expect(text).not.toMatch(/single developer|one developer|solo developer/);
  });
});
