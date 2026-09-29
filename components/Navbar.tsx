import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, Moon, Sun, Languages } from 'lucide-react';
import { useApp } from '../AppContext';
import { Language, languageNames } from '../i18n';
import { usePenkoPose } from '../hooks/usePenkoPose';
import { PenkoIcon } from './PenkoIcon';
import { localizedPagePath, sitePath } from '../lib/sitePaths';
import ReadingMenu from './ReadingMenu';

const LANGUAGES = Object.entries(languageNames) as [Language, string][];

const navLinkClass = 'text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-amber-400 transition-colors';
const mobileLinkClass = 'block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg';

export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

export type SiteArea = 'plaza' | 'paid';

interface NavbarProps {
  // Which half of the site this page belongs to; highlighted in the section switch
  area: SiteArea;
  // Brand shown at the left, e.g. "Penko Plaza" with a "by Penko Software" byline
  brand: React.ReactNode;
  byline?: string;
  brandHref: string;
  links: NavLink[];
}

const linkProps = (link: NavLink) => (link.external ? { target: '_blank', rel: 'noreferrer' } : {});

// "Penko Plaza | Paid apps" switch, shown on every page so moving between the free and
// paid halves of the site always happens from the same place
const SectionSwitch: React.FC<{ area: SiteArea; className?: string; onNavigate?: () => void }> = ({ area, className = '', onNavigate }) => {
  const { t } = useApp();
  const sections: { id: SiteArea; href: string; label: string }[] = [
    { id: 'plaza', href: sitePath(''), label: 'Penko Plaza' },
    { id: 'paid', href: sitePath('products/'), label: t.navPaidApps },
  ];
  return (
    <nav aria-label={t.navSections} className={`flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 ${className}`}>
      {sections.map(section => {
        const active = section.id === area;
        return (
          <a
            key={section.id}
            href={section.href}
            onClick={onNavigate}
            aria-current={active ? 'page' : undefined}
            className={`flex-1 text-center whitespace-nowrap px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
              active
                ? 'bg-white dark:bg-slate-950 text-red-600 dark:text-amber-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {section.label}
          </a>
        );
      })}
    </nav>
  );
};

const Navbar: React.FC<NavbarProps> = ({ area, brand, byline, brandHref, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, isDarkMode, toggleDarkMode, t } = useApp();
  const { pose, handlers } = usePenkoPose();

  // Close the language menu on outside click or Escape
  useEffect(() => {
    if (!langOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!langMenuRef.current?.contains(e.target as Node)) setLangOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLangOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [langOpen]);

  const themeIcon = isDarkMode ? <Sun size={18} /> : <Moon size={18} />;

  return (
    <nav className="site-header sticky top-0 z-40 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href={brandHref} className="flex items-center gap-2.5 cursor-pointer group rounded-xl" {...handlers}>
            <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 p-0.5 shadow-sm transition-all duration-300 group-hover:scale-105">
              <PenkoIcon type="default" size={40} pose={pose} />
            </div>
            <span className="flex flex-col leading-tight">
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">{brand}</span>
              {byline && <span className="hidden sm:block text-xs font-medium text-slate-500 dark:text-slate-400">{byline}</span>}
            </span>
          </a>

          <SectionSwitch area={area} className="hidden lg:flex mx-4" />

          <div className="hidden lg:flex items-center space-x-6">
            {links.map(link => (
              <a key={link.href} href={link.href} {...linkProps(link)} className={navLinkClass}>{link.label}</a>
            ))}

            {/* Language Selector */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setLangOpen(open => !open)}
                aria-expanded={langOpen}
                aria-label={t.navLanguage}
                className={`flex items-center gap-1 ${navLinkClass}`}
              >
                <Languages size={16} />
                <span className="uppercase">{language}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1 max-h-[70vh] overflow-y-auto">
                  {LANGUAGES.map(([code, name]) => (
                    <a
                      key={code}
                      href={localizedPagePath(code)}
                      hrefLang={code}
                      lang={code}
                      aria-current={language === code ? 'true' : undefined}
                      onClick={e => {
                        e.preventDefault();
                        setLanguage(code);
                        setLangOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${
                        language === code ? 'text-red-500 dark:text-amber-400 font-semibold' : 'text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <ReadingMenu />
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={t.themeToggle}
            >
              {themeIcon}
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <ReadingMenu />
            <button onClick={toggleDarkMode} className="p-2 text-slate-600 dark:text-slate-300" aria-label={t.themeToggle}>
              {themeIcon}
            </button>
            <button
              onClick={() => setIsOpen(open => !open)}
              className="text-slate-600 dark:text-slate-300"
              aria-label={t.navMenu}
              aria-expanded={isOpen}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
          <div className="px-4 pt-3 pb-6 space-y-2">
            <SectionSwitch area={area} className="mb-3" onNavigate={() => setIsOpen(false)} />
            {links.map(link => (
              <a key={link.href} onClick={() => setIsOpen(false)} href={link.href} {...linkProps(link)} className={mobileLinkClass}>{link.label}</a>
            ))}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <p className="px-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">{t.navLanguage}</p>
              <div className="grid grid-cols-2 gap-2">
                {LANGUAGES.map(([code, name]) => (
                  <a
                    key={code}
                    href={localizedPagePath(code)}
                    hrefLang={code}
                    lang={code}
                    aria-current={language === code ? 'true' : undefined}
                    onClick={e => {
                      e.preventDefault();
                      setLanguage(code);
                      setIsOpen(false);
                    }}
                    className={`block px-3 py-2 text-sm rounded-lg ${
                      language === code
                        ? 'bg-red-50 dark:bg-amber-950/20 text-red-500 dark:text-amber-400 font-semibold'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
