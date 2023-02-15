/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "modal-background": "#1D2025",
        accent: "#5C61F0",
        "accent-dark": "#4338CA",
        "accent-dark-hover": "#3227b1",
        "secondary-button-background": "#6D7175",
        "secondary-button-background-on-hover": "#444649",
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#A5B4FC",
      },
    },
  },
  plugins: [],
};
