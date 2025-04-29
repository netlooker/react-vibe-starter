import React, { useState } from "react";
import { usePomodoro } from "../../features/pomodoro";
import { X } from "lucide-react";

type PomodoroSettingsProps = {
  onClose: () => void;
};

export const PomodoroSettings: React.FC<PomodoroSettingsProps> = ({ onClose }) => {
  const { settings, updateSettings } = usePomodoro();
  
  const [workDuration, setWorkDuration] = useState(settings.workDuration);
  const [shortBreakDuration, setShortBreakDuration] = useState(settings.shortBreakDuration);
  const [longBreakDuration, setLongBreakDuration] = useState(settings.longBreakDuration);
  const [sessionsUntilLongBreak, setSessionsUntilLongBreak] = useState(settings.sessionsUntilLongBreak);
  const [autoStartBreaks, setAutoStartBreaks] = useState(settings.autoStartBreaks);
  const [autoStartWork, setAutoStartWork] = useState(settings.autoStartWork);
  const [soundEnabled, setSoundEnabled] = useState(settings.soundEnabled);

  const handleSave = () => {
    updateSettings({
      workDuration,
      shortBreakDuration,
      longBreakDuration,
      sessionsUntilLongBreak,
      autoStartBreaks,
      autoStartWork,
      soundEnabled,
    });
    onClose();
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Timer Settings</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          aria-label="Close settings"
        >
          <X size={20} />
        </button>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="workDuration" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Work Duration (minutes)
            </label>
            <input
              type="number"
              id="workDuration"
              min="1"
              max="60"
              value={workDuration}
              onChange={(e) => setWorkDuration(Math.max(1, parseInt(e.target.value) || 1))}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 w-full"
            />
          </div>

          <div>
            <label htmlFor="shortBreakDuration" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Short Break Duration (minutes)
            </label>
            <input
              type="number"
              id="shortBreakDuration"
              min="1"
              max="30"
              value={shortBreakDuration}
              onChange={(e) => setShortBreakDuration(Math.max(1, parseInt(e.target.value) || 1))}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 w-full"
            />
          </div>

          <div>
            <label htmlFor="longBreakDuration" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Long Break Duration (minutes)
            </label>
            <input
              type="number"
              id="longBreakDuration"
              min="1"
              max="60"
              value={longBreakDuration}
              onChange={(e) => setLongBreakDuration(Math.max(1, parseInt(e.target.value) || 1))}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 w-full"
            />
          </div>

          <div>
            <label htmlFor="sessionsUntilLongBreak" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Sessions Until Long Break
            </label>
            <input
              type="number"
              id="sessionsUntilLongBreak"
              min="1"
              max="10"
              value={sessionsUntilLongBreak}
              onChange={(e) => setSessionsUntilLongBreak(Math.max(1, parseInt(e.target.value) || 1))}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 w-full"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="autoStartBreaks"
              checked={autoStartBreaks}
              onChange={(e) => setAutoStartBreaks(e.target.checked)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="autoStartBreaks" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              Auto-start breaks
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="autoStartWork"
              checked={autoStartWork}
              onChange={(e) => setAutoStartWork(e.target.checked)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="autoStartWork" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              Auto-start work sessions
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="soundEnabled"
              checked={soundEnabled}
              onChange={(e) => setSoundEnabled(e.target.checked)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="soundEnabled" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              Enable sound notifications
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};