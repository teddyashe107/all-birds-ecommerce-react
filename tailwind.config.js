/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#414F39',
        secondary: '#212A2F'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
