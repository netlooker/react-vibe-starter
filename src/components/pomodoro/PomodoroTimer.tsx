import React from "react";
import { usePomodoro } from "../../features/pomodoro";
import { Play, Pause, SkipForward, RefreshCw, Settings } from "lucide-react";
import { PomodoroSettings } from "./PomodoroSettings";

export const PomodoroTimer: React.FC = () => {
  const {
    isRunning,
    mode,
    timeRemaining,
    completedSessions,
    startTimer,
    pauseTimer,
    resetTimer,
    skipToNext,
  } = usePomodoro();

  const [showSettings, setShowSettings] = React.useState(false);

  // Format time as MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Get mode display name
  const getModeDisplayName = (): string => {
    switch (mode) {
      case "work":
        return "Focus";
      case "shortBreak":
        return "Short Break";
      case "longBreak":
        return "Long Break";
      default:
        return "Focus";
    }
  };

  // Get background color based on mode
  const getBackgroundColor = (): string => {
    switch (mode) {
      case "work":
        return "bg-indigo-600 dark:bg-indigo-700";
      case "shortBreak":
        return "bg-green-600 dark:bg-green-700";
      case "longBreak":
        return "bg-blue-600 dark:bg-blue-700";
      default:
        return "bg-indigo-600 dark:bg-indigo-700";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
      {/* Timer Header */}
      <div className={`${getBackgroundColor()} px-6 py-4 text-white`}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{getModeDisplayName()}</h2>
          <div className="text-sm">
            Session: {completedSessions}
          </div>
        </div>
      </div>

      {/* Timer Display */}
      <div className="p-8 flex flex-col items-center">
        <div className="text-6xl font-bold text-gray-900 dark:text-white mb-8">
          {formatTime(timeRemaining)}
        </div>

        {/* Timer Controls */}
        <div className="flex justify-center gap-4">
          {isRunning ? (
            <button
              onClick={pauseTimer}
              className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white p-3 rounded-full"
              aria-label="Pause"
            >
              <Pause size={24} />
            </button>
          ) : (
            <button
              onClick={startTimer}
              className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full"
              aria-label="Start"
            >
              <Play size={24} />
            </button>
          )}

          <button
            onClick={resetTimer}
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white p-3 rounded-full"
            aria-label="Reset"
          >
            <RefreshCw size={24} />
          </button>

          <button
            onClick={skipToNext}
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white p-3 rounded-full"
            aria-label="Skip"
          >
            <SkipForward size={24} />
          </button>

          <button
            onClick={() => setShowSettings(!showSettings)}
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white p-3 rounded-full"
            aria-label="Settings"
          >
            <Settings size={24} />
          </button>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="mt-6 w-full">
            <PomodoroSettings onClose={() => setShowSettings(false)} />
          </div>
        )}
      </div>
    </div>
  );
};