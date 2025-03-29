/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
    },
    borderColor: {
      'btn-primary': 'rgb(67, 97, 238, 0.75)',
    },
    extend: {},
  },
  plugins: [],
};
