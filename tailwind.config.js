/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'retro-primary': '#FF1493',
        'retro-secondary': '#FF69B4',
        'retro-accent': '#FFB6C1',
        'retro-dark': '#4B0082',
        'retro-light': '#FFE4E1',
        'retro-green': '#32CD32',
        'retro-blue': '#00CED1',
        'retro-yellow': '#FFD700',
      },
      fontFamily: {
        'anime': ['Noto Sans JP', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s infinite',
        'marquee': 'marquee 10s linear infinite',
        'rainbow': 'rainbow 3s linear infinite',
        'pulse-retro': 'pulse-retro 2s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%, 100%': { opacity: 1 },
          '25%, 75%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        rainbow: {
          '0%': { color: '#FF0000' },
          '16.66%': { color: '#FFA500' },
          '33.33%': { color: '#FFFF00' },
          '50%': { color: '#00FF00' },
          '66.66%': { color: '#0000FF' },
          '83.33%': { color: '#4B0082' },
          '100%': { color: '#FF0000' },
        },
        'pulse-retro': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(2px)' },
        },
      },
    },
  },
  plugins: [],
}
