/** @type {import('tailwindcss').Config} */
// import { fontFamily, fontSize, colors } from './.tailwind/presets';
// console.log(fontFamily,fontSize, colors);

module.exports = {
  preset: [
    require('./.tailwind/presets.js')
  ],
  content: ['*.html'],
};
