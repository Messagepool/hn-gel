const tailwindcss = require('tailwindcss');
const path = require('path');
console.log('postcss');
module.exports = {
  plugins: [
    tailwindcss(path.join(__dirname, 'tailwind.config.js')),
    require('postcss-preset-env'),
  ],
};
