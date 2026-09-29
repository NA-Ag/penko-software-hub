import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS, GITHUB_URL, NEXT_UP_IDS } from '../constants';
import { Product } from '../types';
import { useApp } from '../AppContext';
import { PenkoIcon } from './PenkoIcon';
import { getAppCostume, getDescriptionKey } from './productMeta';
import { CATEGORY_COLORS, CATEGORY_LABEL_KEYS } from './categoryStyles';

// Only the apps being built next; longer-term ideas stay in constants.ts but off the page
const NEXT_UP = NEXT_UP_IDS
  .map(id => PRODUCTS.find(p => p.id === id))
  .filter((p): p is Product => Boolean(p));

const Roadmap: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="roadmap" className="py-20 border-t border-slate-200 dark:border-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
            {t.navRoadmap}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">{t.roadmapSubtitle}</p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 dark:text-amber-400 hover:underline underline-offset-4"
          >
            GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {NEXT_UP.map((app, i) => {
            const color = CATEGORY_COLORS[app.category];
            return (
              <li
                key={app.id}
                className="relative flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-[#0f1219]/90 border border-slate-200 dark:border-slate-800/80 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center p-1 ${color.soft}`}>
                    <PenkoIcon type={getAppCostume(app.id)} size={48} pose="idle" />
                  </div>
                  <span aria-hidden="true" className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${color.text}`}>
                    {t[CATEGORY_LABEL_KEYS[app.category]]}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{app.name}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t[getDescriptionKey(app.id)] || app.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Roadmap;
