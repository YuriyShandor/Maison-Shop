const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'bandle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
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
        include: path.resolve(__dirname, 'src'),
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
    new ExtractTextPlugin('style.css')
  ]
};
