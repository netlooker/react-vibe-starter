import React from 'react';
import { 
  Lightbulb, Zap, Repeat, MessageSquare, Brain, ShieldAlert 
} from 'lucide-react';

interface PrincipleProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isGood?: boolean;
}

const Principle: React.FC<PrincipleProps> = ({ 
  title, 
  description, 
  icon,
  isGood = true
}) => {
  return (
    <div className={`
      flex items-start gap-4 p-5 rounded-lg
      ${isGood 
        ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30' 
        : 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30'}
    `}>
      <div className={`
        p-2 rounded-full 
        ${isGood 
          ? 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400' 
          : 'bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400'}
      `}>
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white mb-1">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export const VibePrinciples: React.FC = () => {
  const benefits = [
    {
      title: "Intuition-Driven Development",
      description: "Focus on what feels right for the user experience, similar to an artist adjusting a painting by eye.",
      icon: <Lightbulb size={20} />
    },
    {
      title: "Natural Language Prompts",
      description: "Communicate with AI using plain language to describe the vibe or effect you want.",
      icon: <MessageSquare size={20} />
    },
    {
      title: "LLM-Assisted Iteration",
      description: "Use AI tools to generate and refine code through multiple rapid cycles of prompt → code → run → feedback.",
      icon: <Repeat size={20} />
    },
    {
      title: "Flow Over Formality",
      description: "Maintain creative momentum by staying in a flow state, making coding feel more like playing or experimenting.",
      icon: <Zap size={20} />
    }
  ];

  const challenges = [
    {
      title: "Code Quality Concerns",
      description: "Vibe-coded projects can result in messy, inconsistent, or hard-to-maintain code if not properly reviewed.",
      icon: <ShieldAlert size={20} />
    },
    {
      title: "Lack of Architecture",
      description: "Focus on immediate solutions may ignore important architectural considerations like scalability and performance.",
      icon: <Brain size={20} />
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-xl border border-gray-100 dark:border-gray-800">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Vibe Coding Principles
      </h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
            Key Benefits
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <Principle 
                key={index} 
                title={benefit.title} 
                description={benefit.description} 
                icon={benefit.icon} 
              />
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
            Challenges to Consider
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {challenges.map((challenge, index) => (
              <Principle 
                key={index} 
                title={challenge.title} 
                description={challenge.description} 
                icon={challenge.icon} 
                isGood={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
