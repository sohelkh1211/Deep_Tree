/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {},
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: '0px',
      sm: '640px',
      md: '768px',
      lg: '1024px'
    },
    variants: {
      display: ['responsive'], // ensure responsive variants are enabled
    },
  },
  plugins: [],
}