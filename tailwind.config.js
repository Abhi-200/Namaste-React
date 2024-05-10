/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          550: "#3d4152"
        }
      },
      fontFamily: {
        arial: ['ProximaNova', 'arial', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

