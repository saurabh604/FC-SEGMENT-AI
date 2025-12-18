/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5ff',
          100: '#dbe9ff',
          200: '#bcd5ff',
          300: '#93b9ff',
          400: '#6696ff',
          500: '#3f6dff',
          600: '#294df2',
          700: '#203dd0',
          800: '#1d33a6',
          900: '#1d2e83',
          950: '#121b4e',
        },
      },
      boxShadow: {
        lovable: '0 10px 30px -12px rgba(63, 109, 255, 0.45), 0 6px 16px -8px rgba(0,0,0,0.2)'
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      }
    },
  },
  plugins: [],
}

