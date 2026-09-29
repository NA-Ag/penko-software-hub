import { useCallback, useState } from 'react';

// Reader comfort settings, saved per visitor. The same keys are applied before first paint
// by the inline script in every HTML file, so pages never flash with the wrong settings.
export interface ReadingPrefs {
  size: number; // index into TEXT_SIZES
  font: 'default' | 'readable' | 'dyslexic';
  spacing: boolean;
  underline: boolean;
  reduceMotion: boolean;
}

export const TEXT_SIZES = ['100%', '112.5%', '125%', '137.5%'];
const STORAGE_KEY = 'penko-reading';
export const DEFAULT_READING: ReadingPrefs = { size: 0, font: 'default', spacing: false, underline: false, reduceMotion: false };

const FONT_FAMILIES: Record<ReadingPrefs['font'], string | null> = {
  default: null,
  readable: '"Atkinson Hyperlegible"',
  dyslexic: '"OpenDyslexic"',
};

// Font files are only downloaded when someone actually picks that font
const loadFont = (font: ReadingPrefs['font']) => {
  if (font === 'readable') return Promise.all([import('@fontsource/atkinson-hyperlegible/400.css'), import('@fontsource/atkinson-hyperlegible/700.css')]);
  if (font === 'dyslexic') return Promise.all([import('@fontsource/opendyslexic/400.css'), import('@fontsource/opendyslexic/700.css')]);
  return Promise.resolve();
};

export const readReadingPrefs = (): ReadingPrefs => {
  try {
    return { ...DEFAULT_READING, ...JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') };
  } catch {
    return DEFAULT_READING;
  }
};

export const applyReadingPrefs = (prefs: ReadingPrefs) => {
  const html = document.documentElement;
  html.style.fontSize = TEXT_SIZES[prefs.size] ?? '';
  const family = FONT_FAMILIES[prefs.font];
  if (family) html.style.setProperty('--reading-font', family);
  else html.style.removeProperty('--reading-font');
  html.classList.toggle('a11y-spacing', prefs.spacing);
  html.classList.toggle('a11y-underline', prefs.underline);
  html.classList.toggle('a11y-reduce-motion', prefs.reduceMotion);
  loadFont(prefs.font).catch(() => undefined);
};

export const useReadingPrefs = () => {
  const [prefs, setPrefs] = useState<ReadingPrefs>(readReadingPrefs);
  const update = useCallback((changes: Partial<ReadingPrefs>) => {
    setPrefs(prev => {
      const next = { ...prev, ...changes };
      applyReadingPrefs(next);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* not persisted */ }
      return next;
    });
  }, []);
  return { prefs, update, reset: () => update(DEFAULT_READING) };
};
