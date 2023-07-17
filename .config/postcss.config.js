const tailwindcss = require('tailwindcss');
const path = require('path');
const plugins = [
  tailwindcss(path.join(__dirname, 'tailwind.config.js')),
  require('postcss-preset-env')
];

if('production' === process.env.NODE_ENV){
  plugins.push({ cssnano: {} });
}

module.exports = {
  plugins
};
