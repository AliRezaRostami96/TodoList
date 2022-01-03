module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'on-primary': 'var(--onPrimary)',
        light: 'var(--light)',
        'on-light': 'var(--onLight)',
        dark: 'var(--dark)',
        'on-dark': 'var(--onDark)'
      }
    },
  },
  plugins: [],
}
