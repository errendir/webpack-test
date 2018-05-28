const path = require("path")
const webpack = require("webpack")

module.exports = {
  entry: {
    main: "./index"
  },

  output: {
    filename: '[name].[chunkhash].bundle.js',
    // Output path using nodeJs path module
    path: path.resolve(__dirname, 'dist')
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