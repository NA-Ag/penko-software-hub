import React, { useState, useMemo } from 'react';
import { Menu, X, Github, Globe, ChevronRight, Moon, Sun, Languages, Play, Pause, Database } from 'lucide-react';
import ProductGrid from './components/ProductGrid';
import DonationSection from './components/DonationSection';
import { useApp } from './AppContext';
import NewsTicker from './components/NewsTicker';
import { Language, languageNames } from './translations';
import { PenkoIcon } from './components/PenkoIcon';

// Simple Navigation Component
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, isDarkMode, toggleDarkMode, t } = useApp();
  const [pose, setPose] = useState<'idle' | 'walk' | 'jump'>('idle');

  const handleMouseEnter = () => setPose('walk');
  const handleMouseLeave = () => setPose('idle');
  const handleClick = () => {
    setPose('jump');
    setTimeout(() => setPose('idle'), 600);
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <div 
            className="flex items-center gap-2.5 cursor-pointer group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 p-0.5 shadow-sm transition-all duration-300 group-hover:scale-105">
              <PenkoIcon type="default" size={40} pose={pose} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">Penko <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 dark:from-amber-400 dark:to-orange-400 font-extrabold">Station</span></span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#products" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-amber-400 transition-colors">{t.navProjects}</a>
            <a href="#donate" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-amber-400 transition-colors">{t.navSupport}</a>
            <a href="https://github.com/NA-Ag/penko-software-hub" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-amber-400 transition-colors">{t.navGitHub}</a>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-amber-400 transition-colors"
              >
                <Languages size={16} />
                <span className="uppercase">{language}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1 max-h-64 overflow-y-auto">
                  {Object.entries(languageNames).map(([code, name]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setLanguage(code as Language);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${
                        language === code ? 'text-red-500 dark:text-amber-400 font-semibold' : 'text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-slate-600 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a onClick={() => setIsOpen(false)} href="#products" className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">{t.navProjects}</a>
            <a onClick={() => setIsOpen(false)} href="#donate" className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">{t.navSupport}</a>
            <a onClick={() => setIsOpen(false)} href="https://github.com/penkosoftware" className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">{t.navGitHub}</a>

            {/* Language Selector Mobile */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <p className="px-3 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-2">Language</p>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(languageNames).map(([code, name]) => (
                  <button
                    key={code}
                    onClick={() => {
                      setLanguage(code as Language);
                      setIsOpen(false);
                    }}
                    className={`px-3 py-2 text-sm rounded-lg ${
                      language === code
                        ? 'bg-red-50 dark:bg-amber-950/20 text-red-500 dark:text-amber-400 font-semibold'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  const { t, language } = useApp();
  const [pose, setPose] = useState<'idle' | 'walk' | 'jump'>('idle');
  const [sandboxTab, setSandboxTab] = useState<'note' | 'read' | 'abacus' | 'type'>('note');
  
  // Note/Reader states
  const [noteText, setNoteText] = useState(() => t.widgetNoteDefault);
  const [readWpm, setReadWpm] = useState(250);
  const [isPlaying, setIsPlaying] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  // Abacus states (Soroban: 1 upper bead value 5, 4 lower beads value 1 each)
  const [abacusUpper, setAbacusUpper] = useState(false); // active when down
  const [abacusLower, setAbacusLower] = useState(0); // active beads pushed up (0 to 4)

  // Typing states
  const targetPhrase = t.widgetTypePhrase;
  const [typeInput, setTypeInput] = useState("");
  const [typeStartTime, setTypeStartTime] = useState<number | null>(null);
  const [typeWpm, setTypeWpm] = useState<number | null>(null);
  const [typeComplete, setTypeComplete] = useState(false);

  // Reset typing helper
  const resetTyping = () => {
    setTypeInput("");
    setTypeStartTime(null);
    setTypeWpm(null);
    setTypeComplete(false);
  };

  // Sync state on language change
  React.useEffect(() => {
    setNoteText(t.widgetNoteDefault);
    resetTyping();
  }, [language, t.widgetNoteDefault]);

  // Split note text into words
  const words = useMemo(() => {
    return noteText.trim().split(/\s+/).filter(Boolean);
  }, [noteText]);

  // RSVP Word loop
  React.useEffect(() => {
    if (!isPlaying || words.length === 0) return;

    const delay = (60 / readWpm) * 1000;
    const timer = setTimeout(() => {
      setWordIndex(prev => {
        if (prev >= words.length - 1) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [isPlaying, wordIndex, words, readWpm]);

  const handleMouseEnter = () => setPose('walk');
  const handleMouseLeave = () => setPose('idle');
  const handleClick = () => {
    setPose('jump');
    setTimeout(() => setPose('idle'), 600);
  };

  // Typing logic
  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (typeComplete) return;

    if (!typeStartTime && val.length > 0) {
      setTypeStartTime(Date.now());
    }

    setTypeInput(val);

    if (val === targetPhrase) {
      const elapsedMins = (Date.now() - (typeStartTime || Date.now())) / 60000;
      const wpm = Math.round((targetPhrase.split(" ").length) / (elapsedMins || 0.01));
      setTypeWpm(wpm);
      setTypeComplete(true);
    }
  };



  // Time-of-day configuration
  const timeOfDay = useMemo(() => {
    const hour = new Date().getHours();
    if (hour >= 20 || hour < 5) {
      return {
        class: 'dark:from-[#08070d] dark:via-[#120d1e] dark:to-[#1c0f2b]',
        decoration: (
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40 transition-opacity">
            {/* Stars with slow twinkling */}
            <div className="absolute top-10 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-[pulse_4s_infinite]"></div>
            <div className="absolute top-24 right-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-80 animate-[pulse_6s_infinite]"></div>
            <div className="absolute top-44 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-[pulse_5s_infinite]"></div>
            <div className="absolute top-16 right-12 w-3 h-3 bg-slate-300 rounded-full opacity-60 shadow-inner"></div> {/* Moon */}
          </div>
        )
      };
    } else if (hour >= 5 && hour < 8) {
      return {
        class: 'dark:from-[#110e1f] dark:via-[#301633] dark:to-[#4e1d3d]',
        decoration: <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-red-600/15 rounded-full blur-[100px] opacity-100"></div>
      };
    } else if (hour >= 8 && hour < 17) {
      return {
        class: 'dark:from-[#0d121c] dark:via-[#131b2b] dark:to-[#18233a]',
        decoration: <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl opacity-100"></div>
      };
    } else {
      return {
        class: 'dark:from-[#0c0a12] dark:via-[#1c1328] dark:to-[#331835]',
        decoration: <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[100px] opacity-100"></div>
      };
    }
  }, []);

  const abacusValue = (abacusUpper ? 5 : 0) + abacusLower;

  return (
    <div className={`relative overflow-hidden bg-white dark:bg-gradient-to-b ${timeOfDay.class} pt-16 pb-36 transition-colors duration-1000 border-b border-slate-200 dark:border-slate-800/50`}>
       {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Light Mode Blobs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 dark:hidden"></div>
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 dark:hidden"></div>
        
        {/* Dark Mode Dynamic Decoration */}
        <div className="hidden dark:block">
          {timeOfDay.decoration}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Column: Text and Actions */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-6">
              <Globe size={12} className="text-red-500 dark:text-amber-400" />
              <span>{t.heroTagline}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              {t.heroTitle1} <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 dark:from-amber-400 dark:to-orange-500">{t.heroTitle2}</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#products" className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-amber-600 text-white rounded-xl font-bold hover:bg-red-500 dark:hover:bg-amber-700 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group shadow-md shadow-amber-600/10">
                {t.heroButtonProjects}
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#donate" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                {t.heroButtonSupport}
              </a>
            </div>
          </div>
          
          {/* Right Column: Interactive Sandbox Widget */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative">
              <div className="relative rounded-3xl bg-gradient-to-br from-red-500 via-[#ef4444] to-[#ff8c00] p-0.5 shadow-2xl animate-[fadeIn_0.5s_ease-out]">
                <div className="rounded-3xl bg-white dark:bg-[#0f1219] p-6 transition-colors">
 
                  {/* Station Logo & Tab Navigation */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-850 flex items-center justify-center border border-slate-200 dark:border-slate-750 p-1 shadow-md cursor-pointer group/logo"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClick}
                      >
                        <div className="transition-transform duration-300 group-hover/logo:scale-105">
                          <PenkoIcon type="default" size={40} pose={pose} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-md font-bold text-slate-800 dark:text-white transition-colors">Penko Station</h3>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-600 font-mono">{t.widgetTitle}</p>
                      </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-1 bg-slate-105 dark:bg-slate-800/50 p-1 rounded-xl border border-slate-200 dark:border-slate-750">
                      <button
                        onClick={() => { setSandboxTab('note'); setIsPlaying(false); }}
                        className={`px-2.5 py-1.5 text-[11px] font-semibold rounded-lg transition-all ${sandboxTab === 'note' ? 'bg-white dark:bg-[#1c1d24] text-red-500 dark:text-amber-400 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                      >
                        {t.widgetTabNote}
                      </button>
                      <button
                        onClick={() => setSandboxTab('read')}
                        className={`px-2.5 py-1.5 text-[11px] font-semibold rounded-lg transition-all ${sandboxTab === 'read' ? 'bg-white dark:bg-[#1c1d24] text-red-500 dark:text-amber-400 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                      >
                        {t.widgetTabRead}
                      </button>
                      <button
                        onClick={() => { setSandboxTab('abacus'); setIsPlaying(false); }}
                        className={`px-2.5 py-1.5 text-[11px] font-semibold rounded-lg transition-all ${sandboxTab === 'abacus' ? 'bg-white dark:bg-[#1c1d24] text-red-500 dark:text-amber-400 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                      >
                        {t.widgetTabAbacus}
                      </button>
                      <button
                        onClick={() => { setSandboxTab('type'); setIsPlaying(false); }}
                        className={`px-2.5 py-1.5 text-[11px] font-semibold rounded-lg transition-all ${sandboxTab === 'type' ? 'bg-white dark:bg-[#1c1d24] text-red-500 dark:text-amber-400 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                      >
                        {t.widgetTabType}
                      </button>
                    </div>
                  </div>

                  {/* Sandbox Content Screen */}
                  <div className="min-h-[190px] bg-slate-50 dark:bg-[#161a24] rounded-2xl border border-slate-200 dark:border-slate-800/80 p-4 transition-colors flex flex-col justify-between">
                    {sandboxTab === 'note' && (
                      <textarea
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                        placeholder={t.widgetNotePlaceholder}
                        className="w-full h-32 bg-transparent border-none resize-none focus:outline-none text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans placeholder-slate-400"
                      />
                    )}
                    
                    {sandboxTab === 'read' && (
                      <div className="flex-1 flex flex-col justify-between h-full">
                        {/* RSVP word display */}
                        <div className="flex-1 flex items-center justify-center py-6">
                          <span className="text-3xl md:text-4xl font-extrabold font-mono tracking-tight text-slate-800 dark:text-white">
                            {words[wordIndex] || '---'}
                          </span>
                        </div>

                        {/* Controls */}
                        <div className="pt-4 border-t border-slate-200 dark:border-slate-800/50 flex items-center justify-between gap-4">
                          <button
                            onClick={() => {
                              if (wordIndex >= words.length - 1) setWordIndex(0);
                              setIsPlaying(!isPlaying);
                            }}
                            className="px-3.5 py-1.5 bg-red-500 dark:bg-amber-600 text-white rounded-lg text-xs font-semibold hover:bg-red-600 dark:hover:bg-amber-700 flex items-center gap-1.5 transition-colors"
                          >
                            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                            {isPlaying ? 'Pause' : 'Start'}
                          </button>
                          
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">WPM:</span>
                            <input
                              type="range"
                              min="100"
                              max="600"
                              step="25"
                              value={readWpm}
                              onChange={(e) => setReadWpm(Number(e.target.value))}
                              className="w-24 accent-red-500 dark:accent-amber-500"
                            />
                            <span className="text-xs font-bold font-mono text-slate-600 dark:text-slate-300 w-8">{readWpm}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {sandboxTab === 'abacus' && (
                      <div className="flex-1 flex items-center justify-between gap-6 py-2">
                        {/* Interactive Soroban Column with Penko Soroban Colors */}
                        <div 
                          className="flex flex-col items-center rounded-xl p-3 border-2 border-[#3f1d0b] w-24 relative shadow-2xl"
                          style={{ backgroundColor: '#201008' }}
                        >
                          {/* Central Rod (Metal Rod) */}
                          <div className="absolute inset-y-0 w-1.5 bg-[#cbd5e1] rounded-full z-0"></div>

                          {/* Upper Deck (Value 5) */}
                          <div className="h-10 w-full relative z-10 flex items-center justify-center">
                            <button
                              onClick={() => setAbacusUpper(!abacusUpper)}
                              className={`w-12 h-6 rounded-full border border-black/30 cursor-pointer shadow-md transition-all duration-150 ease-out ${
                                abacusUpper ? 'translate-y-[12px]' : 'translate-y-[-8px]'
                              }`}
                              style={{
                                backgroundColor: abacusUpper ? '#d97706' : '#92400e',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.2)'
                              }}
                              title="Value 5 Bead"
                            />
                          </div>

                          {/* Divider Beam */}
                          <div className="w-full h-2 bg-[#78350f] border-y border-black/50 z-20 shadow-md"></div>

                          {/* Lower Deck (Value 1 x 4) */}
                          <div className="h-28 w-full relative z-10 flex flex-col gap-[2px] pt-1">
                            {[0, 1, 2, 3].map(idx => {
                              const isActive = idx < abacusLower;
                              return (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    if (idx < abacusLower) {
                                      setAbacusLower(idx);
                                    } else {
                                      setAbacusLower(idx + 1);
                                    }
                                  }}
                                  className={`w-12 h-5 rounded-full border border-black/30 cursor-pointer shadow-md mx-auto transition-all duration-150 ease-out ${
                                    isActive ? 'translate-y-[-14px]' : 'translate-y-0'
                                  }`}
                                  style={{
                                    backgroundColor: isActive ? '#d97706' : '#92400e',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.2)'
                                  }}
                                />
                              );
                            })}
                          </div>
                        </div>

                        {/* Text Readout */}
                        <div className="flex-1 flex flex-col justify-center items-center">
                          <span className="text-xs uppercase font-bold text-slate-400 dark:text-slate-500 mb-1 tracking-wider">Soroban Math</span>
                          <span className="text-6xl font-black font-mono text-slate-800 dark:text-amber-400 transition-all">
                            {abacusValue}
                          </span>
                          <span className="text-[10px] text-slate-400 mt-2 text-center">{t.widgetAbacusGuide}</span>
                        </div>
                      </div>
                    )}

                    {sandboxTab === 'type' && (
                      <div className="flex-1 flex flex-col justify-between h-full">
                        {typeComplete ? (
                          <div className="flex-1 flex flex-col items-center justify-center text-center">
                            <span className="text-green-500 text-sm font-extrabold mb-1">🎉 {t.widgetTypeSuccess}</span>
                            <div className="text-4xl font-black font-mono text-slate-800 dark:text-white mb-2">
                              {typeWpm} <span className="text-xs text-slate-400 font-bold uppercase">WPM</span>
                            </div>
                            <button
                              onClick={resetTyping}
                              className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-white rounded-lg text-xs font-semibold transition-colors"
                            >
                              {t.widgetTypeRetry}
                            </button>
                          </div>
                        ) : (
                          <div className="flex-1 flex flex-col justify-between">
                            {/* Text guide */}
                            <div className="py-2 text-center font-mono text-sm tracking-wide">
                              {targetPhrase.split("").map((char, index) => {
                                let color = "text-slate-400";
                                if (index < typeInput.length) {
                                  color = typeInput[index] === char ? "text-green-500 dark:text-emerald-400 font-bold" : "text-red-500 font-bold underline";
                                }
                                return <span key={index} className={color}>{char}</span>;
                              })}
                            </div>

                            {/* Typing Input */}
                            <input
                              type="text"
                              value={typeInput}
                              onChange={handleTypeChange}
                              placeholder={t.widgetTypeStart}
                              className="w-full px-4 py-2.5 rounded-xl border border-slate-250 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-amber-500"
                            />
                            
                            <div className="text-[10px] text-slate-400 dark:text-slate-500 text-center font-semibold mt-1 uppercase">
                              {t.widgetTypeDesc}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                  </div>

                  {/* Sandbox Info Footer */}
                  <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex justify-end text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-600 transition-colors">
                    <div>100% Client-Side</div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Tasteful Mexican Silhouette: Iztaccíhuatl (The Sleeping Woman) */}
      <svg className="absolute bottom-0 left-0 w-full h-20 text-slate-100 dark:text-[#111827] pointer-events-none transition-colors" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M 0 100 L 0 85 Q 120 80 200 65 Q 260 55 350 45 Q 400 40 450 48 Q 500 55 580 40 Q 640 28 720 28 Q 780 28 850 55 Q 920 80 1000 68 Q 1060 60 1150 78 Q 1250 95 1440 85 L 1440 100 Z" fill="currentColor" />
      </svg>
    </div>
  );
};


const PrivacySection: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="privacy" className="py-24 bg-slate-50 dark:bg-[#080b10] border-t border-slate-200 dark:border-slate-900 transition-colors relative overflow-hidden">
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-12 text-center tracking-tight transition-colors">
          {t.privacyTitle}
        </h2>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Card 1 */}
          <div className="bg-white dark:bg-[#0f1219]/90 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-650 dark:text-indigo-400 font-bold text-sm flex items-center justify-center border border-indigo-500/20 shadow-inner">
              1
            </div>
            <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed transition-colors font-medium">
              {t.privacyAsIs}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-[#0f1219]/90 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-650 dark:text-indigo-400 font-bold text-sm flex items-center justify-center border border-indigo-500/20 shadow-inner">
              2
            </div>
            <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed transition-colors font-medium">
              {t.privacyFree}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-[#0f1219]/90 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-650 dark:text-indigo-400 font-bold text-sm flex items-center justify-center border border-indigo-500/20 shadow-inner">
              3
            </div>
            <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed transition-colors font-medium">
              {t.privacyNoWarranties}
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white dark:bg-[#0f1219]/90 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-650 dark:text-indigo-400 font-bold text-sm flex items-center justify-center border border-indigo-500/20 shadow-inner">
              4
            </div>
            <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed transition-colors font-medium">
              {t.privacyNoData}
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white dark:bg-[#0f1219]/90 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-650 dark:text-indigo-400 font-bold text-sm flex items-center justify-center border border-indigo-500/20 shadow-inner">
              5
            </div>
            <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed transition-colors font-medium">
              {t.privacySoloDev}
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white dark:bg-[#0f1219]/90 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-650 dark:text-indigo-400 font-bold text-sm flex items-center justify-center border border-indigo-500/20 shadow-inner">
              6
            </div>
            <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed transition-colors font-medium">
              {t.privacyBestEffort}
            </p>
          </div>

          {/* Card 7 (Full width on md+ screens to stand out as code verification) */}
          <div className="bg-white dark:bg-[#0f1219]/90 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:col-span-2 lg:col-span-3 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-650 dark:text-indigo-400 font-bold text-sm flex items-center justify-center border border-indigo-500/20 shadow-inner shrink-0">
                7
              </div>
              <span className="text-xs uppercase font-mono font-bold tracking-wider text-slate-500 dark:text-slate-400">Open Source Codebase</span>
            </div>
            <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed transition-colors font-medium">
              {t.privacyVerify}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  const { t } = useApp();

  return (
    <footer className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-600 dark:text-slate-300 py-12 border-t border-slate-200 dark:border-slate-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-105 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 p-0.5 shadow-sm">
                  <PenkoIcon type="default" size={32} pose="idle" />
                </div>
                <span className="font-bold text-xl text-slate-900 dark:text-white">Penko Station</span>
             </div>
             <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
               {t.footerDescription}
             </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">{t.footerProjects}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Penko Writer</a></li>
              <li><a href="#products" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Penko Adventure</a></li>
              <li><a href="#products" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Penko Typing</a></li>
              <li><a href="#products" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Penko Tune</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">{t.footerLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/penkosoftware" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">GitHub</a></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.footerLicense}</a></li>
              <li><a href="#privacy" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.footerPrivacy}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-450 dark:text-slate-500">
          © {new Date().getFullYear()} {t.footerRights}
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900 selection:text-indigo-900 dark:selection:text-indigo-100 transition-colors">
      <Navbar />
      <Hero />
      <ProductGrid />
      <DonationSection />
      <PrivacySection />
      <Footer />
      <NewsTicker />
    </div>
  );
}
