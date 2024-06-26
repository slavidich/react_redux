const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

const devMode = process.argv[process.argv.indexOf('--mode') + 1] === 'development';

module.exports={
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output:{
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer:{
        historyApiFallback: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
    ],
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
        ]
    }
}