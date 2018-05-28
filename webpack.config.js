const path = require("path")
const webpack = require("webpack")

module.exports = {
  entry: {
    vendor: ["emoji-mart"],
    main: "./index"
  },

  output: {
    filename: '[name].[chunkhash].bundle.js',
    // Output path using nodeJs path module
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    // }),
  ]
}