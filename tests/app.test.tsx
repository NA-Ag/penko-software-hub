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
    await user.click(screen.getAllByRole('button', { name: '日本語' })[0]);
    await waitFor(() => expect(document.documentElement.lang).toBe('ja'));
    expect(localStorage.getItem('penko-language')).toBe('ja');
    // A feature label from the Japanese feature table is now shown
    expect(screen.getByText('RSVP 読書')).toBeTruthy();
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

  it('language menu closes with Escape', async () => {
    const user = userEvent.setup();
    renderApp();
    await user.click(screen.getByRole('button', { name: 'Language' }));
    expect(screen.getAllByRole('button', { name: 'Deutsch' }).length).toBeGreaterThan(0);
    await user.keyboard('{Escape}');
    expect(screen.queryAllByRole('button', { name: 'Deutsch' })).toHaveLength(0);
  });
});
