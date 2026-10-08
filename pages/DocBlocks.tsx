import React from 'react';
import type { Block } from '../i18n/docs';
import { CONFIRM } from '../i18n/docs/confirm';

// Turn plain emails and URLs in translated text into links, so translators never touch markup
// Stops at spaces, brackets and CJK punctuation; a trailing "." or "," belongs to the sentence
const LINK_PATTERN = /([\w.+-]+@[\w-]+\.[\w.]*\w|https?:\/\/[^\s)）。、，।]*[^\s)）。、，।.,])/g;

export const Linkified: React.FC<{ text: string }> = ({ text }) => (
  <>
    {text.split(LINK_PATTERN).map((part, i) => {
      if (i % 2 === 0) return part;
      const href = part.includes('@') && !part.startsWith('http') ? `mailto:${part}` : part;
      return (
        <a key={i} href={href} className="text-red-600 dark:text-amber-400 underline underline-offset-2 [overflow-wrap:anywhere]" {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>
          {part}
        </a>
      );
    })}
  </>
);

export const DocBlocks: React.FC<{ blocks: Block[] }> = ({ blocks }) => (
  <>
    {blocks.map((block, i) => {
      if (typeof block === 'string') {
        return <p key={i} className="mb-4 leading-relaxed"><Linkified text={block} /></p>;
      }
      if ('ul' in block) {
        return (
          <ul key={i} className="mb-4 space-y-2 list-disc pl-6 marker:text-slate-400">
            {block.ul.map((item, j) => <li key={j} className="leading-relaxed"><Linkified text={item} /></li>)}
          </ul>
        );
      }
      if ('ol' in block) {
        return (
          <ol key={i} className="mb-4 space-y-2 list-decimal pl-6 marker:font-bold marker:text-slate-500">
            {block.ol.map((item, j) => <li key={j} className="leading-relaxed"><Linkified text={item} /></li>)}
          </ol>
        );
      }
      return (
        <p key={i} className="mb-4 px-4 py-3 rounded-xl bg-amber-50 dark:bg-amber-400/10 border border-amber-200 dark:border-amber-400/20 text-amber-900 dark:text-amber-200 leading-relaxed">
          <Linkified text={block.callout} />
        </p>
      );
    })}
  </>
);

// Local dev server only: things to verify before publishing (see i18n/docs/confirm.ts)
export const ConfirmNotes: React.FC<{ id: string }> = ({ id }) => {
  const notes = import.meta.env.DEV ? CONFIRM[id] : undefined;
  if (!notes) return null;
  return (
    <aside className="my-4 p-4 rounded-xl border-2 border-dashed border-fuchsia-400 bg-fuchsia-50 dark:bg-fuchsia-950/30 text-sm text-fuchsia-900 dark:text-fuchsia-200">
      <p className="font-bold mb-1">To confirm before publishing (only visible on the dev server)</p>
      <ul className="list-disc pl-5 space-y-1">
        {notes.map(note => <li key={note}>{note}</li>)}
      </ul>
    </aside>
  );
};
