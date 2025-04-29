import { Sparkles, Github, Code } from "lucide-react";
import "./index.css";
import { ThemeToggle } from "./features/theme";
import { Button, ThemeDemo } from "./components";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles size={24} className="neon-cyan" />
              <h1 className="text-xl font-bold neon-pink">
                React Vibe Starter
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <section className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                React Vite Starter Template
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Welcome to the React Vite Starter template! This is a minimal,
                clean starting point for your React projects.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This template provides a solid foundation with modern tooling
                and best practices to help you build robust web applications
                quickly and efficiently.
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
                  <li>Dark mode support</li>
                  <li>ESLint and Prettier configuration</li>
                </ul>
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <Button
                  variant="primary"
                  size="md"
                  className="flex items-center gap-2"
                >
                  <Code size={18} />
                  <span>Start Building</span>
                </Button>
                <Button variant="outline">
                  <span>Documentation</span>
                </Button>
              </div>

              <ThemeDemo />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-gray-500">
              React Vite Starter Template
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
