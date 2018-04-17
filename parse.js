const pretty = require("pretty");
const fs = require("fs");
const path = require("path");
const babel = require("babel-core");
const webpack = require("webpack");
const setup = require("./documentation/setup");
const showdown = require("showdown");

const config = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/docs",
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
            presets: ["env", "react"]
          }
        }
      }
    ]
  }
};

webpack(config, function(err, stats) {
  if (err) console.log(err);
});

let pageName;
let currentIndex = 0;
const pluginA = function() {
  return {
    type: "lang",
    regex: /```jsx example\n[\s\S]*?\n```/g,
    replace: function(fullText) {
      const innerText = fullText.replace("jsx example", "").replace(/```/g, "");

      const r = babel.transform(
        `const createComponent = () => { ${innerText} };`,
        {
          presets: ["env", "react"]
        }
      );
      const name = pageName + ".example." + currentIndex++ + ".html";
      const script = `
        ${r.code};
        ReactDOM.render(createComponent(), document.getElementById("root"));
      `;

      const source = `
        <html>
            <head>
                <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
                <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

                <script src="./main.js"></script>
            </head>
            <body>
                <div id="root"></div>
                <script>${script}</script>
            </body>
        </html>`;
      fs.writeFileSync("docs/" + name, pretty(source), "utf8");
      const escapedInnerText = innerText
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      return pretty(`
        <div>
            <iframe
                frameborder="0"
                scrolling="no"
                onload="resizeIframe(this)"
                data-filename="${name}"
                src="${name}">
            </iframe>
        <div>
        <pre><code class="language-javascript">${escapedInnerText}</code></pre></div></div>`);
    }
  };
};
showdown.extension("pluginA", pluginA);
const converter = new showdown.Converter({
  extensions: ["pluginA"]
});

const header = `
    <ul>
        ${setup.chapters
          .map(chapter => {
            return `<li><a href="./${
              chapter.split(".")[0]
            }.html">${chapter}</a></li>`;
          })
          .join("")}
    </ul>
`;

setup.chapters.forEach(chapter => {
  pageName = chapter.split(".")[0];
  const page = fs.readFileSync(`./documentation/${chapter}`, "utf8");
  const parsed = `
    <html>
        <head>
            <link href="./../config/prism.css" rel="stylesheet">
            <link href="./../config/site.css" rel="stylesheet">
            <script src="./../config/prism.js"></script>

            <title>${chapter}</title>

            <script>
                /* Resisze the iframes on load */
                function resizeIframe(obj) {
                    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
                }
            </script>
        </head>
        <body>
            ${header}
            ${converter.makeHtml(page)}
        </body>
    </html>
  `;
  fs.writeFileSync(`./docs/${pageName}.html`, parsed, "utf8");
});
