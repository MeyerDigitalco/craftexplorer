import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Hybrid Anduril x Helsing palette
        ink: {
          950: '#06080B', // page background, near-black with cool undertone
          900: '#0B0E13', // primary surface
          850: '#10141B', // raised surface
          800: '#161B24', // card / panel
          700: '#1F2632', // border / divider on dark
          600: '#2A3340',
          500: '#3A4555',
        },
        haze: {
          400: '#8590A2', // muted body text
          300: '#A8B2C0',
          200: '#C8D0DB',
          100: '#E8ECF2', // primary text on dark
          50:  '#F4F6FA',
        },
        signal: {
          DEFAULT: '#C9A66B', // muted brass / British signal amber accent
          dim: '#8C7649',
          bright: '#E3C28F',
        },
        steel: {
          DEFAULT: '#7DA3C0',
          dim: '#4B6A82',
        },
        alert: '#E2543A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'micro': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.18em' }],
      },
      letterSpacing: {
        'widest-2': '0.25em',
      },
      maxWidth: {
        'container': '1320px',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse at top, rgba(125,163,192,0.10), transparent 60%)',
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scan': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100vh' },
        },
      },
    },
  },
  plugins: [],
}
export default config
