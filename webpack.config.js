const webpack = require( 'webpack' )

const config = {
    entry: "./src/index.js",
    output: {
        filename: "vue-context-menu.js",
        // path: __dirname,
        publicPath: '.',
        library: 'VueContextMenu',
        libraryTarget: 'umd'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}

if (process.env.NODE_ENV === 'production') {
    let uglify = new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false, screw_ie8: true }
    })
    config.plugins.push(uglify)
}

module.exports = config