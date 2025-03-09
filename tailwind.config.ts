import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "c-darkNavyBlue": "#3d405b", // Koyu Lacivert
        "c-orange": "#e58b68", // Turuncu
        "c-lightGray": "#E0E0E0", // Açık Gri
        "c-darkGray": "#bdc3c7", // Koyu Gri
        "c-yellow": "#FFC857", // Logo Sarı
        "c-purple": "#4B3F72", // İçerik Mor
        "c-green": "#004343", // Yeşil
        "primary": "#464649", // Primary renk olarak kırmızıyı kullanıyoruz
        "primary-foreground": "#ffffff", // Primary üzerindeki yazı rengi
        "secondary": "#f5f5f5", // Secondary renk
        "muted-foreground": "#6c757d", // Soluk metin rengi
        "border": "#e2e8f0", // Kenarlık rengi
        "input": "#e2e8f0", // Input kenarlık rengi
        "card": "#ffffff", // Kart arka plan rengi
        'c-dark': '#09080b',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out'
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.link-underline': {
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '0%',
            height: '2px',
            backgroundColor: '#09080b',
            transition: 'width 0.3s ease-in-out'
          },
          '&:hover::after': {
            width: '100%'
          }
        }
      }
      addUtilities(newUtilities)
    })
  ],
};

export default config;
