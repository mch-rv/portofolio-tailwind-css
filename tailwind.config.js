/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
      padding:"16px",
    },
    extend: {
      colors:{
        primary:"#f97316",
        secondary:"#475569",
        dark:"#0f172a"
      },
      fontFamily:{
        Inter:['Inter'],
      },
      screen:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}
