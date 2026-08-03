import React, { useState, useMemo } from 'react';
import * as Icons from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCategory } from '../types';
import { useApp } from '../AppContext';
import { PenkoIcon } from './PenkoIcon';

const ProductGrid: React.FC = () => {
  const { t, language } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>(ProductCategory.LANGUAGE);
  const [selectedProduct, setSelectedProduct] = useState<any>(
    PRODUCTS.find(p => p.category === ProductCategory.LANGUAGE) || PRODUCTS[0]
  );
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [clickedCategory, setClickedCategory] = useState<string | null>(null);

  const isEastAsian = language === 'zh' || language === 'ja';

  const categories = Object.values(ProductCategory).filter(c => c !== ProductCategory.WELLNESS);

  // Map category names to translation keys
  const getCategoryName = (category: string): string => {
    const categoryMap: Record<string, keyof typeof t> = {
      'Office Suite': 'categoryOffice',
      'Learning': 'categoryLanguage',
      'Music Platform': 'categoryMusic',
      'Creative Tools': 'categoryCreative',
      'Enterprise Suite': 'categoryEnterprise',
      'Privacy & Security': 'categoryPrivacy',
      'Health & Wellness': 'categoryWellness'
    };
    return categoryMap[category] ? t[categoryMap[category]] : category;
  };

  // Map category to Penko icon costumes
  const getCategoryCostume = (category: string): string => {
    switch (category) {
      case ProductCategory.OFFICE: return 'parttime'; // apron/clipboard
      case ProductCategory.LANGUAGE: return 'japanese'; // headband
      case ProductCategory.MUSIC: return 'news'; // mic
      case ProductCategory.CREATIVE: return 'custom'; // wand
      case ProductCategory.ENTERPRISE: return 'business'; // suit tie
      case ProductCategory.PRIVACY: return 'diplomatic'; // top hat + monocle
      case ProductCategory.WELLNESS: return 'weekend'; // sunglasses
      default: return 'idle';
    }
  };

  // Map individual app IDs to unique Penko costumes
  const getAppCostume = (productId: string, category: string): string => {
    const appCostumeMap: Record<string, string> = {
      'penko-adventure': 'adventure',
      'penko-typing': 'typing',
      'penko-reader': 'reader',
      'penko-soroban': 'soroban',
      'penko-writer': 'writer',
      'penko-calc': 'calc',
      'penko-slide': 'slide',
      'penko-note': 'note',
      'penko-access': 'access',
      'penko-insight': 'insight',
      'penko-publish': 'publish',
      'penko-pdf': 'pdf',
      'penko-tune': 'tune',
      'penko-vector': 'vector',
      'penko-image': 'image',
      'penko-cut': 'cut',
      'penko-erp': 'erp',
      'penko-hcm': 'hcm',
      'penko-db': 'db',
      'penko-campus': 'campus',
      'penko-private': 'private',
      'penko-glow': 'glow'
    };
    return appCostumeMap[productId] || getCategoryCostume(category);
  };

  // Sorting Logic: Newest -> Status (Live > Beta > Alpha) -> Version
  const getStatusPriority = (status?: string) => {
    switch (status) {
      case 'live': return 4;
      case 'beta': return 3;
      case 'alpha': return 2;
      case 'coming-soon': return 1;
      default: return 0;
    }
  };

  const getStatusBadge = (status?: string) => {
    if (!status) return null;

    const badges = {
      'live': { color: 'bg-green-100 dark:bg-green-955/40 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800', text: t.statusLive },
      'alpha': { color: 'bg-blue-100 dark:bg-blue-955/40 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800', text: t.statusAlpha },
      'beta': { color: 'bg-purple-100 dark:bg-purple-955/40 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800', text: t.statusBeta },
      'coming-soon': { color: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700', text: t.statusComingSoon }
    };

    const badge = badges[status as keyof typeof badges];
    if (!badge) return null;

    return (
      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider ${badge.color}`}>
        {badge.text}
      </span>
    );
  };

  const getDescriptionKey = (productId: string): keyof typeof t => {
    const keyMap: Record<string, keyof typeof t> = {
      'penko-adventure': 'descPenkoAdventure',
      'penko-writer': 'descPenkoWriter',
      'penko-tune': 'descPenkoTune',
      'penko-typing': 'descPenkoTyping',
      'penko-reader': 'descPenkoReader',
      'penko-soroban': 'descPenkoSoroban',
      'penko-calc': 'descPenkoCalc',
      'penko-note': 'descPenkoNote',
      'penko-slide': 'descPenkoSlide',
      'penko-access': 'descPenkoAccess',
      'penko-insight': 'descPenkoInsight',
      'penko-publish': 'descPenkoPublish',
      'penko-pdf': 'descPenkoPdf',
      'penko-vector': 'descPenkoVector',
      'penko-image': 'descPenkoImage',
      'penko-cut': 'descPenkoCut',
      'penko-db': 'descPenkoDB',
      'penko-campus': 'descPenkoCampus',
      'penko-hcm': 'descPenkoHCM',
      'penko-erp': 'descPenkoERP',
      'penko-private': 'descPenkoPrivate',
      'penko-glow': 'descPenkoGlow'
    };
    return keyMap[productId] as keyof typeof t;
  };

  // Filtered and sorted products for active category
  const filteredProducts = useMemo(() => {
    const prods = PRODUCTS.filter(p => p.category === activeCategory);
    return [...prods].sort((a, b) => {
      if (a.isNew && !b.isNew) return -1;
      if (!a.isNew && b.isNew) return 1;
      const statusDiff = getStatusPriority(b.status) - getStatusPriority(a.status);
      if (statusDiff !== 0) return statusDiff;
      return (b.version || '').localeCompare(a.version || '', undefined, { numeric: true, sensitivity: 'base' });
    });
  }, [activeCategory]);

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

      {/* Main Console Box (Horizontal Blades on Desktop, Vertical Tabs on Mobile) */}
      <div className="flex flex-col md:flex-row min-h-[640px] w-full bg-white dark:bg-[#0f1219]/90 rounded-3xl overflow-hidden border border-slate-200 dark:border-amber-500/20 shadow-xl backdrop-blur-sm transition-all">
        
        {/* Blade List */}
        <div className="flex flex-col md:flex-row md:h-[640px] shrink-0 border-r border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30">
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat;
            const costume = getCategoryCostume(cat);

            // Xbox 360 Blade Colors
            const getCategoryColor = (category: string) => {
              switch (category) {
                case ProductCategory.OFFICE: 
                  return { bg: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-500', bgLight: 'bg-emerald-500/10 dark:bg-emerald-500/10' };
                case ProductCategory.LANGUAGE: 
                  return { bg: 'bg-red-500', text: 'text-red-600 dark:text-red-400', border: 'border-red-500', bgLight: 'bg-red-500/10 dark:bg-red-500/10' };
                case ProductCategory.MUSIC: 
                  return { bg: 'bg-purple-500', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-500', bgLight: 'bg-purple-500/10 dark:bg-purple-500/10' };
                case ProductCategory.CREATIVE: 
                  return { bg: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-500', bgLight: 'bg-amber-500/10 dark:bg-amber-500/10' };
                case ProductCategory.ENTERPRISE: 
                  return { bg: 'bg-blue-500', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-500', bgLight: 'bg-blue-500/10 dark:bg-blue-500/10' };
                case ProductCategory.PRIVACY: 
                  return { bg: 'bg-slate-500', text: 'text-slate-600 dark:text-slate-400', border: 'border-slate-500', bgLight: 'bg-slate-500/10 dark:bg-slate-500/10' };
                case ProductCategory.WELLNESS: 
                  return { bg: 'bg-teal-500', text: 'text-teal-600 dark:text-teal-400', border: 'border-teal-500', bgLight: 'bg-teal-500/10 dark:bg-teal-500/10' };
                default: 
                  return { bg: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-500', bgLight: 'bg-amber-500/10' };
              }
            };

            const catColor = getCategoryColor(cat);

            // Compute dynamic mascot pose
            let pose: 'idle' | 'walk' | 'jump' | 'talk' = isActive ? 'talk' : 'idle';
            if (clickedCategory === cat) {
              pose = 'jump';
            } else if (hoveredCategory === cat) {
              pose = 'walk';
            }

            return (
              <button
                key={cat}
                onMouseEnter={() => setHoveredCategory(cat)}
                onMouseLeave={() => setHoveredCategory(null)}
                onClick={() => {
                  setActiveCategory(cat);
                  const firstOfCat = PRODUCTS.find(p => p.category === cat);
                  if (firstOfCat) setSelectedProduct(firstOfCat);

                  // Trigger jump animation
                  setClickedCategory(cat);
                  setTimeout(() => {
                    setClickedCategory(null);
                  }, 600);
                }}
                className={`flex md:flex-col items-center justify-between py-4 px-4 md:py-8 md:px-0 md:w-20 transition-all duration-500 relative border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 group overflow-hidden
                  ${isActive 
                    ? `${catColor.bgLight} md:w-24 shadow-inner text-slate-800 dark:text-white` 
                    : 'hover:bg-slate-100/50 dark:hover:bg-slate-800/10 text-slate-400 hover:text-slate-600 dark:hover:text-slate-350'
                  }`}
              >
                {/* Active Accent Bar in Category Theme Color */}
                {isActive && (
                  <div className={`absolute left-0 top-0 bottom-0 w-1 md:w-auto md:h-1 md:right-0 ${catColor.bg} rounded-r md:rounded-r-none md:rounded-b`} />
                )}

                {/* Animated Costume Mascot */}
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border shadow-sm p-1 transition-all duration-300 group-hover:scale-105 ${isActive ? catColor.border : 'border-slate-200 dark:border-slate-700'}`}>
                  <PenkoIcon type={costume} size={40} pose={pose} />
                </div>

                {/* Label (Upright Vertical on Desktop, Normal on Mobile) */}
                <span className={`font-bold text-base uppercase transition-all duration-300 md:[writing-mode:vertical-rl] md:[text-orientation:upright] md:tracking-[0.05em] md:my-12 ${isActive ? catColor.text : 'text-slate-600 dark:text-slate-400'}`}>
                  {getCategoryName(cat)}
                </span>

                {/* Index Indicator */}
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-600 font-bold hidden md:block">
                  0{idx + 1}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Area: Left list of apps, Right app details */}
        <div className="flex-1 flex flex-col lg:flex-row h-full overflow-hidden">
          
          {/* List of Apps in Category */}
          <div className="w-full lg:w-72 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 p-4 overflow-y-auto max-h-[300px] lg:max-h-[640px] flex flex-col gap-2 shrink-0 bg-slate-50/20 dark:bg-slate-900/10">
            {filteredProducts.map(p => {
              const isSelected = selectedProduct?.id === p.id;
              // @ts-ignore
              const Icon = Icons[p.iconName] || Icons.Box;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedProduct(p)}
                  className={`w-full text-left p-3.5 flex gap-3.5 items-center rounded-2xl transition-all duration-300 border
                    ${isSelected 
                      ? 'bg-amber-50/60 dark:bg-amber-950/20 border-amber-250/30 dark:border-amber-800/30' 
                      : 'hover:bg-slate-100/50 dark:hover:bg-slate-800/10 border-transparent'
                    }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shrink-0
                    ${isSelected ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-0.5">
                      <h4 className="text-sm font-semibold truncate text-slate-800 dark:text-white">{p.name}</h4>
                      {p.isNew && <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />}
                    </div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 font-mono tracking-wider truncate">
                      {p.status} {p.version && `• ${p.version}`}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details Pane */}
          <div className="flex-1 p-6 md:p-8 overflow-y-auto max-h-[640px] flex flex-col justify-between bg-slate-50/10 dark:bg-slate-900/5">
            {selectedProduct ? (
              <div className="flex-1 flex flex-col justify-between h-full animate-[fadeIn_0.3s_ease-out]">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-5">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-955/20 flex items-center justify-center border border-amber-100/55 dark:border-amber-800/20 p-1.5">
                        {/* Dynamic category costume mascot for the selected app based on app status */}
                        <PenkoIcon 
                          type={getAppCostume(selectedProduct.id, selectedProduct.category)} 
                          size={56} 
                          pose="idle" 
                        />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-amber-600 dark:text-amber-400 font-mono">
                          {getCategoryName(selectedProduct.category)}
                        </span>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{selectedProduct.name}</h3>
                        <p className="text-xs text-slate-400 dark:text-slate-500 font-mono mt-0.5">{selectedProduct.version || 'v0.1.0'}</p>
                      </div>
                    </div>
                    {getStatusBadge(selectedProduct.status)}
                  </div>

                  <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed mb-6">
                    {t[getDescriptionKey(selectedProduct.id)] || selectedProduct.description}
                  </p>

                  {/* Features Box */}
                  <div className="mb-8">
                    <h5 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Key Features</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedProduct.features.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-center text-xs text-slate-600 dark:text-slate-400 transition-colors">
                          <Icons.CheckCircle2 size={14} className="text-green-500 dark:text-green-400 mr-2 shrink-0" />
                          <span>{feature}</span>
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
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-250 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <Icons.Github size={16} />
                      {t.projectButtonCode}
                    </a>
                  )}
                  {selectedProduct.liveUrl ? (
                    <a
                      href={selectedProduct.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-red-500 to-amber-500 text-white text-sm font-semibold hover:opacity-90 hover:scale-102 active:scale-98 transition-all text-center shadow-md shadow-amber-600/10"
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
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-400 dark:text-slate-600">
                <Icons.Layers size={48} className="mb-3 opacity-50" />
                <p className="text-sm">Select an application to view details.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;