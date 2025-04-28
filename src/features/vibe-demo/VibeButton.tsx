import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface VibeButtonProps {
  label: string;
  vibe: 'fun' | 'professional' | 'energetic' | 'calm';
  onClick?: () => void;
}

export const VibeButton: React.FC<VibeButtonProps> = ({ 
  label, 
  vibe = 'fun',
  onClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Tailwind classes based on the vibe
  const vibeStyles = {
    fun: {
      base: "bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium",
      hover: "shadow-lg shadow-pink-500/30 scale-105",
      animation: "animate-pulse"
    },
    professional: {
      base: "bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium",
      hover: "shadow-lg shadow-blue-600/20 translate-y-[-2px]",
      animation: ""
    },
    energetic: {
      base: "bg-gradient-to-r from-amber-500 to-red-500 text-white font-bold",
      hover: "shadow-lg shadow-amber-500/30 scale-110",
      animation: "animate-bounce"
    },
    calm: {
      base: "bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-medium",
      hover: "shadow-lg shadow-teal-400/20 scale-[1.02]",
      animation: ""
    }
  };

  const handleClick = () => {
    // Add a little animation on click
    const button = document.activeElement as HTMLElement;
    button?.classList.add('scale-95');
    setTimeout(() => {
      button?.classList.remove('scale-95');
    }, 100);
    
    // Call the provided onClick handler
    onClick?.();
  };

  return (
    <button
      className={`
        px-6 py-3 rounded-full transition-all duration-300 ease-in-out 
        ${vibeStyles[vibe].base}
        ${isHovered ? vibeStyles[vibe].hover : ''}
        ${isHovered && vibeStyles[vibe].animation}
        active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${vibe === 'fun' ? 'pink' : vibe === 'professional' ? 'blue' : vibe === 'energetic' ? 'amber' : 'teal'}-500
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <span className="flex items-center gap-2">
        {vibe === 'fun' && <Sparkles size={18} className="animate-spin-slow" />}
        {label}
        {vibe === 'energetic' && <Sparkles size={18} className="animate-ping" />}
      </span>
    </button>
  );
};
