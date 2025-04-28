/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff1b84',
          cyan: '#00e9f4',
        },
        dark: {
          DEFAULT: '#121212',
          lighter: '#1e1e1e',
        },
      },
    },
  },
}
