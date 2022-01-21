module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
  theme:{
    extend:{
      colors:{
        'themeColor':'#1854ee',
      }
    }
  }
}