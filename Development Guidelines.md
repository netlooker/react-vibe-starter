# Development Guidelines

## Introduction

These guidelines are designed specifically for the **React Vibe Starter** project. They provide actionable standards and best practices for building upon its foundation, ensuring consistency, maintainability, and effective utilization of the chosen technology stack (**Vite, React 19, TypeScript, Tailwind CSS 4, Lucide React**). Adhering to these guidelines will help maintain the architectural goals of rapid development, type safety, and a clean, modern user experience, reflecting the "Vibe Coding" philosophy mentioned in the project's AI assistant instructions.

> **AI Generated Content & User Responsibility:** Please be aware that parts of this project, including documentation and potentially initial code structures, may have been developed with the assistance of Artificial Intelligence (AI) tools. Examples and information are provided for illustrative purposes only. Use of this content is undertaken entirely at your own discretion and risk.

## Coding Standards and Best Practices

### General Principles

*   **SOLID & SRP:** Apply SOLID principles where applicable, particularly the Single Responsibility Principle (SRP). Keep functions, components, and modules focused on a single, well-defined task.
*   **Naming Conventions:** Use clear, descriptive, and consistent names for variables, functions, components, types, and files. Follow standard TypeScript/React naming conventions (e.g., `PascalCase` for components and types, `camelCase` for variables and functions).
*   **Readability:** Prioritize self-documenting code. Add comments primarily for complex logic, business rules, or clarifying the "why" behind a specific implementation, not just the "what".
*   **Leverage Tooling:** Rely on the pre-configured ESLint setup (`eslint.config.js`, run via `npm run lint`) to enforce code style and catch potential issues early. Ensure your IDE integrates with ESLint and Prettier (`npm run format`).
*   **Vibe Coding:** As outlined in the AI assistant instructions, interpret "vibes" (e.g., 'fun', 'professional', 'energetic') using the project's theme (`tailwind.config.js`, `ThemeContext`), animations, and established UI patterns to create specific user experiences.

### Project Structure

*   **Feature-Based Organization:** Continue organizing code by feature within the `src/features/` directory (e.g., `src/features/theme/`, `src/features/authentication/`). This promotes modularity and scalability. Use `index.ts` files within feature folders for clean exports.
*   **Shared Components:** Place globally reusable, presentation-focused UI components in `src/components/ui/` (e.g., `Button.tsx`). More complex shared components with some logic can reside directly in `src/components/`.
*   **Component Granularity:** Create small, focused, and reusable components. Avoid monolithic components that handle too many responsibilities. Leverage existing UI components like `Button` where appropriate.
*   **Logic Separation:** Extract complex business logic, state management logic, or side effects from UI components into custom hooks (`useFeatureLogic()`) or dedicated modules/services within feature folders.
*   **Respect Existing Structure:** Adhere to the established structure:
    *   `public/`: For static assets not processed by Vite (favicons, etc.).
    *   `src/`: Application source code.
    *   `src/assets/`: For assets imported and used directly by components (images, etc.).
    *   `src/components/`: Shared components (UI and potentially others).
    *   `src/components/ui/`: Core, reusable UI building blocks.
    *   `src/features/`: Self-contained feature modules (like `theme`).
    *   `src/main.tsx`: Application entry point, context providers setup.
    *   `src/App.tsx`: Main application layout and routing structure (if routing is added).
    *   `src/index.css`: Global styles, Tailwind directives (`@import`, `@custom-variant`), and base CSS variables/overrides.

### TypeScript Standards

*   **Strict Mode Adherence:** The project enforces strict type checking (`tsconfig.app.json`). Continue to leverage this for maximum type safety.
*   **Type Definitions:** Use `interface` or `type` for defining data structures, props, and state. Prefer `type` for general type aliases and function types. Use `interface` for object shapes, especially when defining public APIs or where declaration merging might be useful (though less common in modern React function components).
*   **Minimize `any`:** Avoid using the `any` type. If type information is unavailable or complex, use `unknown` first and perform type checking, or invest time in defining accurate types. Use `any` only as a last resort with clear justification.
*   **Generics:** Utilize generics (`<T>`) to create reusable, type-safe functions and components.
*   **Discriminated Unions:** Leverage discriminated unions for modeling state machines or variants within types (e.g., `type Status = { type: 'loading' } | { type: 'success', data: Data } | { type: 'error', error: Error };`).
*   **Library Types:** Utilize the type definitions provided by installed libraries (e.g., React, Lucide React) to ensure correct usage. Check `src/vite-env.d.ts` for Vite-specific environment types if needed.

### React Best Practices (React 19 Context)

*   **Functional Components & Hooks:** Exclusively use functional components with Hooks (`useState`, `useEffect`, `useContext`, etc.).
*   **Minimal State:** Keep component state localized and minimal. Lift state up only when necessary.
*   **State Management:**
    *   For simple, local state, use `useState`.
    *   For stable global state shared across components, React's Context API (`useContext`) is suitable. The project uses this pattern for theming (`src/features/theme/ThemeContext.tsx`).
    *   **Note:** This starter does *not* include a dedicated global state management library beyond React Context. If complex, frequently changing global state is required (e.g., managing large datasets, complex user sessions), evaluate and integrate a suitable library (e.g., Zustand, Jotai, Redux Toolkit) consistently across the relevant features. Discuss this choice with the team first.
*   **Custom Hooks:** Encapsulate reusable logic, side effects, and stateful behavior within custom hooks (e.g., `useDataFetching`, `useWindowSize`). Place feature-specific hooks within their respective feature folders.
*   **React 19:** Be mindful of React 19's capabilities. Explore using new features like Actions for form handling or `use` for integrating promises/context where appropriate, as patterns emerge and stabilize. Ensure consistency in adoption across the team.
*   **Iconography:** Utilize the provided `lucide-react` library for consistent, high-quality SVG icons. Choose icons semantically.

### Styling Conventions (Tailwind CSS 4)

*   **Utility-First:** Embrace the utility-first approach provided by Tailwind CSS 4. Compose styles primarily by applying utility classes directly in your JSX.
*   **Configuration:** Leverage the `tailwind.config.js` file for:
    *   Customizing theme values (colors like `neon`, `dark`, spacing, fonts).
    *   Extending functionality (e.g., adding custom animations like `float`, `spin-slow`).
    *   Adding plugins if necessary.
*   **CSS Variables:** Use Tailwind's CSS variable system where appropriate for theming or dynamic styles. Access theme values in CSS using `theme()` if needed (primarily in `src/index.css`).
*   **Responsiveness:** Use Tailwind's responsive modifiers (e.g., `md:`, `lg:`) to create adaptive layouts. Test layouts across common screen sizes.
*   **Dark Mode:** Implement dark mode using the configured `class` strategy (`@custom-variant dark (&:where(.dark, .dark *));` in `src/index.css`). Apply dark mode utilities (e.g., `dark:bg-gray-800`). The theme state is managed by `ThemeContext`.
*   **Component-Specific Styles:** For styles not easily achievable with utilities or highly component-specific rules, standard CSS files (`.css`) imported into components are acceptable (similar to the minimal `App.css`). However, prioritize utility classes. Avoid CSS-in-JS unless a clear need arises and is agreed upon by the team.
*   **Global Styles:** Use `src/index.css` for:
    *   Tailwind layer imports (`@import "tailwindcss";`).
    *   Dark mode variant configuration (`@custom-variant`).
    *   Base HTML element styles.
    *   Global CSS variable definitions.
    *   Minimal global overrides or utility classes (use sparingly).

### Testing Strategy

*   **Framework Setup:** Note that testing libraries (e.g., Vitest, React Testing Library) are *not* pre-installed in this starter. When adding tests, establish a consistent testing framework (Vitest recommended due to Vite integration) and configuration (`vitest.config.ts`).
*   **Unit Tests:** Write unit tests for utility functions, custom hooks, and complex logic modules. Aim for high coverage of critical business logic. Use mocking/stubbing for external dependencies or browser APIs.
*   **Integration Tests:** Test interactions between components, context providers/consumers (`ThemeContext`), and components interacting with hooks. Use tools like React Testing Library to test component behavior from a user's perspective (rendering, interactions).
*   **Snapshot Testing:** Use snapshot tests sparingly, primarily for stable UI components (like those in `src/components/ui`) where unintentional visual changes need to be caught. Avoid over-reliance, as they can become brittle. Review snapshot changes carefully.
*   **Prioritization:** Aim for good test coverage, but prioritize testing critical application paths, complex logic, core features, and shared UI components.

### Security Considerations

*   **Environment Variables:** Use Vite's environment variable handling (`.env` files, `import.meta.env`) for secrets and configuration. Prefix client-exposed variables with `VITE_` (e.g., `VITE_API_URL`). Never hardcode sensitive information (API keys, etc.) in the source code. Review `.gitignore` to ensure `.env` files are not committed.
*   **Input Validation:** Validate and sanitize all user inputs on the client-side for immediate feedback, and *always* re-validate on the server-side (if applicable).
*   **Error Handling:** Implement robust error handling for API calls (if added), component rendering, and potential hook issues. Avoid leaking sensitive error details to the user interface. Use Error Boundaries for component-level error catching if needed.
*   **Dependency Management:** Keep dependencies up-to-date (`npm update` or similar tools like `taze`). Regularly audit dependencies for vulnerabilities (`npm audit`) and address critical issues promptly.
*   **Cross-Site Scripting (XSS):** Be cautious when using `dangerouslySetInnerHTML`. Ensure any HTML injected is properly sanitized. Rely on React's default JSX escaping for rendering dynamic content.
*   **localStorage:** Be mindful that data stored in `localStorage` (like the theme preference in `ThemeContext`) is accessible via client-side script. Do not store sensitive information there.

### Performance Guidelines

*   **React Optimizations:** Use `React.memo`, `useMemo`, and `useCallback` strategically to prevent unnecessary re-renders, especially in complex components or lists. Profile using React DevTools *first* to identify actual bottlenecks before applying optimizations.
*   **List Virtualization:** For long lists of data, implement windowing or virtualization techniques (e.g., using libraries like `react-window` or `react-virtualized`) to maintain rendering performance.
*   **Code Splitting:** Leverage Vite's automatic code splitting based on dynamic `import()`. Use this for route-based splitting (if routing is added) or for loading large, non-critical features on demand to reduce the initial bundle size.
*   **Asset Optimization:** Ensure images are appropriately sized and compressed. Use modern formats (like WebP, AVIF). Vite's build process handles bundling and minification of JS/CSS.
*   **Loading States:** Implement clear loading indicators (skeletons, spinners) for asynchronous operations (data fetching, lazy loading components) using `React.lazy` and `<Suspense>` where applicable.
*   **Bundle Analysis:** Periodically analyze the production bundle size (`npm run build`). Consider adding tools like `rollup-plugin-visualizer` (via Vite config) to identify large modules or opportunities for optimization.

### Accessibility (a11y) Standards

*   **Semantic HTML:** Use appropriate HTML elements for their semantic meaning (e.g., `<nav>`, `<button>`, `<main>`, `<article>`) to provide inherent accessibility. Use headings (`h1`-`h6`) correctly to structure content.
*   **Keyboard Navigation:** Ensure all interactive elements (buttons, links, form controls) are focusable and usable via keyboard navigation in a logical order. Test tab order.
*   **ARIA Attributes:** Use ARIA (Accessible Rich Internet Applications) attributes correctly when semantic HTML is insufficient to convey roles, states, or properties, particularly for custom UI components or dynamic content updates.
*   **Color Contrast:** Maintain sufficient color contrast between text and background according to WCAG guidelines (AA level minimum). Test using browser developer tools or online checkers, especially considering dark mode variations.
*   **Forms:** Ensure all form inputs have associated labels (`<label htmlFor="...">`). Use fieldsets and legends for grouping related controls. Provide clear error messages associated with their respective inputs.
*   **Images:** Provide descriptive `alt` text for informative images. Use empty `alt=""` for decorative images.
*   **Screen Reader Testing:** Periodically test the application using screen readers (e.g., VoiceOver, NVDA, JAWS) to ensure a usable experience for visually impaired users.
*   **Tooling:** Utilize the existing ESLint configuration which likely includes accessibility rules (e.g., via recommended presets). Consider adding browser extensions (like Axe DevTools) for quick checks during development.

**Final Reminder:** Consistency is paramount. Adhering to these guidelines throughout the project lifecycle will ensure the codebase remains clean, maintainable, scalable, and effectively leverages the foundation provided by the React Vibe Starter. Communicate any necessary deviations or suggestions for improvement within the team.
