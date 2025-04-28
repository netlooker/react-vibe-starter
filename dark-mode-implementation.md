# Implementing Dark Mode with Tailwind CSS 4 and React Context

## Overview

This document provides a guide to implementing dark mode functionality in a React 19 application using Tailwind CSS 4 and React Context API, as specified in the Development Guidelines for the PWA Project Bootstrap.

## Configuration

### 1. Tailwind CSS Custom Variant

Tailwind CSS 4 now uses a custom variant system for dark mode. First, we need to configure it in our CSS:

```css
/* In src/index.css */
@import "tailwindcss";

/* Configure dark mode based on class strategy */
@custom-variant dark (&:where(.dark, .dark *));
```

### 2. Create Context for Dark Mode

Set up a React Context to manage the dark mode state across the application:

```tsx
// src/features/theme/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // On mount, check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial state based on saved preference or system preference
    setIsDarkMode(
      savedTheme === 'dark' || 
      (!savedTheme && prefersDark)
    );
    
    // Apply the dark class if necessary
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newValue = !prev;
      
      // Update HTML class
      if (newValue) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      
      return newValue;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using the theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```

### 3. Integrate with App Root

Wrap your application with the ThemeProvider:

```tsx
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './features/theme/ThemeContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
```

## Usage

### 1. Creating a Theme Toggle Component

```tsx
// src/features/theme/ThemeToggle.tsx
import React from 'react';
import { useTheme } from './ThemeContext';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700" />
      )}
    </button>
  );
};
```

### 2. Using Dark Mode Classes in Components

Apply Tailwind's dark mode variant to style components:

```tsx
// Example component with dark mode styling
const Card: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
      <h3 className="text-gray-900 dark:text-white text-base font-medium tracking-tight">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
        {description}
      </p>
    </div>
  );
};
```

### 3. Supporting System Preference Changes

To respond to system preference changes:

```tsx
// Add this to ThemeContext.tsx inside the ThemeProvider component
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Define the handler function
  const handleChange = (e: MediaQueryListEvent) => {
    // Only update if the user hasn't explicitly set a preference
    if (!localStorage.getItem('theme')) {
      setIsDarkMode(e.matches);
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };
  
  // Add the event listener
  mediaQuery.addEventListener('change', handleChange);
  
  // Clean up
  return () => {
    mediaQuery.removeEventListener('change', handleChange);
  };
}, []);
```

## Best Practices

1. **Consistent Naming**: Use the `dark:` prefix consistently for all dark mode variants.

2. **Color Consistency**: Define a clear color palette for both light and dark modes in your Tailwind configuration:

```typescript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Your custom colors here
      },
    },
  },
};
```

3. **Testing**: Test dark mode on various devices and browsers to ensure a consistent experience.

4. **User Preference**: Always respect the user's chosen preference and save it to localStorage.

5. **Accessibility**: Ensure sufficient color contrast in both light and dark modes for better readability.

## Troubleshooting

- **Flash of Unstyled Content**: Add script in `<head>` to set theme before page render:

```html
<script>
  // Check for saved theme or system preference
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
</script>
```

- **Inconsistent Styling**: Verify all components use the `dark:` prefix for dark mode styles.

- **Media Query Conflicts**: Ensure your code is not mixing media queries with the class-based approach.

## Conclusion

By following this implementation, you'll have a fully functional dark mode toggle that respects user preferences and provides a consistent experience across your application. This approach aligns with the PWA Project Bootstrap specifications and the Development Guidelines for maintaining a robust and maintainable codebase.
