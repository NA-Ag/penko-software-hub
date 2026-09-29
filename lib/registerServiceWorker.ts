// Registers the offline service worker from any page depth. The PWA plugin's own
// registration script uses a fixed "./sw.js" path, which breaks on nested pages like
// /vox/privacy/, so every entry point registers through here instead.
export const registerServiceWorker = () => {
  if (import.meta.env.DEV || !('serviceWorker' in navigator) || !window.location.protocol.startsWith('http')) return;
  const root = new URL(document.documentElement.dataset.root ?? './', window.location.href);
  navigator.serviceWorker.register(new URL('sw.js', root), { scope: root.pathname }).catch(() => undefined);
};
