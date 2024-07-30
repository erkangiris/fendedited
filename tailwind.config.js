/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: { max: '1023px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px', max: '1439px' },
      xl: { min: '1440px' },
    },
    extend: {
      width: {
        72: '72px',
        610: '610px',
        360: '360px',
        400: '400px',
        460: '460px',
        1440: '1440px',
      },
      height: {
        54: '54px',
        124: '124px',
        310: '310px',
        475: '475px',
        560: '560px',
      },
      colors: {
        primary_blue: '#0381FF',
      },
      fontSize: {
        32: '32px',
      },
      borderColor: {
        button_border: 'solid rgba(0, 0, 0, 0.16)',
      },
      borderWidth: {
        '05': '0.5px',
      },
      borderOpacity: {
        '08': '0.08',
      },
      minWidth: {
        920: '920px',
        1260: '1260px',
      },
    },
  },
  plugins: [],
};
