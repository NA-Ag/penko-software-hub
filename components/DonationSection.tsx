import React from 'react';
import { ArrowUpRight, Bug, CheckCircle2, ExternalLink, Heart, Rocket, Sparkles, Star } from 'lucide-react';
import { useApp } from '../AppContext';
import { HUB_REPO_URL, VOX_STEAM_URL } from '../constants';
// Imported (not "/path" strings) so Vite resolves them for both the website and the Electron file:// build
import voxCapsuleUrl from '../assets/vox_capsule.svg';
import voxIconUrl from '../assets/vox_icon.svg';

const SteamLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.86 4.21 10.74 9.8 11.79l1.37-4.12c-.25-.22-.46-.48-.6-.79l-3.32-1.39c-.6-.25-1.07-.73-1.3-1.33L2.59 14.8c-.76-.32-1.12-1.2-.8-1.97.32-.76 1.2-1.12 1.97-.8l3.36 1.4c.58.24 1 .72 1.16 1.31l3.33 1.39c.62.26 1.1.76 1.31 1.39l4.03-1.35c.48-.16.99-.04 1.35.32.53.53.53 1.39 0 1.92-.35.36-.87.48-1.35.32l-4.04 1.35c-.25.62-.72 1.11-1.34 1.37l-1.32 3.96C19.79 22.74 24 17.86 24 12c0-6.63-5.37-12-12-12zm-3.5 15c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
  </svg>
);

const helpCardClass = 'group relative flex flex-col gap-3 p-6 rounded-2xl bg-white dark:bg-[#0f1219]/90 border border-slate-200 dark:border-slate-800/80 shadow-sm transition-all duration-300';
const helpIconClass = 'w-10 h-10 rounded-xl flex items-center justify-center shrink-0';

const DonationSection: React.FC = () => {
  const { t } = useApp();

  const voxFeatures = [t.voxJapaneseFeature1, t.voxJapaneseFeature2, t.voxJapaneseFeature3, t.voxJapaneseFeature4];
  const voxUpdates = [t.voxUpdate1, t.voxUpdate2, t.voxUpdate3];

  return (
    <section id="donate" className="py-24 bg-slate-50 dark:bg-[#080b10] border-t border-slate-200 dark:border-slate-900 transition-colors relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 dark:bg-rose-500/20 border border-rose-200 dark:border-rose-800/50 text-rose-700 dark:text-rose-300 text-xs font-bold mb-6 shadow-sm">
            <Heart size={12} className="fill-current text-rose-600 dark:text-rose-400" />
            <span>{t.donationsTagline}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-5 tracking-tight">
            {t.donationsTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-3">
            {t.donationsDescription1}
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            {t.donationsDescription2}
          </p>
        </div>

        {/* Featured paid app: Penko Vox Japanese. Always dark, echoing the capsule art's night sky. */}
        <article className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c0a12] via-[#1c1328] to-[#3c1a3b] border border-white/10 shadow-2xl shadow-rose-950/20">
          <div className="absolute -top-24 right-1/3 w-80 h-80 bg-red-500/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-10 p-5 sm:p-8 lg:p-10 items-center">
            {/* Capsule art, shown uncropped since the title sits near its edge */}
            <a
              href={VOX_STEAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl bg-[#0c0a12]"
            >
              <img
                src={voxCapsuleUrl}
                alt={t.voxJapaneseTitle}
                width={1232}
                height={706}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </a>

            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles size={12} />
                  {t.earlyAccessBadge}
                </span>
                <span className="inline-flex items-center gap-2 text-emerald-300 text-xs font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  {t.voxJapaneseStatus}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <img src={voxIconUrl} alt="" width={56} height={56} className="w-14 h-14 rounded-2xl ring-1 ring-white/15 shadow-lg shrink-0" />
                <div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">{t.voxJapaneseTitle}</h3>
                  <p className="text-sm font-medium text-rose-200/80">{t.voxJapaneseTagline}</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {t.voxJapaneseDesc}
              </p>

              <ul className="flex flex-wrap gap-2 mb-6">
                {voxFeatures.map(feature => (
                  <li key={feature} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Next update preview */}
              <div className="mb-8 rounded-xl border border-amber-400/20 bg-amber-400/[0.06] p-4">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-300 mb-2.5">
                  <Rocket size={13} />
                  {t.voxUpdateTitle}
                </p>
                <ul className="space-y-1.5">
                  {voxUpdates.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                      <span className="mt-2 w-1 h-1 rounded-full bg-amber-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href={VOX_STEAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 whitespace-nowrap shrink-0 rounded-xl bg-gradient-to-r from-red-500 to-amber-500 text-white text-sm font-bold shadow-lg shadow-red-900/30 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <SteamLogo className="w-5 h-5 shrink-0" />
                  {t.voxJapaneseCta}
                  <ExternalLink size={14} className="opacity-80" />
                </a>
                <p className="inline-flex items-center gap-2 text-xs text-slate-400">
                  <Heart size={12} className="text-rose-400 fill-current shrink-0" />
                  {t.supportPurchaseNote}
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Other ways to help */}
        <h3 className="mt-16 mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          {t.supportOtherTitle}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className={`${helpCardClass} border-dashed`}>
            <div className="flex items-center justify-between">
              <div className={`${helpIconClass} bg-amber-500/10 text-amber-600 dark:text-amber-400`}>
                <Sparkles size={18} />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {t.upcomingPaidStatus}
              </span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">{t.upcomingPaidTitle}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t.upcomingPaidDesc}</p>
          </div>

          <a href={HUB_REPO_URL} target="_blank" rel="noreferrer" className={`${helpCardClass} hover:-translate-y-1 hover:shadow-md hover:border-amber-300 dark:hover:border-amber-500/40`}>
            <div className="flex items-center justify-between">
              <div className={`${helpIconClass} bg-yellow-500/10 text-yellow-600 dark:text-yellow-400`}>
                <Star size={18} />
              </div>
              <ArrowUpRight size={18} className="text-slate-300 dark:text-slate-600 group-hover:text-amber-500 transition-colors" />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">{t.supportStarTitle}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t.supportStarDesc}</p>
          </a>

          <a href={`${HUB_REPO_URL}/issues`} target="_blank" rel="noreferrer" className={`${helpCardClass} hover:-translate-y-1 hover:shadow-md hover:border-amber-300 dark:hover:border-amber-500/40`}>
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
