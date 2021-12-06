const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.base.js");
const path = require("path");
const PurifyCssWebpack = require("purifycss-webpack");
const glob = require("glob");

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[id].[contenthash:8].css",
    }),
    new PurifyCssWebpack({
      paths: glob.sync(path.join(__dirname, "src/*.html")),
    }),
  ],
});
