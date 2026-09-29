// Syncs Penko Vox: Japanese screenshots and trailer info from the Steam store.
//
// Screenshots (and the trailer poster) are downloaded into public/media/vox/ and served
// from our own site, so visitors never contact Steam just by opening the page and the
// images work offline. The trailer itself streams from Steam, but only after a visitor
// presses play. Runs before every build and dev start (see package.json); the scheduled
// deploy workflow rebuilds daily, so changes made on Steam show up automatically.
//
// Usage: node scripts/fetch-steam-media.mjs [--force]   (skips if synced in the last 12 h)

import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const APP_ID = '4836870';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const mediaDir = join(root, 'public/media/vox');
const manifestPath = join(root, 'generated/vox-media.json');
const MAX_AGE_MS = 12 * 60 * 60 * 1000;

const force = process.argv.includes('--force');
if (!force && existsSync(manifestPath) && Date.now() - statSync(manifestPath).mtimeMs < MAX_AGE_MS) {
  console.log('[steam-media] Up to date (synced in the last 12 h). Use --force to refresh.');
  process.exit(0);
}

const writeManifest = manifest => {
  mkdirSync(dirname(manifestPath), { recursive: true });
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
};

// Short stable name from the Steam URL, so replacing a screenshot on Steam changes the file name
const fileName = (url, suffix) => `${createHash('sha1').update(url.split('?')[0]).digest('hex').slice(0, 12)}-${suffix}.jpg`;

const download = async (url, name) => {
  const target = join(mediaDir, name);
  if (!existsSync(target)) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    writeFileSync(target, Buffer.from(await res.arrayBuffer()));
  }
  return `media/vox/${name}`;
};

try {
  const res = await fetch(`https://store.steampowered.com/api/appdetails?appids=${APP_ID}&l=english`);
  const data = (await res.json())?.[APP_ID]?.data;
  if (!data) throw new Error('Steam returned no app data');

  mkdirSync(mediaDir, { recursive: true });
  const screenshots = [];
  for (const shot of data.screenshots ?? []) {
    screenshots.push({
      thumb: await download(shot.path_thumbnail, fileName(shot.path_full, 'thumb')),
      full: await download(shot.path_full, fileName(shot.path_full, 'full')),
    });
  }

  const movie = (data.movies ?? []).find(m => m.highlight) ?? data.movies?.[0];
  const trailer = movie && movie.hls_h264
    ? { name: movie.name, poster: await download(movie.thumbnail, fileName(movie.thumbnail, 'poster')), hls: movie.hls_h264 }
    : null;

  // Remove images Steam no longer lists
  const keep = new Set([...screenshots.flatMap(s => [s.thumb, s.full]), trailer?.poster].filter(Boolean).map(p => p.split('/').pop()));
  for (const file of readdirSync(mediaDir)) if (!keep.has(file)) rmSync(join(mediaDir, file));

  writeManifest({ syncedAt: new Date().toISOString(), screenshots, trailer });
  console.log(`[steam-media] Synced ${screenshots.length} screenshots${trailer ? ' and the trailer' : ''}.`);
} catch (err) {
  // Never block a build: keep the last good manifest, or ship the page without media
  if (existsSync(manifestPath)) {
    console.warn(`[steam-media] Steam unavailable (${err.message}); keeping the last synced media.`);
  } else {
    console.warn(`[steam-media] Steam unavailable (${err.message}); building without screenshots.`);
    writeManifest({ syncedAt: null, screenshots: [], trailer: null });
  }
}
