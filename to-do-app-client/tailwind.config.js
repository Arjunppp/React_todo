/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '1/6': '12%', // For 20% height
        '5/6': '88%', // For 80% height
      },
    },
  },
  plugins: [],
};
