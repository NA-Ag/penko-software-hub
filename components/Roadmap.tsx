import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS, GITHUB_URL } from '../constants';
import { ProductCategory } from '../types';
import { useApp } from '../AppContext';
import { PenkoIcon } from './PenkoIcon';
import { getProductIcon } from './productIcons';
import { getDescriptionKey } from './productMeta';
import { CATEGORY_COLORS, CATEGORY_COSTUMES, CATEGORY_LABEL_KEYS } from './categoryStyles';

const PLANNED = PRODUCTS.filter(p => p.status === 'coming-soon');
const GROUPS = Object.values(ProductCategory)
  .map(category => ({ category, apps: PLANNED.filter(p => p.category === category) }))
  .filter(group => group.apps.length > 0);

const Roadmap: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="roadmap" className="py-20 border-t border-slate-200 dark:border-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
            {t.roadmapTitle}
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

        {/* Masonry-style columns so categories of different lengths pack neatly */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
          {GROUPS.map(({ category, apps }) => {
            const color = CATEGORY_COLORS[category];
            return (
              <div
                key={category}
                className="break-inside-avoid mb-5 rounded-2xl bg-white dark:bg-[#0f1219]/90 border border-slate-200 dark:border-slate-800/80 shadow-sm overflow-hidden"
              >
                <div className={`flex items-center gap-3 px-5 py-4 border-b border-slate-200 dark:border-slate-800 ${color.bgLight}`}>
                  <div className={`w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border ${color.border} flex items-center justify-center p-0.5 shrink-0`}>
                    <PenkoIcon type={CATEGORY_COSTUMES[category]} size={32} pose="idle" />
                  </div>
                  <h3 className={`font-bold ${color.text}`}>{t[CATEGORY_LABEL_KEYS[category]]}</h3>
                  <span className={`ml-auto text-xs font-mono font-bold px-2 py-0.5 rounded-full ${color.chip}`}>{apps.length}</span>
                </div>
                <ul className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {apps.map(app => {
                    const Icon = getProductIcon(app.iconName);
                    return (
                      <li key={app.id} className="flex gap-3 px-5 py-4">
                        <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center shrink-0">
                          <Icon size={18} />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-semibold text-slate-800 dark:text-white">{app.name}</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                            {t[getDescriptionKey(app.id)] || app.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
