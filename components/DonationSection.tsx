import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { useApp } from '../AppContext';

interface PaidApp {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  steamUrl: string;
  imageUrl: string;
  iconUrl: string;
  releaseStatus: string;
  isComingSoon: boolean;
  boxColor: string; // Tailwind gradient for the shelf box
}

const PAID_APPS: PaidApp[] = [
  {
    id: 'vox-japanese',
    name: 'Penko Vox Japanese',
    tagline: 'Dictionary & Pitch Accent Tool',
    description: 'An advanced offline desktop tool built for intermediate to advanced Japanese learners. Vox features complete JMDict databases, pitch accent contours, sentence grammar parsing, and a high-performance audio engine.',
    features: ['Pitch Accent Contours', 'Offline Database', 'Sentence Analyzer'],
    steamUrl: 'https://store.steampowered.com/app/4836870/Penko_Vox_Japanese/',
    imageUrl: '/vox_capsule.svg',
    iconUrl: '/vox_icon.svg',
    releaseStatus: 'Releasing soon on Steam',
    isComingSoon: false,
    boxColor: 'from-[#1e293b] to-[#0f172a] border-[#38bdf8]/40'
  },
  {
    id: 'upcoming-1',
    name: 'Future Paid Apps',
    tagline: 'More Tools Coming',
    description: 'We are developing more specialized desktop applications, study helpers, and offline tools that will release periodically to support Penko.',
    features: ['Specialized Utilities', 'Desktop Integrations', 'Offline Power'],
    steamUrl: '',
    imageUrl: '', 
    iconUrl: '',
    releaseStatus: 'In Development',
    isComingSoon: true,
    boxColor: 'from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border-dashed border-slate-300 dark:border-slate-700'
  }
];

const DonationSection: React.FC = () => {
  const { t } = useApp();
  const [selectedAppId, setSelectedAppId] = useState<string>('vox-japanese');

  const selectedApp = PAID_APPS.find(a => a.id === selectedAppId) || PAID_APPS[0];

  const selectedAppLocalized = {
    name: selectedApp.id === 'vox-japanese' ? t.voxJapaneseTitle : t.upcomingPaidTitle,
    tagline: selectedApp.id === 'vox-japanese' ? t.voxJapaneseTagline : t.upcomingPaidTitle,
    description: selectedApp.id === 'vox-japanese' ? t.voxJapaneseDesc : t.upcomingPaidDesc,
    features: selectedApp.id === 'vox-japanese' 
      ? [t.voxJapaneseFeature1, t.voxJapaneseFeature2, t.voxJapaneseFeature3]
      : [t.upcomingPaidFeature1, t.upcomingPaidFeature2, t.upcomingPaidFeature3],
    releaseStatus: selectedApp.id === 'vox-japanese' ? t.voxJapaneseStatus : t.upcomingPaidStatus,
    wishlistText: selectedApp.id === 'vox-japanese' ? t.voxJapaneseWishlist : ''
  };

  return (
    <section id="donate" className="py-24 bg-slate-50 dark:bg-[#080b10] border-t border-slate-200 dark:border-slate-900 transition-colors relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-500/5 dark:bg-red-500/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/5 dark:bg-amber-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Centered Dynamic Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* High Contrast Red/Heart Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 dark:bg-rose-500/20 border border-rose-250 dark:border-rose-800/50 text-rose-700 dark:text-rose-350 text-xs font-bold mb-6 transition-colors shadow-sm">
            <Icons.Heart size={12} className="fill-current animate-pulse text-rose-600 dark:text-rose-455" />
            <span>{t.donationsTagline}</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            {t.donationsTitle}
          </h2>
          <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed transition-colors font-medium">
            {t.donationsDescription1}
            <br className="hidden md:inline" /> {t.donationsDescription2}
          </p>
        </div>

        {/* The Skeuomorphic Software Shelf Container */}
        <div className="w-full flex flex-col items-center mb-16">
          <div className="relative w-full max-w-md flex justify-around items-end px-8 pb-1.5 h-36">
            
            {/* Shelf Item Boxes standing on shelf */}
            {PAID_APPS.map((app) => {
              const isActive = selectedAppId === app.id;
              const appName = app.id === 'vox-japanese' ? t.voxJapaneseTitle : t.upcomingPaidTitle;
              return (
                <button
                  key={app.id}
                  onClick={() => setSelectedAppId(app.id)}
                  className={`w-20 h-28 bg-gradient-to-b ${app.boxColor} border-2 rounded-lg shadow-md hover:-translate-y-3 transition-all duration-300 relative group flex flex-col justify-between p-2
                    ${isActive ? 'ring-2 ring-amber-500 -translate-y-2 shadow-lg z-20' : 'z-10'}`}
                >
                  {/* Small decorative corner tab on box */}
                  <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-slate-500/20" />

                  {/* App Icon or Sparkle on the Box face */}
                  <div className="w-8 h-8 rounded bg-black/10 dark:bg-white/5 flex items-center justify-center self-center mt-2">
                    {app.isComingSoon ? (
                      <Icons.Sparkles size={16} className="text-slate-400 dark:text-slate-600" />
                    ) : (
                      <img src={app.iconUrl} alt={appName} className="w-6 h-6 object-contain" />
                    )}
                  </div>

                  {/* Spine title text */}
                  <span className="text-[7px] uppercase font-extrabold tracking-wide text-slate-700 dark:text-slate-300 text-center truncate w-full">
                    {appName.replace('Penko ', '')}
                  </span>
                </button>
              );
            })}

            {/* The Wooden Board Shelf itself */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-amber-800 dark:bg-amber-900 border-b-4 border-amber-955 rounded-full shadow-lg" />
          </div>
        </div>

        {/* Details Card Display (Below the Shelf) */}
        <div className="w-full max-w-7xl mx-auto bg-white dark:bg-[#0f1219]/90 border border-slate-200 dark:border-amber-500/20 rounded-3xl overflow-hidden shadow-xl transition-all">
          {selectedApp.isComingSoon ? (
            /* Coming Soon details card */
            <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center max-w-xl mx-auto animate-[fadeIn_0.3s_ease-out]">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-955/20 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6 border border-amber-100/50 dark:border-amber-900/30">
                <Icons.Sparkles size={28} />
              </div>
              <h3 className="font-extrabold text-2xl text-slate-900 dark:text-white mb-4">{selectedAppLocalized.name}</h3>
              <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed mb-6 font-medium">
                {selectedAppLocalized.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {selectedAppLocalized.features.map((f, i) => (
                  <span key={i} className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-xl border border-slate-200/40 dark:border-slate-700/30 transition-colors">
                    {f}
                  </span>
                ))}
              </div>
              <span className="text-xs text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider font-bold">
                {selectedAppLocalized.releaseStatus}
              </span>
            </div>
          ) : (
            /* Penko Vox Featured Card layout */
            <div className="flex flex-col lg:flex-row h-full animate-[fadeIn_0.3s_ease-out]">
              {/* Left Card Capsule Art Banner */}
              <div className="lg:w-5/12 h-56 lg:h-auto min-h-[220px] bg-[#0a0a0f] relative overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-850 shrink-0">
                <img 
                  src={selectedApp.imageUrl} 
                  alt={selectedAppLocalized.name} 
                  className="w-full h-full object-contain bg-[#0a0a0f] p-4" 
                />
                <div className="absolute top-4 left-4 bg-[#0f1219]/80 backdrop-blur-md text-amber-500 text-[10px] uppercase font-mono font-bold tracking-wider px-3 py-1 rounded-full border border-amber-500/30 shadow-md">
                  Wishlist Now
                </div>
              </div>

              {/* Right Card App Info Details */}
              <div className="lg:w-7/12 p-8 md:p-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-855 flex items-center justify-center p-1.5 border border-slate-200 dark:border-slate-700 shadow-sm shrink-0">
                      <img src={selectedApp.iconUrl} alt={selectedAppLocalized.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-xl text-slate-900 dark:text-white transition-colors">{selectedAppLocalized.name}</h3>
                    </div>
                  </div>

                  <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed mb-6 transition-colors font-medium">
                    {selectedAppLocalized.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {selectedAppLocalized.features.map((f, i) => (
                      <span key={i} className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-xl border border-slate-200/40 dark:border-slate-700/30 transition-colors">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action row at bottom */}
                <div className="pt-6 border-t border-slate-200/60 dark:border-slate-850 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono font-bold">
                    {selectedAppLocalized.releaseStatus}
                  </span>
                  <a
                    href={selectedApp.steamUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 px-8 bg-gradient-to-r from-red-500 to-amber-500 hover:opacity-95 hover:scale-102 active:scale-98 text-white rounded-xl text-xs font-bold shadow-md shadow-amber-600/10 transition-all text-center"
                  >
                    {/* Steam SVG Logo */}
                    <svg className="w-4 h-4 fill-current shrink-0 mr-0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.86 4.21 10.74 9.8 11.79l1.37-4.12c-.25-.22-.46-.48-.6-.79l-3.32-1.39c-.6-.25-1.07-.73-1.3-1.33L2.59 14.8c-.76-.32-1.12-1.2-.8-1.97.32-.76 1.2-1.12 1.97-.8l3.36 1.4c.58.24 1 .72 1.16 1.31l3.33 1.39c.62.26 1.1.76 1.31 1.39l4.03-1.35c.48-.16.99-.04 1.35.32.53.53.53 1.39 0 1.92-.35.36-.87.48-1.35.32l-4.04 1.35c-.25.62-.72 1.11-1.34 1.37l-1.32 3.96C19.79 22.74 24 17.86 24 12c0-6.63-5.37-12-12-12zm-3.5 15c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                    </svg>
                    {selectedAppLocalized.wishlistText}
                    <Icons.ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Space gap */}
        <div className="h-6" />

      </div>
    </section>
  );
};

export default DonationSection;