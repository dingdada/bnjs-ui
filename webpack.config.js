const webpack = require('webpack');
const path = require('path');
const root = __dirname;
console.log(root);
module.exports = {
    entry: {
        index: './src/bnjs.ui.js'
    },
    output: {
        path: './dist',
        filename: '[name].js'
    }
};