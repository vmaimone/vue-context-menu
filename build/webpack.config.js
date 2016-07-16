var webpack = require('webpack')

module.exports = {
    entry: "./build/common.js",
    output: {
        filename: "bundle.js",
        path: __dirname
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin()
    ]
}
