const base = require('./webpack.base')
const merge = require('webpack-merge')
module.exports = merge(base, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: '8080',
        stats: "errors-only"
    },
})