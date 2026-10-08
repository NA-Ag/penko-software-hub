import React, { useEffect, useRef, useState } from 'react';
import { Minus, Plus, RotateCcw, Type } from 'lucide-react';
import { useApp } from '../AppContext';
import { ReadingPrefs, TEXT_SIZES, useReadingPrefs } from '../lib/readingPrefs';

const toggleClass = (on: boolean) =>
  `relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors ${on ? 'bg-red-500 dark:bg-amber-500' : 'bg-slate-300 dark:bg-slate-600'}`;

// The controls themselves, used in the desktop popover and inline in the mobile menu
export const ReadingControls: React.FC = () => {
  const { t } = useApp();
  const { prefs, update, reset } = useReadingPrefs();

  const fonts: { id: ReadingPrefs['font']; label: string; family: string }[] = [
    { id: 'default', label: t.readingFontDefault, family: 'inherit' },
    { id: 'readable', label: t.readingFontReadable, family: '"Atkinson Hyperlegible", sans-serif' },
    { id: 'dyslexic', label: t.readingFontDyslexic, family: '"OpenDyslexic", sans-serif' },
  ];
  const toggles: { key: 'spacing' | 'underline' | 'reduceMotion'; label: string }[] = [
    { key: 'spacing', label: t.readingSpacing },
    { key: 'underline', label: t.readingUnderline },
    { key: 'reduceMotion', label: t.readingReduceMotion },
  ];

  return (
    <div className="space-y-4 text-sm text-slate-700 dark:text-slate-200">
      <div>
        <p id="reading-size" className="font-semibold mb-2">{t.readingTextSize}</p>
        <div role="group" aria-labelledby="reading-size" className="flex items-center gap-2">
          <button onClick={() => update({ size: Math.max(0, prefs.size - 1) })} disabled={prefs.size === 0} aria-label={t.readingSmaller} className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800"><Minus size={16} /></button>
          <span className="w-16 text-center font-mono tabular-nums" aria-live="polite">{TEXT_SIZES[prefs.size]}</span>
          <button onClick={() => update({ size: Math.min(TEXT_SIZES.length - 1, prefs.size + 1) })} disabled={prefs.size === TEXT_SIZES.length - 1} aria-label={t.readingLarger} className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800"><Plus size={16} /></button>
        </div>
      </div>

      <fieldset>
        <legend className="font-semibold mb-2">{t.readingFont}</legend>
        <div className="grid gap-1.5">
          {fonts.map(font => (
            <label key={font.id} className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer ${prefs.font === font.id ? 'border-red-400 dark:border-amber-400 bg-red-50 dark:bg-amber-400/10' : 'border-slate-200 dark:border-slate-700'}`}>
              <input type="radio" name="reading-font" checked={prefs.font === font.id} onChange={() => update({ font: font.id })} className="accent-red-500 dark:accent-amber-500" />
              <span style={{ fontFamily: font.family }}>{font.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="space-y-2.5">
        {toggles.map(toggle => (
          <label key={toggle.key} className="flex items-center justify-between gap-3 cursor-pointer">
            <span>{toggle.label}</span>
            <input type="checkbox" role="switch" checked={prefs[toggle.key]} onChange={e => update({ [toggle.key]: e.target.checked })} className="sr-only peer" />
            <span aria-hidden="true" className={`${toggleClass(prefs[toggle.key])} peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-amber-500`}>
              <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${prefs[toggle.key] ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </span>
          </label>
        ))}
      </div>

      <button onClick={reset} className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 dark:text-amber-400 hover:underline underline-offset-4">
        <RotateCcw size={14} />
        {t.readingReset}
      </button>
    </div>
  );
};

// Navbar button that opens the reading options panel
const ReadingMenu: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { t } = useApp();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-label={t.readingOptions}
        title={t.readingOptions}
        className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        <Type size={18} />
      </button>
      {/* On phones the panel spans the screen under the header (anchored to the button it
          would hang off the left edge) and scrolls if it is taller than the screen */}
      {open && (
        <div role="dialog" aria-label={t.readingOptions} className="fixed inset-x-4 top-[4.5rem] max-h-[calc(100dvh-5.5rem)] overflow-y-auto overscroll-contain lg:absolute lg:inset-x-auto lg:top-auto lg:right-0 lg:mt-2 lg:w-72 lg:max-h-[calc(100vh-6rem)] z-50 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700">
          <p className="font-bold text-slate-900 dark:text-white mb-3">{t.readingOptions}</p>
          <ReadingControls />
        </div>
      )}
    </div>
  );
};

export default ReadingMenu;
