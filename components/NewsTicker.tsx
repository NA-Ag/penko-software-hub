import React, { useState } from 'react';
import { Bell, Pause, Play } from 'lucide-react';
import { useApp } from '../AppContext';
import { VOX_STEAM_URL } from '../constants';

const NewsTicker: React.FC = () => {
  const { t } = useApp();
  // Explicit pause control: hover-to-pause alone doesn't help keyboard or touch users (WCAG 2.2.2)
  const [paused, setPaused] = useState(false);

  // The first item is the Vox Early Access launch and links to its Steam page
  const newsItems = [t.newsUpdate1, t.newsUpdate2, t.newsUpdate3, t.newsUpdate4];

  // Rendered twice back to back so the -50% marquee loops without a visible jump
  const renderItems = (copy: number) =>
    newsItems.map((item, index) => (
      <span key={`${copy}-${index}`} className="text-sm font-medium text-slate-200 flex items-center gap-12 shrink-0" aria-hidden={copy > 0}>
        {index === 0 ? (
          <a
            href={VOX_STEAM_URL}
            target="_blank"
            rel="noreferrer"
            tabIndex={copy > 0 ? -1 : undefined}
            className="text-amber-300 hover:text-amber-200 underline decoration-amber-300/40 underline-offset-4"
          >
            {item}
          </a>
        ) : item}
        <span className="text-slate-600">•</span>
      </span>
    ));

  return (
    <section aria-label={t.newsLabel} className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 text-white h-9 flex items-center overflow-hidden shadow-lg group">
      <div className="flex items-center px-4 h-full bg-indigo-600 z-10 shrink-0">
        <Bell size={14} className="mr-2 motion-safe:animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-wider">{t.newsLabel}</span>
      </div>

      <div className="flex-1 overflow-hidden h-full flex items-center">
        <div className={`flex w-max items-center gap-12 pl-12 animate-[marquee_60s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none ${paused ? '[animation-play-state:paused]' : ''}`}>
          {renderItems(0)}
          {renderItems(1)}
        </div>
      </div>

      <button
        onClick={() => setPaused(p => !p)}
        aria-label={paused ? t.tickerPlay : t.tickerPause}
        className="h-full px-3 shrink-0 bg-slate-900 border-l border-slate-800 text-slate-300 hover:text-white motion-reduce:hidden"
      >
        {paused ? <Play size={14} /> : <Pause size={14} />}
      </button>
    </section>
  );
};

export default NewsTicker;
