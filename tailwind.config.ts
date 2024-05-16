import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Space Grotesk',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config
