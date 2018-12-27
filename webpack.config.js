// const path = require('path')
// const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules(\/|\\)(?!(@feathers|debug))/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }]
  },
  mode: 'production'
}
