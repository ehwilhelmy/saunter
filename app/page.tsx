'use client';

import { useState } from 'react';
import LandingPageWhite from './components/LandingPageWhite';
import LandingPageDark from './components/LandingPageDark';
import LandingPageSimple from './components/LandingPageSimple';
import { Sun, Moon, Sparkles } from 'lucide-react';

export default function Home() {
  const [design, setDesign] = useState<'white' | 'dark' | 'simple'>('simple');

  return (
    <>
      {/* Design Switcher - Fixed at bottom right */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-full shadow-2xl border border-gray-200">
        <span className="text-xs font-medium text-gray-600">Design:</span>
        <button
          onClick={() => setDesign('simple')}
          className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
            design === 'simple'
              ? 'bg-accent text-foreground shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-xs font-medium">Simple</span>
        </button>
        <button
          onClick={() => setDesign('white')}
          className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
            design === 'white'
              ? 'bg-accent text-foreground shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Sun className="w-4 h-4" />
          <span className="text-xs font-medium">Elegant</span>
        </button>
        <button
          onClick={() => setDesign('dark')}
          className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
            design === 'dark'
              ? 'bg-primary text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Moon className="w-4 h-4" />
          <span className="text-xs font-medium">Bold</span>
        </button>
      </div>

      {/* Render Selected Design */}
      {design === 'simple' && <LandingPageSimple />}
      {design === 'white' && <LandingPageWhite />}
      {design === 'dark' && <LandingPageDark />}
    </>
  );
}
