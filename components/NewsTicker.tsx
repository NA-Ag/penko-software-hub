import React from 'react';
import { useApp } from '../AppContext';
import { Bell } from 'lucide-react';

const NewsTicker: React.FC = () => {
  const { t } = useApp();

  const newsItems = [
    t.newsUpdate1,
    t.newsUpdate2,
    t.newsUpdate3,
    t.newsUpdate4
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 text-white h-9 flex items-center overflow-hidden shadow-lg">
      <div className="flex items-center px-4 h-full bg-indigo-600 z-10 shrink-0">
        <Bell size={14} className="mr-2 animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-wider">News</span>
      </div>
      
      <div className="flex-1 overflow-hidden relative h-full flex items-center">
        <div className="absolute whitespace-nowrap animate-[marquee_40s_linear_infinite] flex items-center gap-12 pl-4">
          {newsItems.map((item, index) => (
            <span key={index} className="text-sm font-medium text-slate-200 flex items-center gap-2">
              {item}
              {index < newsItems.length - 1 && <span className="text-slate-600">•</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;