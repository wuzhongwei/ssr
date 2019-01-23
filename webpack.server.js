const path = require('path');
const nodeExter = require('webpack-node-externals'); // 处理node打包的时候不需要加载node_modules里的模块
const merge = require('webpack-merge');
const base = require('./webpack.base');

const config = {
    target: 'node',
    entry: './src/server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname,'build')
    },
    externals: [
        new nodeExter()
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['isomorphic-style-loader',{
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                }
            }]
        }]
    },
}
module.exports = merge(config, base);