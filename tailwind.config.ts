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
        primary: '#018C79',
        secondary: '#E9E9E9',
        blue: '#003A71', 
        yellow: '#D7DE27',
        red:'#FF0', 
        brown: '#7E3908', 
        green: '#EAFBF3',
      },
    },
    screens: {
      sm: { max: "1060px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      md: { min: "1061px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
      "2xl": "1440px",
    },

  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus'],
      textColor: ['hover', 'focus'],
    },
  },
  plugins: [],
}
export default config
