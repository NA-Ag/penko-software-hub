import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, Github } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product, ProductCategory } from '../types';
import { useApp } from '../AppContext';
import { Translation } from '../i18n';
import { PenkoIcon } from './PenkoIcon';
import { getProductIcon } from './productIcons';
import { getAppCostume, getDescriptionKey } from './productMeta';

type Status = NonNullable<Product['status']>;

// Wellness has no shipped apps yet, so it stays out of the category rail
const CATEGORIES = Object.values(ProductCategory).filter(c => c !== ProductCategory.WELLNESS);

const CATEGORY_LABEL_KEYS: Record<ProductCategory, keyof Translation> = {
  [ProductCategory.OFFICE]: 'categoryOffice',
  [ProductCategory.LANGUAGE]: 'categoryLanguage',
  [ProductCategory.MUSIC]: 'categoryMusic',
  [ProductCategory.CREATIVE]: 'categoryCreative',
  [ProductCategory.ENTERPRISE]: 'categoryEnterprise',
  [ProductCategory.PRIVACY]: 'categoryPrivacy',
  [ProductCategory.WELLNESS]: 'categoryWellness',
};

// Penko costume shown on each category blade
const CATEGORY_COSTUMES: Record<ProductCategory, string> = {
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
const CATEGORY_COLORS: Record<ProductCategory, CategoryColor> = {
  [ProductCategory.OFFICE]: { bar: 'bg-emerald-500', barHover: 'group-hover:bg-emerald-500/40', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-500', bgLight: 'bg-emerald-500/10', soft: 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/25', chip: 'bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400' },
  [ProductCategory.LANGUAGE]: { bar: 'bg-red-500', barHover: 'group-hover:bg-red-500/40', text: 'text-red-600 dark:text-red-400', border: 'border-red-500', bgLight: 'bg-red-500/10', soft: 'bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/25', chip: 'bg-red-100 dark:bg-red-500/15 text-red-600 dark:text-red-400' },
  [ProductCategory.MUSIC]: { bar: 'bg-purple-500', barHover: 'group-hover:bg-purple-500/40', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-500', bgLight: 'bg-purple-500/10', soft: 'bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/25', chip: 'bg-purple-100 dark:bg-purple-500/15 text-purple-600 dark:text-purple-400' },
  [ProductCategory.CREATIVE]: { bar: 'bg-amber-500', barHover: 'group-hover:bg-amber-500/40', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-500', bgLight: 'bg-amber-500/10', soft: 'bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/25', chip: 'bg-amber-100 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400' },
  [ProductCategory.ENTERPRISE]: { bar: 'bg-blue-500', barHover: 'group-hover:bg-blue-500/40', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-500', bgLight: 'bg-blue-500/10', soft: 'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/25', chip: 'bg-blue-100 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400' },
  [ProductCategory.PRIVACY]: { bar: 'bg-slate-500', barHover: 'group-hover:bg-slate-500/40', text: 'text-slate-600 dark:text-slate-300', border: 'border-slate-500', bgLight: 'bg-slate-500/10', soft: 'bg-slate-100 dark:bg-slate-500/10 border-slate-300 dark:border-slate-500/30', chip: 'bg-slate-200 dark:bg-slate-500/20 text-slate-700 dark:text-slate-300' },
  [ProductCategory.WELLNESS]: { bar: 'bg-teal-500', barHover: 'group-hover:bg-teal-500/40', text: 'text-teal-600 dark:text-teal-400', border: 'border-teal-500', bgLight: 'bg-teal-500/10', soft: 'bg-teal-50 dark:bg-teal-500/10 border-teal-200 dark:border-teal-500/25', chip: 'bg-teal-100 dark:bg-teal-500/15 text-teal-600 dark:text-teal-400' },
};

const STATUS_PRIORITY: Record<Status, number> = { live: 4, beta: 3, alpha: 2, 'coming-soon': 1 };

const STATUS_BADGES: Record<Status, { color: string; label: keyof Translation }> = {
  live: { color: 'bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800', label: 'statusLive' },
  alpha: { color: 'bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800', label: 'statusAlpha' },
  beta: { color: 'bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800', label: 'statusBeta' },
  'coming-soon': { color: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700', label: 'statusComingSoon' },
};

// Newest first, then by status (Live > Beta > Alpha > Coming Soon), then by version
const sortProducts = (products: Product[]) =>
  [...products].sort((a, b) => {
    if (a.isNew !== b.isNew) return a.isNew ? -1 : 1;
    const statusDiff = (STATUS_PRIORITY[b.status!] ?? 0) - (STATUS_PRIORITY[a.status!] ?? 0);
    if (statusDiff !== 0) return statusDiff;
    return (b.version || '').localeCompare(a.version || '', undefined, { numeric: true, sensitivity: 'base' });
  });

const PRODUCTS_BY_CATEGORY = new Map<ProductCategory, Product[]>(
  CATEGORIES.map(cat => [cat, sortProducts(PRODUCTS.filter(p => p.category === cat))])
);

const ProductGrid: React.FC = () => {
  const { t, tFeature } = useApp();
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(ProductCategory.LANGUAGE);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    () => PRODUCTS_BY_CATEGORY.get(ProductCategory.LANGUAGE)?.[0]
  );
  const [hoveredCategory, setHoveredCategory] = useState<ProductCategory | null>(null);
  const [clickedCategory, setClickedCategory] = useState<ProductCategory | null>(null);
  const jumpTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(jumpTimer.current), []);

  const filteredProducts = useMemo(() => PRODUCTS_BY_CATEGORY.get(activeCategory) ?? [], [activeCategory]);

  const selectCategory = (cat: ProductCategory) => {
    setActiveCategory(cat);
    setSelectedProduct(PRODUCTS_BY_CATEGORY.get(cat)?.[0]);

    // Trigger jump animation
    setClickedCategory(cat);
    window.clearTimeout(jumpTimer.current);
    jumpTimer.current = window.setTimeout(() => setClickedCategory(null), 600);
  };

  const statusBadge = selectedProduct?.status && STATUS_BADGES[selectedProduct.status];
  const activeColor = CATEGORY_COLORS[activeCategory];

  return (
    <section id="products" className="py-16 px-4 md:px-12 lg:px-16 max-w-none mx-auto w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight transition-colors">
          {t.exploreAppsTitle}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors">
          {t.exploreAppsSubtitle}
        </p>
      </div>

      {/* Main Console Box */}
      <div className="w-full bg-white dark:bg-[#0f1219]/90 rounded-3xl overflow-hidden border border-slate-200 dark:border-amber-500/20 shadow-xl backdrop-blur-sm transition-all">

        {/* Category blades: a readable row across the top, each with its costumed Penko */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/30">
          {CATEGORIES.map((cat, idx) => {
            const isActive = activeCategory === cat;
            const catColor = CATEGORY_COLORS[cat];
            const count = PRODUCTS_BY_CATEGORY.get(cat)?.length ?? 0;

            let pose: 'idle' | 'walk' | 'jump' | 'talk' = isActive ? 'talk' : 'idle';
            if (clickedCategory === cat) pose = 'jump';
            else if (hoveredCategory === cat) pose = 'walk';

            return (
              <button
                key={cat}
                aria-pressed={isActive}
                onMouseEnter={() => setHoveredCategory(cat)}
                onMouseLeave={() => setHoveredCategory(null)}
                onClick={() => selectCategory(cat)}
                className={`group relative flex items-center gap-3 px-3 sm:px-4 py-4 text-left transition-colors duration-300 border-slate-200 dark:border-slate-800 border-r border-b xl:border-b-0 last:border-r-0
                  ${isActive ? catColor.bgLight : 'hover:bg-slate-100/70 dark:hover:bg-slate-800/30'}`}
              >
                {/* Accent bar in category color */}
                <span className={`absolute inset-x-0 top-0 h-1 transition-colors duration-300 ${isActive ? catColor.bar : `bg-transparent ${catColor.barHover}`}`} />

                <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border shadow-sm p-1 shrink-0 transition-all duration-300 group-hover:scale-105 ${isActive ? catColor.border : 'border-slate-200 dark:border-slate-700'}`}>
                  <PenkoIcon type={CATEGORY_COSTUMES[cat]} size={40} pose={pose} />
                </div>

                <div className="min-w-0 flex-1">
                  <span aria-hidden="true" className="block text-xs font-mono font-bold text-slate-500 dark:text-slate-400">0{idx + 1}</span>
                  <span className={`block text-sm font-bold leading-tight transition-colors ${isActive ? catColor.text : 'text-slate-700 dark:text-slate-300'}`}>
                    {t[CATEGORY_LABEL_KEYS[cat]]}
                  </span>
                </div>

                <span className={`hidden sm:inline text-[11px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0 ${isActive ? catColor.chip : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Area: list of apps + app details */}
        <div className="flex flex-col lg:flex-row lg:h-[560px]">

          <div className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 p-4 lg:overflow-y-auto flex flex-col gap-2 shrink-0 bg-slate-50/30 dark:bg-slate-900/10">
            {filteredProducts.map(p => {
              const isSelected = selectedProduct?.id === p.id;
              const Icon = getProductIcon(p.iconName);
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedProduct(p)}
                  aria-pressed={isSelected}
                  className={`w-full text-left p-3.5 flex gap-3.5 items-center rounded-2xl transition-all duration-300 border
                    ${isSelected ? activeColor.soft : 'hover:bg-slate-100/60 dark:hover:bg-slate-800/30 border-transparent'}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shrink-0
                    ${isSelected ? activeColor.chip : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-sm font-semibold truncate text-slate-800 dark:text-white">{p.name}</span>
                      {p.isNew && (
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0">
                          <span className="sr-only">{t.badgeNew}</span>
                        </span>
                      )}
                    </div>
                    <p className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 font-mono tracking-wider truncate">
                      {p.status && t[STATUS_BADGES[p.status].label]} {p.version && `• ${p.version}`}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details Pane */}
          <div className="flex-1 p-6 md:p-8 overflow-y-auto flex flex-col justify-between bg-slate-50/10 dark:bg-slate-900/5">
            {selectedProduct && (
              <div key={selectedProduct.id} className="flex-1 flex flex-col justify-between h-full animate-[fadeIn_0.3s_ease-out]">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border p-1.5 ${activeColor.soft}`}>
                        <PenkoIcon type={getAppCostume(selectedProduct.id)} size={56} pose="idle" />
                      </div>
                      <div>
                        <span className={`text-xs uppercase font-bold tracking-widest font-mono ${activeColor.text}`}>
                          {t[CATEGORY_LABEL_KEYS[selectedProduct.category]]}
                        </span>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{selectedProduct.name}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">{selectedProduct.version || 'v0.1.0'}</p>
                      </div>
                    </div>
                    {statusBadge && (
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider ${statusBadge.color}`}>
                        {t[statusBadge.label]}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {t[getDescriptionKey(selectedProduct.id)] || selectedProduct.description}
                  </p>

                  <div className="mb-8">
                    <h5 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">{t.productKeyFeatures}</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedProduct.features.map(feature => (
                        <div key={feature} className="flex items-center text-xs text-slate-600 dark:text-slate-400 transition-colors">
                          <CheckCircle2 size={14} className="text-green-500 dark:text-green-400 mr-2 shrink-0" />
                          <span>{tFeature(feature)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Launch / Code actions */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800/50 flex flex-col sm:flex-row gap-3">
                  {selectedProduct.repoUrl && (
                    <a
                      href={selectedProduct.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      {t.projectButtonCode}
                    </a>
                  )}
                  {selectedProduct.liveUrl ? (
                    <a
                      href={selectedProduct.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-red-500 to-amber-500 text-white text-sm font-semibold hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all text-center shadow-md shadow-amber-600/10"
                    >
                      {t.projectButtonLaunch}
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 text-sm font-semibold cursor-not-allowed transition-colors"
                    >
                      {t.projectButtonComingSoon}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;
