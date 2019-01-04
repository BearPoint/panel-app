const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path')
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
const cssPlugins = new MiniCssExtractPlugin()

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve('./public'),
        filename: 'bundled.js'
    },
    watch: true,
    devtool: 'source-map',
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader"
            }
        }]
    },
    stats: {
        errorDetails: true
    },
    plugins: [htmlPlugin],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
    }
};