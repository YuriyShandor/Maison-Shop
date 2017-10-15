const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'js'),

  output: {
    path: path.resolve(__dirname, './'),
    publicPath: '',
    filename: 'bandle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015']
        }
      },

      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract ({
          fallback: 'style-loader',
          use: 'css-loader?url=false!postcss-loader!sass-loader',
        }),
        exclude: /node_modules/,
      },
    ]
  },

  devServer: {
    contentBase: './',
    inline: true,
    port: 3000,
    historyApiFallback: true,
  },

  plugins: [
    new ExtractTextPlugin('./scss/style.css')
  ]
};
