module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        full: "0 0 30px -12px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        background: "#000000",
        footer: "#000000",
      },
    },
    maxWidth: {
      "160px": "160px",
    },
  },
  plugins: [],
};
