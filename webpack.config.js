const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: { about: "./source/about.js", index: "./source/index.js" },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name]_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./source/index.html",
      filename: "./index.html",
      chunks: ["index"],
    }),
    new HTMLWebpackPlugin({
      template: "./source/about.html",
      filename: "./about.html",
      chunks: ["about"],
    }),
  ],
};
