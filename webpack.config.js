/**
 *
 * @file webpack config
 * @author dinglingjuan(dinglingjuan@baidu.com)
 */

const path = require('path');
const Clean = require('clean-webpack-plugin');
var EntryWrap = require('entry-wrap-webpack-plugin');

const SRC = path.resolve(__dirname, 'src');
const DIST = path.resolve(__dirname, 'dist');

module.exports = [
    {
        entry: {
            'bnjs.ui': path.resolve(SRC, 'bnjs.ui.js')
        },
        output: {
            path: './dist',
            filename: '[name].js'
        },
        plugins: [
            new Clean([DIST])
        ]
    },
    {
        entry: {
            'ui/List': path.resolve(SRC, 'ui/List/index.js'),
            'ui/Album': path.resolve(SRC, 'ui/Album/index.js')
        },
        output: {
            path: './dist',
            filename: '[name].js'
        },
        module: {
            exprContextCritical: false,
            loaders: [
                {
                    test: /\.(jpe?g|png|gif)$/i,
                    loader: 'file?name=img/[name].[ext]'
                },
                {
                    test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
                    loader: 'file?name=/font/[name].[ext]'
                },
                {
                    test: /\.(handlebars|hbs)$/,
                    loader: 'handlebars'
                },
                {
                    test: /\.css$/,
                    loader: 'style!css'
                },
                {
                    test: /\.less$/,
                    loader: 'style!css!less'
                }
            ]
        },
        plugins: [
            new Clean([DIST]),
            new EntryWrap('BNJS.define(function() { return 0,', '});')
        ]
    }
];
