const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: "./js/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[fullhash].js",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        hot: true,
        port: 9000
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            minify: false
        }),
        new HTMLWebpackPlugin({
            filename: "about.html",
            template: "about.html",
            minify: false
        }),
        new HTMLWebpackPlugin({
            filename: "catalog.html",
            template: "catalog.html",
            minify: false
        }),
        new HTMLWebpackPlugin({
            filename: "price.html",
            template: "price.html",
            minify: false
        }),
        new CleanWebpackPlugin(),
        new ESLintPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.s[ac]ss/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
};