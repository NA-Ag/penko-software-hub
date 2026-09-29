import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const root = path.dirname(fileURLToPath(import.meta.url));
const r = (file: string) => path.resolve(root, file);

// The PWA plugin links the manifest with a fixed "./" path; point nested pages
// (e.g. vox/privacy/index.html, which declares data-root="../../") back at the site root
const nestedManifestLinks = (): Plugin => ({
  name: 'nested-manifest-links',
  enforce: 'post',
  transformIndexHtml: {
    order: 'post',
    handler: html => {
      const siteRoot = /data-root="([^"]*)"/.exec(html)?.[1] ?? './';
      return html.replace('href="./manifest.webmanifest"', `href="${siteRoot}manifest.webmanifest"`);
    },
  },
});

// `vite build --ssr prerender/server.tsx` builds the pre-renderer: no HTML inputs or PWA there
export default defineConfig(({ isSsrBuild }) => {
    return {
      base: './',
      build: {
        copyPublicDir: !isSsrBuild,
        // One HTML file per page, so each URL works on GitHub Pages, offline, and in the desktop app
        rollupOptions: isSsrBuild ? undefined : {
          input: {
            main: r('index.html'),
            plazaPrivacy: r('privacy.html'),
            products: r('products/index.html'),
            vox: r('vox/index.html'),
            voxPrivacy: r('vox/privacy/index.html'),
            voxTerms: r('vox/terms/index.html'),
            voxGuide: r('vox/guide/index.html'),
            voxPress: r('vox/press/index.html'),
          },
        },
      },
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: isSsrBuild ? [react()] : [
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          // Registered in lib/registerServiceWorker.ts so it works from nested pages too
          injectRegister: null,
          includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'penguin-logo.svg', 'og-image.png'],
          workbox: {
            // Precache the app shell (scripts, styles, fonts, icons). Pages themselves are
            // pre-rendered after this step in 16 languages, so they're cached as they're visited
            // (network first, so content is never stale) instead of all being precached.
            globPatterns: ['**/*.{js,css,svg,png,woff2}'],
            navigateFallback: null,
            // Screenshots synced from Steam are cached once viewed, rather than precached for every visitor
            runtimeCaching: [
              { urlPattern: ({ request }) => request.mode === 'navigate', handler: 'NetworkFirst', options: { cacheName: 'pages', expiration: { maxEntries: 200 } } },
              { urlPattern: /\/media\/.*\.jpg$/, handler: 'CacheFirst', options: { cacheName: 'steam-media', expiration: { maxEntries: 60 } } },
            ],
          },
          manifest: {
            name: 'Penko Plaza',
            short_name: 'Penko Plaza',
            description: 'The home of Penko Software: free, open-source, privacy-first apps. No ads, no tracking, no subscriptions.',
            theme_color: '#0f172a',
            background_color: '#0f172a',
            display: 'standalone',
            start_url: './',
            icons: [
              {
                src: 'penguin-logo.svg',
                sizes: 'any',
                type: 'image/svg+xml',
                purpose: 'any maskable'
              },
              {
                src: 'pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any maskable'
              },
              {
                src: 'pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable'
              }
            ]
          }
        }),
        nestedManifestLinks(),
      ],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
