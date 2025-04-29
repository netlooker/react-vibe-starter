import React, { createContext, useContext, useEffect, useState, useRef } from "react";

type TimerMode = "work" | "shortBreak" | "longBreak";

type PomodoroSettings = {
  workDuration: number; // in minutes
  shortBreakDuration: number; // in minutes
  longBreakDuration: number; // in minutes
  sessionsUntilLongBreak: number;
  autoStartBreaks: boolean;
  autoStartWork: boolean;
  soundEnabled: boolean;
};

type PomodoroContextType = {
  isRunning: boolean;
  mode: TimerMode;
  timeRemaining: number; // in seconds
  completedSessions: number;
  settings: PomodoroSettings;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  skipToNext: () => void;
  updateSettings: (newSettings: Partial<PomodoroSettings>) => void;
};

const defaultSettings: PomodoroSettings = {
  workDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  sessionsUntilLongBreak: 4,
  autoStartBreaks: true,
  autoStartWork: true,
  soundEnabled: true,
};

const PomodoroContext = createContext<PomodoroContextType | undefined>(undefined);

export const PomodoroProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Load settings from localStorage or use defaults
  const [settings, setSettings] = useState<PomodoroSettings>(() => {
    const savedSettings = localStorage.getItem("pomodoroSettings");
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
  });

  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<TimerMode>("work");
  const [timeRemaining, setTimeRemaining] = useState(settings.workDuration * 60);
  const [completedSessions, setCompletedSessions] = useState(0);
  
  const timerRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio("/notification.mp3");
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Save settings to localStorage when they change
  useEffect(() => {
    localStorage.setItem("pomodoroSettings", JSON.stringify(settings));
  }, [settings]);

  // Timer logic
  useEffect(() => {
    if (isRunning) {
      timerRef.current = window.setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            // Timer completed
            clearInterval(timerRef.current!);
            handleTimerComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  // Handle timer completion
  const handleTimerComplete = () => {
    // Play sound if enabled
    if (settings.soundEnabled && audioRef.current) {
      audioRef.current.play().catch(error => console.error("Error playing sound:", error));
    }

    // Update mode and sessions
    if (mode === "work") {
      const newCompletedSessions = completedSessions + 1;
      setCompletedSessions(newCompletedSessions);
      
      // Determine if it's time for a long break
      const nextMode = newCompletedSessions % settings.sessionsUntilLongBreak === 0 
        ? "longBreak" 
        : "shortBreak";
      
      setMode(nextMode);
      setTimeRemaining(
        nextMode === "longBreak" 
          ? settings.longBreakDuration * 60 
          : settings.shortBreakDuration * 60
      );
      
      // Auto-start break if enabled
      setIsRunning(settings.autoStartBreaks);
    } else {
      // After a break, go back to work mode
      setMode("work");
      setTimeRemaining(settings.workDuration * 60);
      
      // Auto-start work if enabled
      setIsRunning(settings.autoStartWork);
    }
  };

  // Start the timer
  const startTimer = () => {
    setIsRunning(true);
  };

  // Pause the timer
  const pauseTimer = () => {
    setIsRunning(false);
  };

  // Reset the current timer
  const resetTimer = () => {
    setIsRunning(false);
    
    // Reset time based on current mode
    if (mode === "work") {
      setTimeRemaining(settings.workDuration * 60);
    } else if (mode === "shortBreak") {
      setTimeRemaining(settings.shortBreakDuration * 60);
    } else {
      setTimeRemaining(settings.longBreakDuration * 60);
    }
  };

  // Skip to the next timer
  const skipToNext = () => {
    setIsRunning(false);
    
    if (mode === "work") {
      // Skip to break
      const newCompletedSessions = completedSessions + 1;
      setCompletedSessions(newCompletedSessions);
      
      const nextMode = newCompletedSessions % settings.sessionsUntilLongBreak === 0 
        ? "longBreak" 
        : "shortBreak";
      
      setMode(nextMode);
      setTimeRemaining(
        nextMode === "longBreak" 
          ? settings.longBreakDuration * 60 
          : settings.shortBreakDuration * 60
      );
    } else {
      // Skip to work
      setMode("work");
      setTimeRemaining(settings.workDuration * 60);
    }
  };

  // Update settings
  const updateSettings = (newSettings: Partial<PomodoroSettings>) => {
    setSettings((prev) => {
      const updatedSettings = { ...prev, ...newSettings };
      
      // If timer is not running, update the current time remaining based on mode
      if (!isRunning) {
        if (mode === "work") {
          setTimeRemaining(updatedSettings.workDuration * 60);
        } else if (mode === "shortBreak") {
          setTimeRemaining(updatedSettings.shortBreakDuration * 60);
        } else if (mode === "longBreak") {
          setTimeRemaining(updatedSettings.longBreakDuration * 60);
        }
      }
      
      return updatedSettings;
    });
  };

  return (
    <PomodoroContext.Provider
      value={{
        isRunning,
        mode,
        timeRemaining,
        completedSessions,
        settings,
        startTimer,
        pauseTimer,
        resetTimer,
        skipToNext,
        updateSettings,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};

// Custom hook for using the pomodoro context
export const usePomodoro = (): PomodoroContextType => {
  const context = useContext(PomodoroContext);
  if (context === undefined) {
    throw new Error("usePomodoro must be used within a PomodoroProvider");
  }
  return context;
};