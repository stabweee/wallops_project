/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Poppins'],
        body: ['Poppins'],
      },
      
      backgroundImage: {
        parallax: 'url("public/img/test_bg_img.jpg")',
      }
    },
  },
  plugins: [],
}

