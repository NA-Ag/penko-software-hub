import React from 'react';
import { useApp } from '../AppContext';
import type { DocSection } from '../i18n/docs';
import { useDocs } from '../i18n/docs';
import { ConfirmNotes, DocBlocks, Linkified } from './DocBlocks';
import Breadcrumbs, { Crumb } from '../components/Breadcrumbs';

interface DocPageProps {
  pageId: string; // for dev-only confirm notes, e.g. "vox-guide"
  title: string;
  intro: string;
  sections: DocSection[];
  legal?: boolean; // legal pages show the last-updated date and the binding-English notice
  crumbs: Crumb[]; // trail above the title; the page itself is appended
}

// Long-form page: privacy policies, terms and the guide
const DocPage: React.FC<DocPageProps> = ({ pageId, title, intro, sections, legal, crumbs }) => {
  const { language } = useApp();
  const { common } = useDocs();

  return (
    <article className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 text-slate-700 dark:text-slate-300">
      <Breadcrumbs items={crumbs} className="mb-8" />

      <header className="max-w-3xl mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">{title}</h1>
        {legal && (
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
            {common.lastUpdated}: {common.updatedDate}
          </p>
        )}
        {legal && language !== 'en' && (
          <p className="mb-5 text-sm px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300">
            {common.translationNotice}
          </p>
        )}
        <p className="text-lg leading-relaxed px-5 py-4 rounded-2xl bg-white dark:bg-[#0f1219] border border-slate-200 dark:border-slate-800">
          <Linkified text={intro} />
        </p>
        <ConfirmNotes id={`${pageId}/all`} />
      </header>

      <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[220px_minmax(0,1fr)] gap-10">
        <nav aria-label={common.onThisPage} className="hidden lg:block">
          <div className="sticky top-24">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">{common.onThisPage}</p>
            <ol className="space-y-2 text-sm border-l border-slate-200 dark:border-slate-800">
              {sections.map(section => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="block pl-4 -ml-px border-l border-transparent hover:border-amber-500 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="max-w-3xl">
          {sections.map(section => (
            <section key={section.id} id={section.id} className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{section.title}</h2>
              <ConfirmNotes id={`${pageId}/${section.id}`} />
              <DocBlocks blocks={section.blocks} />
            </section>
          ))}
        </div>
      </div>
    </article>
  );
};

export default DocPage;
