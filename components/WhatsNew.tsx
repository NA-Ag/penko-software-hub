import React from 'react';
import { ArrowRight, ArrowUpRight, BookOpen, Gamepad2, LucideIcon, Music, Sparkles } from 'lucide-react';
import { useApp } from '../AppContext';
import { PRODUCTS } from '../constants';
import { sitePath } from '../lib/sitePaths';
import { Translation } from '../i18n';
import voxCapsuleUrl from '../assets/vox_capsule.svg';

const liveUrl = (id: string) => PRODUCTS.find(p => p.id === id)?.liveUrl;

const UPDATES: { text: keyof Translation; Icon: LucideIcon; href?: string }[] = [
  { text: 'newsUpdate2', Icon: BookOpen, href: liveUrl('penko-reader') },
  { text: 'newsUpdate3', Icon: Gamepad2, href: liveUrl('penko-adventure') },
  { text: 'newsUpdate4', Icon: Music, href: liveUrl('penko-tune') },
];

const cardClass = 'flex flex-col gap-3 p-5 rounded-2xl bg-white dark:bg-[#0f1219] border border-slate-200 dark:border-slate-800 shadow-sm';

// Sits directly under the hero; its background continues the hero's mountain silhouette
const WhatsNew: React.FC = () => {
  const { t } = useApp();

  return (
    <section aria-labelledby="whats-new-title" className="bg-slate-100 dark:bg-[#111827] pb-16 pt-4 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 id="whats-new-title" className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-5">
          {t.whatsNewTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Featured: Penko Vox: Japanese, our paid app that funds the free ones */}
          <a
            href={sitePath('vox/')}
            className="group md:col-span-3 lg:col-span-2 flex flex-col sm:flex-row gap-4 p-4 rounded-2xl bg-gradient-to-br from-[#0c0a12] via-[#1c1328] to-[#3c1a3b] border border-white/10 shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={voxCapsuleUrl}
              alt=""
              width={1232}
              height={706}
              className="w-full sm:w-44 h-auto self-center rounded-xl ring-1 ring-white/10"
            />
            <div className="flex flex-col justify-center gap-2 min-w-0">
              <span className="inline-flex w-fit items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                <Sparkles size={11} />
                {t.earlyAccessBadge}
              </span>
              <p className="text-sm font-semibold text-white leading-snug">{t.newsUpdate1}</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300">
                {t.whatsNewVoxCta}
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>

          {UPDATES.map(({ text, Icon, href }) => {
            const body = (
              <>
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <Icon size={18} />
                  </div>
                  {href && <ArrowUpRight size={16} className="text-slate-400 group-hover:text-amber-500 transition-colors" />}
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-200 leading-snug">{t[text]}</p>
              </>
            );
            return href ? (
              <a key={text} href={href} target="_blank" rel="noreferrer" className={`group ${cardClass} hover:border-amber-300 dark:hover:border-amber-500/40 transition-colors`}>
                {body}
              </a>
            ) : (
              <div key={text} className={cardClass}>{body}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
