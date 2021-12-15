const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { extendDefaultPlugins } = require("svgo");


console.log("devMod=" + devMode + ' ' + process.env.NODE_ENV);
module.exports = {
    entry: path.resolve('src', 'js', 'main.js'),
    output: {
        filename: 'main.[contenthash].js',
        clean: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(mp3|mp4)$/i,
                use: ('file-loader')

            },
            {
                test: /\.(jpg)$/i,
                type: "asset",
                use: ('file-loader')

            }

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),


        new HtmlWebpackPlugin({
            template: path.resolve('src', 'template.html'),
        })
    ],
    optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.squooshMinify,
                }
            }),
        ],
    }
}