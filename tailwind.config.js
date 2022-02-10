module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        head: ["CocoSharpL", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#5B76FF",
        "primary-dark": "#455ACA",
      },
    },
  },
  plugins: [],
};
