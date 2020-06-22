const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'min.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    devServer: {
        port: '8080',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: './images',
                            outputPath: './images'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ExtractTextPlugin("./style/styles.css"),
    ],
}