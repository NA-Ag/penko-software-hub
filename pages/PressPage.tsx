import React from 'react';
import { CheckCircle2, Download, Mail } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { useApp } from '../AppContext';
import { useDocs } from '../i18n/docs';
import { CONTACT_EMAIL, VOX_STEAM_URL } from '../constants';
import { sitePath } from '../lib/sitePaths';
import { ConfirmNotes, Linkified } from './DocBlocks';
import voxCapsuleUrl from '../assets/vox_capsule.svg';
import voxIconUrl from '../assets/vox_icon.svg';

const cardClass = 'rounded-2xl bg-white dark:bg-[#0f1219]/90 border border-slate-200 dark:border-slate-800/80 shadow-sm';
const h2Class = 'text-xl font-bold text-slate-900 dark:text-white mb-4';

// Press kit for Penko Vox: Japanese: facts, ready-to-use descriptions, and art
const PressPage: React.FC = () => {
  const { t } = useApp();
  const { press, common } = useDocs();

  const features = [t.voxJapaneseFeature1, t.voxJapaneseFeature2, t.voxJapaneseFeature3, t.voxJapaneseFeature4, t.voxJapaneseFeature5];
  const assets = [
    { src: voxIconUrl, label: press.icon, file: 'penko-vox-japanese-icon.svg', box: 'w-24 h-24' },
    { src: voxCapsuleUrl, label: press.capsule, file: 'penko-vox-japanese-capsule.svg', box: 'w-full max-w-sm' },
  ];

  return (
    <article className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16 text-slate-700 dark:text-slate-300">
      <Breadcrumbs
        className="mb-8"
        items={[
          { label: t.navPaidApps, href: sitePath('products/') },
          { label: t.voxJapaneseTitle, href: sitePath('vox/') },
          { label: common.press },
        ]}
      />

      <header className="mb-10 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          {t.voxJapaneseTitle}: {press.title}
        </h1>
        <p className="text-lg leading-relaxed">{press.intro}</p>
      </header>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 items-start">
        <div className="space-y-8">
          <section>
            <h2 className={h2Class}>{press.shortTitle}</h2>
            <p className={`${cardClass} p-5 leading-relaxed`}>{press.short}</p>
          </section>

          <section>
            <h2 className={h2Class}>{press.longTitle}</h2>
            {press.long.map(paragraph => <p key={paragraph} className="mb-4 leading-relaxed">{paragraph}</p>)}
          </section>

          <section>
            <h2 className={h2Class}>{press.featuresTitle}</h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {features.map(feature => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className={h2Class}>{press.assetsTitle}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {assets.map(asset => (
                <div key={asset.file} className={`${cardClass} p-4 flex flex-col items-center gap-4`}>
                  <div className="flex-1 flex items-center justify-center w-full rounded-xl bg-[#0c0a12] p-4">
                    <img src={asset.src} alt={asset.label} className={`${asset.box} h-auto`} />
                  </div>
                  <a href={asset.src} download={asset.file} className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 dark:text-amber-400 hover:underline underline-offset-4">
                    <Download size={16} />
                    {press.download}: {asset.label}
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{press.assetsNote}</p>
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24">
          <section className={`${cardClass} p-5`}>
            <h2 className="font-bold text-slate-900 dark:text-white mb-3">{press.factsTitle}</h2>
            <ConfirmNotes id="vox-press/facts" />
            <dl className="space-y-3 text-sm">
              {press.facts.map(fact => (
                <div key={fact.label}>
                  <dt className="font-semibold text-slate-900 dark:text-white">{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
              <div>
                <dt className="font-semibold text-slate-900 dark:text-white">Steam</dt>
                <dd><Linkified text={VOX_STEAM_URL} /></dd>
              </div>
            </dl>
          </section>

          <section className={`${cardClass} p-5`}>
            <h2 className="font-bold text-slate-900 dark:text-white mb-2">{press.contactTitle}</h2>
            <p className="text-sm leading-relaxed mb-3"><Linkified text={press.contactBody} /></p>
            <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Press: Penko Vox: Japanese')}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold">
              <Mail size={16} />
              {CONTACT_EMAIL}
            </a>
          </section>
        </aside>
      </div>
    </article>
  );
};

export default PressPage;
