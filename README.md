# hn-bootstrap-lib
CSS/JS library based on HN Global Experience Language.
Currently available for tailwindcss and bootstrap.

## Getting Started

**Install core library**
~~~
  $ npm install -D @hndigital/hn-gel @hndigital/common 
~~~


## Setting up  tailwindcss
Install the hn-tailwind sub package and its dependency.
~~~
$ npm install -D @tailwindcss/forms @hndigital/tailwindcss
~~~

Extend the hn-bootstrap tailwind config by adding its preset file. <br>
On your tailwind.config.js
~~~
module.exports = {
  ...
  presets: [require('@hndigital/hn-gel/.config/.tailwind/presets.js')],
};
~~~

You can now import the hn-bootstrap main scss on your .scss file:
~~~
@import '@hndigital/tailwindcss/src/scss/main.scss';
~~~

## Setting up hn-bootstrap

Install the hn-bootsrap package. 
~~~
$ npm install -D @hndigital/bootstrap
~~~

On your .scss file, import the distribution css file
~~~
@import '@hndigital/bootstrap/dist/hn-bootstrap.css';
~~~