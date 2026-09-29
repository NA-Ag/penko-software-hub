import React, { useMemo } from 'react';
import {
  BookOpenCheck, Brain, Cpu, Check, ChevronDown, CheckCircle2, ExternalLink, FileText, Gamepad2, GraduationCap, Heart,
  KeyRound, Mail, Scale, MessageCircle, Mic, Minus, Monitor, Newspaper, PenLine, Phone, Rocket, Shield, Sparkles, TrendingUp, Volume2,
  LucideIcon,
} from 'lucide-react';
import { useApp } from '../AppContext';
import { useDocs } from '../i18n/docs';
import type { RequirementSet } from '../i18n/docs/types';
import { CONTACT_EMAIL, VOX_FORUMS_URL, VOX_LANGUAGES, VOX_PLATFORMS, voxSteamLink } from '../constants';
import { sitePath } from '../lib/sitePaths';
import { ConfirmNotes } from './DocBlocks';
import Breadcrumbs from '../components/Breadcrumbs';
import VoxMedia from './VoxMedia';
import voxCapsuleUrl from '../assets/vox_capsule.svg';
import voxIconUrl from '../assets/vox_icon.svg';

const SteamLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.86 4.21 10.74 9.8 11.79l1.37-4.12c-.25-.22-.46-.48-.6-.79l-3.32-1.39c-.6-.25-1.07-.73-1.3-1.33L2.59 14.8c-.76-.32-1.12-1.2-.8-1.97.32-.76 1.2-1.12 1.97-.8l3.36 1.4c.58.24 1 .72 1.16 1.31l3.33 1.39c.62.26 1.1.76 1.31 1.39l4.03-1.35c.48-.16.99-.04 1.35.32.53.53.53 1.39 0 1.92-.35.36-.87.48-1.35.32l-4.04 1.35c-.25.62-.72 1.11-1.34 1.37l-1.32 3.96C19.79 22.74 24 17.86 24 12c0-6.63-5.37-12-12-12zm-3.5 15c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
  </svg>
);

// Icons for the "How it works" pillars and the feature cards, in the same order as the text
const PILLAR_ICONS: LucideIcon[] = [Mic, Brain, PenLine, Volume2];
const FEATURE_ICONS: LucideIcon[] = [Gamepad2, Phone, BookOpenCheck, PenLine, TrendingUp, Shield, KeyRound];
const REQUIREMENT_ROWS: (keyof RequirementSet)[] = ['os', 'processor', 'memory', 'graphics', 'storage', 'sound', 'notes'];

const sectionClass = 'max-w-6xl mx-auto px-4 md:px-8 py-16';
const h2Class = 'text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6';
const cardClass = 'rounded-2xl bg-white dark:bg-[#0f1219]/90 border border-slate-200 dark:border-slate-800/80 shadow-sm';

const SteamButton: React.FC<{ label: string; placement: string }> = ({ label, placement }) => (
  <a
    href={voxSteamLink(placement)}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 whitespace-nowrap rounded-xl bg-gradient-to-r from-red-500 to-amber-500 text-white text-sm font-bold shadow-lg shadow-red-900/30 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all"
  >
    <SteamLogo className="w-5 h-5 shrink-0" />
    {label}
    <ExternalLink size={14} className="opacity-80" />
  </a>
);

const VoxPage: React.FC = () => {
  const { t, language } = useApp();
  const { vox, common } = useDocs();

  const features = [t.voxJapaneseFeature1, t.voxJapaneseFeature2, t.voxJapaneseFeature3, t.voxJapaneseFeature4, t.voxJapaneseFeature5];
  const updates = [t.voxUpdate1, t.voxUpdate2, t.voxUpdate3, t.voxUpdate4];

  // Language names in the visitor's own language, from the browser (no translation needed)
  const languageName = useMemo(() => {
    const names = new Intl.DisplayNames([language], { type: 'language' });
    return (code: string) => names.of(code) ?? code;
  }, [language]);

  const docLinks = [
    { href: sitePath('vox/guide/'), label: common.guide, Icon: BookOpenCheck },
    { href: sitePath('vox/privacy/'), label: common.privacy, Icon: Shield },
    { href: sitePath('vox/terms/'), label: common.terms, Icon: FileText },
    { href: sitePath('vox/press/'), label: common.press, Icon: Newspaper },
    { href: sitePath('vox/credits/'), label: common.credits, Icon: Scale },
  ];

  return (
    <>
      {/* Hero: always dark, echoing the capsule art's night sky */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c0a12] via-[#1c1328] to-[#3c1a3b]">
        <div className="absolute -top-24 right-1/3 w-96 h-96 bg-red-500/20 rounded-full blur-[110px] pointer-events-none" />
        <Breadcrumbs
          onDark
          className="relative max-w-6xl mx-auto px-4 md:px-8 pt-6"
          items={[{ label: t.navPaidApps, href: sitePath('products/') }, { label: t.voxJapaneseTitle }]}
        />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 pt-8 pb-12 md:pb-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <img src={voxCapsuleUrl} alt={t.voxJapaneseTitle} width={1232} height={706} className="w-full h-auto rounded-2xl ring-1 ring-white/10 shadow-2xl" />
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={12} />
                {t.earlyAccessBadge}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-white/15 text-slate-300 text-xs font-medium">{t.voxFullRelease}</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <img src={voxIconUrl} alt="" width={64} height={64} className="w-16 h-16 rounded-2xl ring-1 ring-white/15 shadow-lg shrink-0" />
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{t.voxJapaneseTitle}</h1>
                <p className="text-base font-medium text-rose-200/90">{vox.heroTitle}</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-5">{t.voxJapaneseDesc}</p>
            <ul className="flex flex-wrap gap-2 mb-5">
              {features.map(feature => (
                <li key={feature} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-6">
              <Monitor size={15} className="text-slate-400 shrink-0" />
              {VOX_PLATFORMS.join(' · ')}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <SteamButton label={t.voxJapaneseCta} placement="vox_hero" />
              <p className="text-xs text-slate-400">{vox.priceNote}</p>
            </div>
            {/* Set expectations before purchase: the local AI needs capable hardware */}
            <p className="mt-4 flex items-start gap-2 text-sm text-amber-200">
              <Cpu size={16} className="shrink-0 mt-0.5" />
              <span>
                {vox.hardwareNote}{' '}
                <a href="#requirements" className="font-semibold underline underline-offset-2 hover:text-white whitespace-nowrap">{vox.checkRequirements}</a>
              </span>
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400">
              <Heart size={12} className="text-rose-400 fill-current shrink-0" />
              {t.supportPurchaseNote}
            </p>
          </div>
        </div>
      </section>

      <VoxMedia />

      {/* New in v2.1 */}
      <section className={`${sectionClass} pb-0`}>
        <div className="rounded-2xl border border-amber-300/60 dark:border-amber-400/20 bg-amber-50 dark:bg-amber-400/[0.06] p-6">
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 mb-4">
            <Rocket size={15} />
            {t.voxUpdateTitle}
          </h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
            {updates.map(item => (
              <li key={item} className="flex items-start gap-2 text-slate-700 dark:text-slate-200">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className={sectionClass}>
        <h2 className={h2Class}>{vox.pillarsTitle}</h2>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {vox.pillars.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i] ?? Sparkles;
            return (
              <li key={pillar.title} className={`${cardClass} p-5`}>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-300 flex items-center justify-center mb-3">
                  <Icon size={18} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{pillar.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{pillar.body}</p>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Features */}
      <section className={`${sectionClass} pt-0`}>
        <h2 className={h2Class}>{vox.sectionFeatures}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vox.features.map((feature, i) => {
            const Icon = FEATURE_ICONS[i] ?? Sparkles;
            return (
              <div key={feature.title} className={`${cardClass} p-5`}>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                  <Icon size={18} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feature.body}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-5 text-sm font-medium text-slate-500 dark:text-slate-400">{vox.steamFeatures}</p>
        <p className="mt-4 flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
          <Gamepad2 size={16} className="shrink-0 mt-0.5" />
          {t.voxVsAdventure}
        </p>
      </section>

      {/* Early Access plan */}
      <section className="bg-white dark:bg-[#0b0e14] border-y border-slate-200 dark:border-slate-900">
        <div className={`${sectionClass} grid lg:grid-cols-2 gap-10`}>
          <div>
            <h2 className={h2Class}>{vox.earlyAccess.title}</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{vox.earlyAccess.why}</p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 font-semibold">{vox.earlyAccess.plan}</p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{vox.earlyAccess.pricing}</p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{vox.earlyAccess.community}</p>
          </div>
          <div className={`${cardClass} p-6 self-start`}>
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">{vox.earlyAccess.fullVersionTitle}</h3>
            <ul className="space-y-2">
              {vox.earlyAccess.fullVersion.map(item => (
                <li key={item} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <Check size={16} className="text-emerald-500 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* System requirements */}
      <section id="requirements" className={sectionClass}>
        <h2 className={h2Class}>{vox.requirements.title}</h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-3xl">{vox.requirements.intro}</p>
        <ConfirmNotes id="vox/requirements" />
        <div className="grid lg:grid-cols-2 gap-5">
          {([['Windows', vox.requirements.windows], ['SteamOS + Linux', vox.requirements.linux]] as const).map(([platform, sets]) => (
            <div key={platform} className={`${cardClass} overflow-hidden`}>
              <h3 className="px-5 py-3 font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">{platform}</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-slate-500 dark:text-slate-400">
                      <th scope="col" className="px-5 py-2 font-semibold w-24"><span className="sr-only">—</span></th>
                      <th scope="col" className="px-3 py-2 font-semibold">{vox.requirements.minimum}</th>
                      <th scope="col" className="px-3 py-2 font-semibold">{vox.requirements.recommended}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                    {REQUIREMENT_ROWS.map(row => (
                      <tr key={row} className="align-top">
                        <th scope="row" className="px-5 py-2.5 text-left font-semibold text-slate-700 dark:text-slate-200">{vox.requirements.labels[row]}</th>
                        <td className="px-3 py-2.5 text-slate-600 dark:text-slate-300">{sets.minimum[row]}</td>
                        <td className="px-3 py-2.5 text-slate-600 dark:text-slate-300">{sets.recommended[row]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages + AI disclosure */}
      <section className={`${sectionClass} pt-0 grid lg:grid-cols-2 gap-10`}>
        <div>
          <h2 className={h2Class}>{vox.languages.title}</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5">{vox.languages.intro}</p>
          <div className={`${cardClass} overflow-x-auto`}>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                  <th scope="col" className="px-4 py-2.5 text-left font-semibold"><span className="sr-only">{vox.languages.title}</span></th>
                  <th scope="col" className="px-3 py-2.5 font-semibold">{vox.languages.interface}</th>
                  <th scope="col" className="px-3 py-2.5 font-semibold">{vox.languages.audio}</th>
                  <th scope="col" className="px-3 py-2.5 font-semibold">{vox.languages.subtitles}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {VOX_LANGUAGES.map(({ code, audio }) => (
                  <tr key={code}>
                    <th scope="row" lang={code} className="px-4 py-2 text-left font-medium text-slate-700 dark:text-slate-200">{languageName(code)}</th>
                    {[true, audio, true].map((yes, i) => (
                      <td key={i} className="px-3 py-2 text-center">
                        {yes
                          ? <Check size={16} className="inline text-emerald-500" aria-label="✓" />
                          : <Minus size={16} className="inline text-slate-300 dark:text-slate-600" aria-label="—" />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className={h2Class}>{vox.aiDisclosure.title}</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{vox.aiDisclosure.body}</p>
        </div>
      </section>

      {/* For schools & universities */}
      <section className={`${sectionClass} pt-0`}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 p-6 sm:p-8 rounded-3xl bg-emerald-50 dark:bg-emerald-400/[0.06] border border-emerald-200 dark:border-emerald-400/20">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
            <GraduationCap size={22} />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{t.schoolsTitle}</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t.schoolsBody}</p>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Penko Vox: Japanese for schools')}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold hover:bg-slate-700 dark:hover:bg-amber-100 transition-colors shrink-0"
          >
            <Mail size={16} />
            {t.schoolsCta}
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`${sectionClass} pt-0`}>
        <h2 className={h2Class}>{vox.faqTitle}</h2>
        <ConfirmNotes id="vox/faq" />
        <div className="space-y-3 max-w-4xl">
          {vox.faq.map(item => (
            <details key={item.q} className={`${cardClass} group px-5 py-4`}>
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-slate-900 dark:text-white">
                {item.q}
                <ChevronDown size={18} className="shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Support + documents */}
      <section id="support" className="bg-white dark:bg-[#0b0e14] border-t border-slate-200 dark:border-slate-900">
        <div className={`${sectionClass} grid lg:grid-cols-2 gap-10 items-start`}>
          <div>
            <h2 className={h2Class}>{vox.support.title}</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{vox.support.body}</p>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold hover:bg-slate-700 dark:hover:bg-amber-100 transition-colors">
                <Mail size={16} />
                {vox.support.email}
              </a>
              <a href={VOX_FORUMS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <MessageCircle size={16} />
                {vox.support.forums}
              </a>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {docLinks.map(({ href, label, Icon }) => (
              <li key={href}>
                <a href={href} className={`${cardClass} flex items-center gap-3 p-4 font-semibold text-slate-800 dark:text-slate-100 hover:border-amber-300 dark:hover:border-amber-500/40 transition-colors`}>
                  <Icon size={18} className="text-amber-600 dark:text-amber-400 shrink-0" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="bg-gradient-to-br from-[#0c0a12] via-[#1c1328] to-[#3c1a3b]">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={voxIconUrl} alt="" width={56} height={56} className="w-14 h-14 rounded-2xl ring-1 ring-white/15" />
            <p className="text-xl font-extrabold text-white">{vox.heroTitle}</p>
          </div>
          <SteamButton label={t.voxJapaneseCta} placement="vox_closing" />
        </div>
      </section>
    </>
  );
};

export default VoxPage;
