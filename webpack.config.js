const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const BUILD_FOLDER_NAME = 'dist'
const STATIC_FOLDER_NAME = 'public'

const config = {
    context: path.resolve(__dirname, 'src'),
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path
                        .resolve(__dirname, STATIC_FOLDER_NAME)
                        .replace(/\\/g, '/'),
                    to: path
                        .resolve(__dirname, BUILD_FOLDER_NAME)
                        .replace(/\\/g, '/'),
                },
            ],
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.sass', '.css'],
        plugins: [new TsconfigPathsPlugin({})],
    },
    entry: {
        main: './index.ts',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, BUILD_FOLDER_NAME),
    },
    devServer: {
        watchFiles: {
            paths: ['./'],
            options: {
                usePolling: false,
            },
        },
        static: {
            directory: path.join(__dirname, STATIC_FOLDER_NAME),
            watch: true,
        },
        compress: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                include: /\.module\.s[ac]ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                mode: 'local',
                                localIdentName: '[local]--[hash:base64:5]',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpeg|svg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                            '@babel/preset-react',
                        ],
                    },
                },
            },
        ],
    },
}

module.exports = config
