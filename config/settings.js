const path = require("path");

module.exports = {
  appStart: "./src/index.js",
  appRoot: "src",
  outputPath: path.resolve(__dirname + "/../build"),
  outputFilename: "bundle.js"
};
