import React, { useState } from 'react';
import { Menu, X, Github, Twitter, Linkedin, Globe, ChevronRight, Moon, Sun, Languages } from 'lucide-react';
import ProductGrid from './components/ProductGrid';
import DonationSection from './components/DonationSection';
import { useApp } from './AppContext';
import { Language, languageNames } from './translations';
import penguinLogo from './penguin-logo.svg';

// Simple Navigation Component
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, isDarkMode, toggleDarkMode, t } = useApp();

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={penguinLogo} alt="Penko Logo" className="w-10 h-10" />
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">Penko<span className="text-indigo-600 dark:text-indigo-400">.soft</span></span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#products" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.navProjects}</a>
            <a href="#donate" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.navSupport}</a>
            <a href="https://github.com/penkosoftware" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.navGitHub}</a>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Languages size={16} />
                <span className="uppercase">{language}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1 max-h-64 overflow-y-auto">
                  {Object.entries(languageNames).map(([code, name]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setLanguage(code as Language);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${
                        language === code ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-slate-600 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a onClick={() => setIsOpen(false)} href="#products" className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">{t.navProjects}</a>
            <a onClick={() => setIsOpen(false)} href="#donate" className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">{t.navSupport}</a>
            <a onClick={() => setIsOpen(false)} href="https://github.com/penkosoftware" className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">{t.navGitHub}</a>

            {/* Language Selector Mobile */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <p className="px-3 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-2">Language</p>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(languageNames).map(([code, name]) => (
                  <button
                    key={code}
                    onClick={() => {
                      setLanguage(code as Language);
                      setIsOpen(false);
                    }}
                    className={`px-3 py-2 text-sm rounded-lg ${
                      language === code
                        ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-semibold'
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

const Hero: React.FC = () => {
  const { t } = useApp();

  return (
    <div className="relative overflow-hidden bg-white dark:bg-slate-900 pt-16 pb-32 transition-colors">
       {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-6">
              <Globe size={12} />
              <span>{t.heroTagline}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              {t.heroTitle1} <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">{t.heroTitle2}</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#products" className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-600 dark:hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group">
                {t.heroButtonProjects}
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#donate" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                {t.heroButtonSupport}
              </a>
            </div>

            <p className="mt-6 text-xs text-slate-400 dark:text-slate-500">
              {t.heroDisclaimer}
            </p>
          </div>
          
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative">
              {/* Clean PWA Hub Preview */}
              <div className="relative">
                {/* Animated Cursor */}
                <div className="absolute z-30 pointer-events-none animate-[moveCursor_6s_ease-in-out_2s_infinite]" style={{ top: '45%', left: '20%' }}>
                  <div className="relative">
                    {/* Cursor pointer */}
                    <svg className="w-6 h-6 text-slate-900 dark:text-white drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.5 2.25L20.25 13.5L14.25 15L12 21L7.5 2.25Z" />
                    </svg>
                    {/* Click ripple effect */}
                    <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-indigo-500/30 animate-[clickPulse_6s_ease-in-out_2s_infinite]"></div>
                  </div>
                </div>

                {/* Main Card */}
                <div className="relative rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 p-1 shadow-2xl animate-[fadeIn_0.5s_ease-out]">
                  <div className="rounded-3xl bg-white dark:bg-slate-900 p-8 transition-colors">

                    {/* Penko Logo Header */}
                    <div className="flex items-center gap-4 mb-8 animate-[slideInDown_0.6s_ease-out_0.2s_both]">
                      <img
                        src={penguinLogo}
                        alt="Penko Logo"
                        className="w-16 h-16 drop-shadow-lg"
                      />
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">Penko.soft</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors">Free PWA Hub</p>
                      </div>
                    </div>

                    {/* App Grid Preview */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors animate-[slideInLeft_0.5s_ease-out_0.4s_both] hover:scale-105 hover:shadow-md duration-200">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">
                          W
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900 dark:text-white text-sm transition-colors">Penko Writer</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 transition-colors">Word Processor</div>
                        </div>
                        <ChevronRight size={16} className="text-slate-400" />
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors animate-[slideInLeft_0.5s_ease-out_0.6s_both] hover:scale-105 hover:shadow-md duration-200">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
                          A
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900 dark:text-white text-sm transition-colors">Penko Adventure</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 transition-colors">Language Learning</div>
                        </div>
                        <ChevronRight size={16} className="text-slate-400" />
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors animate-[slideInLeft_0.5s_ease-out_0.8s_both] hover:scale-105 hover:shadow-md duration-200">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                          T
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900 dark:text-white text-sm transition-colors">Penko Tune</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 transition-colors">Music Platform</div>
                        </div>
                        <ChevronRight size={16} className="text-slate-400" />
                      </div>
                    </div>

                    {/* Stats Footer */}
                    <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 grid grid-cols-3 gap-4 animate-[fadeIn_0.5s_ease-out_1s_both] transition-colors">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 transition-colors">22</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 transition-colors">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400 transition-colors">100%</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 transition-colors">Free</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 transition-colors">GPL3</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 transition-colors">Open Source</div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Floating PWA Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-full p-4 shadow-xl border-4 border-indigo-100 dark:border-indigo-900 animate-[scaleIn_0.6s_ease-out_1.2s_both] transition-colors">
                  <Globe size={32} className="text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrivacySection: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="privacy" className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center transition-colors">
          {t.privacyTitle}
        </h2>

        <div className="space-y-4 bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 transition-colors">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">1</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 transition-colors leading-relaxed">{t.privacyAsIs}</p>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">2</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 transition-colors leading-relaxed">{t.privacyFree}</p>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">3</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 transition-colors leading-relaxed">{t.privacyNoWarranties}</p>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">4</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 transition-colors leading-relaxed">{t.privacyNoData}</p>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">5</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 transition-colors leading-relaxed">{t.privacySoloDev}</p>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">6</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 transition-colors leading-relaxed">{t.privacyBestEffort}</p>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">7</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 transition-colors leading-relaxed">{t.privacyVerify}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  const { t } = useApp();

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 dark:text-slate-400 py-12 border-t border-slate-800 dark:border-slate-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
                <img src={penguinLogo} alt="Penko Logo" className="w-8 h-8" />
                <span className="font-bold text-xl text-white">Penko.soft</span>
             </div>
             <p className="text-sm text-slate-400 dark:text-slate-500">
               {t.footerDescription}
             </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t.footerProjects}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors">Penko Writer</a></li>
              <li><a href="#products" className="hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors">Penko Adventure</a></li>
              <li><a href="#products" className="hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors">Penko Typing</a></li>
              <li><a href="#products" className="hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors">Penko Tune</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t.footerLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/penkosoftware" className="hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors">{t.footerLicense}</a></li>
              <li><a href="#privacy" className="hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors">{t.footerPrivacy}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 dark:border-slate-700 text-center text-xs text-slate-500 dark:text-slate-600">
          © {new Date().getFullYear()} {t.footerRights}
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900 selection:text-indigo-900 dark:selection:text-indigo-100 transition-colors">
      <Navbar />
      <Hero />
      <ProductGrid />
      <DonationSection />
      <PrivacySection />
      <Footer />
    </div>
  );
}
