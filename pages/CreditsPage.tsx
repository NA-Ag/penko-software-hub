import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useApp } from '../AppContext';
import { useDocs } from '../i18n/docs';
import { VOX_CREDITS } from '../constants';
import { sitePath } from '../lib/sitePaths';
import Breadcrumbs from '../components/Breadcrumbs';
import { ConfirmNotes, Linkified } from './DocBlocks';

// Third-party notices for Penko Vox: Japanese. Licence names and project links come from
// constants.ts (identical in every language); only the descriptions are translated.
const CreditsPage: React.FC = () => {
  const { t } = useApp();
  const { credits, common } = useDocs();

  return (
    <article className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16 text-slate-700 dark:text-slate-300">
      <Breadcrumbs
        className="mb-8"
        items={[
          { label: t.navPaidApps, href: sitePath('products/') },
          { label: t.voxJapaneseTitle, href: sitePath('vox/') },
          { label: common.credits },
        ]}
      />
      <header className="max-w-3xl mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">{credits.title}</h1>
        <p className="text-lg leading-relaxed">{credits.intro}</p>
        <ConfirmNotes id="vox-credits/all" />
      </header>

      <div className="rounded-2xl bg-white dark:bg-[#0f1219]/90 border border-slate-200 dark:border-slate-800 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
              <th scope="col" className="px-5 py-3 font-semibold">{credits.component}</th>
              <th scope="col" className="px-5 py-3 font-semibold">{credits.licence}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
            {VOX_CREDITS.map(item => (
              <tr key={item.id} className="align-top">
                <th scope="row" className="px-5 py-3 text-left font-normal">
                  <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white hover:text-red-600 dark:hover:text-amber-400">
                    {item.name}
                    <ExternalLink size={12} className="opacity-60" />
                  </a>
                  <span className="block text-slate-500 dark:text-slate-400">{credits.purposes[item.id]} · {item.by}</span>
                </th>
                <td className="px-5 py-3 whitespace-nowrap">{item.licence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-8 p-5 rounded-2xl border border-amber-300/60 dark:border-amber-400/20 bg-amber-50 dark:bg-amber-400/[0.06]">
        <h2 className="font-bold text-slate-900 dark:text-white mb-2">{credits.jmdictTitle}</h2>
        <p className="leading-relaxed"><Linkified text={credits.jmdictNotice} /></p>
      </section>

      <p className="mt-6 text-sm leading-relaxed">{credits.chromiumNote}</p>
      <p className="mt-2 text-sm leading-relaxed"><Linkified text={credits.fullTexts} /></p>
    </article>
  );
};

export default CreditsPage;
