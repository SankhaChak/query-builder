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
        "accent-dark-hover": "#3227b1",
        "secondary-button-background": "#6D7175",
        "secondary-button-background-on-hover": "#444649",
        "primary-card-background": "#282B30",
        "pill-inactive-background": "#33363B",
        "pill-inactive-background-on-hover": "#4C5058",
        "dropdown-background": "#404348",
        "dropdown-options-background-on-hover": "#383B3F",
      },
      colors: {
        accent: "#5C61F0",
        "accent-dark": "#4338CA",
        primary: "#FFFFFF",
        secondary: "#A5B4FC",
      },
      borderColor: {
        "primary-card-border": "#404348",
        "pill-inactive-border": "#404348",
        "pill-inactive-border-on-hover": "#4C5058",
      },
    },
  },
  plugins: [],
};
