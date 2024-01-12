/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
    fontFamily: {
      abc: ['Pacifico', 'cursive'],
      ab :[ 'Abril Fatface', 'serif'],
      a: ['Permanent Marker', 'cursive'],
      d:['Rubik Glitch',' system-ui'],
      e:['Gloria Hallelujah', 'cursive'],
      f:['Architects Daughter', 'cursive'],
      game:['Pixelify Sans', 'sans-serif'],
      letter1:['Lemon', 'serif'],
      salsa:['Salsa', 'cursive'] 
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
