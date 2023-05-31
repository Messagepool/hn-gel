# hn-bootstrap-lib  
CSS/JS library based on HN Global Experience Language.
Currently available for tailwindcss and bootstrap.

## Getting Started

**1. Install webpack and sass**
~~~  
  $ npm install -D webpack webpack-cli css-loader mini-css-extract-plugin sass sass-loader
~~~  

**2. Setup webpack config** \
Refer to https://webpack.js.org/configuration/ for setting webpack configuration \
Then, add this minimal sass configuration
~~~javascript
// webpack.config.js 
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
...
module.exports = {
  ...
  module: {
   rules: 
    [
      {
        test: /\.s(a|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  }
  ...
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}
~~~

## Local Setup  
If you want to set this up locally without the need to publish into npm registry,
you may use npm-link instead https://docs.npmjs.com/cli/v8/commands/npm-link . 
Link the bootstrap and tailwindcss packages . 
~~~
$ git clone git@github.com:Messagepool/hn-bootstrap-lib.git
$ cd hn-bootstrap-lib
$ npm install 
$ npm link --workspace=@hn-gel-system/tailwindcss
$ npm link --workspace=@hn-gel-system/bootstrap
~~~

With this, you can install it manually on your app project
~~~ 
$ cd /path/to/app-project
$ npm link @hn-gel-system/tailwindcss
~~~

## Setting up hn-bootstrap-lib tailwindcss
Install the hn-tailwind package. Until it is not yet published, we should install it via npm-link
~~~
$ npm link @hn-gel-system/tailwindcss
~~~  

On your .scss file, import the distribution css file
~~~
@import '@hn-gel-system/tailwindcss/dist/hn-tailwind.css';
~~~

## Setting up hn-bootstrap-lib bootsrap
Install the hn-bootraps package. Until it is not yet published, we should install it via npm-link
~~~
$ npm link @hn-gel-system/bootstrap
~~~  

On your .scss file, import the distribution css file
~~~
@import '@hn-gel-system/bootstrap/dist/hn-bootstrap.css';
~~~
