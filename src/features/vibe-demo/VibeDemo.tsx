import React, { useState } from 'react';
import { VibeButton } from './VibeButton';
import { Wand2, MessageSquare, Sparkles, BrainCircuit } from 'lucide-react';

export const VibeDemo: React.FC = () => {
  const [currentVibe, setCurrentVibe] = useState<'fun' | 'professional' | 'energetic' | 'calm'>('fun');
  const [showConversation, setShowConversation] = useState(false);

  const vibeDescriptions = {
    fun: "Playful and creative with vibrant colors and animations",
    professional: "Clean and sophisticated with a focus on clarity and trust",
    energetic: "Bold and attention-grabbing with dynamic elements",
    calm: "Soothing and minimalist with gentle colors and transitions"
  };

  const conversationSteps = [
    { role: 'developer', text: "I need a button that feels more friendly and approachable." },
    { role: 'ai', text: "I can help with that! Would you like a softer color palette with rounded corners and a subtle hover effect?" },
    { role: 'developer', text: "Yes, and maybe add a little bounce effect when it's hovered." },
    { role: 'ai', text: "Great idea! I've added a playful bounce animation and softened the colors. How does this look?" },
    { role: 'developer', text: "Perfect! But can we make the transition a bit smoother?" },
    { role: 'ai', text: "Done! I've adjusted the transition timing to be more gentle and natural." }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-xl border border-gray-100 dark:border-gray-800">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
        <Wand2 className="text-indigo-500" />
        Interactive Vibe Demo
      </h3>
      
      <div className="mb-8">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Experience how "vibe coding" transforms UI elements by simply describing the desired feeling. 
          Select different vibes to see how the button changes:
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {(['fun', 'professional', 'energetic', 'calm'] as const).map(vibe => (
            <button
              key={vibe}
              onClick={() => setCurrentVibe(vibe)}
              className={`
                px-4 py-2 rounded-md text-sm font-medium capitalize transition-all
                ${currentVibe === vibe 
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 shadow-sm' 
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}
              `}
            >
              {vibe}
            </button>
          ))}
        </div>
        
        <div className="flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {vibeDescriptions[currentVibe]}
          </p>
          <VibeButton 
            label="Click me!" 
            vibe={currentVibe} 
          />
        </div>
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
        <button
          onClick={() => setShowConversation(!showConversation)}
          className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium mb-4"
        >
          <MessageSquare size={16} />
          {showConversation ? 'Hide' : 'Show'} Vibe Coding Conversation
        </button>
        
        {showConversation && (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 max-h-80 overflow-y-auto">
            {conversationSteps.map((step, index) => (
              <div 
                key={index} 
                className={`mb-4 flex ${step.role === 'ai' ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`
                    max-w-[80%] rounded-lg p-3 
                    ${step.role === 'ai' 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100'}
                  `}
                >
                  <div className="flex items-center gap-2 mb-1 text-xs font-medium">
                    {step.role === 'ai' 
                      ? <><BrainCircuit size={14} /> AI Assistant</>
                      : <><Sparkles size={14} /> Developer</>
                    }
                  </div>
                  <p className="text-sm">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
