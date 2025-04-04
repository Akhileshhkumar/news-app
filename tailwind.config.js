module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}', // Add lib folder if needed
  ],
  safelist: [
    { pattern: /bg-(red|blue|green|yellow|gray)-500/ }, // Keep specific colors
    { pattern: /text-(white|black|gray)-700/ }, // Keep text colors
    { pattern: /p-\d+/ }, // Keep padding classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
