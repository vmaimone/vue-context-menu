const config = require('./webpack.config')
const path = require('path')

config.output = {
  filename: 'index.js',
  library: 'VueContextMenu',
  libraryTarget: 'umd'
}

module.exports = config