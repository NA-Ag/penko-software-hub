import { Product, ProductCategory, PricingTier, DonationOption } from './types';

export const PRODUCTS: Product[] = [
  // ===== ACTIVE PROJECTS =====

  // Language Learning - ALPHA
  {
    id: 'penko-adventure',
    name: 'Penko Adventure',
    description: 'RPG-based language learning with AI-powered storytelling. Three AI modes: offline nano (250MB), local ONNX (800MB), or cloud Gemini. Voice support with Whisper and TTS.',
    category: ProductCategory.LANGUAGE,
    iconName: 'Gamepad2',
    repoUrl: 'https://github.com/penkosoftware/penko-adventure',
    liveUrl: 'https://adventure.penko.software',
    features: ['12 Languages', 'AI Storytelling', 'Speech Recognition', 'Community Workshop', 'Offline Mode', 'Voice Synthesis'],
    imageUrl: 'https://picsum.photos/id/6/800/600',
    status: 'alpha',
    version: 'v1.8.0'
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
    imageUrl: 'https://picsum.photos/id/1/800/600',
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
    imageUrl: 'https://picsum.photos/id/5/800/600',
    status: 'alpha',
    version: 'v0.1.0-alpha'
  },

  // Language Learning - ALPHA
  {
    id: 'penko-typing',
    name: 'Penko Typing',
    description: 'Retro arcade-style typing game for learning non-Latin keyboard layouts. Master Korean Hangul, Russian Cyrillic, Japanese Kana, and more.',
    category: ProductCategory.LANGUAGE,
    iconName: 'Keyboard',
    repoUrl: 'https://github.com/penkosoftware/penko-typing',
    liveUrl: 'https://typing.penko.software',
    features: ['14 Languages', 'Keyboard Layouts', 'Hand Position Guides', 'Leaderboards', 'Offline Mode', 'Touch Support'],
    imageUrl: 'https://picsum.photos/id/3/800/600',
    status: 'alpha',
    version: 'v1.0.0-alpha'
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
    imageUrl: 'https://picsum.photos/id/20/800/600',
    status: 'coming-soon'
  },
  {
    id: 'penko-note',
    name: 'Penko Note',
    description: 'AI-powered note-taking with smart organization, tags, and search. Your thoughts, organized and accessible.',
    category: ProductCategory.OFFICE,
    iconName: 'StickyNote',
    features: ['AI Organization', 'Rich Text', 'Tags & Search', 'Offline Mode', 'Cloud Sync', 'Markdown Support'],
    imageUrl: 'https://picsum.photos/id/7/800/600',
    status: 'coming-soon'
  },
  {
    id: 'penko-slide',
    name: 'Penko Slide',
    description: 'Create stunning presentations with beautiful templates and smooth transitions. A free alternative to PowerPoint and Google Slides.',
    category: ProductCategory.OFFICE,
    iconName: 'Presentation',
    features: ['Beautiful Templates', 'Presenter Mode', 'Multimedia Support', 'PDF Export', 'Offline Mode', 'Collaboration'],
    imageUrl: 'https://picsum.photos/id/8/800/600',
    status: 'coming-soon'
  },
  {
    id: 'penko-access',
    name: 'Penko Access',
    description: 'Secure document sharing and collaboration platform with granular permissions and access controls.',
    category: ProductCategory.OFFICE,
    iconName: 'FolderLock',
    features: ['Secure Sharing', 'Access Controls', 'Version History', 'Audit Logs', 'Encryption', 'Offline Access'],
    imageUrl: 'https://picsum.photos/id/9/800/600',
    status: 'coming-soon'
  },
  {
    id: 'penko-insight',
    name: 'Penko Insight',
    description: 'Business intelligence and data visualization tool for turning numbers into actionable insights.',
    category: ProductCategory.OFFICE,
    iconName: 'BarChart3',
    features: ['Data Connectors', 'Interactive Dashboards', 'Custom Reports', 'Real-time Analytics', 'Export Options', 'Offline Mode'],
    imageUrl: 'https://picsum.photos/id/10/800/600',
    status: 'coming-soon'
  },
  {
    id: 'penko-publish',
    name: 'Penko Publish',
    description: 'Professional document publishing platform for creating and sharing beautiful content online.',
    category: ProductCategory.OFFICE,
    iconName: 'BookOpen',
    features: ['Beautiful Layouts', 'SEO Optimized', 'Custom Domains', 'Analytics', 'Export Options', 'Collaboration'],
    imageUrl: 'https://picsum.photos/id/11/800/600',
    status: 'coming-soon'
  },

  // Creative Tools
  {
    id: 'penko-pdf',
    name: 'Penko PDF',
    description: 'AI-powered PDF manipulation tool for editing, merging, splitting, and converting PDFs. A free alternative to Adobe Acrobat.',
    category: ProductCategory.CREATIVE,
    iconName: 'FileType',
    features: ['AI Features', 'PDF Editing', 'Merge & Split', 'Format Conversion', 'Offline Mode', 'Batch Processing'],
    imageUrl: 'https://picsum.photos/id/12/800/600',
    status: 'coming-soon'
  },
  {
    id: 'penko-vector',
    name: 'Penko Vector',
    description: 'AI-powered vector graphics editor for creating logos, icons, and illustrations. A free alternative to Adobe Illustrator.',
    category: ProductCategory.CREATIVE,
    iconName: 'PenTool',
    features: ['AI Tools', 'Vector Editing', 'SVG Export', 'Path Tools', 'Layers', 'Offline Mode'],
    imageUrl: 'https://picsum.photos/id/13/800/600',
    status: 'coming-soon'
  },
  {
    id: 'penko-image',
    name: 'Penko Image',
    description: 'AI-powered photo editing and image manipulation tool. A free alternative to Adobe Photoshop.',
    category: ProductCategory.CREATIVE,
    iconName: 'Image',
    features: ['AI Editing', 'Layer Support', 'Filters & Effects', 'RAW Support', 'Batch Processing', 'Offline Mode'],
    imageUrl: 'https://picsum.photos/id/14/800/600',
    status: 'coming-soon'
  },
  {
    id: 'penko-cut',
    name: 'Penko Cut',
    description: 'Digital design and cutting tool for creating patterns and designs for cutting machines.',
    category: ProductCategory.CREATIVE,
    iconName: 'Scissors',
    features: ['AI Design', 'Pattern Creation', 'Export Formats', 'Machine Support', 'Templates', 'Offline Mode'],
    imageUrl: 'https://picsum.photos/id/15/800/600',
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
    imageUrl: 'https://picsum.photos/id/16/800/600',
    status: 'coming-soon'
  },
  {
    id: 'penko-campus',
    name: 'Penko Campus',
    description: 'Learning management system for schools and universities with course management, assignments, and grading.',
    category: ProductCategory.ENTERPRISE,
    iconName: 'GraduationCap',
    features: ['Course Management', 'Assignments', 'Grading', 'Student Portal', 'Analytics', 'Self-Hosted'],
    imageUrl: 'https://picsum.photos/id/17/800/600',
    status: 'coming-soon'
  },
  {
    id: 'penko-hcm',
    name: 'Penko HCM',
    description: 'Human capital management system for HR, payroll, and employee management. A free, local alternative to cloud HCM.',
    category: ProductCategory.ENTERPRISE,
    iconName: 'Users',
    features: ['HR Management', 'Payroll', 'Time Tracking', 'Performance Reviews', 'Self-Hosted', 'Privacy-First'],
    imageUrl: 'https://picsum.photos/id/18/800/600',
    status: 'coming-soon'
  },
  {
    id: 'penko-erp',
    name: 'Penko ERP',
    description: 'Enterprise resource planning system for managing business operations, inventory, and finance. A free, local alternative to SAP.',
    category: ProductCategory.ENTERPRISE,
    iconName: 'Building2',
    features: ['Inventory', 'Finance', 'CRM', 'Supply Chain', 'Reporting', 'Self-Hosted'],
    imageUrl: 'https://picsum.photos/id/19/800/600',
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
    imageUrl: 'https://picsum.photos/id/21/800/600',
    status: 'coming-soon'
  },

  // Health & Wellness
  {
    id: 'penko-glow',
    name: 'Penko Glow',
    description: 'Personal transformation and wellness system with analysis, planning, and guidance for self-improvement. Powered by glowscope.app.',
    category: ProductCategory.WELLNESS,
    iconName: 'Sparkles',
    repoUrl: 'https://github.com/NA-Ag/glowscope',
    liveUrl: 'https://glowscope.app',
    features: ['Personal Analysis', 'Goal Planning', 'Progress Tracking', 'Professional Guidance', 'Privacy-First', 'Mobile App'],
    imageUrl: 'https://picsum.photos/id/22/800/600',
    status: 'coming-soon'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'tier-free',
    name: 'Free Forever',
    price: '$0',
    description: 'All Penko Software projects are free, open-source, and always will be. No catches, no subscriptions, no ads.',
    features: [
      'All Projects Included',
      'Full Feature Access',
      'Offline Capable PWAs',
      'GPL3 Open Source',
      'No Tracking or Ads',
      'Commercial Use Allowed'
    ],
    cta: 'Browse Projects',
    highlighted: true
  },
  {
    id: 'tier-supporter',
    name: 'Optional Support',
    price: 'Your Choice',
    description: 'Love our mission? Support development with an optional donation. Every contribution helps us build more free tools for everyone.',
    features: [
      'Support Free Software',
      'Help Build New Projects',
      'Sustain Development',
      'Community Recognition',
      'Feel Good Inside',
      '100% Optional'
    ],
    cta: 'Donate',
    highlighted: false
  }
];

export const DONATION_OPTIONS: DonationOption[] = [
  {
    id: 'donate-paypal',
    name: 'PayPal',
    type: 'link',
    value: 'https://paypal.me/penkosoftware',
    iconName: 'CreditCard',
    color: 'bg-blue-600',
    description: 'Quick and secure donation via PayPal.'
  },
  {
    id: 'donate-kofi',
    name: 'Ko-fi',
    type: 'link',
    value: 'https://ko-fi.com/penkosoftware',
    iconName: 'Coffee',
    color: 'bg-pink-500',
    description: 'Buy us a coffee to keep us coding.'
  },
  {
    id: 'donate-btc',
    name: 'Bitcoin',
    type: 'crypto',
    value: 'bc1q6p40harkyh0uxkcv5dpdvz5uygkuvqdv2j5skk',
    iconName: 'Bitcoin',
    color: 'bg-orange-500',
    description: 'Send BTC to support open source.'
  },
  {
    id: 'donate-eth',
    name: 'Ethereum',
    type: 'crypto',
    value: '0xb16004d26d6ae9370ef2b7a9ed9c6fb2fb56e3c5',
    iconName: 'Gem', // Using Gem for generic crypto asset feel
    color: 'bg-indigo-500',
    description: 'ETH and ERC-20 tokens accepted.'
  }
];
