/*
Important Note: if development becomes slow and removal of any of the below will suffice,
just remove it - the reason they are there is to make the entire development process
faster, not slower. Better still... comment them out, if it still makes the code readable
*/

const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const OfflinePlugin = require('offline-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: "inline-source-map ",
    stats: "errors-only", // reduces the noise
    target: 'web',
    plugins: [
        // new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            title: 'BetGame Development'
        }),
        new ExtractTextPlugin('index.css')
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.js$/,
                exclude: __dirname + '/node_modules/',
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            },
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
              })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ],
        // rules: [{
        //     test: /\.scss$/,
        //     use: [{
        //         loader: "style-loader"
        //     }, {
        //         loader: "css-loader"
        //     }, {
        //         loader: "sass-loader",
        //         options: {
        //             includePaths: ["absolute/path/a", "absolute/path/b"]
        //         }
        //     }]
        // }]
    }
};
