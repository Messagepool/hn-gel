const glob = require('glob');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HnAssetExtractorPlugin = require('./plugins/hn-asset-extractor.plugin');

const rootDir = path.dirname(path.dirname(__dirname));
const packagesDir = path.join(rootDir, 'packages');
const tailwindcssDir = path.join(packagesDir, 'tailwindcss');
const bootstrapDir = path.join(packagesDir, 'bootstrap');
const commonDir = path.join(packagesDir, 'common');

const configDir = path.join(rootDir, '.config');
const distDir = path.join(rootDir, 'dist');

const packageReference = {
  'hn-tailwind': 'tailwindcss',
  'hn-bootstrap': 'bootstrap'
};

module.exports = {
  target: 'node',
  entry: {
    'hn-tailwind': {
      import: [
        path.join(tailwindcssDir, 'src/js/main.js'),
        path.join(tailwindcssDir, 'src/scss/main.scss')
      ],
      filename: '../packages/tailwindcss/dist/hn-tailwind.js'
    },
    'hn-bootstrap': {
      import: [
        path.join(bootstrapDir, 'src/js/main.js'),
        path.join(bootstrapDir, 'src/scss/main.scss')
      ],
      filename: '../packages/bootstrap/dist/hn-bootstrap.js'
    }
  },
  output: {
    path: path.resolve(distDir),
    clean: true,
    globalObject: 'this',
    library: {
      name: 'hn-gel-system',
      type: 'umd',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: (pathData) => {
        const { runtime } = pathData.chunk;
        const package = packageReference[runtime];
        return `../packages/${package}/dist/[name].css`
      }
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
    new HnAssetExtractorPlugin({
      paths: [
        '../packages/tailwindcss/dist/',
        '../packages/bootstrap/dist/'
      ]
    })
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
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.scss'],
    alias: {}
  }
};