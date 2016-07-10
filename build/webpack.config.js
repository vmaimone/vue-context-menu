var webpack = require('webpack')

module.exports = {
    entry: {
        "v-context-menu": "./build/common.js",
        "body-click-listener": "./src/body-click-listener.js"
    },
    output: {
        filename: "bundle.js",
        path: __dirname,
    },
    plugins: [
    //   new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
      new webpack.optimize.OccurenceOrderPlugin()
    ]
}
