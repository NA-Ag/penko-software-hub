// @vitest-environment jsdom
import React from 'react';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import { cleanup, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { AppProvider } from '../AppContext';

beforeAll(() => {
  // jsdom lacks matchMedia, which the theme detection uses
  window.matchMedia ??= ((query: string) => ({
    matches: false, media: query, onchange: null,
    addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia;
});

afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.className = '';
});

const renderApp = () =>
  render(
    <AppProvider>
      <App />
    </AppProvider>
  );

describe('Penko Plaza page', () => {
  it('renders every section', () => {
    renderApp();
    expect(screen.getByRole('heading', { level: 1 })).toBeTruthy();
    for (const id of ['products', 'roadmap', 'donate', 'privacy']) {
      expect(document.getElementById(id), id).toBeTruthy();
    }
    expect(screen.getByText("What's new")).toBeTruthy();
  });

  it('Explore lists only shipped apps; unreleased apps appear on the roadmap', () => {
    renderApp();
    const explore = document.getElementById('products')!;
    const roadmap = document.getElementById('roadmap')!;
    expect(within(explore).queryByText('Penko Calc')).toBeNull();
    expect(within(roadmap).getByText('Penko Calc')).toBeTruthy();
    expect(within(explore).getAllByText('Penko Reader').length).toBeGreaterThan(0);
  });

  it('roadmap shows only the next-up apps', () => {
    renderApp();
    const roadmap = document.getElementById('roadmap')!;
    for (const name of ['Penko Calc', 'Penko Note', 'Penko Slide']) {
      expect(within(roadmap).getByText(name)).toBeTruthy();
    }
    expect(within(roadmap).queryByText('Penko ERP')).toBeNull();
  });

  it('footer links to the Plaza privacy policy and to the paid apps', () => {
    renderApp();
    const footer = document.querySelector('footer')!;
    expect(within(footer).getByRole('link', { name: 'Privacy Policy' }).getAttribute('href')).toBe('./privacy.html');
    expect(within(footer).getByRole('link', { name: 'Penko Vox: Japanese' }).getAttribute('href')).toBe('./vox/');
    expect(within(footer).getByRole('link', { name: 'Paid apps' }).getAttribute('href')).toBe('./products/');
  });

  it('navbar has the Support link and marks Penko Plaza as the current section', () => {
    renderApp();
    const header = document.querySelector<HTMLElement>('.site-header')!;
    expect(within(header).getAllByRole('link', { name: 'Support Penko' })[0].getAttribute('href')).toBe('#donate');
    const sections = within(header).getAllByRole('navigation', { name: 'Site sections' })[0];
    expect(within(sections).getByRole('link', { name: 'Penko Plaza' }).getAttribute('aria-current')).toBe('page');
    expect(within(sections).getByRole('link', { name: 'Paid apps' }).getAttribute('href')).toBe('./products/');
  });

  it('the home page keeps Penko Vox to a short funding card', () => {
    renderApp();
    const support = document.getElementById('donate')!;
    expect(within(support).getByRole('link', { name: /See our paid apps/ }).getAttribute('href')).toBe('./products/');
    expect(within(support).queryByText(/System requirements/)).toBeNull();
    expect(document.body.textContent).not.toMatch(/one developer|single developer/i);
  });

  it('switching category selects that category’s first app', async () => {
    const user = userEvent.setup();
    renderApp();
    const explore = document.getElementById('products')!;
    await user.click(within(explore).getByRole('button', { name: /Music Platform/ }));
    expect(within(explore).getByRole('heading', { level: 3, name: 'Penko Tune' })).toBeTruthy();
    await user.click(within(explore).getByRole('button', { name: /Office Suite/ }));
    expect(within(explore).getByRole('heading', { level: 3, name: 'Penko Writer' })).toBeTruthy();
  });

  it('toggles dark mode and remembers it', async () => {
    const user = userEvent.setup();
    renderApp();
    const toggle = screen.getAllByRole('button', { name: 'Toggle dark mode' })[0];
    await user.click(toggle);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('penko-theme')).toBe('dark');
    await user.click(toggle);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('switches language, loading the translation on demand', async () => {
    const user = userEvent.setup();
    renderApp();
    await user.click(screen.getByRole('button', { name: 'Language' }));
    await user.click(screen.getAllByRole('link', { name: '日本語' })[0]);
    await waitFor(() => expect(document.documentElement.lang).toBe('ja'));
    expect(localStorage.getItem('penko-language')).toBe('ja');
    // A feature label from the Japanese feature table is now shown
    expect(screen.getByText('RSVP 速読')).toBeTruthy();
  });

  it('sandbox tabs work: abacus counts and typing test finishes', async () => {
    const user = userEvent.setup();
    renderApp();
    await user.click(screen.getByRole('button', { name: 'Abacus' }));
    await user.click(screen.getByRole('button', { name: '5' }));
    const ones = screen.getAllByRole('button', { name: '1' });
    await user.click(ones[1]); // pushes up two lower beads
    expect(screen.getByText('7')).toBeTruthy();

    await user.click(screen.getByRole('button', { name: 'Type' }));
    await user.type(screen.getByRole('textbox', { name: 'Type' }), 'penko apps run offline');
    expect(screen.getByRole('status')).toBeTruthy();
  });

  it('reading options change text size and link underlines, and reset', async () => {
    const user = userEvent.setup();
    renderApp();
    await user.click(screen.getAllByRole('button', { name: 'Reading options' })[0]);
    await user.click(screen.getByRole('button', { name: 'Larger text' }));
    expect(document.documentElement.style.fontSize).toBe('112.5%');
    await user.click(screen.getByRole('switch', { name: 'Underline links' }));
    expect(document.documentElement.classList.contains('a11y-underline')).toBe(true);
    expect(JSON.parse(localStorage.getItem('penko-reading')!)).toMatchObject({ size: 1, underline: true });
    await user.click(screen.getByRole('button', { name: 'Reset reading options' }));
    expect(document.documentElement.style.fontSize).toBe('100%');
    expect(document.documentElement.classList.contains('a11y-underline')).toBe(false);
  });

  it('language menu closes with Escape', async () => {
    const user = userEvent.setup();
    renderApp();
    await user.click(screen.getByRole('button', { name: 'Language' }));
    expect(screen.getAllByRole('link', { name: 'Deutsch' }).length).toBeGreaterThan(0);
    await user.keyboard('{Escape}');
    expect(screen.queryAllByRole('link', { name: 'Deutsch' })).toHaveLength(0);
  });
});
