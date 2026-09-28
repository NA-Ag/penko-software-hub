import React, { useMemo } from 'react';
import { Globe, ChevronRight } from 'lucide-react';
import { useApp } from '../AppContext';
import SandboxWidget from './SandboxWidget';

// Dark-mode hero backdrop follows the visitor's local time of day
const getTimeOfDayTheme = () => {
  const hour = new Date().getHours();
  if (hour >= 20 || hour < 5) {
    return {
      className: 'dark:from-[#08070d] dark:via-[#120d1e] dark:to-[#1c0f2b]',
      decoration: (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 transition-opacity">
          {/* Stars with slow twinkling */}
          <div className="absolute top-10 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-[pulse_4s_infinite]" />
          <div className="absolute top-24 right-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-80 animate-[pulse_6s_infinite]" />
          <div className="absolute top-44 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-[pulse_5s_infinite]" />
          {/* Moon */}
          <div className="absolute top-16 right-12 w-3 h-3 bg-slate-300 rounded-full opacity-60 shadow-inner" />
        </div>
      ),
    };
  }
  if (hour < 8) {
    return {
      className: 'dark:from-[#110e1f] dark:via-[#301633] dark:to-[#4e1d3d]',
      decoration: <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-red-600/15 rounded-full blur-[100px]" />,
    };
  }
  if (hour < 17) {
    return {
      className: 'dark:from-[#0d121c] dark:via-[#131b2b] dark:to-[#18233a]',
      decoration: <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />,
    };
  }
  return {
    className: 'dark:from-[#0c0a12] dark:via-[#1c1328] dark:to-[#331835]',
    decoration: <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[100px]" />,
  };
};

const Hero: React.FC = () => {
  const { t } = useApp();
  const timeOfDay = useMemo(getTimeOfDayTheme, []);

  return (
    <div className={`relative overflow-hidden bg-white dark:bg-gradient-to-b ${timeOfDay.className} pt-16 pb-36 transition-colors duration-1000 border-b border-slate-200 dark:border-slate-800/50`}>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Light mode blobs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 dark:hidden" />
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 dark:hidden" />
        <div className="hidden dark:block">{timeOfDay.decoration}</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-6">
              <Globe size={12} className="text-red-500 dark:text-amber-400" />
              <span>{t.heroTagline}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              {t.heroTitle1} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 dark:from-amber-400 dark:to-orange-500">{t.heroTitle2}</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#products" className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-amber-600 text-white rounded-xl font-bold hover:bg-red-500 dark:hover:bg-amber-700 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group shadow-md shadow-amber-600/10">
                {t.heroButtonProjects}
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#donate" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                {t.heroButtonSupport}
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <SandboxWidget />
          </div>
        </div>
      </div>

      {/* Mexican silhouette: Iztaccíhuatl (The Sleeping Woman) */}
      <svg className="absolute bottom-0 left-0 w-full h-20 text-slate-100 dark:text-[#111827] pointer-events-none transition-colors" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M 0 100 L 0 85 Q 120 80 200 65 Q 260 55 350 45 Q 400 40 450 48 Q 500 55 580 40 Q 640 28 720 28 Q 780 28 850 55 Q 920 80 1000 68 Q 1060 60 1150 78 Q 1250 95 1440 85 L 1440 100 Z" fill="currentColor" />
      </svg>
    </div>
  );
};

export default Hero;
