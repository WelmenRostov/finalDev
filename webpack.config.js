const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports ={
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: {
        but: "./js/buttons.js",
        main: "./index.js",
        sliver: "./js/slider_swiper.js",
        swiperBundle: "./js/swiper-bundle.js",
    },

    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: path.resolve(__dirname, 'dist/assets')
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                generator: {
                    filename: 'assets/fonts/[name][ext]', // Путь сохранения шрифтов
                },
            },
        ]
    }

}