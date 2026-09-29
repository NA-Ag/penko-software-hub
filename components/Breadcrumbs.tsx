import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useApp } from '../AppContext';

export interface Crumb {
  label: string;
  href?: string; // the last crumb is the current page and has no link
}

// "Paid apps › Penko Vox: Japanese › Guide": shows where a page sits and links each level
const Breadcrumbs: React.FC<{ items: Crumb[]; onDark?: boolean; className?: string }> = ({ items, onDark, className = '' }) => {
  const { t } = useApp();
  const linkClass = onDark ? 'text-slate-300 hover:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-amber-400';
  const currentClass = onDark ? 'text-white' : 'text-slate-900 dark:text-white';

  return (
    <nav aria-label={t.navBreadcrumb} className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !last
                ? <a href={item.href} className={`${linkClass} transition-colors`}>{item.label}</a>
                : <span aria-current={last ? 'page' : undefined} className={currentClass}>{item.label}</span>}
              {!last && <ChevronRight size={14} aria-hidden="true" className={onDark ? 'text-slate-500' : 'text-slate-400'} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
