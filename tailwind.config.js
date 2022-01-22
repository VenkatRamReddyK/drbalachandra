module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
  theme: {
    extend: {
      backgroundImage:theme=>({
        'hero-section':"url('/hero-pattern.png')"
      }),
      colors: {
        'themeColor': '#1854ee',
        'primary': '#83d483',
        'secondary': "#6c6c6c",
      }
    },
  }
}