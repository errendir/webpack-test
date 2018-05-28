const path = require("path")
const webpack = require("webpack")

module.exports = {
  entry: {
    main: "./index"
  },

  output: {
    filename: '[name].bundle.js',
    // Output path using nodeJs path module
    path: path.resolve(__dirname, "dist")
  },

  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    port: 9000
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      async: true,
      minChunks: module => /node_modules/.test(module.resource),
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    // }),
  ]
}