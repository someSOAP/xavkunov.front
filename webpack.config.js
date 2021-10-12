const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const config = {
    context: path.resolve(__dirname, 'src'),
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    entry: {
        main: './index.ts',
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
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react']
                    }
                }
            },
        ]
    }
}

module.exports = config