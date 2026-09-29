// Things to verify before publishing, keyed by page and section id. English only and
// shown on the local dev server only (never in production builds), so unconfirmed
// details are flagged without ever appearing on the live site.
export const CONFIRM: Record<string, string[]> = {
  'vox-guide/install': ['Does the first launch download or unpack AI models, and roughly how long does it take?'],
  'vox-guide/first-conversation': ['Can you type answers in every mode, or only in chat? Is "custom scenario" the right name for the feature?'],
  'vox-guide/saves': ['Where exactly is saveData.json stored on Windows, Linux and Steam Deck? Is Steam Cloud enabled for it?'],
  'vox-guide/microphone': ['Check the Windows settings path and any in-app microphone selector name.'],
  'vox/faq': ['Does Steam need to be online at launch (DRM), or does Steam Offline Mode cover it?', 'Family Sharing and Achievements are listed on the Steam page; confirm they are still enabled.'],
  'vox/requirements': ['Copied from the Steam page (Sept 2026). Update both places together.'],
  'vox-terms/all': ['DRAFT: have a lawyer review before relying on it, especially sections 2, 9, 10 and 12.'],
  'vox-press/facts': ['Steam currently shows the developer/publisher as "penko_soft"; update Steam to "Penko Software" so they match.'],
  'vox-credits/all': ['Check this list against the shipped build: anything missing or removed? Does the app also use KANJIDIC or other EDRDG files? Is LICENSES.chromium.html in the install folder, and are the full licence texts shipped? Add a matching Credits screen in the app.'],
};
