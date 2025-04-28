import { Sparkles, BrainCircuit, Code2, Bot, Github, Heart } from 'lucide-react'
import './index.css'
import { ThemeToggle } from './features/theme'
import { Card } from './features/ui/Card'

function App() {

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-container">
            <div className="logo-container">
              <Sparkles size={24} className="neon-cyan" />
              <h1 className="neon-pink">Vibe Coding</h1>
            </div>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="hero">
          <div className="container">
            <h1>
              <span className="neon-pink">Vibe</span>{' '}
              <span className="neon-cyan">Coding</span> with AI
            </h1>

            <p>
              Build beautiful, modern web applications faster than ever with AI-powered coding.
              Elevate your development workflow using AI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
              <Card 
                title="AI Assistance" 
                description="Get intelligent code suggestions and autocompletions to speed up your development." 
                icon={<BrainCircuit size={24} className="text-white" />} 
              />
              <Card 
                title="Modern Stack" 
                description="Built with React 19, TypeScript, and Tailwind CSS for a robust development experience." 
                icon={<Sparkles size={24} className="text-white" />} 
              />
              <Card 
                title="Clean Code" 
                description="Maintain high code quality with consistent formatting and best practices." 
                icon={<Code2 size={24} className="text-white" />} 
              />
              <Card 
                title="Smart Agents" 
                description="Leverage AI agents to handle repetitive tasks and improve your workflow." 
                icon={<Bot size={24} className="text-white" />} 
              />
            </div>

            <button className="neon-button">
              Get Started
            </button>

            {/* Dark Mode Demo Section */}
            <div className="mt-16 mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Dark Mode Support</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Toggle between light and dark modes using the switch in the header. 
                Our application automatically respects your system preference but allows manual override.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <p className="text-gray-800 dark:text-gray-200 text-sm font-mono">
                  // Example of Tailwind dark mode classes:<br />
                  &lt;div className="<span className="text-indigo-600 dark:text-indigo-400">bg-white dark:bg-gray-800</span> <span className="text-purple-600 dark:text-purple-400">text-gray-900 dark:text-white</span>"&gt;<br />
                  &nbsp;&nbsp;Content adapts to your theme preference<br />
                  &lt;/div&gt;
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="flex items-center gap-2">
              <Heart size={16} className="neon-pink" />
              <span>Made with AI-assisted development</span>
            </div>

            <p>© 2025 Vibe Coding. All rights reserved.</p>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={20} />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
