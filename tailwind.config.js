/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ### Primary */
        'Light-red': "hsl(0, 100%, 67%)",
        'Orangey-yellow': "hsl(39, 100%, 56%)",
        'Green-teal': "hsl(166, 100%, 37%)",
        'Cobalt-blue': "hsl(234, 85%, 45%)",
        /* ## Gradients */
        'Light-slate-blue-background': "hsl(252, 100%, 67%)",
        'Light-royal-blue-background': "rgb(49, 44, 234)",
        'Violet-blue-circle': "rgb(76, 34, 202)",
        'Persian-blue-circle': "rgb(80, 61, 255)",
        /* ### Neutral */
        'White': "rgb(255,255,255)",
        'Pale-blue': "hsl(221, 100%, 96%)",
        'Light-lavender': "hsl(241, 100%, 89%)",
        'Dark-gray-blue': "hsl(224, 30%, 27%)"
      }
    },
  },
  plugins: [],
}