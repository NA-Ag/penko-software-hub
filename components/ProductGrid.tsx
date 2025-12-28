import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCategory } from '../types';
import { useApp } from '../AppContext';

const ProductGrid: React.FC = () => {
  const { t } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', ...Object.values(ProductCategory)];

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  // Map product IDs to translation keys
  const getDescriptionKey = (productId: string): keyof typeof t => {
    const keyMap: Record<string, keyof typeof t> = {
      'penko-adventure': 'descPenkoAdventure',
      'penko-writer': 'descPenkoWriter',
      'penko-tune': 'descPenkoTune',
      'penko-typing': 'descPenkoTyping',
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

  // Map category names to translation keys
  const getCategoryName = (category: string): string => {
    const categoryMap: Record<string, keyof typeof t> = {
      'Office Suite': 'categoryOffice',
      'Language Learning': 'categoryLanguage',
      'Music Platform': 'categoryMusic',
      'Creative Tools': 'categoryCreative',
      'Enterprise Suite': 'categoryEnterprise',
      'Privacy & Security': 'categoryPrivacy',
      'Health & Wellness': 'categoryWellness'
    };
    return categoryMap[category] ? t[categoryMap[category]] : category;
  };

  const getStatusBadge = (status?: string) => {
    if (!status) return null;

    const badges = {
      'live': { color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800', text: t.statusLive },
      'alpha': { color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800', text: t.statusAlpha },
      'beta': { color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800', text: t.statusBeta },
      'coming-soon': { color: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700', text: t.statusComingSoon }
    };

    const badge = badges[status as keyof typeof badges];
    if (!badge) return null;

    return (
      <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${badge.color} transition-colors`}>
        {badge.text}
      </span>
    );
  };

  return (
    <section id="products" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">{t.projectsTitle}</h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors">
          {t.projectsDescription}
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${activeCategory === cat
                ? 'bg-slate-900 dark:bg-indigo-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
          >
            {cat === 'All' ? t.categoryAll : getCategoryName(cat)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => {
          // Dynamic Icon Rendering
          // @ts-ignore - Lucide icons accessed dynamically
          const IconComponent = Icons[product.iconName] || Icons.Box;

          return (
            <div key={product.id} className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:border-indigo-100 dark:hover:border-indigo-800 transition-all duration-300 flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    <IconComponent size={28} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                   <div className="flex-1">
                      <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider transition-colors">{getCategoryName(product.category)}</span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 transition-colors">{product.name}</h3>
                      {product.version && (
                        <span className="text-xs text-slate-400 dark:text-slate-500 font-mono transition-colors">{product.version}</span>
                      )}
                   </div>
                   {getStatusBadge(product.status)}
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 flex-1 leading-relaxed transition-colors">
                  {t[getDescriptionKey(product.id)]}
                </p>

                <div className="space-y-3 mb-6">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-slate-500 dark:text-slate-400 transition-colors">
                      <Icons.CheckCircle2 size={14} className="text-green-500 dark:text-green-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                   {product.repoUrl && (
                     <a
                       href={product.repoUrl}
                       target="_blank"
                       rel="noreferrer"
                       className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
                     >
                       <Icons.Github size={16} />
                       {t.projectButtonCode}
                     </a>
                   )}
                   {product.liveUrl ? (
                     <a
                       href={product.liveUrl}
                       target="_blank"
                       rel="noreferrer"
                       className="flex-1 py-2 px-4 rounded-lg bg-slate-900 dark:bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors text-center"
                     >
                       {t.projectButtonLaunch}
                     </a>
                   ) : (
                     <button
                       disabled
                       className="flex-1 py-2 px-4 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 text-sm font-medium cursor-not-allowed transition-colors"
                     >
                       {t.projectButtonComingSoon}
                     </button>
                   )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductGrid;