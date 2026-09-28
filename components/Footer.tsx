import React from 'react';
import { useApp } from '../AppContext';
import { GITHUB_URL, HUB_REPO_URL } from '../constants';
import { PenkoIcon } from './PenkoIcon';

const FEATURED_APPS = ['Penko Writer', 'Penko Adventure', 'Penko Typing', 'Penko Tune'];

const linkClass = 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors';

const Footer: React.FC = () => {
  const { t } = useApp();

  return (
    <footer className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-600 dark:text-slate-300 py-12 border-t border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 p-0.5 shadow-sm">
                <PenkoIcon type="default" size={32} pose="idle" />
              </div>
              <span className="font-bold text-xl text-slate-900 dark:text-white">Penko Plaza</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {t.footerDescription}
            </p>
          </div>

          <div>
            <h2 className="font-bold text-slate-900 dark:text-white mb-4">{t.footerProjects}</h2>
            <ul className="space-y-2 text-sm">
              {FEATURED_APPS.map(name => (
                <li key={name}><a href="#products" className={linkClass}>{name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-slate-900 dark:text-white mb-4">{t.footerLinks}</h2>
            <ul className="space-y-2 text-sm">
              <li><a href={GITHUB_URL} target="_blank" rel="noreferrer" className={linkClass}>GitHub</a></li>
              <li><a href={`${HUB_REPO_URL}/blob/main/LICENSE.md`} target="_blank" rel="noreferrer" className={linkClass}>{t.footerLicense}</a></li>
              <li><a href="#roadmap" className={linkClass}>{t.navRoadmap}</a></li>
              <li><a href="#privacy" className={linkClass}>{t.footerPrivacy}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {t.footerRights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
