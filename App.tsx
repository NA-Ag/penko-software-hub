import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import DonationSection from './components/DonationSection';
import PrivacySection from './components/PrivacySection';
import Footer from './components/Footer';
import NewsTicker from './components/NewsTicker';
import { useApp } from './AppContext';

export default function App() {
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
      <Navbar />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <ProductGrid />
        <DonationSection />
        <PrivacySection />
      </main>
      <Footer />
      <NewsTicker />
    </div>
  );
}
