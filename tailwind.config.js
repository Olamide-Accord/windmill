/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        all: '#121317',
        main: '#1a1c23',
        primary: '#7e3af2',
        primaryLight: '#cabffd'
      },
      screens: {
        xxs: '360px',
        xs: '480px'
      }
    }
  },
  plugins: []
}
