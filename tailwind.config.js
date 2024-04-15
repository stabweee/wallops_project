/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Platypi'],
        body: ['Poppins'],
      },

      backgroundImage: {
        'parallax': 'url("../img/test_bg_img.jpg")',
      }
    },
  },
  plugins: [],
}

