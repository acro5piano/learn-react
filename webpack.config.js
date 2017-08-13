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
    port: 3000
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: __dirname + '/index.html',
      template: __dirname + '/index.html',
      inject: true
    }),
  ]
}
