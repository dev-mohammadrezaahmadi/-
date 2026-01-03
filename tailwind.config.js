/** @type {import('tailwindcss').Config} */
module.exports = {
  // In Tailwind v4, most configuration is done via CSS @theme
  // This file is kept for compatibility and can specify content paths
  // Content scanning is mostly automatic in v4, but you can specify paths here if needed
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // Theme configuration is now done in CSS using @theme directive
  // See styles/globals.css for theme customization
}
