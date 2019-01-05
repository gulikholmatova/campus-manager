'use strict';

const { resolve } = require('path');
const isDev = process.env.NODE_ENV === 'development';
module.exports = {
  entry: ['babel-polyfill', './app/main'],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        include: resolve(__dirname, './app'),
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
