import React from 'react';
import Navbar, { NavLink, SiteArea } from './Navbar';
import Footer from './Footer';
import { useApp } from '../AppContext';

interface PageShellProps {
  area: SiteArea;
  brand: React.ReactNode;
  byline?: string;
  brandHref: string;
  links: NavLink[];
  children: React.ReactNode;
}

// Shared frame for every page on the site: skip link, navbar, content, studio footer
const PageShell: React.FC<PageShellProps> = ({ area, brand, byline, brandHref, links, children }) => {
  const { t } = useApp();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900 selection:text-indigo-900 dark:selection:text-indigo-100 transition-colors">
      {/* First tab stop: lets keyboard users jump past the navigation */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-amber-500 focus:text-slate-900 focus:font-bold"
      >
        {t.skipToContent}
      </a>
      <Navbar area={area} brand={brand} byline={byline} brandHref={brandHref} links={links} />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export const PlazaBrand: React.FC = () => (
  <>
    Penko <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 dark:from-amber-400 dark:to-orange-400 font-extrabold">Plaza</span>
  </>
);

export default PageShell;
