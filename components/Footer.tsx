import React from 'react';
import { Mail } from 'lucide-react';
import { useApp } from '../AppContext';
import { CONTACT_EMAIL, GITHUB_URL, HUB_REPO_URL, PRODUCTS } from '../constants';
import { sitePath } from '../lib/sitePaths';
import { PenkoIcon } from './PenkoIcon';

// The free Plaza apps you can use today, and the paid apps that fund them
const PLAZA_APPS = PRODUCTS.filter(p => p.status !== 'coming-soon').map(p => ({ name: p.name, href: p.liveUrl ?? sitePath('', 'products') }));

const linkClass = 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors';
const headingClass = 'font-bold text-slate-900 dark:text-white mb-4';

// Studio-level footer, shared by every page
const Footer: React.FC = () => {
  const { t } = useApp();

  return (
    <footer className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-600 dark:text-slate-300 py-12 border-t border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 p-0.5 shadow-sm">
                <PenkoIcon type="default" size={32} pose="idle" />
              </div>
              <span className="font-bold text-xl text-slate-900 dark:text-white">Penko Software</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              {t.studioLine}
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className={`inline-flex items-center gap-2 text-sm font-medium ${linkClass}`}>
              <Mail size={15} />
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <h2 className={headingClass}>
              <a href={sitePath('')} className="hover:text-red-500 dark:hover:text-amber-400 transition-colors">Penko Plaza</a>
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-sm">
              {PLAZA_APPS.map(app => (
                <li key={app.name}>
                  <a href={app.href} target="_blank" rel="noreferrer" className={linkClass}>{app.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={headingClass}>
              <a href={sitePath('products/')} className="hover:text-red-500 dark:hover:text-amber-400 transition-colors">{t.navPaidApps}</a>
            </h2>
            <ul className="space-y-2 text-sm">
              <li><a href={sitePath('vox/')} className={linkClass}>Penko Vox: Japanese</a></li>
            </ul>
          </div>

          <div>
            <h2 className={headingClass}>{t.footerLinks}</h2>
            <ul className="space-y-2 text-sm">
              <li><a href={GITHUB_URL} target="_blank" rel="noreferrer" className={linkClass}>GitHub</a></li>
              <li><a href={`${HUB_REPO_URL}/blob/main/LICENSE.md`} target="_blank" rel="noreferrer" className={linkClass}>{t.footerLicense}</a></li>
              <li><a href={sitePath('', 'roadmap')} className={linkClass}>{t.navRoadmap}</a></li>
              <li><a href={sitePath('privacy.html')} className={linkClass}>{t.footerPrivacy}</a></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>{t.footerContact}</a></li>
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
