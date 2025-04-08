/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#737373',
        lime: '#13CC00',
        white: '#fff',
        lime_green: '#388E3C',
        gray_blue: '#292930',
        light_periwinkle: '#ECF2F6',
        medium_sea_green: '#27B674',
        blue: '#4947E5',
        yellow: '#FFD247',
      },
      fontFamily: {
        dm_sans: 'DM Sans, sans-serif',
      },
      fontSize: {
        h1: [
          '142px',
          {
            lineHeight: '0.873',
            letterSpacing: '-0.025em',
            fontWeight: 'bold',
          },
        ],
      },
      backgroundImage: {
        line: "url('./assets/img/Line_background.png')",
        rectangle: "url('./assets/img/rectangle.png')",
      },
      height: {
        minHeight: {
          'screen-minus-header': 'calc(100vh - 80px)',
        },
      },
    },
  },
  plugins: [],
};
