import React, { useEffect, useMemo, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { useApp } from '../AppContext';
import { Translation } from '../i18n';
import { usePenkoPose } from '../hooks/usePenkoPose';
import { PenkoIcon } from './PenkoIcon';

type Tab = 'note' | 'read' | 'abacus' | 'type';

const TABS: { id: Tab; label: keyof Translation }[] = [
  { id: 'note', label: 'widgetTabNote' },
  { id: 'read', label: 'widgetTabRead' },
  { id: 'abacus', label: 'widgetTabAbacus' },
  { id: 'type', label: 'widgetTabType' },
];

// Soroban bead colors (matches Penko Soroban)
const BEAD_ON = '#d97706';
const BEAD_OFF = '#92400e';
const BEAD_SHADOW = '0 2px 4px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.2)';

const SandboxWidget: React.FC = () => {
  const { t } = useApp();
  const { pose, handlers } = usePenkoPose();
  const [tab, setTab] = useState<Tab>('note');

  // Note / Reader
  const [noteText, setNoteText] = useState(t.widgetNoteDefault);
  const [readWpm, setReadWpm] = useState(250);
  const [isPlaying, setIsPlaying] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  // Soroban: 1 upper bead worth 5, 4 lower beads worth 1 each
  const [abacusUpper, setAbacusUpper] = useState(false);
  const [abacusLower, setAbacusLower] = useState(0);
  const abacusValue = (abacusUpper ? 5 : 0) + abacusLower;

  // Typing
  const targetPhrase = t.widgetTypePhrase;
  const [typeInput, setTypeInput] = useState('');
  const [typeStartTime, setTypeStartTime] = useState<number | null>(null);
  const [typeWpm, setTypeWpm] = useState<number | null>(null);

  const resetTyping = () => {
    setTypeInput('');
    setTypeStartTime(null);
    setTypeWpm(null);
  };

  // Reset demo content when the language changes
  useEffect(() => {
    setNoteText(t.widgetNoteDefault);
    resetTyping();
  }, [t.widgetNoteDefault]);

  const words = useMemo(() => noteText.trim().split(/\s+/).filter(Boolean), [noteText]);

  // Restart the reader whenever the text it reads changes
  useEffect(() => {
    setWordIndex(0);
    setIsPlaying(false);
  }, [words]);

  // RSVP word loop
  useEffect(() => {
    if (!isPlaying || words.length === 0) return;
    const timer = window.setTimeout(() => {
      if (wordIndex >= words.length - 1) {
        setIsPlaying(false);
        setWordIndex(0);
      } else {
        setWordIndex(wordIndex + 1);
      }
    }, 60000 / readWpm);
    return () => window.clearTimeout(timer);
  }, [isPlaying, wordIndex, words, readWpm]);

  const selectTab = (next: Tab) => {
    setTab(next);
    if (next !== 'read') setIsPlaying(false);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeWpm !== null) return;
    const val = e.target.value;
    const now = Date.now();
    const start = typeStartTime ?? now;
    if (typeStartTime === null && val.length > 0) setTypeStartTime(now);
    setTypeInput(val);

    if (val === targetPhrase) {
      // Floor elapsed time at 1s so a paste can't produce an absurd WPM
      const elapsedMins = Math.max(now - start, 1000) / 60000;
      setTypeWpm(Math.round(targetPhrase.split(' ').length / elapsedMins));
    }
  };

  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-red-500 via-[#ef4444] to-[#ff8c00] p-0.5 shadow-2xl animate-[fadeIn_0.5s_ease-out]">
      <div className="rounded-3xl bg-white dark:bg-[#0f1219] p-6 transition-colors">

        {/* Station Logo & Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 p-1 shadow-md cursor-pointer group/logo"
              {...handlers}
            >
              <div className="transition-transform duration-300 group-hover/logo:scale-105">
                <PenkoIcon type="default" size={40} pose={pose} />
              </div>
            </div>
            <div>
              <h3 className="text-md font-bold text-slate-800 dark:text-white transition-colors">Penko Plaza</h3>
              <p className="text-xs uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 font-mono">{t.widgetTitle}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 bg-slate-100 dark:bg-slate-800/50 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
            {TABS.map(({ id, label }) => (
              <button
                key={id}
                aria-pressed={tab === id}
                onClick={() => selectTab(id)}
                className={`px-2.5 py-1.5 text-[11px] font-semibold rounded-lg transition-all ${tab === id ? 'bg-white dark:bg-[#1c1d24] text-red-500 dark:text-amber-400 shadow-sm' : 'text-slate-500 hover:text-slate-600'}`}
              >
                {t[label]}
              </button>
            ))}
          </div>
        </div>

        {/* Sandbox Content Screen */}
        <div className="min-h-[190px] bg-slate-50 dark:bg-[#161a24] rounded-2xl border border-slate-200 dark:border-slate-800/80 p-4 transition-colors flex flex-col justify-between">
          {tab === 'note' && (
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder={t.widgetNotePlaceholder}
              aria-label={t.widgetTabNote}
              className="w-full h-32 bg-transparent border-none resize-none rounded-lg text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans placeholder-slate-500"
            />
          )}

          {tab === 'read' && (
            <div className="flex-1 flex flex-col justify-between h-full">
              <div className="flex-1 flex items-center justify-center py-6">
                <span className="text-3xl md:text-4xl font-extrabold font-mono tracking-tight text-slate-800 dark:text-white">
                  {words[wordIndex] || '---'}
                </span>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/50 flex items-center justify-between gap-4">
                <button
                  onClick={() => setIsPlaying(playing => !playing)}
                  className="px-3.5 py-1.5 bg-red-500 dark:bg-amber-600 text-white rounded-lg text-xs font-semibold hover:bg-red-600 dark:hover:bg-amber-700 flex items-center gap-1.5 transition-colors"
                >
                  {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                  {isPlaying ? t.widgetReadPause : t.widgetReadStart}
                </button>

                <label className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">WPM:</span>
                  <input
                    type="range"
                    min="100"
                    max="600"
                    step="25"
                    value={readWpm}
                    onChange={(e) => setReadWpm(Number(e.target.value))}
                    className="w-24 accent-red-500 dark:accent-amber-500"
                  />
                  <span className="text-xs font-bold font-mono text-slate-600 dark:text-slate-300 w-8">{readWpm}</span>
                </label>
              </div>
            </div>
          )}

          {tab === 'abacus' && (
            <div className="flex-1 flex items-center justify-between gap-6 py-2">
              {/* Interactive Soroban column */}
              <div className="flex flex-col items-center rounded-xl p-3 border-2 border-[#3f1d0b] w-24 relative shadow-2xl bg-[#201008]">
                {/* Metal rod */}
                <div className="absolute inset-y-0 w-1.5 bg-[#cbd5e1] rounded-full z-0" />

                {/* Upper deck (value 5) */}
                <div className="h-10 w-full relative z-10 flex items-center justify-center">
                  <button
                    onClick={() => setAbacusUpper(up => !up)}
                    className={`w-12 h-6 rounded-full border border-black/30 cursor-pointer shadow-md transition-all duration-150 ease-out ${abacusUpper ? 'translate-y-[12px]' : 'translate-y-[-8px]'}`}
                    style={{ backgroundColor: abacusUpper ? BEAD_ON : BEAD_OFF, boxShadow: BEAD_SHADOW }}
                    aria-label="5"
                    aria-pressed={abacusUpper}
                  />
                </div>

                {/* Divider beam */}
                <div className="w-full h-2 bg-[#78350f] border-y border-black/50 z-20 shadow-md" />

                {/* Lower deck (value 1 x 4) */}
                <div className="h-28 w-full relative z-10 flex flex-col gap-[2px] pt-1">
                  {[0, 1, 2, 3].map(idx => {
                    const isActive = idx < abacusLower;
                    return (
                      <button
                        key={idx}
                        onClick={() => setAbacusLower(isActive ? idx : idx + 1)}
                        className={`w-12 h-5 rounded-full border border-black/30 cursor-pointer shadow-md mx-auto transition-all duration-150 ease-out ${isActive ? 'translate-y-[-14px]' : 'translate-y-0'}`}
                        style={{ backgroundColor: isActive ? BEAD_ON : BEAD_OFF, boxShadow: BEAD_SHADOW }}
                        aria-label="1"
                        aria-pressed={isActive}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center">
                <span className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-1 tracking-wider">{t.widgetAbacusLabel}</span>
                <span aria-live="polite" className="text-6xl font-black font-mono text-slate-800 dark:text-amber-400 transition-all">
                  {abacusValue}
                </span>
                <span className="text-xs text-slate-500 mt-2 text-center">{t.widgetAbacusGuide}</span>
              </div>
            </div>
          )}

          {tab === 'type' && (
            <div className="flex-1 flex flex-col justify-between h-full">
              {typeWpm !== null ? (
                <div role="status" className="flex-1 flex flex-col items-center justify-center text-center">
                  <span className="text-green-600 dark:text-green-400 text-sm font-extrabold mb-1">🎉 {t.widgetTypeSuccess}</span>
                  <div className="text-4xl font-black font-mono text-slate-800 dark:text-white mb-2">
                    {typeWpm} <span className="text-xs text-slate-500 font-bold uppercase">WPM</span>
                  </div>
                  <button
                    onClick={resetTyping}
                    className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    {t.widgetTypeRetry}
                  </button>
                </div>
              ) : (
                <div className="flex-1 flex flex-col justify-between">
                  <div className="py-2 text-center font-mono text-sm tracking-wide">
                    {targetPhrase.split('').map((char, index) => {
                      let color = 'text-slate-500';
                      if (index < typeInput.length) {
                        color = typeInput[index] === char ? 'text-green-500 dark:text-emerald-400 font-bold' : 'text-red-500 font-bold underline';
                      }
                      return <span key={index} className={color}>{char}</span>;
                    })}
                  </div>

                  <input
                    type="text"
                    value={typeInput}
                    onChange={handleTypeChange}
                    placeholder={t.widgetTypeStart}
                    aria-label={t.widgetTabType}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-amber-500"
                  />

                  <div className="text-xs text-slate-500 dark:text-slate-400 text-center font-semibold mt-1 uppercase">
                    {t.widgetTypeDesc}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex justify-end text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 transition-colors">
          <div>{t.widgetClientSide}</div>
        </div>
      </div>
    </div>
  );
};

export default SandboxWidget;
