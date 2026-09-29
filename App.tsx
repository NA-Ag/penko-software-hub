import React from 'react';
import PageShell, { PlazaBrand } from './components/PageShell';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import DonationSection from './components/DonationSection';
import PrivacySection from './components/PrivacySection';
import WhatsNew from './components/WhatsNew';
import Roadmap from './components/Roadmap';
import { useApp } from './AppContext';
import { HUB_REPO_URL } from './constants';

export default function App() {
  const { t } = useApp();

  const links = [
    { href: '#products', label: t.navProjects },
    { href: '#roadmap', label: t.navRoadmap },
    { href: '#donate', label: t.navSupport },
    { href: HUB_REPO_URL, label: t.navGitHub, external: true },
  ];

  return (
    <PageShell area="plaza" brand={<PlazaBrand />} byline={t.footerByline} brandHref="#" links={links}>
      <Hero />
      <WhatsNew />
      <ProductGrid />
      <Roadmap />
      <DonationSection />
      <PrivacySection />
    </PageShell>
  );
}
