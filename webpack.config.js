'use strict';
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
var autoprefixer = require('autoprefixer');

/**
 * webpack.config.js 可以 export 一个 object，或者是一个 env 为参数的 function
 */
module.exports = function (env) {
    const isProduction = env && env.production === true;

    // Explicitly set NODE_ENV here
    process.env.NODE_ENV = isProduction ? 'production' : 'development';

    return {
        context: path.resolve(__dirname, "src"),
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'static/js/[name].[hash].js'
        },
        module: {
            loaders: [
                {
                    enforce: "pre",
                    test: /\.js$/,
                    include: path.resolve(__dirname, 'src'),
                    loader: "eslint-loader",
                    options: {
                        failOnError: true,
                        fix: true
                    }
                },
                {
                    test: /\.(js|jsx)$/,
                    include: path.resolve(__dirname, 'src'),
                    loader: 'babel-loader',
                    query: {
                        babelrc: false,
                        presets: [
                            [
                                require.resolve('babel-preset-react-app'),
                                { development: !isProduction }
                            ],
                        ],
                    },
                },
                {
                    test: /\.css$/,
                    loader: isProduction ?
                        ExtractTextPlugin.extract({ fallback: 'style-loader', use: [
                            {
                                loader: require.resolve('css-loader')
                            },
                            {
                                loader: require.resolve('postcss-loader'),
                                options: {
                                    plugins: () => [
                                        require('postcss-flexbugs-fixes'),
                                        autoprefixer({
                                            browsers: [
                                                '>1%',
                                                'last 4 versions',
                                                'Firefox ESR',
                                                'not ie < 9',
                                            ],
                                            flexbox: 'no-2009',
                                        }),
                                    ],
                                },
                            }
                        ] }) :
                        [ 'style-loader', 'css-loader', ]
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                },
                {
                    test: /\.svg$/,
                    loader: 'file-loader',
                    query: {
                        name: 'static/media/[name].[hash:8].[ext]'
                    }
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                      {
                        loader: 'file-loader',
                      },
                    ],
                },
            ]
        },
        plugins: [
            new InterpolateHtmlPlugin({
                PUBLIC_URL: ''
            }),
            new HtmlWebpackPlugin({
                inject: true,
                template: '../public/index.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true
                }
            }),
            new ExtractTextPlugin('static/css/[name].[hash].css'),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                'SERVICE_URL': isProduction ?
                    JSON.stringify("http://pro.example.com") :
                    JSON.stringify("http://dev.example.com"),
                "process.env": {
                    NODE_ENV: isProduction ?
                        JSON.stringify("production") :
                        JSON.stringify("development")
                }
            })
        ],
        devServer:{
            hot: true,
            contentBase: path.join(__dirname, "public"),
            compress: true,
            port: 9000,
            publicPath: '/',
            proxy: {
                "/api": {
                    target: "http://localhost:7000/",
                    pathRewrite: {"^/api" : ""},
                    secure: false,
                    changeOrigin: true
                }
            }
        },
        devtool: isProduction ?
            'hidden-source-map' :
            'cheap-module-eval-source-map',
    };
}
