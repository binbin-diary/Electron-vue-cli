/**
 *  create by wubinbin on 2019/8/8
 **/

const base = require('./webpack.base.config.js');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(base, {
    mode: 'development',
    output: {
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
});