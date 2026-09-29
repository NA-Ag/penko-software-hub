// Long-form text for the studio's standalone pages (paid apps hub, Penko Vox product
// site, legal pages, guide, press kit). Kept separate from the main UI strings so the
// home page never downloads it; each language is its own lazily loaded file.

// A block of body text: a paragraph, a bulleted list, a numbered list, or a callout
export type Block = string | { ul: string[] } | { ol: string[] } | { callout: string };

export interface DocSection {
  id: string; // stable anchor id, identical in every language
  title: string;
  blocks: Block[];
}

export interface LegalDoc {
  title: string;
  summary: string;
  sections: DocSection[];
}

export interface TitledText {
  title: string;
  body: string;
}

export interface QA {
  q: string;
  a: string;
}

export interface PageMeta {
  title: string;
  description: string;
}

import type { VoxCreditId } from '../../constants';

export interface Docs {
  // <title> and meta description for each page, used when pre-rendering every language
  meta: Record<'home' | 'plazaPrivacy' | 'products' | 'vox' | 'voxPrivacy' | 'voxTerms' | 'voxGuide' | 'voxPress' | 'voxCredits', PageMeta>;

  common: {
    lastUpdated: string; // label, e.g. "Last updated"
    updatedDate: string; // localized form of the date every legal page was last updated
    translationNotice: string; // shown on non-English legal pages
    onThisPage: string;
    privacy: string;
    terms: string;
    guide: string;
    press: string;
    credits: string;
    comingSoon: string;
    learnMore: string;
  };

  products: {
    title: string;
    intro: string;
    voxJapaneseDesc: string;
    teaserTitle: string;
    teaserBody: string;
    whyTitle: string;
    whyBody: string[];
  };

  vox: {
    heroTitle: string; // headline, e.g. "Learn Japanese by talking"
    priceNote: string;
    hardwareNote: string;
    media: { title: string; playTrailer: string; trailerNotice: string; screenshot: string /* contains {n} */; previous: string; next: string; close: string };
    checkRequirements: string;
    sectionFeatures: string;
    pillarsTitle: string;
    pillars: TitledText[]; // the four stages of the local "Vox Core"
    features: TitledText[];
    steamFeatures: string; // one line: achievements, Steam Cloud, Family Sharing
    earlyAccess: {
      title: string;
      why: string;
      plan: string;
      fullVersionTitle: string;
      fullVersion: string[];
      pricing: string;
      community: string;
    };
    requirements: {
      title: string;
      intro: string;
      minimum: string;
      recommended: string;
      labels: { os: string; processor: string; memory: string; graphics: string; storage: string; sound: string; notes: string };
      windows: { minimum: RequirementSet; recommended: RequirementSet };
      linux: { minimum: RequirementSet; recommended: RequirementSet };
    };
    languages: { title: string; intro: string; interface: string; audio: string; subtitles: string };
    aiDisclosure: TitledText;
    faqTitle: string;
    faq: QA[];
    support: { title: string; body: string; email: string; forums: string; guideLink: string };
  };

  voxGuide: { title: string; intro: string; sections: DocSection[] };
  voxPrivacy: LegalDoc;
  voxTerms: LegalDoc;
  plazaPrivacy: LegalDoc;

  credits: {
    title: string;
    intro: string;
    component: string;
    licence: string;
    purposes: Record<VoxCreditId, string>; // what each component does in the app
    jmdictTitle: string;
    jmdictNotice: string; // the acknowledgement EDRDG's licence requires
    chromiumNote: string;
    fullTexts: string;
  };

  press: {
    title: string;
    intro: string;
    factsTitle: string;
    facts: { label: string; value: string }[];
    shortTitle: string;
    short: string;
    longTitle: string;
    long: string[];
    featuresTitle: string;
    assetsTitle: string;
    assetsNote: string;
    icon: string;
    capsule: string;
    download: string;
    contactTitle: string;
    contactBody: string;
  };
}

export interface RequirementSet {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
  sound: string;
  notes: string;
}
