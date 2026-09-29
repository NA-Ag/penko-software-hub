import React from 'react';
import { useApp } from '../AppContext';
import { useDocs } from '../i18n/docs';
import { sitePath } from '../lib/sitePaths';
import PageShell, { PlazaBrand } from '../components/PageShell';
import StudioShell from './StudioShell';
import DocPage from './DocPage';
import ProductsPage from './ProductsPage';
import VoxPage from './VoxPage';
import PressPage from './PressPage';

export type PageId = 'plaza-privacy' | 'products' | 'vox' | 'vox-privacy' | 'vox-terms' | 'vox-guide' | 'vox-press';

// Renders the page named by <html data-page="...">; each page has its own HTML file
const SitePage: React.FC<{ page: PageId }> = ({ page }) => {
  const { t } = useApp();
  const docs = useDocs();
  const vox = { href: sitePath('vox/'), label: t.voxJapaneseTitle };
  // Breadcrumb trails: each page appends its own title as the last crumb
  const voxTrail = (label: string) => [
    { label: t.navPaidApps, href: sitePath('products/') },
    { label: t.voxJapaneseTitle, href: sitePath('vox/') },
    { label },
  ];

  switch (page) {
    case 'plaza-privacy':
      return (
        <PageShell
          area="plaza"
          brand={<PlazaBrand />}
          byline={t.footerByline}
          brandHref={sitePath('')}
          links={[
            { href: sitePath('', 'products'), label: t.navProjects },
            { href: sitePath('', 'roadmap'), label: t.navRoadmap },
            { href: sitePath('', 'donate'), label: t.navSupport },
          ]}
        >
          <DocPage pageId="plaza-privacy" legal title={docs.plazaPrivacy.title} intro={docs.plazaPrivacy.summary} sections={docs.plazaPrivacy.sections} crumbs={[{ label: 'Penko Plaza', href: sitePath('') }, { label: t.footerPrivacy }]} />
        </PageShell>
      );
    case 'products':
      return <StudioShell><ProductsPage /></StudioShell>;
    case 'vox':
      return (
        <StudioShell extraLinks={[{ href: sitePath('vox/guide/'), label: docs.common.guide }, { href: '#support', label: docs.vox.support.title }]}>
          <VoxPage />
        </StudioShell>
      );
    case 'vox-privacy':
      return <StudioShell extraLinks={[vox]}><DocPage pageId="vox-privacy" legal title={docs.voxPrivacy.title} intro={docs.voxPrivacy.summary} sections={docs.voxPrivacy.sections} crumbs={voxTrail(docs.common.privacy)} /></StudioShell>;
    case 'vox-terms':
      return <StudioShell extraLinks={[vox]}><DocPage pageId="vox-terms" legal title={docs.voxTerms.title} intro={docs.voxTerms.summary} sections={docs.voxTerms.sections} crumbs={voxTrail(docs.common.terms)} /></StudioShell>;
    case 'vox-guide':
      return <StudioShell extraLinks={[vox]}><DocPage pageId="vox-guide" title={docs.voxGuide.title} intro={docs.voxGuide.intro} sections={docs.voxGuide.sections} crumbs={voxTrail(docs.common.guide)} /></StudioShell>;
    case 'vox-press':
      return <StudioShell extraLinks={[vox]}><PressPage /></StudioShell>;
  }
};

export default SitePage;
