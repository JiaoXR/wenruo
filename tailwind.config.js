/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00E5FF',
        'neon-purple': '#8A2BE2',
        'dark-bg': '#1a1a2e',
        'dark-card': '#2d2d44',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00E5FF, 0 0 10px #00E5FF' },
          '100%': { boxShadow: '0 0 20px #00E5FF, 0 0 30px #00E5FF, 0 0 40px #00E5FF' },
        },
      },
    },
  },
  plugins: [],
}
