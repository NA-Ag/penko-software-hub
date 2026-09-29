// Pre-renders every page in every language after `vite build` (see package.json "build").
//
// For each page template in dist/ (built by Vite, one per page) and each language, renders
// the page to HTML with prerender/server.tsx and writes it to:
//   English:          the template's own path          e.g. dist/vox/index.html
//   Other languages:  under a language folder          e.g. dist/es/vox/index.html
// Each file gets its translated <title> and description, canonical and hreflang links,
// and correct relative paths for its depth. Also writes sitemap.xml.

import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const SITE = 'https://penkosoftware.org/';

const { renderPage, LANGUAGES, PAGE_PATHS } = await import(pathToFileURL(join(root, 'dist-ssr/server.js')).href);

// hreflang values: Chinese is written in Simplified script
const HREFLANG = { zh: 'zh-Hans' };
const escapeHtml = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const templateFile = path => (path === '' ? 'index.html' : path.endsWith('/') ? `${path}index.html` : path);
const publicUrl = (lang, path) => SITE + (lang === 'en' ? '' : `${lang}/`) + path;

let count = 0;
const sitemap = [];

for (const [page, path] of Object.entries(PAGE_PATHS)) {
  const template = readFileSync(join(dist, templateFile(path)), 'utf8');
  const alternates = LANGUAGES.map(lang => ({ lang, href: publicUrl(lang, path) }));

  for (const lang of LANGUAGES) {
    const extraDepth = lang === 'en' ? '' : '../';
    const siteRoot = extraDepth + (/data-root="([^"]*)"/.exec(template)?.[1] ?? './');
    const { html, meta } = await renderPage(page, lang, siteRoot);

    const head = [
      `<link rel="canonical" href="${publicUrl(lang, path)}" />`,
      ...alternates.map(a => `<link rel="alternate" hreflang="${HREFLANG[a.lang] ?? a.lang}" href="${a.href}" />`),
      `<link rel="alternate" hreflang="x-default" href="${publicUrl('en', path)}" />`,
    ].join('\n    ');

    let out = template
      // One level deeper for language folders: prefix every relative URL
      .replace(/(src|href)="(\.\.?\/)/g, (_, attr, rel) => `${attr}="${extraDepth}${rel}`)
      .replace(/<html lang="[^"]*"/, `<html lang="${lang}" data-lang="${lang}"`)
      .replace(/data-root="[^"]*"/, `data-root="${siteRoot}"`)
      .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
      .replace(/(<meta name="description" content=")[^"]*"/, `$1${escapeHtml(meta.description)}"`)
      .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${escapeHtml(meta.title)}"`)
      .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${escapeHtml(meta.description)}"`)
      .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${publicUrl(lang, path)}"`)
      .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${escapeHtml(meta.title)}"`)
      .replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${escapeHtml(meta.description)}"`)
      .replace('</head>', `    ${head}\n  </head>`)
      // Server-rendered asset URLs are root-absolute; make them relative to this page
      .replace('<div id="root"></div>', `<div id="root">${html.replace(/(src|href)="\/(assets|media)\//g, `$1="${siteRoot}$2/`)}</div>`);
    if (!out.includes('data-lang=')) out = out.replace('<html', `<html data-lang="${lang}"`);

    const target = join(dist, lang === 'en' ? '' : lang, templateFile(path));
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, out);
    count++;
  }

  sitemap.push(...alternates.map(({ href }) => [
    '  <url>',
    `    <loc>${href}</loc>`,
    ...alternates.map(a => `    <xhtml:link rel="alternate" hreflang="${HREFLANG[a.lang] ?? a.lang}" href="${a.href}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${publicUrl('en', path)}"/>`,
    '  </url>',
  ].join('\n')));
}

writeFileSync(join(dist, 'sitemap.xml'), [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...sitemap,
  '</urlset>',
  '',
].join('\n'));

rmSync(join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`[prerender] Wrote ${count} pages in ${LANGUAGES.length} languages, plus sitemap.xml.`);
