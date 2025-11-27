/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ether: {
          dark: '#0F0F1E',       // Negro profundo
          primary: '#3D1A4F',    // Morado profundo violáceo (fondos)
          secondary: '#A855F7',  // Morado vibrante (accent)
          secondaryHover: '#C084FC',
          border: '#5A0D80',     // Morado oscuro (bordes)
          text: '#F5F5F5',       // Texto principal
          subtext: '#E8E8E8',    // Texto secundario
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(168, 85, 247, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(168, 85, 247, 0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
