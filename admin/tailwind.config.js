/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    backgroundImage: {
      farming: "url('/src/assets/farm-bg.jpg')",
    },
  },
},

theme: {
  extend: {
    colors: {
      farmGreen: '#14532d',
      soilBrown: '#78350f',
    },
  },
}
}

