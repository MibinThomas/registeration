import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f5f0e1',
        retroRed: '#d64541',
        retroYellow: '#f7c948',
        gold: '#f0b429'
      },
      fontFamily: {
        retro: ['"Courier New"', 'monospace']
      }
    }
  },
  plugins: []
}
export default config
