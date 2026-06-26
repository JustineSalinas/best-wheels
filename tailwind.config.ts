import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#bf1a20',
          'red-dark': '#8f1217',
          'red-light': '#fde8e9',
          black: '#181818',
        },
        ink: {
          DEFAULT: '#1e1c1b',
          muted: '#6b6763',
        },
        surface: {
          DEFAULT: '#f8f8f7',
          2: '#f0efee',
        },
        border: '#e5e3e1',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #bf1a20 0%, #8f1217 45%, #181818 100%)',
        'dark-gradient': 'linear-gradient(135deg, #1e1c1b 0%, #2c2826 100%)',
      },
    },
  },
  plugins: [],
}

export default config
