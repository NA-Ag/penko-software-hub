// Generates the favicon and PWA icons from the same Penko sprite the navbar renders
// (idle pose, frame 0), so the brand mark always matches the in-app mascot.
// Run with: node generate-icons.js
import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { PENKO_IDLE } from './penko_anim/idle.ts';
import { PENKO_COLORS } from './components/penkoColors.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, 'public');
const sprite = PENKO_IDLE[0];

// Merge horizontal runs of the same color into one <rect> to keep the SVG small
function spriteRects(offset = 0) {
  const rects = [];
  sprite.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const c = row[x];
      let w = 1;
      while (x + w < row.length && row[x + w] === c) w++;
      if (c !== 0) rects.push(`<rect x="${x + offset}" y="${y + offset}" width="${w}" height="1" fill="${PENKO_COLORS[c]}"/>`);
      x += w;
    }
  });
  return rects.join('');
}

// Favicon: transparent background, just the mascot
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">${spriteRects()}</svg>\n`;
writeFileSync(join(publicDir, 'favicon.svg'), favicon);

// App icon: mascot on the app's dark tile, padded so it survives maskable cropping
const pad = 5;
const size = 16 + pad * 2;
const appIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" shape-rendering="crispEdges"><rect width="${size}" height="${size}" fill="#0f172a"/>${spriteRects(pad)}</svg>\n`;
writeFileSync(join(publicDir, 'penguin-logo.svg'), appIcon);

for (const px of [192, 512]) {
  await sharp(Buffer.from(appIcon), { density: 2400 })
    .resize(px, px, { kernel: 'nearest' })
    .png()
    .toFile(join(publicDir, `pwa-${px}x${px}.png`));
}
await sharp(Buffer.from(appIcon), { density: 2400 })
  .resize(180, 180, { kernel: 'nearest' })
  .png()
  .toFile(join(publicDir, 'apple-touch-icon.png'));

console.log('Icons generated.');
