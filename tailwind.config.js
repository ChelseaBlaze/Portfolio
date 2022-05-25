module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'blob': "url('./assets/blob.svg')",
        'about': "url('./src/assets/about3.png')",
      },
      colors: {
        background: '#000000',
        'main1': '#BBF8E5',
        'main2': '#E0CAF2',

      },
      fill: ['hover'],
    },
  },
  plugins: [],
};
