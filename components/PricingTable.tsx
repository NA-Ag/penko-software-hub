import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_TIERS } from '../constants';

const PricingTable: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Free Software, Forever</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            All Penko Software projects are 100% free and open source.
            If you find our work valuable, consider supporting development with an optional donation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_TIERS.map((tier) => (
            <div 
              key={tier.id} 
              className={`
                relative rounded-3xl p-8 flex flex-col
                ${tier.highlighted 
                  ? 'bg-white shadow-2xl ring-2 ring-indigo-600 scale-105 z-10' 
                  : 'bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow'
                }
              `}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                  RECOMMENDED
                </div>
              )}

              <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
              <div className="mt-4 flex items-baseline text-slate-900">
                <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                {tier.price !== '$0' && tier.price !== 'Yearly' && (
                  <span className="ml-1 text-xl font-semibold text-slate-500">/bundle</span>
                )}
              </div>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {tier.description}
              </p>

              <ul className="mt-8 space-y-4 flex-1">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-sm text-slate-700">{feature}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button
                  className={`
                    w-full block rounded-xl py-3 px-6 text-center text-sm font-semibold transition-colors
                    ${tier.highlighted
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-indigo-500/30'
                      : 'bg-slate-50 text-indigo-600 hover:bg-indigo-50 ring-1 ring-inset ring-indigo-200'
                    }
                  `}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;