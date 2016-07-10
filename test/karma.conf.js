path = require("path")
module.exports = function (config) {
  config.set({
    preprocessors: {
      'index.js': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['','.js','.vue'],
        alias: { 'src': path.resolve(__dirname, '../src') },
      },
      module: {
        loaders: [
          { test: /\.vue$/, loader: 'vue-loader' },
          { test: /\.html$/, loader: "html"},
          { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
      },
    },
    webpackMiddleware: { noInfo: true },
    files: ['index.js'],
    frameworks: ['mocha', 'sinon-chai','vue-component'],
  })
}
