/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          sansita: ['Sansita Swashed', 'sans-serif']
        }
      }
    },
  },
  plugins: [],
}

