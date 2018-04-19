const fs = require("fs");
const rimraf = require("rimraf");
const chokidar = require("chokidar");
const { exec } = require("child_process");
const path = require("path");
const moment = require("moment");
const chalk = require("chalk");
const express = require("express");
const serveStatic = require("serve-static");

/**
 * 1) Delete 'docs' folder
 * 2) Copy the 'core' folder to the docs folder
 * 3) fire `parse.js`
 * 4) Configure a watcher on 'src' and 'documentation' folders which will
 *    trigger 'parse.js' on change of one of those files
 * 5) Configure a watcher on 'core' to copy a new version of that file when
 *    it changes.
 * 6) Start a simple static web-server on the `docs` folder
 */

rimraf("/docs", function() {
  console.log(
    chalk.yellow(
      "\nDeleted the docs folder and starting the reinitialisation\n"
    )
  );
  console.log(chalk.blue("Copying core files to the docs directory..."));
  fs.readdir("core", (err, files) => {
    files.forEach(file => {
      fs
        .createReadStream(path.join(__dirname, "core", file), "utf8")
        .pipe(fs.createWriteStream(path.join(__dirname, "docs", file), "utf8"));
    });
  });
  console.log(chalk.blue("Parsing the files..."));
  exec("node parse.js");

  const watcher = chokidar.watch(["./src", "./documentation"]);
  console.log(chalk.blue("Starting the watcher of the files..."));
  watcher.on("change", (event, path) => {
    process.stdout.write(
      chalk.magenta(moment().format("LTS") + " Recompiling the sources ")
    );
    let timer;
    exec("node parse.js", (error, stdout, stderr) => {
      process.stdout.write(chalk.magenta(" done"));
      console.log(" ");
      clearInterval(timer);
    });
    timer = setInterval(() => {
      process.stdout.write(chalk.magenta("."));
    }, 500);
  });

  const configWatcher = chokidar.watch(["./core"]);
  configWatcher.on("change", (e, p) => {
    fs
      .createReadStream(path.join(__dirname, e), "utf8")
      .pipe(
        fs.createWriteStream(
          path.join(__dirname, e.replace("core/", "docs/")),
          "utf8"
        )
      )
      .on("finish", () => {
        console.log(chalk.magenta(moment().format("LTS") + " Moved " + e));
      });
  });

  console.log(chalk.blue("Starting http-server..."));
  const app = express();
  app.use(serveStatic(path.join(__dirname, "docs")));
  app.listen(8080, () => {
    console.log(chalk.blue("listening on: http://localhost:8080"));
  });
});
