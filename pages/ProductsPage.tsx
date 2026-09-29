import React from 'react';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';
import { useApp } from '../AppContext';
import { useDocs } from '../i18n/docs';
import { sitePath } from '../lib/sitePaths';
import { PenkoIcon } from '../components/PenkoIcon';
import voxCapsuleUrl from '../assets/vox_capsule.svg';

// The paid apps hub: every closed-source product the studio sells, available or planned
const ProductsPage: React.FC = () => {
  const { t } = useApp();
  const { products, common } = useDocs();

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <header className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">{products.title}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{products.intro}</p>
      </header>

      {/* Available now */}
      <a
        href={sitePath('vox/')}
        className="group grid md:grid-cols-[1.1fr_1fr] gap-6 md:gap-10 p-5 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c0a12] via-[#1c1328] to-[#3c1a3b] border border-white/10 shadow-2xl hover:shadow-rose-950/40 transition-shadow items-center"
      >
        <img src={voxCapsuleUrl} alt="" width={1232} height={706} className="w-full h-auto rounded-2xl ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-[1.02]" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={12} />
              {t.earlyAccessBadge}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-white/15 text-slate-300 text-xs font-medium">{t.voxFullRelease}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">{t.voxJapaneseTitle}</h2>
          <p className="text-slate-300 leading-relaxed">{products.voxJapaneseDesc}</p>
          <span className="inline-flex w-fit items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-red-500 to-amber-500 text-white text-sm font-bold shadow-lg group-hover:brightness-110 transition">
            {common.learnMore}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </a>

      {/* Coming soon: deliberately vague until a product is ready to announce */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-2xl bg-white dark:bg-[#0f1219]/90 border border-dashed border-slate-300 dark:border-slate-700">
        <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
          <PenkoIcon type="default" size={44} pose="walk" />
        </div>
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{common.comingSoon}</span>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">{products.teaserTitle}</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{products.teaserBody}</p>
        </div>
      </div>

      {/* Why paid apps */}
      <section className="mt-16 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0f1219]/90 border border-slate-200 dark:border-slate-800">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-4">
          <Heart size={18} className="text-rose-500 fill-current" />
          {products.whyTitle}
        </h2>
        {products.whyBody.map(paragraph => (
          <p key={paragraph} className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">{paragraph}</p>
        ))}
        <a href={sitePath('')} className="inline-flex items-center gap-2 mt-2 text-sm font-semibold text-red-600 dark:text-amber-400 hover:underline underline-offset-4">
          Penko Plaza
          <ArrowRight size={14} />
        </a>
      </section>
    </div>
  );
};

export default ProductsPage;
