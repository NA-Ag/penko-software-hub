// Checks the built site the way a visitor sees it, after `npm run build`.
//
// Opens every pre-rendered page in dist/ in a headless browser at phone size, lets React
// take over the page, opens the menu (where the language links live), then checks that:
//   - every link and asset on our own site points at a file that exists in dist/
//   - nothing on our own site fails to load (scripts, images, the service worker)
//   - the page throws no JavaScript errors
// Pre-rendered HTML can be correct while the links React builds afterwards are wrong
// (e.g. /es/ links pointing at /es/es/), so a plain HTML link check is not enough.
//
// External links (GitHub, Steam, ...) are skipped: they depend on other sites being up.
// Locally, if Playwright's browser isn't installed, run `npx playwright install chromium`.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = join(fileURLToPath(import.meta.url), '..', '..');
const dist = join(root, 'dist');
const CONCURRENCY = 4;

const htmlFiles = dir => readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
  const path = join(dir, entry.name);
  if (entry.isDirectory()) return htmlFiles(path);
  return entry.name.endsWith('.html') ? [path] : [];
});

// dist/es/vox/index.html -> es/vox/   dist/privacy.html -> privacy.html
const pagePath = file => relative(dist, file).split(sep).join('/').replace(/(^|\/)index\.html$/, '$1');

// Serves dist/ like GitHub Pages: folders serve their index.html and anything missing is a
// real 404. (Vite's preview server answers unknown paths with the home page, which would
// hide exactly the broken links this check is for.)
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.xml': 'application/xml', '.txt': 'text/plain', '.woff2': 'font/woff2', '.woff': 'font/woff', '.mp4': 'video/mp4', '.webm': 'video/webm' };
const server = createServer((req, res) => {
  let file = join(dist, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  try {
    if (!file.startsWith(dist)) throw new Error('outside dist');
    if (statSync(file).isDirectory()) file = join(file, 'index.html');
    const body = readFileSync(file);
    res.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('Not found');
  }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 360, height: 780 }, isMobile: true, hasTouch: true });

const problems = [];
const linkSources = new Map(); // same-site URL (no hash) -> first page that links to it
const statusCache = new Map();

const status = url => {
  if (!statusCache.has(url)) statusCache.set(url, fetch(url).then(r => r.status, () => 'network error'));
  return statusCache.get(url);
};

const checkPage = async path => {
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(`script error: ${e.message}`));
  page.on('response', r => {
    if (r.url().startsWith(origin) && r.status() >= 400) errors.push(`failed to load ${r.url().slice(origin.length)} (${r.status()})`);
  });
  page.on('requestfailed', r => {
    if (r.url().startsWith(origin)) errors.push(`failed to load ${r.url().slice(origin.length)} (${r.failure()?.errorText})`);
  });

  await page.goto(`${origin}/${path}`, { waitUntil: 'networkidle' });

  // Open the phone menu so its links (sections, languages) are in the page too
  const menuButton = page.locator('nav.site-header .lg\\:hidden > button:last-child');
  if (await menuButton.count()) {
    await menuButton.click();
    await page.waitForTimeout(100);
  }

  const urls = await page.$$eval('a[href], link[href], img[src], script[src], source[src], video[poster]', els =>
    els.flatMap(el => [el.href, el.src, el.poster]).filter(u => typeof u === 'string' && u));
  for (const url of urls) {
    if (!url.startsWith(origin)) continue;
    const clean = url.split('#')[0];
    if (!linkSources.has(clean)) linkSources.set(clean, path || '/');
  }

  for (const error of errors) problems.push(`${path || '/'}: ${error}`);
  await page.close();
};

const pages = htmlFiles(dist).map(pagePath);
let next = 0;
await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
  while (next < pages.length) await checkPage(pages[next++]);
}));

await Promise.all([...linkSources].map(async ([url, from]) => {
  const result = await status(url);
  if (result !== 200) problems.push(`${from}: broken link ${url.slice(origin.length)} (${result})`);
}));

await browser.close();
await new Promise(resolve => server.close(resolve));

if (problems.length) {
  console.error(`[check-links] ${problems.length} problem(s) found:`);
  for (const problem of [...new Set(problems)].sort()) console.error(`  ${problem}`);
  process.exit(1);
}
console.log(`[check-links] ${pages.length} pages and ${linkSources.size} links on this site all OK.`);
