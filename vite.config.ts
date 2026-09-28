import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => {
    return {
      base: './',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'penguin-logo.svg', 'og-image.png'],
          workbox: {
            // Precache fonts and images too, so the app renders fully offline
            globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
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
        })
      ],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
