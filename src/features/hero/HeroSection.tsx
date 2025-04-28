import React from "react";
import { ArrowRight, Wand2, Sparkles, Zap, Repeat } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 -left-24 w-96 h-96 bg-cyan-200 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300">
              <Wand2 size={14} className="animate-pulse" />
              New in 2025
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 dark:from-pink-400 dark:to-violet-400">
            <span className="inline-block animate-pulse delay-100">Vibe</span>{" "}
            <span className="inline-block animate-pulse delay-200">Coding</span>{" "}
            <span className="inline-block animate-pulse delay-300">
              Revolution
            </span>
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
            A new intuitive, AI-driven approach to programming that emphasizes
            coding by{" "}
            <span className="font-medium text-indigo-600 dark:text-indigo-400">
              "feel" and intuition
            </span>{" "}
            rather than strict planning. Describe what you want in natural
            language and let AI build it for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-full shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-all hover:scale-105">
              Get Started
              <ArrowRight size={18} />
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/50 rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-800/50 transition-all">
              Learn More
              <Sparkles size={18} />
            </button>
          </div>
        </div>

        {/* Key features with icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 mb-4">
              <Zap size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Lightning-Fast Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Build functional prototypes in minutes instead of hours by simply
              describing what you want.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 mb-4">
              <Wand2 size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Enhanced Creativity
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Focus on the creative vision instead of implementation details to
              unlock more innovative solutions.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 mb-4">
              <Repeat size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Rapid Iteration
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Experiment with multiple ideas and refine them through quick
              conversational feedback loops.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
