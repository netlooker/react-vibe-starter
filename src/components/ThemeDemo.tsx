import React from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "../features/theme";

export const ThemeDemo: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="mt-8 rounded-lg p-4 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <h3 className="font-medium text-gray-900 dark:text-white mb-4">
        Current Theme: {isDarkMode ? "Dark" : "Light"}
      </h3>

      <div className="flex items-center gap-6 justify-center mb-4">
        <div className="flex flex-col items-center">
          <Sun
            size={24}
            className={`mb-2 ${!isDarkMode ? "text-yellow-500" : "text-gray-400"}`}
          />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Light
          </span>
        </div>

        <div className="h-0.5 w-12 bg-gray-200 dark:bg-gray-700"></div>

        <div className="flex flex-col items-center">
          <Monitor size={24} className="mb-2 text-blue-500" />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            System
          </span>
        </div>

        <div className="h-0.5 w-12 bg-gray-200 dark:bg-gray-700"></div>

        <div className="flex flex-col items-center">
          <Moon
            size={24}
            className={`mb-2 ${isDarkMode ? "text-indigo-400" : "text-gray-400"}`}
          />
          <span className="text-sm text-gray-600 dark:text-gray-400">Dark</span>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
        Toggle the theme using the button in the header
      </p>
    </div>
  );
};
