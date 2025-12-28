import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { DONATION_OPTIONS } from '../constants';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { useApp } from '../AppContext';

const DonationSection: React.FC = () => {
  const { t } = useApp();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Map donation IDs to translation keys
  const getDonationDescription = (donationId: string): string => {
    const descMap: Record<string, keyof typeof t> = {
      'donate-paypal': 'donatePaypal',
      'donate-kofi': 'donateKofi',
      'donate-btc': 'donateBtc',
      'donate-eth': 'donateEth'
    };
    return descMap[donationId] ? t[descMap[donationId]] : '';
  };

  return (
    <section id="donate" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Text Content */}
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-900/30 border border-pink-100 dark:border-pink-800 text-pink-600 dark:text-pink-400 text-xs font-semibold mb-6 transition-colors">
              <Icons.Heart size={12} className="fill-current" />
              <span>{t.donationsTagline}</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">{t.donationsTitle}</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 transition-colors">
              {t.donationsDescription1}
              <br /><br />
              {t.donationsDescription2}
            </p>
            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 transition-colors">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2 transition-colors">
                <Icons.ShieldCheck size={18} className="text-green-600 dark:text-green-400" />
                {t.donationsBoxTitle}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors">
                {t.donationsBoxDescription}
              </p>
            </div>
          </div>

          {/* Donation Options Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {DONATION_OPTIONS.map((option) => {
              // @ts-ignore
              const IconComponent = Icons[option.iconName] || Icons.HelpCircle;
              const isCrypto = option.type === 'crypto';

              return (
                <div
                  key={option.id}
                  className="group relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:shadow-lg hover:border-indigo-100 dark:hover:border-indigo-800 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${option.color} text-white shadow-sm`}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white transition-colors">{option.name}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 transition-colors">{isCrypto ? t.donationsCrypto : t.donationsSecure}</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 transition-colors">
                    {getDonationDescription(option.id)}
                  </p>

                  {isCrypto ? (
                    <div className="relative">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg p-3 pr-12 font-mono text-xs text-slate-600 dark:text-slate-300 break-all transition-colors">
                        {option.value}
                      </div>
                      <button
                        onClick={() => handleCopy(option.id, option.value)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-800 rounded-md transition-all"
                        title="Copy Address"
                      >
                        {copiedId === option.id ? <Check size={16} className="text-green-500 dark:text-green-400" /> : <Copy size={16} />}
                      </button>
                    </div>
                  ) : (
                    <a
                      href={option.value}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 dark:bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors"
                    >
                      {t.donationsVia} {option.name}
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;