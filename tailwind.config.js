/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#17bf8f', // Add your custom black color
        textColor: ['hover'],
        mt: ['margin-top'],
      },
    },
  },
  plugins: [],
}