'use strict';
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
const path =require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');
const webpack=require('webpack');
module.exports={
    mode: 'development',
    context:path.resolve(__dirname,'../'),
    devServer: {
        host:'0.0.0.0',
        hot: true,
        open: true,
        overlay: { warnings: false, errors: true },
        quiet: true,
        watchOptions: {
            poll: true
        }
    },
    resolve: {
        alias:{
            scss:path.resolve(__dirname, '../src/scss')
        }
    },
    module:{
        rules: [
            {
                test:/\.js$/,
                use:['babel-loader'],
                exclude: /node_modules/
            },{
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            },{
               test:/\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                exclude: /node_modules/
            },{
               test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ],
                exclude: /node_modules/
            },{
               test:/\.(jpeg|jpg|png)$/,
                use:[
                    'file-loader'
                ],
                exclude: /node_modules/
            },
            {
                test:/\.(woff)|(svg)|(eot)|(ttf)$/,
                use: [
                    {
                        loader: "url-loader",
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename:'index.html',
            template: 'index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),

    ],
    devtool: "source-map"
}

