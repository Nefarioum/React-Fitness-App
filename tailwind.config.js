module.exports = {
  content: [
    './components/*.{ts,tsx}',
    './views/*.{ts,tsx}',
    './App.tsx'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
