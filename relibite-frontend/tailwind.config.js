module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepgreen: "#053B2C",
        cream: "#F6F2E9",
        orange: "#E6843B",
        accentgreen: "#7BBF74",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      borderRadius: {
        xl: "1.25rem",
        '2xl': "1.5rem",
      },
    },
  },
  plugins: [],
}; 