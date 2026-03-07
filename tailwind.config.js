/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        charcoal: "#0F1115",
        surface: "#171B22",
        "electric-blue": "#2E90FA",
        "vibrant-teal": "#15E1D0",
        "deep-navy": "#0A0C10",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
