const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    /**
     * + use webpack.DefinePlugin to parse
     * and inject whole .env file's
     * content
     * + converted into javascript object
     * + process.env
     *
     *
     *  */
    new webpack.DefinePlugin({
      "process.env": dotenv.parsed,
    }),
  ],
};
