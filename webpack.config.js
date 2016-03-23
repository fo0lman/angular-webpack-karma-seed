var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    context: __dirname,

    entry: {
        app: ['./app/app.js']
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        preLoaders: [],
        loaders: [
            {
                test: /\.js$/,
                loader: "eslint",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css')
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file',
                query: {
                    name: '/assets/fonts/[name].[ext]'
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'file',
                query: {
                    name: '/assets/img/[name].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'raw',
                exclude: /node_modules/
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    minetype: 'application/font-woff',
                    name: '/assets/fonts/[name].[ext]'
                }
            }
        ]
    },
    eslint: {
        configFile: './.eslintrc'
    },
    plugins : [
        new WebpackNotifierPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('assets/css/[name].css', {allChunks: true}),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{
            from: 'app/.htaccess'
        }, {
            from: 'app/assets',
            to: 'assets'
        }], {
            ignore: ['*.scss']
        })
    ],
    watch: false,
    watchOptions: {
        aggregateTimeout: 100
    },
    resolveLoader: {
        moduleDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },
    devServer: {
        contentBase: __dirname + '/build',
        inline: true,
        hot: true,
        progress: true,
        historyApiFallback: true,
        port: 8080
    }
};
