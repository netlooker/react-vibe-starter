# Theme Feature - Dark Mode Implementation

This directory contains the implementation of the dark mode feature for the React Vibe Starter template, following the Development Guidelines and technical specifications.

## Features

- **System Preference Detection:** Automatically detects and applies the user's system color scheme preference
- **Manual Toggle:** Allows users to override the system preference with a toggle button
- **Persistent Preference:** Saves user preference in localStorage
- **No Flash Of Incorrect Theme (FOIT):** Uses script in HTML head to set theme before page render

## Implementation Details

### Context API for State Management

The implementation uses React's Context API for managing theme state across the application. This keeps the theme state and toggling logic centralized and easily accessible from any component.

### CSS Custom Variant Configuration

Tailwind CSS 4's custom variant system is used to configure the dark mode variant:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

This applies dark mode styles to any element inside a parent with the `.dark` class.

### Component Breakdown

1. **ThemeContext.tsx**
   - Creates a React context and provider for theme state
   - Manages the theme state and provides a toggle function
   - Syncs the theme with both React state and DOM classes
   - Listens for system preference changes

2. **ThemeToggle.tsx**
   - Renders a toggle button that switches between light and dark mode
   - Uses the `lucide-react` library for Sun/Moon icons
   - Styled with Tailwind classes including dark mode variants

## Usage

To use dark mode in your components:

1. Add the `dark:` prefix to any Tailwind utility class that should change in dark mode:

```jsx
<div className="bg-white dark:bg-gray-800 text-black dark:text-white">
  Dark mode compatible content
</div>
```

2. Access the current theme state in any component:

```jsx
import { useTheme } from './features/theme/ThemeContext';

function MyComponent() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  return (
    // Component that can react to theme state
  );
}
```

## Extending

To extend this implementation:

1. **Custom Theme Properties:** Add CSS variables in the light/dark mode selectors to create a robust theming system
2. **Additional Themes:** Expand beyond binary light/dark to support multiple themes
3. **Animation:** Add transition effects when switching between themes

## Compliance

This implementation follows the Development Guidelines by:

- Using React Context API for global state management
- Following the feature-based organization approach
- Leveraging TypeScript for type safety
- Applying Tailwind's utility-first approach with dark mode variants
- Maintaining separation of concerns between UI and logic
