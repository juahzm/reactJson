/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // JSX if using React
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


