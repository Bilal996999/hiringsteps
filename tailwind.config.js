/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        DMSans: ['DM-Sans', 'sans-serif'],
        Anton: ['Anton', 'sans-serif']
      },
      colors:{
        themeColor: ['#22376D'],
        themeColor2: ['#46D0EE']
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 60s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

