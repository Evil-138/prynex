/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#0a0e27',
          secondary: '#141b2d',
          tertiary: '#1f2937',
          quaternary: '#2d3748',
          border: '#3f4a5f',
          surface: '#1a1f35',
        },
        neon: {
          teal: '#00ffc8',
          blue: '#00d4ff',
          cyan: '#0af5ff',
          green: '#39ff14',
          purple: '#b84fff',
          pink: '#ff006e',
        },
        accent: {
          primary: '#00ffc8',
          secondary: '#00d4ff',
          tertiary: '#b84fff',
          hover: '#0af5ff',
        },
        metal: {
          silver: '#e2e8f0',
          grey: '#94a3b8',
          dark: '#64748b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'grain': "url('/assets/grain.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neon-teal': '0 0 30px rgba(0, 255, 200, 0.6), 0 0 60px rgba(0, 255, 200, 0.3)',
        'neon-blue': '0 0 30px rgba(0, 212, 255, 0.6), 0 0 60px rgba(0, 212, 255, 0.3)',
        'neon-green': '0 0 30px rgba(57, 255, 20, 0.6), 0 0 60px rgba(57, 255, 20, 0.3)',
        'neon-purple': '0 0 30px rgba(184, 79, 255, 0.6), 0 0 60px rgba(184, 79, 255, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 255, 200, 0.15)',
        'glass-strong': '0 12px 48px 0 rgba(0, 255, 200, 0.2)',
        'inner-glow': 'inset 0 0 20px rgba(0, 255, 200, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'tilt': 'tilt 10s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 209, 193, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 209, 193, 0.8)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
      },
    },
  },
  plugins: [],
};
