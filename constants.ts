import { Product, ProductCategory } from './types';

export const GITHUB_URL = 'https://github.com/NA-Ag';
export const HUB_REPO_URL = 'https://github.com/NA-Ag/penko-software-hub';
export const VOX_STEAM_URL = 'https://store.steampowered.com/app/4836870/Penko_Vox_Japanese/';
// Store link tagged so Steamworks' UTM analytics show which part of our site sent the visit.
// Nothing is tracked on our own site; the tags only travel with the click to Steam.
export const voxSteamLink = (placement: string) =>
  `${VOX_STEAM_URL}?utm_source=penkosoftware.org&utm_medium=website&utm_campaign=${placement}`;
export const VOX_PLATFORMS = ['Windows', 'Linux', 'Steam Deck'];
export const VOX_FORUMS_URL = 'https://steamcommunity.com/app/4836870/discussions/';
// Penko Vox: Japanese languages. The interface and subtitles are available in all of these;
// spoken audio (the tutor's voice) is Japanese only, since it's the language being learned.
export const VOX_LANGUAGES = [
  { code: 'en', audio: false },
  { code: 'fr', audio: false },
  { code: 'de', audio: false },
  { code: 'ja', audio: true },
  { code: 'ko', audio: false },
  { code: 'zh-Hans', audio: false },
  { code: 'es-419', audio: false },
  { code: 'vi', audio: false },
];
// Third-party components in Penko Vox: Japanese, shown on /vox/credits/. Licences were
// checked against each project's official repository or model card (Sept 2026); keep this
// list in sync with the app's own credits screen when components change.
export const VOX_CREDITS = [
  { id: 'qwen', name: 'Qwen3.5', by: 'Qwen team, Alibaba Cloud', licence: 'Apache License 2.0', url: 'https://huggingface.co/Qwen' },
  { id: 'llamacpp', name: 'llama.cpp', by: 'ggml.org', licence: 'MIT License', url: 'https://github.com/ggml-org/llama.cpp' },
  { id: 'kotobawhisper', name: 'kotoba-whisper', by: 'Kotoba Technologies', licence: 'Apache License 2.0', url: 'https://huggingface.co/kotoba-tech' },
  { id: 'whispercpp', name: 'whisper.cpp', by: 'ggml.org', licence: 'MIT License', url: 'https://github.com/ggml-org/whisper.cpp' },
  { id: 'reazonspeech', name: 'ReazonSpeech', by: 'Reazon Human Interaction Lab', licence: 'Apache License 2.0', url: 'https://huggingface.co/reazon-research' },
  { id: 'sherpaonnx', name: 'sherpa-onnx', by: 'k2-fsa', licence: 'Apache License 2.0', url: 'https://github.com/k2-fsa/sherpa-onnx' },
  { id: 'silerovad', name: 'Silero VAD', by: 'Silero Team', licence: 'MIT License', url: 'https://github.com/snakers4/silero-vad' },
  { id: 'kokoro', name: 'Kokoro', by: 'hexgrad', licence: 'Apache License 2.0', url: 'https://huggingface.co/hexgrad/Kokoro-82M' },
  { id: 'kuromoji', name: 'kuromoji.js', by: 'Takuya Asano', licence: 'Apache License 2.0', url: 'https://github.com/takuyaa/kuromoji.js' },
  { id: 'jmdict', name: 'JMdict', by: 'Electronic Dictionary Research and Development Group (EDRDG)', licence: 'Creative Commons Attribution-ShareAlike 4.0', url: 'https://www.edrdg.org/edrdg/licence.html' },
  { id: 'wanakana', name: 'WanaKana', by: 'WaniKani', licence: 'MIT License', url: 'https://github.com/WaniKani/WanaKana' },
  { id: 'tsfsrs', name: 'ts-fsrs', by: 'Open Spaced Repetition', licence: 'MIT License', url: 'https://github.com/open-spaced-repetition/ts-fsrs' },
  { id: 'threejs', name: 'three.js', by: 'three.js authors', licence: 'MIT License', url: 'https://github.com/mrdoob/three.js' },
  { id: 'react', name: 'React', by: 'Meta Platforms, Inc. and affiliates', licence: 'MIT License', url: 'https://github.com/facebook/react' },
  { id: 'electron', name: 'Electron', by: 'OpenJS Foundation and Electron contributors', licence: 'MIT License', url: 'https://github.com/electron/electron' },
  { id: 'chromium', name: 'Chromium', by: 'The Chromium Authors', licence: 'BSD 3-Clause License and others', url: 'https://www.chromium.org/' },
  { id: 'steamworksjs', name: 'steamworks.js', by: 'ceifa', licence: 'MIT License', url: 'https://github.com/ceifa/steamworks.js' },
] as const;
export type VoxCreditId = (typeof VOX_CREDITS)[number]['id'];

export const CONTACT_EMAIL = 'contact@penkosoftware.org';

// The Roadmap section shows only these, the apps being built next
export const NEXT_UP_IDS = ['penko-calc', 'penko-note', 'penko-slide'];

export const PRODUCTS: Product[] = [
  // ===== ACTIVE PROJECTS =====

  // Learning - ALPHA
  {
    id: 'penko-adventure',
    name: 'Penko Adventure',
    description: 'A playful RPG for practicing languages through interactive, AI-driven stories. Casual, fun practice across 12 languages, with voice support.',
    category: ProductCategory.LANGUAGE,
    iconName: 'Gamepad2',
    repoUrl: 'https://github.com/NA-Ag/penko-adventure',
    liveUrl: 'https://adventure.penkosoftware.org/',
    features: ['12 Languages', 'AI Storytelling', 'Speech Recognition', 'Community Workshop', 'Offline Mode', 'Voice Synthesis'],
    status: 'beta',
    version: 'v1.8.0-beta.1'
  },

  // Office Suite - ALPHA
  {
    id: 'penko-writer',
    name: 'Penko Writer',
    description: 'Privacy-first word processor with 100+ features. Real-time P2P collaboration, 26 templates, 13 languages. A free alternative to Microsoft Word and Google Docs.',
    category: ProductCategory.OFFICE,
    iconName: 'FileText',
    repoUrl: 'https://github.com/NA-Ag/penko-writer',
    liveUrl: 'https://writer.penkosoftware.org/',
    features: ['P2P Collaboration', 'Offline Mode', 'DOCX/PDF Export', 'Code Highlighting', 'LaTeX Equations', 'Markdown Mode'],
    status: 'alpha',
    version: 'v1.0.0-alpha.1'
  },

  // Music Platform - ALPHA
  {
    id: 'penko-tune',
    name: 'Penko Tune',
    description: 'Privacy-first music platform with 0% artist fees. WebTorrent/IPFS distribution, crypto payments, 10-band EQ, and 8 professional visualizers. A free alternative to Spotify.',
    category: ProductCategory.MUSIC,
    iconName: 'Music',
    repoUrl: 'https://github.com/NA-Ag/penko-tune',
    liveUrl: 'https://tune.penkosoftware.org/',
    features: ['0% Platform Fees', 'WebTorrent/IPFS', 'Crypto Payments', '10-Band Equalizer', '8 Visualizers', 'YouTube Streaming'],
    status: 'alpha',
    version: 'v0.1.1'
  },

  // Learning - ALPHA
  {
    id: 'penko-typing',
    name: 'Penko Typing',
    description: 'Retro arcade-style typing game for learning non-Latin keyboard layouts. Master Korean Hangul, Russian Cyrillic, Japanese Kana, and more.',
    category: ProductCategory.LANGUAGE,
    iconName: 'Keyboard',
    repoUrl: 'https://github.com/NA-Ag/penko-typing',
    liveUrl: 'https://typing.penkosoftware.org/',
    features: ['14 Languages', 'Keyboard Layouts', 'Hand Position Guides', 'Leaderboards', 'Offline Mode', 'Touch Support'],
    status: 'alpha',
    version: 'v0.1.0-alpha'
  },

  // Learning - BETA
  {
    id: 'penko-reader',
    name: 'Penko Reader',
    description: 'Accessibility-focused reading tool designed to help users focus, read faster, and improve comprehension. Uses RSVP (Rapid Serial Visual Presentation) to display text one word at a time. Particularly effective for users with ADHD or dyslexia.',
    category: ProductCategory.LANGUAGE,
    iconName: 'BookOpen',
    repoUrl: 'https://github.com/NA-Ag/penko-reader',
    liveUrl: 'https://reader.penkosoftware.org/',
    features: ['RSVP Reading', 'Offline First', 'EPUB/PDF Support', 'OpenDyslexic Font', 'High Contrast', 'No Tracking'],
    status: 'beta',
    version: 'v2.0.13-beta',
    isNew: true
  },

  // Learning - ALPHA
  {
    id: 'penko-soroban',
    name: 'Penko Soroban',
    description: 'Digital Japanese abacus (Soroban) for mental math and calculation. Master the art of rapid calculation with this offline-first tool.',
    category: ProductCategory.LANGUAGE,
    iconName: 'Calculator',
    repoUrl: 'https://github.com/NA-Ag/penko-soroban',
    liveUrl: 'https://soroban.penkosoftware.org/',
    features: ['Digital Soroban', 'Mental Math', 'Offline Mode', 'Touch Support', 'PWA', 'Tutorials'],
    status: 'beta',
    version: 'v1.0.0'
  },

  // ===== COMING SOON PROJECTS =====

  // Office Suite
  {
    id: 'penko-calc',
    name: 'Penko Calc',
    description: 'Spreadsheet application with 100+ functions, JavaScript cell support, and offline capability. A free alternative to Microsoft Excel and Google Sheets.',
    category: ProductCategory.OFFICE,
    iconName: 'Table',
    features: ['100+ Functions', 'JavaScript Cells', 'CSV Import/Export', 'Offline Mode', 'Charts & Graphs', 'Data Validation'],
    status: 'coming-soon'
  },
  {
    id: 'penko-note',
    name: 'Penko Note',
    description: 'Private note-taking with smart organization, tags, and search. Your thoughts, organized and accessible.',
    category: ProductCategory.OFFICE,
    iconName: 'StickyNote',
    features: ['Rich Text', 'Tags & Search', 'Offline Mode', 'Cloud Sync', 'Markdown Support'],
    status: 'coming-soon'
  },
  {
    id: 'penko-slide',
    name: 'Penko Slide',
    description: 'Create stunning presentations with beautiful templates and smooth transitions. A free alternative to PowerPoint and Google Slides.',
    category: ProductCategory.OFFICE,
    iconName: 'Presentation',
    features: ['Beautiful Templates', 'Presenter Mode', 'Multimedia Support', 'PDF Export', 'Offline Mode', 'Collaboration'],
    status: 'coming-soon'
  },
  {
    id: 'penko-access',
    name: 'Penko Access',
    description: 'Secure document sharing and collaboration platform with granular permissions and access controls.',
    category: ProductCategory.OFFICE,
    iconName: 'FolderLock',
    features: ['Secure Sharing', 'Access Controls', 'Version History', 'Audit Logs', 'Encryption', 'Offline Access'],
    status: 'coming-soon'
  },
  {
    id: 'penko-insight',
    name: 'Penko Insight',
    description: 'Business intelligence and data visualization tool for turning numbers into actionable insights.',
    category: ProductCategory.OFFICE,
    iconName: 'BarChart3',
    features: ['Data Connectors', 'Interactive Dashboards', 'Custom Reports', 'Real-time Analytics', 'Export Options', 'Offline Mode'],
    status: 'coming-soon'
  },
  {
    id: 'penko-publish',
    name: 'Penko Publish',
    description: 'Professional document publishing platform for creating and sharing beautiful content online.',
    category: ProductCategory.OFFICE,
    iconName: 'BookOpen',
    features: ['Beautiful Layouts', 'SEO Optimized', 'Custom Domains', 'Analytics', 'Export Options', 'Collaboration'],
    status: 'coming-soon'
  },

  // Creative Tools
  {
    id: 'penko-pdf',
    name: 'Penko PDF',
    description: 'PDF manipulation tool for editing, merging, splitting, and converting PDFs. A free alternative to Adobe Acrobat.',
    category: ProductCategory.CREATIVE,
    iconName: 'FileType',
    features: ['PDF Editing', 'Merge & Split', 'Format Conversion', 'Offline Mode', 'Batch Processing'],
    status: 'coming-soon'
  },
  {
    id: 'penko-vector',
    name: 'Penko Vector',
    description: 'Vector graphics editor for creating logos, icons, and illustrations. A free alternative to Adobe Illustrator.',
    category: ProductCategory.CREATIVE,
    iconName: 'PenTool',
    features: ['Vector Editing', 'SVG Export', 'Path Tools', 'Layers', 'Offline Mode'],
    status: 'coming-soon'
  },
  {
    id: 'penko-image',
    name: 'Penko Image',
    description: 'Photo editing and image manipulation tool. A free alternative to Adobe Photoshop.',
    category: ProductCategory.CREATIVE,
    iconName: 'Image',
    features: ['Layer Support', 'Filters & Effects', 'RAW Support', 'Batch Processing', 'Offline Mode'],
    status: 'coming-soon'
  },
  {
    id: 'penko-cut',
    name: 'Penko Cut',
    description: 'Digital design and cutting tool for creating patterns and designs for cutting machines.',
    category: ProductCategory.CREATIVE,
    iconName: 'Scissors',
    features: ['Pattern Creation', 'Export Formats', 'Machine Support', 'Templates', 'Offline Mode'],
    status: 'coming-soon'
  },

  // Enterprise Suite
  {
    id: 'penko-db',
    name: 'Penko DB',
    description: 'Database management interface with session management, multi-tab querying, and visual explain plans. A free alternative to Oracle SQL Developer.',
    category: ProductCategory.ENTERPRISE,
    iconName: 'Database',
    features: ['Multi-Database', 'Query Builder', 'Visual Tools', 'Session Management', 'Export Options', 'Desktop App'],
    status: 'coming-soon'
  },
  {
    id: 'penko-campus',
    name: 'Penko Campus',
    description: 'Learning management system for schools and universities with course management, assignments, and grading.',
    category: ProductCategory.ENTERPRISE,
    iconName: 'GraduationCap',
    features: ['Course Management', 'Assignments', 'Grading', 'Student Portal', 'Analytics', 'Self-Hosted'],
    status: 'coming-soon'
  },
  {
    id: 'penko-hcm',
    name: 'Penko HCM',
    description: 'Human capital management system for HR, payroll, and employee management. A free, local alternative to cloud HCM.',
    category: ProductCategory.ENTERPRISE,
    iconName: 'Users',
    features: ['HR Management', 'Payroll', 'Time Tracking', 'Performance Reviews', 'Self-Hosted', 'Privacy-First'],
    status: 'coming-soon'
  },
  {
    id: 'penko-erp',
    name: 'Penko ERP',
    description: 'Enterprise resource planning system for managing business operations, inventory, and finance. A free, local alternative to SAP.',
    category: ProductCategory.ENTERPRISE,
    iconName: 'Building2',
    features: ['Inventory', 'Finance', 'CRM', 'Supply Chain', 'Reporting', 'Self-Hosted'],
    status: 'coming-soon'
  },

  // Privacy & Security
  {
    id: 'penko-private',
    name: 'Penko Private',
    description: 'Privacy protection and data anonymization tool for keeping your personal information secure.',
    category: ProductCategory.PRIVACY,
    iconName: 'Shield',
    features: ['Data Anonymization', 'Privacy Analysis', 'Secure Storage', 'Offline Mode', 'Open Source', 'No Tracking'],
    status: 'coming-soon'
  },

  // Health & Wellness
  {
    id: 'penko-glow',
    name: 'Penko Glow',
    description: 'Personal transformation and wellness system with analysis, planning, and guidance for self-improvement. Powered by glowscope.app.',
    category: ProductCategory.WELLNESS,
    iconName: 'Sparkles',
    features: ['Personal Analysis', 'Goal Planning', 'Progress Tracking', 'Professional Guidance', 'Privacy-First', 'Mobile App'],
    status: 'coming-soon'
  }
];
