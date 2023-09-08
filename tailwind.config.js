/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1080px',
      xl: '1170px',
    },
    container: {
      padding: {
        DEFAULT: '2rem',
        lg: '35px',
      },
    },
    extend: {
       colors:{
        bgDarkBlue:'#0F0F32',
        brandColorPrimary:'#A677EF',
        primaryButton:'#6D43C0',
        brandColorSecond:'#00FFD9',
        textDescription:'#307D85',
       },
    },
  },
  plugins: [],
}
