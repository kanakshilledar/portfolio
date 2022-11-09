module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
        emphasis: ["Share Tech Mono", "sans-serif"],
      },
      colors: {
        black: "#252423",
        "black-dark": "#181817",
        gray: "#b7b5b3",
        red: "#3EE98D",
        white: "#f6f4f2",
      },
      animation: {
        wave: "wave 2.5s infinite",
      },
    },
  },
  plugins: [],
};
