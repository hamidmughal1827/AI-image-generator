
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

export const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 md:px-8 border-b border-slate-700/50 bg-slate-900/70 backdrop-blur-sm">
      <div className="container mx-auto flex items-center space-x-4">
        <SparklesIcon className="w-8 h-8 text-cyan-400" />
        <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-50 tracking-tight">
            AI Image Generator
            </h1>
            <p className="text-sm md:text-md text-slate-400">
                Crafted with Gemini API
            </p>
        </div>
      </div>
    </header>
  );
};
