const glob = require('glob');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const rootDir = path.dirname(path.dirname(__dirname));
const configDir = path.join(rootDir, '.config');
const nodeDir = path.join(rootDir, 'node_modules');
const srcDir = path.join(rootDir, 'src');

const stylesDir = path.join(srcDir, 'tailwind');
const scriptDir = path.join(srcDir, 'tailwind');
const distDir = path.join(rootDir, 'dist');
const commonDir = path.join(srcDir, `common`);

module.exports = {
  entry: {
    'hn-scripts': [
      path.join(scriptDir, 'js/main.js'),
      path.join(stylesDir, 'scss/main.scss'),
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(distDir),
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'hn-styles.css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(commonDir, 'fonts/**/*.*'),
          to: '../dist/fonts/[name][ext]',
          force: true,
        },
        {
          from: path.join(commonDir, 'images/**/*'),
          to: '../dist/images/[name][ext]',
          force: true,
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(configDir, 'postcss.config.js'),
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
