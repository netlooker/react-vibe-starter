import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./features/theme/ThemeContext";
import { TaskProvider } from "./features/tasks";
import { PomodoroProvider } from "./features/pomodoro";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <TaskProvider>
        <PomodoroProvider>
          <App />
        </PomodoroProvider>
      </TaskProvider>
    </ThemeProvider>
  </StrictMode>,
);
