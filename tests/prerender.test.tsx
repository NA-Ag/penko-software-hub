// Runs in plain Node (no DOM), exactly like the build's pre-render step
import { describe, expect, it } from 'vitest';
import { renderPage } from '../prerender/server';
import { PAGE_PATHS, PageKey } from '../lib/sitePaths';
import { docs as en } from '../i18n/docs/en';
import { docs as ja } from '../i18n/docs/ja';

const PAGES = Object.keys(PAGE_PATHS) as PageKey[];

describe('pre-rendering', () => {
  it.each(PAGES)('%s renders to HTML without a browser, in several languages', async page => {
    for (const lang of ['en', 'ja', 'hi'] as const) {
      const { html, meta } = await renderPage(page, lang, '../');
      expect(html.length, `${page}/${lang}`).toBeGreaterThan(2000);
      expect(meta.title.trim(), `${page}/${lang}`).not.toBe('');
      expect(meta.description.trim(), `${page}/${lang}`).not.toBe('');
    }
  });

  it('renders the requested language and links within it', async () => {
    const { html, meta } = await renderPage('vox', 'ja', '../../');
    expect(meta.title).toBe(ja.meta.vox.title);
    expect(html).toContain(ja.vox.heroTitle);
    expect(html).not.toContain(en.vox.heroTitle);
    // Links stay inside the Japanese site
    expect(html).toContain('href="../../ja/vox/guide/"');
    expect(html).toContain('href="../../ja/products/"');
  });

  it('English pages keep the unprefixed URLs used on Steam', async () => {
    const { html } = await renderPage('vox', 'en', '../');
    expect(html).toContain('href="../vox/privacy/"');
    expect(html).toContain('href="../vox/guide/"');
  });
});
