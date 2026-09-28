import { ProductCategory } from '../types';
import { Translation } from '../i18n';

// Per-category label, mascot costume and colors, shared by the Explore and Roadmap sections
export const CATEGORY_LABEL_KEYS: Record<ProductCategory, keyof Translation> = {
  [ProductCategory.OFFICE]: 'categoryOffice',
  [ProductCategory.LANGUAGE]: 'categoryLanguage',
  [ProductCategory.MUSIC]: 'categoryMusic',
  [ProductCategory.CREATIVE]: 'categoryCreative',
  [ProductCategory.ENTERPRISE]: 'categoryEnterprise',
  [ProductCategory.PRIVACY]: 'categoryPrivacy',
  [ProductCategory.WELLNESS]: 'categoryWellness',
};

// Penko costume shown on each category blade
export const CATEGORY_COSTUMES: Record<ProductCategory, string> = {
  [ProductCategory.OFFICE]: 'parttime',    // apron/clipboard
  [ProductCategory.LANGUAGE]: 'japanese',  // headband
  [ProductCategory.MUSIC]: 'news',         // mic
  [ProductCategory.CREATIVE]: 'custom',    // wand
  [ProductCategory.ENTERPRISE]: 'business', // suit tie
  [ProductCategory.PRIVACY]: 'diplomatic', // top hat + monocle
  [ProductCategory.WELLNESS]: 'idle',
};

// Xbox 360 blade colors. Full class strings so Tailwind can see them at build time.
type CategoryColor = {
  bar: string;        // blade accent bar (active)
  barHover: string;   // blade accent bar (hover)
  text: string;       // colored label text
  border: string;     // mascot tile border when active
  bgLight: string;    // active blade tint
  soft: string;       // selected app row / detail tile
  chip: string;       // selected app icon chip
};
export const CATEGORY_COLORS: Record<ProductCategory, CategoryColor> = {
  [ProductCategory.OFFICE]: { bar: 'bg-emerald-500', barHover: 'group-hover:bg-emerald-500/40', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-500', bgLight: 'bg-emerald-500/10', soft: 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/25', chip: 'bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400' },
  [ProductCategory.LANGUAGE]: { bar: 'bg-red-500', barHover: 'group-hover:bg-red-500/40', text: 'text-red-600 dark:text-red-400', border: 'border-red-500', bgLight: 'bg-red-500/10', soft: 'bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/25', chip: 'bg-red-100 dark:bg-red-500/15 text-red-600 dark:text-red-400' },
  [ProductCategory.MUSIC]: { bar: 'bg-purple-500', barHover: 'group-hover:bg-purple-500/40', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-500', bgLight: 'bg-purple-500/10', soft: 'bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/25', chip: 'bg-purple-100 dark:bg-purple-500/15 text-purple-600 dark:text-purple-400' },
  [ProductCategory.CREATIVE]: { bar: 'bg-amber-500', barHover: 'group-hover:bg-amber-500/40', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-500', bgLight: 'bg-amber-500/10', soft: 'bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/25', chip: 'bg-amber-100 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400' },
  [ProductCategory.ENTERPRISE]: { bar: 'bg-blue-500', barHover: 'group-hover:bg-blue-500/40', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-500', bgLight: 'bg-blue-500/10', soft: 'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/25', chip: 'bg-blue-100 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400' },
  [ProductCategory.PRIVACY]: { bar: 'bg-slate-500', barHover: 'group-hover:bg-slate-500/40', text: 'text-slate-600 dark:text-slate-300', border: 'border-slate-500', bgLight: 'bg-slate-500/10', soft: 'bg-slate-100 dark:bg-slate-500/10 border-slate-300 dark:border-slate-500/30', chip: 'bg-slate-200 dark:bg-slate-500/20 text-slate-700 dark:text-slate-300' },
  [ProductCategory.WELLNESS]: { bar: 'bg-teal-500', barHover: 'group-hover:bg-teal-500/40', text: 'text-teal-600 dark:text-teal-400', border: 'border-teal-500', bgLight: 'bg-teal-500/10', soft: 'bg-teal-50 dark:bg-teal-500/10 border-teal-200 dark:border-teal-500/25', chip: 'bg-teal-100 dark:bg-teal-500/15 text-teal-600 dark:text-teal-400' },
};
