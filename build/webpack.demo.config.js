const webpack = require('webpack')
const config = require('./webpack.config')
const path = require('path')
config.entry = './dev/index.js'
config.output = {
  filename: 'index_bundle.js',
  library: 'VueContextMenu',
  libraryTarget: 'umd'
}
config.plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}))
module.exports = config