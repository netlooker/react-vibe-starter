import { CheckCircle, Github, Clock } from "lucide-react";
import "./index.css";
import { ThemeToggle } from "./features/theme";
import { TaskList, PomodoroTimer } from "./components";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <CheckCircle size={24} className="text-indigo-500" />
              <h1 className="text-xl font-bold">
                TaskFocus
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pomodoro Timer Section */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                  <Clock size={20} className="text-indigo-500" />
                  Pomodoro Timer
                </h2>
                <PomodoroTimer />
              </div>
            </div>

            {/* Tasks Section */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                <CheckCircle size={20} className="text-indigo-500" />
                Task Management
              </h2>
              <TaskList />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-gray-500">
              TaskFocus - Daily Task Management with Pomodoro Timer
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
