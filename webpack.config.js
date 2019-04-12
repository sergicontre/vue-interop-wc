const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: ["webpack-hot-middleware/client", "./src/"]
  },
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "[name].chunk.js",
    chunkFilename: "[chunkhash].[id].js"
  },
  resolve: {
    extensions: [".js", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        include: path.resolve(__dirname, "./src")
      },
      {
        test: /\.(png|jpg|gif|svg)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '/assets/[name].[hash:8].[ext]'
          }
        }]
      },
      {
        test: /\.html$/,
        use: 'vue-html-loader'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: {
      context: "/"
    }}),
    new HtmlWebpackPlugin({template: "./public/index.html", inject: true}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}