// Karma configuration

var path = require('path');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        plugins : [
            'karma-jasmine',
            'karma-coverage',
            'karma-webpack',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-opera-launcher',
            'karma-ie-launcher'
        ],
        files: [
            'tests.js'
        ],
        exclude: [],
        preprocessors: {
            'tests.js' : ['webpack']
        },
        webpack: {
            devtool: 'eval',
            module: {
                preLoaders: [
                    {
                        test: /\.js$/, 
                        loader: 'isparta', 
                        include: path.resolve('./app'), 
                        exclude: /\.test\.js$/
                    }
                ],
                loaders: [
                    {
                        test: /\.sass$/, 
                        loader: 'css!sass'
                    },
                    {
                        test: /\.css$/, 
                        loader: 'css'
                    },
                    {
                        test: /\.(png|jpg|jpeg|gif)$/,
                        loader: 'null'
                    },
                    {
                        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                        loader: 'null'
                    },
                    {
                        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                        loader: 'null'
                    },
                    {
                        test: /\.html$/, 
                        loader: 'ng-cache?prefix=[dir]/[dir]'
                    }
                ]
            },
            cache: true
        },
        webpackMiddleware: {
            noInfo: true,
            stats: {
                chunkModules: false,
                colors: true
            }
        },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'tmp/coverage'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: [
            'Chrome',
            // 'Firefox',
            // 'IE',
            // 'Opera',
            // 'PhantomJS'
        ],
        singleRun: true
    });
};