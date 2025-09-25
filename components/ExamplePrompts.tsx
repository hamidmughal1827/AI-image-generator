
import React from 'react';
import { LightBulbIcon } from './icons/LightBulbIcon';

interface ExamplePromptsProps {
  onSelectExample: (prompt: string) => void;
}

const prompts = [
  "A cute cartoon illustration of a cat astronaut floating in space, holding a glowing star. The background is a dreamy galaxy with purple and blue tones. Style: Pixar-like 3D with soft shading. Mood: whimsical and cheerful.",
  "An epic fantasy landscape with a dragon flying over a crystal castle, hyper-detailed, digital art, trending on ArtStation.",
  "A photorealistic image of a vintage typewriter on a wooden desk, with a cup of coffee and a window showing a rainy street.",
  "Logo for a coffee shop named 'The Daily Grind', minimalist, modern, using a coffee bean and a sunrise.",
];

export const ExamplePrompts: React.FC<ExamplePromptsProps> = ({ onSelectExample }) => {
  return (
    <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-200 flex items-center">
            <LightBulbIcon className="w-6 h-6 mr-2 text-yellow-400" />
            Need Inspiration?
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => onSelectExample(prompt)}
            className="text-left p-3 bg-slate-800 rounded-md hover:bg-slate-700/80 border border-slate-700 transition-all duration-200"
          >
            <p className="text-sm text-slate-300 truncate">{prompt}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
