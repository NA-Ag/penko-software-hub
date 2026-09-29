// @vitest-environment jsdom
import React from 'react';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { AppProvider } from '../AppContext';
import SitePage, { PageId } from '../pages/SitePage';
import { docs } from '../i18n/docs/en';
import { loadLocale } from '../i18n';
import { loadDocs } from '../i18n/docs';
import userEvent from '@testing-library/user-event';

beforeAll(() => {
  window.matchMedia ??= ((query: string) => ({
    matches: false, media: query, onchange: null,
    addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia;
});

afterEach(() => {
  cleanup();
  delete document.documentElement.dataset.root;
  delete document.documentElement.dataset.lang;
  delete document.documentElement.dataset.page;
});

// Render a standalone page the way its HTML file does: data-root tells links how to reach the site root
const renderPage = (page: PageId, root: string) => {
  document.documentElement.dataset.root = root;
  return render(<AppProvider><SitePage page={page} /></AppProvider>);
};

describe('studio pages', () => {
  it('paid apps hub lists Vox and a teaser that names no unreleased product', () => {
    renderPage('products', '../');
    expect(screen.getByRole('heading', { level: 1, name: 'Paid apps' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Penko Vox: Japanese' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: docs.products.teaserTitle })).toBeTruthy();
    expect(document.body.textContent).not.toMatch(/Penko Math/);
    expect(screen.getByRole('link', { name: /Learn more/ }).getAttribute('href')).toBe('../vox/');
  });

  it('Vox page has the Steam button, requirements for both platforms, and links to its documents', () => {
    renderPage('vox', '../');
    expect(screen.getByRole('heading', { level: 1, name: 'Penko Vox: Japanese' })).toBeTruthy();
    expect(screen.getAllByRole('link', { name: /Get it on Steam/ })[0].getAttribute('href')).toMatch(/store\.steampowered\.com/);
    expect(screen.getByRole('heading', { name: 'Windows' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'SteamOS + Linux' })).toBeTruthy();
    for (const [name, href] of [['Guide', '../vox/guide/'], ['Privacy', '../vox/privacy/'], ['Terms (EULA)', '../vox/terms/'], ['Press kit', '../vox/press/']]) {
      const support = document.getElementById('support')!;
      expect(within(support).getByRole('link', { name }).getAttribute('href')).toBe(href);
    }
  });

  it('Vox language table: audio in Japanese only; interface and subtitles in every language', () => {
    renderPage('vox', '../');
    const table = screen.getByRole('columnheader', { name: 'Audio' }).closest('table')!;
    for (const row of within(table).getAllByRole('row').slice(1)) {
      const [iface, audio, subtitles] = within(row).getAllByRole('cell');
      const isJapanese = within(row).getByRole('rowheader').getAttribute('lang') === 'ja';
      expect(within(iface).queryByLabelText('✓')).not.toBeNull();
      expect(within(subtitles).queryByLabelText('✓')).not.toBeNull();
      expect(within(audio).queryByLabelText('✓') !== null).toBe(isJapanese);
    }
  });

  it.each([
    ['vox-privacy', docs.voxPrivacy],
    ['vox-terms', docs.voxTerms],
    ['plaza-privacy', docs.plazaPrivacy],
  ] as const)('%s shows every section and the last-updated date', (page, doc) => {
    renderPage(page, page === 'plaza-privacy' ? './' : '../../');
    expect(screen.getByRole('heading', { level: 1, name: doc.title })).toBeTruthy();
    for (const section of doc.sections) {
      expect(screen.getByRole('heading', { level: 2, name: section.title })).toBeTruthy();
    }
    expect(screen.getByText(new RegExp(docs.common.updatedDate))).toBeTruthy();
  });

  it('Plaza privacy policy is about Plaza only', () => {
    renderPage('plaza-privacy', './');
    const text = document.querySelector('main')!.textContent!;
    expect(text).not.toMatch(/saveData\.json|microphone/i);
  });

  it('guide renders every section with a table of contents', () => {
    renderPage('vox-guide', '../../');
    for (const section of docs.voxGuide.sections) {
      expect(screen.getByRole('link', { name: section.title }).getAttribute('href')).toBe(`#${section.id}`);
    }
  });

  it('paid pages mark Paid apps as the current section and link back to Penko Plaza', () => {
    renderPage('vox-guide', '../../');
    const sections = screen.getAllByRole('navigation', { name: 'Site sections' })[0];
    expect(within(sections).getByRole('link', { name: 'Paid apps' }).getAttribute('aria-current')).toBe('page');
    expect(within(sections).getByRole('link', { name: 'Penko Plaza' }).getAttribute('href')).toBe('../../');
  });

  it('breadcrumbs link each level up to the paid apps hub', () => {
    renderPage('vox-terms', '../../');
    const trail = screen.getByRole('navigation', { name: 'Breadcrumb' });
    expect(within(trail).getByRole('link', { name: 'Paid apps' }).getAttribute('href')).toBe('../../products/');
    expect(within(trail).getByRole('link', { name: 'Penko Vox: Japanese' }).getAttribute('href')).toBe('../../vox/');
    expect(within(trail).getByText('Terms (EULA)').getAttribute('aria-current')).toBe('page');
  });

  it('on a localized page, links and the language picker stay language-aware', async () => {
    document.documentElement.dataset.lang = 'es';
    document.documentElement.dataset.page = 'vox-guide';
    const { ui: es } = await loadLocale('es');
    await loadDocs('es');
    renderPage('vox-guide', '../../../');
    await userEvent.setup().click(screen.getAllByRole('button', { name: es.navLanguage })[0]);
    const trail = screen.getByRole('navigation', { name: es.navBreadcrumb });
    expect(within(trail).getAllByRole('link')[0].getAttribute('href')).toBe('../../../es/products/');
    // Picking a language points at this same page in that language
    expect(screen.getAllByRole('link', { name: '日本語' })[0].getAttribute('href')).toBe('../../../ja/vox/guide/');
    expect(screen.getAllByRole('link', { name: 'English' })[0].getAttribute('href')).toBe('../../../vox/guide/');
  });

  it('press kit offers the logo downloads', () => {
    renderPage('vox-press', '../../');
    expect(screen.getByRole('link', { name: /App icon/ }).hasAttribute('download')).toBe(true);
    expect(screen.getByRole('link', { name: /Capsule art/ }).hasAttribute('download')).toBe(true);
  });
});
