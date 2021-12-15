const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
console.log("devMod=" + devMode);

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve('src', 'js', 'main.js'),
    output: {
        filename: 'main.[contenthash].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),


        new HtmlWebpackPlugin({
            template: path.resolve('src', 'template.html'),
        })
    ]
}