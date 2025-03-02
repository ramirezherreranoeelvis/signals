/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    boxShadow: {
      'panel': '0 0 20px 0 #00000020'
    },
    fontFamily: {
      lexend: ['lexend', 'sans-serif'],
    }
  },
  plugins: [],
}

