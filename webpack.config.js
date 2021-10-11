const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.js',
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        watchFiles: {
            paths: ['./'],
            options: {
                usePolling: false,
            }
        },
        static: {
            directory: path.join(__dirname, 'public'),
            watch: true,
        },
        compress: true,
        port: 3000,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpeg|svg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
}

module.exports = config