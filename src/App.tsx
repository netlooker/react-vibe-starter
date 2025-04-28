import { Sparkles, Github, Heart } from "lucide-react";
import "./index.css";
import { ThemeToggle } from "./features/theme";
import { HeroSection } from "./features/hero";
import { VibeDemo } from "./features/vibe-demo";
import { VibePrinciples } from "./features/principles";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles size={24} className="neon-cyan" />
              <h1 className="text-xl font-bold neon-pink">Vibe Coding</h1>
            </div>

            <div className="flex items-center gap-4">
              <nav>
                <ul className="flex gap-6">
                  <li>
                    <a
                      href="#principles"
                      className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
                    >
                      Principles
                    </a>
                  </li>
                  <li>
                    <a
                      href="#demo"
                      className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
                    >
                      Demo
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <HeroSection />

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4 space-y-16">
          {/* Principles Section */}
          <section id="principles" className="scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Understanding Vibe Coding
            </h2>
            <VibePrinciples />
          </section>

          {/* Interactive Demo Section */}
          <section id="demo" className="scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Experience It Yourself
            </h2>
            <VibeDemo />
          </section>

          {/* About Section */}
          <section id="about" className="scroll-mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              About This Project
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This showcase was created to demonstrate the principles of "Vibe
                Coding" - an emerging approach to software development that was
                coined in early 2025.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The term refers to a style where developers leverage AI tools
                and their intuition to guide code creation, describing what they
                want in natural, evocative language instead of manually crafting
                every line of code.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                This project itself was built using React 19, TypeScript, and
                Tailwind CSS 4, following modern best practices while embracing
                the intuitive nature of vibe coding.
              </p>

              <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  Technical Stack
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  <li>React 19 for UI components</li>
                  <li>TypeScript for type safety</li>
                  <li>Tailwind CSS 4 for styling</li>
                  <li>Vite for blazing fast development</li>
                  <li>Lucide React for beautiful icons</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Heart size={16} className="neon-pink" />
              <span className="text-gray-600 dark:text-gray-400">
                Made with AI-assisted development
              </span>
            </div>

            <p className="text-gray-500 dark:text-gray-500">
              © 2025 Vibe Coding. All rights reserved.
            </p>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Github size={20} />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
