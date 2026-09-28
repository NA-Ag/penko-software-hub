import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, Moon, Sun, Languages } from 'lucide-react';
import { useApp } from '../AppContext';
import { Language, languageNames } from '../i18n';
import { HUB_REPO_URL } from '../constants';
import { usePenkoPose } from '../hooks/usePenkoPose';
import { PenkoIcon } from './PenkoIcon';

const LANGUAGES = Object.entries(languageNames) as [Language, string][];

const navLinkClass = 'text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-amber-400 transition-colors';
const mobileLinkClass = 'block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg';

const Navbar: React.FC = () => {
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
    <nav className="sticky top-0 z-40 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" aria-label="Penko Station" className="flex items-center gap-2.5 cursor-pointer group rounded-xl" {...handlers}>
            <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 p-0.5 shadow-sm transition-all duration-300 group-hover:scale-105">
              <PenkoIcon type="default" size={40} pose={pose} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">Penko <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 dark:from-amber-400 dark:to-orange-400 font-extrabold">Station</span></span>
          </a>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#products" className={navLinkClass}>{t.navProjects}</a>
            <a href="#donate" className={navLinkClass}>{t.navSupport}</a>
            <a href={HUB_REPO_URL} target="_blank" rel="noreferrer" className={navLinkClass}>{t.navGitHub}</a>

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
                    <button
                      key={code}
                      lang={code}
                      aria-pressed={language === code}
                      onClick={() => {
                        setLanguage(code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${
                        language === code ? 'text-red-500 dark:text-amber-400 font-semibold' : 'text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={t.themeToggle}
            >
              {themeIcon}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
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
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a onClick={() => setIsOpen(false)} href="#products" className={mobileLinkClass}>{t.navProjects}</a>
            <a onClick={() => setIsOpen(false)} href="#donate" className={mobileLinkClass}>{t.navSupport}</a>
            <a onClick={() => setIsOpen(false)} href={HUB_REPO_URL} target="_blank" rel="noreferrer" className={mobileLinkClass}>{t.navGitHub}</a>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <p className="px-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">{t.navLanguage}</p>
              <div className="grid grid-cols-2 gap-2">
                {LANGUAGES.map(([code, name]) => (
                  <button
                    key={code}
                    lang={code}
                    aria-pressed={language === code}
                    onClick={() => {
                      setLanguage(code);
                      setIsOpen(false);
                    }}
                    className={`px-3 py-2 text-sm rounded-lg ${
                      language === code
                        ? 'bg-red-50 dark:bg-amber-950/20 text-red-500 dark:text-amber-400 font-semibold'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {name}
                  </button>
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
