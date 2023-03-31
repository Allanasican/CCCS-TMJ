/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        primary: "#51E9EF",
        secondary: "#39B0A8",
        light: "#F5F5F5",
        gray: "#5C5B5B",
        dark: "#1C1C1C",
        Pridark: "#2A4745",
      },

      fontSize: {
        huge: 'clamp(1rem, 3vw, 2rem)',
      },

      fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
       
      }

    },

    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
      //  '2xl': '1496px',
      },
    },
  },
  plugins: [],
}

