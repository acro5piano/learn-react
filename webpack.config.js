const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: __dirname + '/src',

  entry: './index.jsx',

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: 'dist',
    port: 3000,
    overlay: true,
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html',
      filename: 'index.html',
      inject: true
    }),
  ]
}
