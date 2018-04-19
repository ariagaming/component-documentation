const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./../src/index.js",
  output: {
    path: path.join(__dirname, "/../docs"),
    filename: "main.js",
    library: "MyLibrary",
    libraryTarget: "var"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"],
            plugins: ["transform-object-rest-spread"]
          }
        }
      }
    ]
  }
};

//plugins: [new webpack.IgnorePlugin(/react/, /prop-types/)]
