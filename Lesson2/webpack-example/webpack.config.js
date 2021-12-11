const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: path.resolve('src', 'js', 'main.js'),
    output: {
        filename: 'main.[contenthash].js',
        clean: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'template.html'),
        })
    ],
    module: {
        rules: [
            {
                test: /\.(jpg)$/i,
                use: ('file-loader')
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader',
            }
        ]
    }

}