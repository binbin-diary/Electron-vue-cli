/**
 *  create by wubinbin on 2019/8/8
 **/

const base = require('./webpack.base.config.js')
const merge = require('webpack-merge')

module.exports = merge(base, {
    mode: 'development',
    output: {
        filename: '[name].js'
    },
    devServer: {
        compress: true,
        host: 'localhost',
        port: 9000,
        hot: true
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
});