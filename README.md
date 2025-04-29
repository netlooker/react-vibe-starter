# TaskFocus

A daily task management application with an integrated Pomodoro timer to help you stay focused and productive. Built with React 19, TypeScript, and Tailwind CSS 4.

## Features

- ✅ **Task Management** — Create, edit, and track your daily tasks
- ⏱️ **Pomodoro Timer** — Stay focused with customizable work and break sessions
- 🔄 **React 19** — Latest React with hooks and improved performance
- 🔒 **TypeScript** — Type safety with strict mode enabled
- 🎨 **Tailwind CSS 4** — Utility-first CSS framework with dark mode support
- 🌓 **Dark Mode** — Seamless dark/light mode with system preference detection
- 💾 **Local Storage** — Your tasks and settings are saved between sessions

## Task Management Features

- Create tasks with title, description, and priority levels
- Mark tasks as complete/incomplete
- Filter tasks by status (all, active, completed)
- Sort tasks by priority or creation date
- Edit and delete tasks

## Pomodoro Timer Features

- Customizable work sessions (default: 25 minutes)
- Short breaks (default: 5 minutes) and long breaks (default: 15 minutes)
- Session counter to track completed work sessions
- Sound notifications when sessions end
- Configurable settings for timer durations and behavior

## Tech Stack

- **React 19**: Latest functional components and hooks patterns
- **TypeScript**: Strong type safety with strict mode
- **Tailwind CSS 4**: Utility-first styling
- **Vite**: Lightning-fast development experience
- **Lucide React**: Crisp, consistent SVG icons

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm 9.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/taskfocus.git

# Navigate to project directory
cd taskfocus

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the application in action.

## Project Structure

The project follows a clean, feature-based organization pattern:

```
taskfocus/
├── src/
│   ├── components/     # Shared UI components
│   │   ├── tasks/      # Task-related components
│   │   ├── pomodoro/   # Pomodoro timer components
│   │   └── ui/         # Basic UI components
│   ├── features/       # Feature-specific modules
│   │   ├── tasks/      # Task management logic
│   │   ├── pomodoro/   # Pomodoro timer logic
│   │   └── theme/      # Dark/light theming
│   ├── App.tsx         # Main application component
│   ├── index.css       # Global styles
│   └── main.tsx        # Application entry point
└── [config files]      # Vite, TypeScript and Tailwind configs
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Check code quality
- `npm run format`: Format code with Prettier
- `npm run validate`: Run all checks

## Licence

MIT
