export type Language =
  | 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'ru' | 'uk' | 'zh' | 'ja'
  | 'ko' | 'vi' | 'id' | 'tr' | 'pl' | 'hi';

// Shape of every file in i18n/locales/
export interface LocaleModule {
  ui: Translation;
  // Product feature labels keyed by their English text; missing entries fall back to English
  features: Record<string, string>;
}

export interface Translation {
  // Navbar
  navProjects: string;
  navSupport: string;
  navGitHub: string;

  // Hero
  heroTagline: string;
  heroTitle1: string;
  heroTitle2: string;
  heroDescription: string;
  heroButtonProjects: string;
  heroButtonSupport: string;

  // Widget Demos
  widgetTitle: string;
  widgetTabNote: string;
  widgetTabRead: string;
  widgetTabAbacus: string;
  widgetTabType: string;
  widgetNotePlaceholder: string;
  widgetAbacusGuide: string;
  widgetTypeStart: string;
  widgetTypeDesc: string;
  widgetTypeSuccess: string;
  widgetTypeRetry: string;
  widgetNoteDefault: string;
  widgetTypePhrase: string;

  // Projects
  exploreAppsTitle: string;
  exploreAppsSubtitle: string;
  projectButtonCode: string;
  projectButtonLaunch: string;
  projectButtonComingSoon: string;

  // Categories
  categoryOffice: string;
  categoryLanguage: string;
  categoryMusic: string;
  categoryCreative: string;
  categoryEnterprise: string;
  categoryPrivacy: string;
  categoryWellness: string;

  // Project Descriptions
  descPenkoAdventure: string;
  descPenkoWriter: string;
  descPenkoTune: string;
  descPenkoTyping: string;
  descPenkoReader: string;
  descPenkoSoroban: string;
  descPenkoCalc: string;
  descPenkoNote: string;
  descPenkoSlide: string;
  descPenkoAccess: string;
  descPenkoInsight: string;
  descPenkoPublish: string;
  descPenkoPdf: string;
  descPenkoVector: string;
  descPenkoImage: string;
  descPenkoCut: string;
  descPenkoDB: string;
  descPenkoCampus: string;
  descPenkoHCM: string;
  descPenkoERP: string;
  descPenkoPrivate: string;
  descPenkoGlow: string;

  // Donations
  donationsTagline: string;
  donationsTitle: string;
  donationsDescription1: string;
  donationsDescription2: string;
  upcomingPaidTitle: string;
  upcomingPaidDesc: string;
  upcomingPaidFeature1: string;
  upcomingPaidFeature2: string;
  upcomingPaidFeature3: string;
  upcomingPaidStatus: string;
  voxJapaneseTitle: string;
  voxJapaneseTagline: string;
  voxJapaneseDesc: string;
  voxJapaneseFeature1: string;
  voxJapaneseFeature2: string;
  voxJapaneseFeature3: string;
  voxJapaneseFeature4: string;
  voxJapaneseStatus: string;
  voxJapaneseCta: string;

  // Footer
  footerDescription: string;
  footerProjects: string;
  footerLinks: string;
  footerLicense: string;
  footerPrivacy: string;
  footerRights: string;

  // Privacy Policy
  privacyTitle: string;
  privacyAsIs: string;
  privacyFree: string;
  privacyNoWarranties: string;
  privacyNoData: string;
  privacySoloDev: string;
  privacyBestEffort: string;
  privacyVerify: string;

  // Status badges
  statusLive: string;
  statusAlpha: string;
  statusBeta: string;
  statusComingSoon: string;

  // News Ticker
  newsUpdate1: string;
  newsUpdate2: string;
  newsUpdate3: string;
  newsUpdate4: string;

  // UI labels & support section
  navLanguage: string;
  widgetReadStart: string;
  widgetReadPause: string;
  widgetAbacusLabel: string;
  widgetClientSide: string;
  productKeyFeatures: string;
  privacyOpenSource: string;
  earlyAccessBadge: string;
  supportOtherTitle: string;
  supportStarTitle: string;
  supportStarDesc: string;
  supportIssuesTitle: string;
  supportIssuesDesc: string;
  supportPurchaseNote: string;
  voxUpdateTitle: string;
  voxUpdate1: string;
  voxUpdate2: string;
  voxUpdate3: string;
  privacyLead: string;
  privacyVerifyCta: string;
  privacyStatTrackers: string;
  privacyStatAds: string;
  privacyStatSubscriptions: string;
  privacyStatOpenSource: string;
  privacyAsIsTitle: string;
  privacyFreeTitle: string;
  privacyNoWarrantiesTitle: string;
  privacyNoDataTitle: string;
  privacySoloDevTitle: string;
  privacyBestEffortTitle: string;

  // Accessibility labels
  skipToContent: string;
  themeToggle: string;
  navMenu: string;
  badgeNew: string;

  // Landing page sections
  navRoadmap: string;
  whatsNewTitle: string;
  whatsNewVoxCta: string;
  roadmapTitle: string;
  roadmapSubtitle: string;
  voxVsAdventure: string;
}
