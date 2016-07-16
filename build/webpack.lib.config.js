const webpack = require('webpack')
const config = require('./webpack.config')
const path = require('path')
config.entry = './src/index.js'
config.output = {
  filename: 'index.js',
  library: 'VueContextMenu',
  libraryTarget: 'umd'
}
config.plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}))

config.module = {
  loaders: [
    {
      test: /\.vue$/,
      loader: 'vue'
    }
  ]
}

module.exports = config