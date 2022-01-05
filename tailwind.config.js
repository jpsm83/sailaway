module.exports = {
  mode: "jit", //just in time mode - latest version tailwind
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  media: false,
  theme: {
    extend: {},
  },
  plugins: [],
};
