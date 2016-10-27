const path = require('path');
const Clean = require('clean-webpack-plugin');

const SRC = path.resolve(__dirname, 'src');
const DIST = path.resolve(__dirname, 'dist');

module.exports = {
    entry: {
        'bnjs.ui': path.resolve(SRC, 'bnjs.ui.js'),
        'ui/List': path.resolve(SRC, 'ui/List/index.js'),
        'ui/Album': path.resolve(SRC, 'ui/Album/index.js')
    },
    output: {
        path: './dist',
        filename: '[name].js'
    },
    plugins: [
        new Clean([DIST])
    ]
};