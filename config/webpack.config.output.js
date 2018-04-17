const path = require("path");
const webpack = require("webpack");
const appSettings = require("./settings");

module.exports = {
  entry: "./../src/index.js",
  output: {
    path: path.normalize(__dirname, "../crap"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
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
