# React Vibe Starter

A modern React 19 starter template with Tailwind CSS 4, TypeScript, and Vite. This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Features

- ⚡ **Vite** — Lightning fast development experience
- 🔄 **React 19** — Latest React with hooks and improved performance
- 🔒 **TypeScript** — Type safety with strict mode enabled
- 🎨 **Tailwind CSS 4** — Utility-first CSS framework with dark mode support
- 🌓 **Dark Mode** — Seamless dark/light mode with system preference detection
- 🧩 **Component Structure** — Clean, feature-based organization
- 🧹 **ESLint + Prettier** — Code quality and consistent formatting
- 🔍 **Strict TypeScript** — Configured for maximum type safety

## Tech Stack

- **React 19**: Latest functional components and hooks patterns
- **TypeScript**: Strong type safety with strict mode
- **Tailwind CSS 4**: Utility-first styling with custom animations
- **Vite**: Lightning-fast development experience
- **Lucide React**: Crisp, consistent SVG icons

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm 9.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/netlooker/react-vibe-starter.git

# Navigate to project directory
cd react-vibe-starter

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the application in action.

## Project Structure

The project follows a clean, feature-based organization pattern:

```
react-vibe-starter/
├── src/
│   ├── assets/         # Component-used assets
│   ├── components/     # Shared UI components
│   ├── features/       # Feature-specific modules
│   │   └── theme/      # Dark/light theming
│   ├── App.tsx         # Main application component
│   ├── index.css       # Global styles
│   └── main.tsx        # Application entry point
└── [config files]      # Vite, TypeScript and Tailwind configs
```

## Design Philosophy

This starter template emphasizes:

- **Feature-Based Organization**: Grouping related components by domain rather than type
- **Type Safety**: Strict TypeScript configuration for robust code
- **Responsive Design**: Fully adaptive layout for all devices
- **Dark Mode**: Class-based theming with system preference detection
- **Performance**: Optimized for fast development and production builds
- **Accessibility**: Semantic HTML with proper ARIA attributes

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Check code quality
- `npm run format`: Format code with Prettier
- `npm run validate`: Run all checks

## Licence

MIT
