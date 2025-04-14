/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // use colors only specified
        // white: colors.white,
        // gray: colors.gray,
        // blue: colors.blue,
        // black: colors.black,
        // red: colors.red,
        neutral: {
          100: '#FDFDFD',
          200: '#F5F5F6',
          300: '#D6D9DB',
          400: '#9DA2A6',
          500: '#7B8187',
          600: '#5D6166',
          700: '#3C4247',
          600: '#5D6166',
          800: '#252A30',
          900: '#1C1C1E',
          '900-stroke': '#2F353A',
        },
        primary: {
          50: '#F5F5FF',
          500: '#165BAA',
          600: '#0B1354',
        },
        secondary: {
          300: '#F9D1D1',
          400: '#FFA4B6',
          500: '#F765A3',
        },
        system: {
          success: '#6BC037',
          destructive: '#E62F2F',
          info: '#3BB1D7',
        },
      },
    },
  },
  plugins: [],
};
