// English
import type { Docs } from './types';

export const docs: Docs = {
  meta: {
    home: {
      title: 'Penko Plaza by Penko Software | Free Apps & Penko Vox: Japanese',
      description: 'Free, private, open-source apps from Penko Software, plus Penko Vox: Japanese, an offline AI app for learning Japanese, now in Early Access on Steam.',
    },
    plazaPrivacy: {
      title: 'Privacy Policy | Penko Plaza',
      description: 'Privacy policy for Penko Plaza and its free, open-source apps. We collect no personal data.',
    },
    products: {
      title: 'Paid apps | Penko Software',
      description: 'Paid apps from Penko Software that fund our free, open-source Penko Plaza apps. Starting with Penko Vox: Japanese.',
    },
    vox: {
      title: 'Penko Vox: Japanese | Offline AI Japanese immersion',
      description: 'Learn Japanese by talking. Penko Vox: Japanese is a private, offline AI tutor with 38 conversation scenarios across JLPT N5–N1, voice calls and the Kotoba Islands RPG. Now in Early Access on Steam.',
    },
    voxPrivacy: {
      title: 'Privacy Policy | Penko Vox: Japanese',
      description: 'Privacy policy for Penko Vox: Japanese. The AI, speech recognition and speech synthesis run locally; we collect no personal data.',
    },
    voxTerms: {
      title: 'Terms of Use (EULA) | Penko Vox: Japanese',
      description: 'End user licence agreement and terms of use for Penko Vox: Japanese.',
    },
    voxGuide: {
      title: 'Getting Started Guide | Penko Vox: Japanese',
      description: 'How to set up and get the most out of Penko Vox: Japanese: requirements, microphone setup, conversations, Kotoba Islands, Study Hub and troubleshooting.',
    },
    voxCredits: {
      title: 'Credits and licences | Penko Vox: Japanese',
      description: 'Third-party software, AI models and data used in Penko Vox: Japanese, with their licences and required notices.',
    },
    voxPress: {
      title: 'Press Kit | Penko Vox: Japanese',
      description: 'Press kit for Penko Vox: Japanese: fact sheet, descriptions, logos and contact.',
    },
  },

  common: {
    lastUpdated: 'Last updated',
    updatedDate: 'September 29, 2026',
    translationNotice: 'This translation is provided for convenience. If it differs from the English version, the English version applies.',
    onThisPage: 'On this page',
    privacy: 'Privacy',
    terms: 'Terms (EULA)',
    guide: 'Guide',
    press: 'Press kit',
    credits: 'Credits',
    comingSoon: 'Coming soon',
    learnMore: 'Learn more',
  },

  products: {
    title: 'Paid apps',
    intro: 'Specialized apps from Penko Software. Every purchase funds the free, open-source apps in Penko Plaza.',
    voxJapaneseDesc: 'Learn Japanese by talking. A private, offline AI tutor with conversation scenarios across JLPT N5–N1, natural voice calls and the Kotoba Islands RPG.',
    teaserTitle: 'More on the way',
    teaserBody: 'We\'re working on new apps. Follow Penko Software on Steam and GitHub to hear about them first.',
    whyTitle: 'Why paid apps?',
    whyBody: [
      'Penko Plaza apps are free, open source under the GPL-3.0 licence, and will stay that way. Building and maintaining them takes time, so we fund the work by making a small number of specialized paid apps.',
      'Our paid apps are closed source and sold through stores like Steam. They follow the same values: they run on your own device, work offline, and don\'t collect your personal data.',
    ],
  },

  vox: {
    heroTitle: 'Learn Japanese by talking',
    priceNote: 'Price varies by region. See the current price on Steam.',
    hardwareNote: 'Runs a full AI model on your PC: needs an AVX2 CPU and at least 16 GB of RAM.',
    checkRequirements: 'Check the requirements',
    media: {
      title: 'See it in action',
      playTrailer: 'Play the trailer',
      trailerNotice: 'The trailer streams from Steam when you press play.',
      screenshot: 'Screenshot {n}',
      previous: 'Previous screenshot',
      next: 'Next screenshot',
      close: 'Close',
    },
    sectionFeatures: 'Features',
    pillarsTitle: 'How it works: everything runs on your computer',
    pillars: [
      { title: 'Listens', body: 'Speech recognition and word-by-word analysis of your Japanese, running locally.' },
      { title: 'Thinks', body: 'An offline AI tutor keeps the conversation going and adapts the story to what you say.' },
      { title: 'Corrects', body: 'Gentle corrections are woven into the dialogue, so you learn without breaking the flow.' },
      { title: 'Speaks', body: 'Natural-sounding Japanese speech, generated on your own machine.' },
    ],
    features: [
      { title: 'Kotoba Islands', body: 'An RPG where you explore and talk freely with every resident, using the Japanese you\'re learning.' },
      { title: 'Natural voice calls', body: 'Speak out loud with natural turn-taking. You can interrupt, and echo cancellation lets you use speakers.' },
      { title: 'Study Hub and dictionary', body: 'Words you meet go into reviews scheduled with FSRS spaced repetition, and an offline dictionary lets you tap any word to look it up.' },
      { title: 'Writing practice', body: 'Practice writing hiragana, katakana, beginner kanji and words, with real-time visual feedback.' },
      { title: 'Mastery by using it', body: 'Your progress grows when you use a word or grammar pattern correctly in a real conversation, not by flipping flashcards.' },
      { title: 'Private and offline', body: 'Your voice, lookups and conversations never leave your computer. No accounts, no cloud, no telemetry.' },
      { title: 'Yours to keep', body: 'A one-time purchase. No subscriptions, no token limits and no usage tiers.' },
    ],
    steamFeatures: 'Steam Achievements · Steam Cloud · Family Sharing',
    earlyAccess: {
      title: 'The Early Access plan',
      why: 'Local AI language learning is changing fast, so we launched in Early Access to shape Penko Vox together with students and language learners.',
      plan: 'We plan the full release for August 2027. Until then, updates add content and improvements regularly.',
      fullVersionTitle: 'Planned for the full release',
      fullVersion: [
        'A much larger library of conversation scenarios',
        'More specialized JLPT learning paths',
        'More voice options for speech synthesis',
        'Deeper progress analytics and more Steam features',
      ],
      pricing: 'The price is lower during Early Access and will rise gradually as major updates ship.',
      community: 'We read the Steam Community forums and run polls there so players can vote on the next scenarios.',
    },
    requirements: {
      title: 'System requirements',
      intro: 'Penko Vox runs a full AI language model on your own computer, so performance depends on your hardware. A CPU with AVX2 support is required.',
      minimum: 'Minimum',
      recommended: 'Recommended',
      labels: { os: 'OS', processor: 'Processor', memory: 'Memory', graphics: 'Graphics', storage: 'Storage', sound: 'Sound', notes: 'Notes' },
      windows: {
        minimum: {
          os: 'Windows 10 (64-bit)',
          processor: 'Quad-core CPU with AVX2 (Intel Core i5-8400 / AMD Ryzen 3 3100)',
          memory: '16 GB RAM',
          graphics: 'Intel UHD Graphics 630 / AMD Radeon Vega 8 (DirectX 11)',
          storage: '15 GB available space',
          sound: 'Windows-compatible sound card',
          notes: 'AVX2 support required; SSD strongly recommended',
        },
        recommended: {
          os: 'Windows 11 (64-bit)',
          processor: '6 cores / 12 threads or better (Intel Core i5-12400 / AMD Ryzen 5 5600X)',
          memory: '32 GB RAM',
          graphics: 'NVIDIA GeForce RTX 3050 / RTX 3060 (4 GB+ VRAM) or AMD Radeon RX 6600 (DirectX 12)',
          storage: '20 GB available space',
          sound: 'Windows-compatible sound card',
          notes: 'An SSD and a dedicated GPU give the fastest responses',
        },
      },
      linux: {
        minimum: {
          os: 'SteamOS 3.0 or a modern Linux (Fedora 40+, Ubuntu 22.04+)',
          processor: 'Quad-core CPU with AVX2 (Steam Deck APU / AMD Ryzen 3 / Intel Core i5)',
          memory: '16 GB RAM',
          graphics: 'Integrated or dedicated GPU with Vulkan support',
          storage: '15 GB available space',
          sound: 'PulseAudio or PipeWire',
          notes: 'Tested on Steam Deck; AVX2 required',
        },
        recommended: {
          os: 'SteamOS 3.5+ or Fedora 43',
          processor: 'AMD Ryzen 5 5600G / Intel Core i7 (10th gen) or better',
          memory: '32 GB RAM',
          graphics: 'Dedicated GPU with 4 GB+ VRAM and Vulkan support',
          storage: '20 GB available space',
          sound: 'PulseAudio or PipeWire',
          notes: 'An NVMe SSD gives the fastest conversational responses',
        },
      },
    },
    languages: {
      title: 'Languages',
      intro: 'The interface and subtitles are available in 8 languages. The tutor speaks Japanese, the language you\'re learning.',
      interface: 'Interface',
      audio: 'Audio',
      subtitles: 'Subtitles',
    },
    aiDisclosure: {
      title: 'About the AI',
      body: 'Penko Vox: Japanese uses generative AI that runs locally. A large language model acts as your Japanese tutor and writes dialogue in real time based on what you say, and a neural text-to-speech engine voices it. Like any AI, it can make mistakes, so treat it as a practice partner rather than an authority.',
    },
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'Do I need an internet connection?', a: 'Not to use it. Once installed through Steam, the AI, speech recognition and speech synthesis all run on your computer.' },
      { q: 'Is my voice recorded or uploaded?', a: 'No. Microphone audio is processed on your computer and is never uploaded or stored.' },
      { q: 'Why does it need 16 GB of RAM and an AVX2 CPU?', a: 'Penko Vox runs a full AI language model locally instead of on a server. That needs memory and a CPU with AVX2 instructions. It\'s what keeps your data private and the app usable offline.' },
      { q: 'Does it work on Steam Deck?', a: 'Yes. It has been tested on Steam Deck, and controller support arrived in version 2.1 as an experimental feature.' },
      { q: 'Is there a Mac version?', a: 'Not at the moment. Penko Vox is available for Windows and Linux, including SteamOS.' },
      { q: 'What level of Japanese do I need?', a: 'Conversation scenarios range from JLPT N5 (beginner) to N1 (advanced), and writing practice helps if you\'re just starting to read.' },
      { q: 'Is it a subscription?', a: 'No. It\'s a one-time purchase on Steam, with no subscriptions, token limits or usage tiers.' },
      { q: 'Is the AI always right?', a: 'No. It\'s a strong practice partner, but it can make mistakes. For exams or important translations, double-check with a teacher or a reliable reference.' },
      { q: 'Is Penko Vox open source?', a: 'No. Penko Vox is a closed-source paid app. Its sales fund Penko Plaza, our free, open-source apps.' },
      { q: 'Can I get a refund?', a: 'Purchases are made through Steam, so Steam\'s refund policy applies.' },
    ],
    support: {
      title: 'Support',
      body: 'Stuck, found a bug, or have an idea? Read the getting-started guide, ask on the Steam forums, or email us.',
      email: 'Email support',
      forums: 'Steam Community forums',
      guideLink: 'Getting-started guide',
    },
  },

  voxGuide: {
    title: 'Getting started with Penko Vox: Japanese',
    intro: 'Everything you need to set up Penko Vox and get the most out of it.',
    sections: [
      {
        id: 'before-you-start',
        title: 'Before you start',
        blocks: [
          'Penko Vox runs a full AI model on your computer, so check that your hardware is ready:',
          { ul: [
            'A CPU with AVX2 support. Most Intel CPUs from 2013 (Haswell) on and AMD Ryzen CPUs have it. If you\'re not sure, search for your CPU model plus "AVX2".',
            'At least 16 GB of RAM (32 GB recommended).',
            '15–20 GB of free space, ideally on an SSD.',
            'Windows 10/11 (64-bit), SteamOS, or a modern Linux distribution.',
          ] },
          'The full list is in the system requirements on the product page.',
        ],
      },
      {
        id: 'install',
        title: 'Install and first launch',
        blocks: [
          { ol: [
            'Buy and install Penko Vox: Japanese from Steam.',
            'Launch it from your Steam library.',
            'The first launch can take longer while the AI loads for the first time. Later launches are faster.',
          ] },
        ],
      },
      {
        id: 'microphone',
        title: 'Set up your microphone',
        blocks: [
          'Speaking is the heart of Penko Vox. A headset gives the clearest results, but speakers work too thanks to echo cancellation.',
          { ul: [
            'Windows: open Settings › Privacy & security › Microphone and make sure desktop apps are allowed to use it.',
            'Linux: select your microphone as the default input in your system sound settings (PipeWire or PulseAudio).',
            'Steam Deck: the built-in microphone works, and a headset improves recognition in noisy places.',
          ] },
        ],
      },
      {
        id: 'first-conversation',
        title: 'Your first conversation',
        blocks: [
          { ol: [
            'Pick a conversation scenario that matches your JLPT level, from N5 (beginner) to N1 (advanced), or create your own custom scenario.',
            'Answer in Japanese, out loud or by typing.',
            'The tutor replies in character and weaves corrections into the conversation.',
            'Tap any word to look it up in the offline dictionary.',
          ] },
          { callout: 'Don\'t worry about mistakes. They\'re how the tutor learns what to help you with.' },
        ],
      },
      {
        id: 'voice-calls',
        title: 'Voice calls',
        blocks: [
          'Voice calls feel like talking to a person: speak naturally, pause, and jump in. You can interrupt the tutor, and turn-taking adapts to you.',
        ],
      },
      {
        id: 'kotoba-islands',
        title: 'Kotoba Islands',
        blocks: [
          'Kotoba Islands is an RPG built into Penko Vox. Explore the islands and talk freely with every resident. There\'s no script to follow, so use the Japanese you know and try out new words.',
        ],
      },
      {
        id: 'study-hub',
        title: 'Study Hub, dictionary and writing practice',
        blocks: [
          { ul: [
            'Study Hub: words you meet in conversations become reviews, scheduled with FSRS spaced repetition so you see them right before you\'d forget them. A few minutes a day works best.',
            'Dictionary: tap any word to look it up, fully offline.',
            'Writing practice: learn to write hiragana, katakana, beginner kanji and words stroke by stroke, with real-time feedback.',
          ] },
        ],
      },
      {
        id: 'progress',
        title: 'How progress works',
        blocks: [
          'Mastery grows when you use a word or grammar pattern correctly in a real conversation. Reviews help you remember, but using the language is what counts.',
        ],
      },
      {
        id: 'controller',
        title: 'Controller and Steam Deck',
        blocks: [
          'Controller support arrived in version 2.1 and is experimental. If something doesn\'t respond as expected, switch to mouse and keyboard (or the touchscreen on Steam Deck) and let us know.',
        ],
      },
      {
        id: 'saves',
        title: 'Your saves and privacy',
        blocks: [
          'Conversations, vocabulary and progress are stored in a local file, saveData.json. Deleting it resets your progress. If you turn on Steam Cloud, Steam syncs that file between your computers.',
          'Nothing you say or type is sent anywhere. See the privacy policy for details.',
        ],
      },
      {
        id: 'performance',
        title: 'Performance tips',
        blocks: [
          { ul: [
            'Install on an SSD, ideally NVMe, for faster loading and responses.',
            'Close memory-heavy apps like browsers with many tabs before long sessions.',
            'A dedicated GPU with 4 GB or more of VRAM gives the fastest responses.',
          ] },
        ],
      },
      {
        id: 'troubleshooting',
        title: 'Troubleshooting',
        blocks: [
          { ul: [
            'It won\'t start: check that your CPU supports AVX2 and that you have at least 16 GB of RAM.',
            'Responses are slow: close other apps, and check that the game is installed on an SSD.',
            'The microphone isn\'t detected: check your system\'s microphone permissions and default input device, then restart Penko Vox.',
            'The tutor hears itself: use a headset, or lower your speaker volume.',
          ] },
        ],
      },
      {
        id: 'help',
        title: 'Getting help',
        blocks: [
          'Ask on the Steam Community forums or email contact@penkosoftware.org. Include your operating system, CPU, RAM and what happened.',
        ],
      },
    ],
  },

  voxPrivacy: {
    title: 'Penko Vox: Japanese Privacy Policy',
    summary: 'Penko Vox: Japanese runs entirely on your computer. We don\'t collect your personal data: no accounts, telemetry, analytics or ads.',
    sections: [
      {
        id: 'who',
        title: 'Who we are',
        blocks: ['Penko Vox: Japanese is made by Penko Software, an independent software studio. Questions about privacy: contact@penkosoftware.org.'],
      },
      {
        id: 'on-device',
        title: 'What happens on your computer',
        blocks: [
          { ul: [
            'The AI, speech recognition and speech synthesis all run locally on your computer.',
            'Microphone audio is processed on your computer. It is never uploaded and never stored.',
            'Your conversations, vocabulary and progress are saved in a local file, saveData.json, which you can delete at any time.',
            'No accounts, telemetry, analytics or ads.',
            'No internet connection is needed to use the app.',
          ] },
        ],
      },
      {
        id: 'steam',
        title: 'What Steam handles',
        blocks: ['Penko Vox: Japanese is sold through Steam. Purchases, achievements and, if you turn them on, Steam Cloud saves (which sync your save file) are handled by Valve under the Steam Privacy Policy: https://store.steampowered.com/privacy_agreement/. We don\'t receive your payment details.'],
      },
      {
        id: 'website',
        title: 'This website',
        blocks: ['Our website is hosted on GitHub Pages. Like most web hosts, GitHub may log technical information such as your IP address to keep the service secure and running (see the GitHub Privacy Statement). We don\'t have access to these logs and don\'t use them. The site stores your chosen language and theme on your device, and has no cookies, analytics or trackers. Screenshots are served from our own site; the trailer streams from Steam\'s servers only after you press play. Links to Steam include a campaign tag so Steam can show us which of our pages referred a visit; it contains no information about you.'],
      },
      {
        id: 'children',
        title: 'Children and schools',
        blocks: ['Because the app doesn\'t collect personal data, it is suitable for classroom use, including with children. Schools and universities can contact us at contact@penkosoftware.org for details, classroom pilots or institutional licences.'],
      },
      {
        id: 'changes',
        title: 'Changes and contact',
        blocks: ['If this policy changes, we\'ll update it here and change the date at the top. Questions or requests: contact@penkosoftware.org.'],
      },
    ],
  },

  voxTerms: {
    title: 'Penko Vox: Japanese Terms of Use (EULA)',
    summary: 'The short version: you may use Penko Vox on your own devices, your saves are yours, the AI can make mistakes, and nothing here takes away your rights as a consumer.',
    sections: [
      {
        id: 'agreement',
        title: '1. Agreement',
        blocks: ['These terms are an agreement between you and Penko Software ("we") about Penko Vox: Japanese (the "Software"). By installing or using the Software, you accept them. Your purchase through Steam is also governed by the Steam Subscriber Agreement, and refunds follow Steam\'s refund policy.'],
      },
      {
        id: 'licence',
        title: '2. Your licence',
        blocks: [
          'We grant you a personal, non-exclusive, non-transferable licence to install and use the Software on devices you own or control, for your own learning, as permitted by Steam (including Steam Family Sharing).',
          'Students and teachers may use their own personal licences for their studies and coursework. An institutional licence is needed when an organization provides the Software to its students or staff, or installs it on its own devices. Contact us at contact@penkosoftware.org.',
        ],
      },
      {
        id: 'restrictions',
        title: '3. What you may not do',
        blocks: [
          { ul: [
            'Copy, sell, rent, or distribute the Software, except through features Steam provides.',
            'Reverse engineer, decompile, or disassemble the Software, except where the law expressly allows it.',
            'Extract the Software\'s own content (such as art, scenarios, characters and other assets created by Penko Software) to use it separately. Third-party components remain available under their own licences (section 8).',
            'Remove or change copyright or licence notices.',
          ] },
        ],
      },
      {
        id: 'ownership',
        title: '4. Ownership',
        blocks: ['The Software and its content belong to Penko Software and its licensors; you receive a licence, not ownership. Your save data and anything you create in the Software belong to you.'],
      },
      {
        id: 'ai',
        title: '5. AI-generated content',
        blocks: ['The Software uses generative AI that runs on your computer. Its dialogue, corrections, and speech are generated automatically and may be inaccurate or unexpected. The Software is a learning aid, not a substitute for a qualified teacher, an official exam, or a professional translation, and nothing it generates is professional, legal or financial advice.'],
      },
      {
        id: 'early-access',
        title: '6. Early Access',
        blocks: ['The Software is in Early Access. Features may change, be added, or be removed, and you may encounter bugs. We aim to keep save data compatible between updates but can\'t guarantee it. Updates are delivered through Steam.'],
      },
      {
        id: 'privacy',
        title: '7. Privacy',
        blocks: ['The Software processes your voice and conversations locally and doesn\'t send us personal data. See the Penko Vox: Japanese Privacy Policy.'],
      },
      {
        id: 'third-party',
        title: '8. Third-party components',
        blocks: ['The Software includes third-party components, such as its AI models, speech engines and dictionary, which are licensed under their own terms. Those terms apply to those components, and nothing in these terms limits your rights under them. The full list, with licences and required notices, is at https://penkosoftware.org/vox/credits/.'],
      },
      {
        id: 'warranty',
        title: '9. Warranty',
        blocks: ['To the extent permitted by law, the Software is provided "as is", without warranties of any kind. Nothing in these terms limits the rights you have as a consumer under Mexican law, including the Federal Consumer Protection Law, or under the mandatory laws of your country.'],
      },
      {
        id: 'liability',
        title: '10. Limitation of liability',
        blocks: ['To the extent permitted by law, we are not liable for indirect or consequential damages, and our total liability is limited to the amount you paid for the Software.'],
      },
      {
        id: 'termination',
        title: '11. Termination',
        blocks: ['This licence ends automatically if you break these terms. When it ends, you must stop using the Software and delete it.'],
      },
      {
        id: 'law',
        title: '12. Governing law',
        blocks: ['These terms are governed by the federal laws of the United Mexican States. Disputes will be resolved by the competent courts of Mexico, without prejudice to your consumer rights, including the right to go to the Federal Consumer Protection Agency (PROFECO).'],
      },
      {
        id: 'changes',
        title: '13. Changes and contact',
        blocks: ['We may update these terms; the date at the top shows the latest version, and significant changes will be announced on the Steam page. Questions: contact@penkosoftware.org.'],
      },
    ],
  },

  plazaPrivacy: {
    title: 'Penko Plaza Privacy Policy',
    summary: 'We don\'t collect your personal data. Penko Plaza apps run in your browser, keep your data there, and have no accounts, analytics, ads or trackers.',
    sections: [
      {
        id: 'who',
        title: 'Who we are',
        blocks: ['Penko Plaza is the collection of free, open-source apps made by Penko Software, an independent software studio. Questions about privacy: contact@penkosoftware.org.'],
      },
      {
        id: 'apps',
        title: 'Penko Plaza apps',
        blocks: [
          { ul: [
            'Everything runs in your browser. The apps don\'t send your documents, notes or other content to us.',
            'Your data is stored only in your browser (for example, in its local storage or database). Clearing your browser data deletes it.',
            'No accounts, analytics, advertising or tracking, and no cookies.',
            'Your browser keeps a copy of the site\'s files so the apps work offline. The site also remembers your chosen language and theme on your device.',
            'A few apps offer optional online features, such as real-time collaboration with other people or an optional cloud AI mode. If you choose to use one, the content involved goes to the other participants or to the service that provides that feature, under that service\'s own privacy policy.',
          ] },
        ],
      },
      {
        id: 'website',
        title: 'This website',
        blocks: ['penkosoftware.org is hosted on GitHub Pages. Like most web hosts, GitHub may log technical information such as your IP address to keep the service secure and running (see the GitHub Privacy Statement). We don\'t have access to these logs and don\'t use them.'],
      },
      {
        id: 'children',
        title: 'Children and schools',
        blocks: ['Because we don\'t collect personal data, Penko Plaza apps are suitable for classroom use, including with children. Schools can contact us at contact@penkosoftware.org for details.'],
      },
      {
        id: 'paid-apps',
        title: 'Our paid apps',
        blocks: ['Paid apps like Penko Vox: Japanese have their own privacy policies, linked from their product pages.'],
      },
      {
        id: 'changes',
        title: 'Changes and contact',
        blocks: ['If this policy changes, we\'ll update it here and change the date at the top. Questions or requests: contact@penkosoftware.org.'],
      },
    ],
  },

  credits: {
    title: 'Credits and licences',
    intro: 'Penko Vox: Japanese is built on excellent open-source software, AI models and data. These components keep their own licences, and your rights under those licences are not limited by our terms.',
    component: 'Component',
    licence: 'Licence',
    purposes: {
      qwen: 'Language model behind the AI tutor',
      llamacpp: 'Runs the language model on your computer',
      kotobawhisper: 'Japanese speech recognition model',
      whispercpp: 'Speech recognition engine',
      reazonspeech: 'Japanese speech recognition model',
      sherpaonnx: 'Speech recognition and synthesis runtime',
      silerovad: 'Detects when you start and stop speaking',
      kokoro: 'Japanese voices (speech synthesis)',
      kuromoji: 'Splits Japanese sentences into words',
      jmdict: 'Japanese dictionary data',
      wanakana: 'Converts between romaji and kana',
      tsfsrs: 'Schedules Study Hub reviews (FSRS)',
      threejs: '3D graphics',
      react: 'User interface',
      electron: 'Desktop app framework',
      chromium: 'Web engine included with Electron',
      steamworksjs: 'Steam integration (achievements, cloud saves)',
    },
    jmdictTitle: 'Dictionary data',
    jmdictNotice: 'Penko Vox: Japanese uses the JMdict dictionary files. These files are the property of the Electronic Dictionary Research and Development Group (EDRDG), and are used in conformance with the Group\'s licence (Creative Commons Attribution-ShareAlike 4.0): https://www.edrdg.org/edrdg/licence.html',
    chromiumNote: 'Chromium includes many open-source components; their licences are listed in the LICENSES.chromium.html file in the app\'s installation folder.',
    fullTexts: 'The full licence texts are included with the app. Questions: contact@penkosoftware.org.',
  },

  press: {
    title: 'Press kit',
    intro: 'Everything you need to write about Penko Vox: Japanese. You\'re welcome to use these texts and images in coverage of the app.',
    factsTitle: 'Fact sheet',
    facts: [
      { label: 'Developer and publisher', value: 'Penko Software' },
      { label: 'Early Access release', value: 'August 10, 2026' },
      { label: 'Full release', value: 'Planned for August 2027' },
      { label: 'Platforms', value: 'Windows, Linux, SteamOS (Steam Deck)' },
      { label: 'Price', value: 'Varies by region; see Steam' },
      { label: 'Interface and subtitle languages', value: 'English, French, German, Japanese, Korean, Simplified Chinese, Spanish (Latin America), Vietnamese' },
      { label: 'Voice', value: 'Japanese' },
    ],
    shortTitle: 'Short description',
    short: 'Penko Vox: Japanese is a private, offline AI tutor that teaches Japanese through conversation. Talk through 38 scenarios across JLPT N5–N1, make natural voice calls and explore the Kotoba Islands RPG, all running locally on your own computer.',
    longTitle: 'About Penko Vox: Japanese',
    long: [
      'Most language apps work like digital textbooks. Penko Vox: Japanese is built for the step after that: actually using Japanese in conversation. Learners speak with an AI tutor that listens, replies in character and weaves gentle corrections into the dialogue.',
      'Everything runs on the learner\'s own computer. Speech recognition, the AI tutor and speech synthesis work fully offline, so voices and conversations never leave the device, and there are no accounts, subscriptions or usage limits.',
      'Version 2.1 adds Kotoba Islands, an RPG where players talk freely with every resident, natural voice calls with turn-taking and interruptions, a Study Hub with FSRS spaced repetition, an offline tap-to-lookup dictionary and experimental controller and Steam Deck support.',
      'Penko Vox: Japanese is made by Penko Software, whose sales fund Penko Plaza, a collection of free, open-source apps.',
    ],
    featuresTitle: 'Key features',
    assetsTitle: 'Logos and art',
    assetsNote: 'Screenshots and a trailer are coming soon. For other formats or sizes, email us.',
    icon: 'App icon (SVG)',
    capsule: 'Capsule art (SVG)',
    download: 'Download',
    contactTitle: 'Press contact',
    contactBody: 'For interviews, review keys or questions, email contact@penkosoftware.org.',
  },
};
