'use strict';
process.env.BABEL_ENV='production';
process.env.NODE_ENV = 'production';
const path =require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
module.exports={
    mode: 'production',
    context:path.resolve(__dirname,'../'),
    output: {
        filename: "js/[name][hash].js",
        publicPath: "/"
    },
    module:{
        rules: [
            {
                test:/\.js$/,
                use:['babel-loader'],
                exclude: /node_modules/
            },{
               test:/\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
                exclude: /node_modules/
            },{
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                    name: 'file/[name][hash].[ext]',
                },
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        alias:{
            scss:path.resolve(__dirname, '../src/scss')
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            filename:'index.html',
            template: 'index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name][hash].css",
        })

    ]
}

