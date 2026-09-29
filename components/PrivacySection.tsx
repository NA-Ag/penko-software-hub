import React from 'react';
import { ArrowUpRight, Clock, EyeOff, FileText, Github, HeartHandshake, LucideIcon, Scale, ShieldAlert, User } from 'lucide-react';
import { useApp } from '../AppContext';
import { Translation } from '../i18n';
import { GITHUB_URL } from '../constants';
import { sitePath } from '../lib/sitePaths';
import { PenkoIcon } from './PenkoIcon';

type Point = {
  title: keyof Translation;
  body: keyof Translation;
  Icon: LucideIcon;
  tone: string; // icon tile colors (full class strings for Tailwind)
};

const POINTS: Point[] = [
  { title: 'privacyNoDataTitle', body: 'privacyNoData', Icon: EyeOff, tone: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
  { title: 'privacyFreeTitle', body: 'privacyFree', Icon: HeartHandshake, tone: 'bg-rose-500/10 text-rose-600 dark:text-rose-400' },
  { title: 'privacyAsIsTitle', body: 'privacyAsIs', Icon: Scale, tone: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' },
  { title: 'privacyNoWarrantiesTitle', body: 'privacyNoWarranties', Icon: ShieldAlert, tone: 'bg-amber-500/10 text-amber-600 dark:text-amber-400' },
  { title: 'privacyOfflineTitle', body: 'privacyOffline', Icon: User, tone: 'bg-sky-500/10 text-sky-600 dark:text-sky-400' },
  { title: 'privacyBestEffortTitle', body: 'privacyBestEffort', Icon: Clock, tone: 'bg-violet-500/10 text-violet-600 dark:text-violet-400' },
];

const STATS: { value: string; label: keyof Translation }[] = [
  { value: '0', label: 'privacyStatTrackers' },
  { value: '0', label: 'privacyStatAds' },
  { value: '0', label: 'privacyStatSubscriptions' },
  { value: '100%', label: 'privacyStatOpenSource' },
];

const PrivacySection: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="privacy" className="py-24 bg-slate-50 dark:bg-[#080b10] border-t border-slate-200 dark:border-slate-900 transition-colors relative overflow-hidden">
      {/* Grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-16 items-start">

        {/* Left: the pitch, the numbers, and the proof */}
        <div className="lg:sticky lg:top-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center p-1.5 shrink-0">
              <PenkoIcon type="private" size={52} pose="idle" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {t.privacyTitle}
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            {t.privacyLead}
          </p>

          <dl className="grid grid-cols-2 gap-px rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-800 mb-8">
            {STATS.map(({ value, label }) => (
              <div key={label} className="bg-white dark:bg-[#0f1219] px-5 py-4 flex flex-col-reverse">
                <dt className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">
                  {t[label]}
                </dt>
                <dd className="text-3xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 dark:from-amber-400 dark:to-orange-500">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Verify it yourself */}
          <div className="rounded-2xl bg-slate-900 dark:bg-[#0f1219] border border-slate-800 p-6 shadow-lg">
            <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
              <Github size={14} />
              {t.privacyOpenSource}
            </div>
            <p className="text-sm text-slate-200 leading-relaxed mb-5">
              {t.privacyVerify}
            </p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold hover:bg-amber-100 transition-colors"
            >
              {t.privacyVerifyCta}
              <ArrowUpRight size={16} />
            </a>
          </div>

          <a
            href={sitePath('privacy.html')}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-red-600 dark:text-amber-400 hover:underline underline-offset-4"
          >
            <FileText size={16} />
            {t.privacyPolicyLink}
          </a>
        </div>

        {/* Right: the promises, spelled out */}
        <ol className="grid sm:grid-cols-2 gap-4">
          {POINTS.map(({ title, body, Icon, tone }, i) => (
            <li
              key={title}
              className="group relative flex flex-col gap-3 p-6 rounded-2xl bg-white dark:bg-[#0f1219]/90 border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tone}`}>
                  <Icon size={18} />
                </div>
                <span aria-hidden="true" className="text-xs font-mono font-bold text-slate-300 dark:text-slate-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">{t[title]}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t[body]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default PrivacySection;
