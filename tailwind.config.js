/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // black
        secondary: '#404040', // neutral
        accent: '#F97316', // orange
        background: '#F9FAFB', // light gray for background
        text: '#111827',
        error: '#ef4444' // error
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}