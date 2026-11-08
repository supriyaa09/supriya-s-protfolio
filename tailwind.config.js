/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F4F0E8',
          light: '#FAF7F2',
          warm: '#FCFAF6',
          dark: '#EBE5D8',
        },
        charcoal: {
          DEFAULT: '#292B25',
          light: '#3C3E37',
          dark: '#1F211C',
        },
        sage: {
          DEFAULT: '#788568',
          light: '#95A384',
          subtle: '#E8ECE4',
          dark: '#58634C',
        },
        terracotta: {
          DEFAULT: '#C8795C',
          light: '#DC957C',
          subtle: '#F7ECE7',
          dark: '#A65A40',
        },
        beige: {
          DEFAULT: '#E5DED1',
          light: '#EFEAE0',
          dark: '#D8CEBE',
        },
        editorial: {
          text: '#292B25',
          secondary: '#77756D',
          muted: '#96948B',
          line: '#D8D1C4',
        }
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        hand: ['"Caveat"', '"Architects Daughter"', 'cursive'],
      },
      boxShadow: {
        'editorial': '4px 4px 0px 0px #292B25',
        'editorial-sm': '2px 2px 0px 0px #292B25',
        'editorial-lg': '6px 6px 0px 0px #292B25',
        'editorial-terracotta': '4px 4px 0px 0px #C8795C',
        'editorial-sage': '4px 4px 0px 0px #788568',
      },
      borderRadius: {
        'editorial': '14px',
        'badge': '9999px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 5s ease-in-out infinite',
        wiggle: 'wiggle 3s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

