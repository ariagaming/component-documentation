const webpack = require("webpack");
const appSettings = require("./settings");

module.exports = {
  entry: appSettings.appStart,
  output: {
    path: appSettings.outputPath,
    filename: appSettings.outputFilename
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
