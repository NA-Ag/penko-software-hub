import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { useDocs } from '../i18n/docs';
import { siteFile } from '../lib/sitePaths';

interface VoxMediaManifest {
  syncedAt: string | null;
  screenshots: { thumb: string; full: string }[];
  trailer: { name: string; poster: string; hls: string } | null;
}

// Written by scripts/fetch-steam-media.mjs before every build; absent until the first sync,
// in which case the section simply doesn't render
const found = import.meta.glob<VoxMediaManifest>('../generated/vox-media.json', { eager: true, import: 'default' });
export const VOX_MEDIA: VoxMediaManifest | undefined = Object.values(found)[0];

// Steam trailers are HLS streams: Safari plays them natively, other browsers need hls.js,
// which is only downloaded once someone presses play
const Trailer: React.FC<{ trailer: NonNullable<VoxMediaManifest['trailer']> }> = ({ trailer }) => {
  const { vox } = useDocs();
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!playing || !video) return;
    let destroy: (() => void) | undefined;
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = trailer.hls;
      video.play().catch(() => undefined);
    } else {
      import('hls.js').then(({ default: Hls }) => {
        if (!Hls.isSupported()) return;
        const hls = new Hls();
        hls.loadSource(trailer.hls);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => undefined));
        destroy = () => hls.destroy();
      });
    }
    return () => destroy?.();
  }, [playing, trailer.hls]);

  return (
    <figure>
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-black ring-1 ring-slate-200 dark:ring-white/10 shadow-xl">
        {playing ? (
          <video ref={videoRef} controls playsInline poster={siteFile(trailer.poster)} className="w-full h-full" aria-label={trailer.name} />
        ) : (
          <button onClick={() => setPlaying(true)} className="group absolute inset-0 w-full h-full" aria-label={vox.media.playTrailer}>
            <img src={siteFile(trailer.poster)} alt="" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex items-center gap-2 pl-5 pr-6 py-3 rounded-full bg-black/70 text-white font-bold backdrop-blur-sm group-hover:bg-red-600 transition-colors">
                <Play size={20} className="fill-current" />
                {vox.media.playTrailer}
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-2 text-xs text-slate-500 dark:text-slate-400">{vox.media.trailerNotice}</figcaption>
    </figure>
  );
};

// Full-size screenshot viewer: arrow keys and buttons move between images, Escape closes
const Lightbox: React.FC<{ shots: VoxMediaManifest['screenshots']; index: number; onChange: (i: number | null) => void }> = ({ shots, index, onChange }) => {
  const { vox } = useDocs();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const step = useCallback((delta: number) => onChange((index + delta + shots.length) % shots.length), [index, onChange, shots.length]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal?.();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClose={() => onChange(null)}
      onKeyDown={e => {
        if (e.key === 'ArrowRight') step(1);
        if (e.key === 'ArrowLeft') step(-1);
      }}
      onClick={e => { if (e.target === dialogRef.current) dialogRef.current?.close(); }}
      aria-label={vox.media.screenshot.replace('{n}', String(index + 1))}
      className="p-0 m-auto max-w-[min(1200px,95vw)] w-full bg-transparent backdrop:bg-black/85"
    >
      <img src={siteFile(shots[index].full)} alt={vox.media.screenshot.replace('{n}', String(index + 1))} className="w-full h-auto rounded-xl" />
      <div className="mt-3 flex items-center justify-center gap-3">
        <button onClick={() => step(-1)} aria-label={vox.media.previous} className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20"><ChevronLeft size={22} /></button>
        <span className="text-sm text-slate-300 tabular-nums">{index + 1} / {shots.length}</span>
        <button onClick={() => step(1)} aria-label={vox.media.next} className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20"><ChevronRight size={22} /></button>
        <button onClick={() => dialogRef.current?.close()} aria-label={vox.media.close} className="ml-4 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20"><X size={22} /></button>
      </div>
    </dialog>
  );
};

const VoxMedia: React.FC = () => {
  const { vox } = useDocs();
  const [open, setOpen] = useState<number | null>(null);
  if (!VOX_MEDIA || (!VOX_MEDIA.trailer && VOX_MEDIA.screenshots.length === 0)) return null;
  const shots = VOX_MEDIA.screenshots;

  return (
    <section id="media" className="max-w-6xl mx-auto px-4 md:px-8 pt-16">
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">{vox.media.title}</h2>
      {VOX_MEDIA.trailer && <Trailer trailer={VOX_MEDIA.trailer} />}
      {shots.length > 0 && (
        <ul className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-3">
          {shots.map((shot, i) => (
            <li key={shot.full}>
              <button onClick={() => setOpen(i)} className="block w-full rounded-xl overflow-hidden ring-1 ring-slate-200 dark:ring-white/10 hover:ring-2 hover:ring-amber-400 transition">
                <img src={siteFile(shot.thumb)} alt={vox.media.screenshot.replace('{n}', String(i + 1))} loading="lazy" width={600} height={338} className="w-full h-auto" />
              </button>
            </li>
          ))}
        </ul>
      )}
      {open !== null && <Lightbox shots={shots} index={open} onChange={setOpen} />}
    </section>
  );
};

export default VoxMedia;
