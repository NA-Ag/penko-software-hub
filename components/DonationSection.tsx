import React from 'react';
import { ArrowRight, ArrowUpRight, Bug, Heart, Star } from 'lucide-react';
import { useApp } from '../AppContext';
import { HUB_REPO_URL } from '../constants';
import { sitePath } from '../lib/sitePaths';
import voxIconUrl from '../assets/vox_icon.svg';

const helpCardClass = 'group relative flex flex-col gap-3 p-6 rounded-2xl bg-white dark:bg-[#0f1219]/90 border border-slate-200 dark:border-slate-800/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-300 dark:hover:border-amber-500/40';
const helpIconClass = 'w-10 h-10 rounded-xl flex items-center justify-center shrink-0';

// Penko Plaza's side of the funding story: a short card pointing to the paid apps,
// which have their own pages, terms and privacy policies
const DonationSection: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="donate" className="py-24 bg-slate-50 dark:bg-[#080b10] border-t border-slate-200 dark:border-slate-900 transition-colors relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 dark:bg-rose-500/20 border border-rose-200 dark:border-rose-800/50 text-rose-700 dark:text-rose-300 text-xs font-bold mb-6 shadow-sm">
            <Heart size={12} className="fill-current text-rose-600 dark:text-rose-400" />
            <span>{t.donationsTagline}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.donationsTitle}
          </h2>
        </div>

        {/* How Penko is funded */}
        <a
          href={sitePath('products/')}
          className="group flex flex-col sm:flex-row sm:items-center gap-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c0a12] via-[#1c1328] to-[#3c1a3b] border border-white/10 shadow-xl hover:shadow-2xl transition-shadow"
        >
          <img src={voxIconUrl} alt="" width={64} height={64} className="w-16 h-16 rounded-2xl ring-1 ring-white/15 shadow-lg shrink-0" />
          <div className="flex-1">
            <h3 className="text-xl font-extrabold text-white mb-2">{t.fundingTitle}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{t.fundingBody}</p>
          </div>
          <span className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-red-500 to-amber-500 text-white text-sm font-bold shadow-lg shrink-0 group-hover:brightness-110 transition">
            {t.fundingCta}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </a>

        {/* Other ways to help */}
        <h3 className="mt-14 mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          {t.supportOtherTitle}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <a href={HUB_REPO_URL} target="_blank" rel="noreferrer" className={helpCardClass}>
            <div className="flex items-center justify-between">
              <div className={`${helpIconClass} bg-yellow-500/10 text-yellow-600 dark:text-yellow-400`}>
                <Star size={18} />
              </div>
              <ArrowUpRight size={18} className="text-slate-300 dark:text-slate-600 group-hover:text-amber-500 transition-colors" />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">{t.supportStarTitle}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t.supportStarDesc}</p>
          </a>

          <a href={`${HUB_REPO_URL}/issues`} target="_blank" rel="noreferrer" className={helpCardClass}>
            <div className="flex items-center justify-between">
              <div className={`${helpIconClass} bg-indigo-500/10 text-indigo-600 dark:text-indigo-400`}>
                <Bug size={18} />
              </div>
              <ArrowUpRight size={18} className="text-slate-300 dark:text-slate-600 group-hover:text-amber-500 transition-colors" />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">{t.supportIssuesTitle}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t.supportIssuesDesc}</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
