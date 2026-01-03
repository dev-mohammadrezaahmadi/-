/** @type {import('tailwindcss').Config} */
module.exports = {
  // In Tailwind v4, most configuration is done via CSS @theme
  // This file is kept for compatibility and can specify content paths
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // Dark mode configuration - 'class' strategy means dark mode is toggled via class on html element
  darkMode: 'class',
  // Theme configuration is now done in CSS using @theme directive
  // See styles/globals.css for theme customization
}
