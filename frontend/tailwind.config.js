const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'bost-blue': '#1E3346',
        'bost-green': '#77B89D',
        'bost-black': '#0C0C0C',
        'bost-grey': '#F5F6F9'
      }
    }
  },
  plugins: []
}
