const pretty = require("pretty");
const PropTypes = require("prop-types");
const parsePropTypes = require("parse-prop-types").default;
const fs = require("fs");
const path = require("path");
const babel = require("babel-core");
const webpack = require("webpack");
const setup = require("./documentation/setup");
const showdown = require("showdown");
//let config = require("./config/webpack.config.docs");

let config = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/docs"),
    filename: "main.js",
    library: "MyLibrary",
    libraryTarget: "var"
  },
  devtool: "source-map",
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

webpack(config, function(err, stats) {
  if (err) console.log(err);
  else {
    config.output.filename = "terse.js";
    config.output.libraryTarget = "this";
    config.output.library = "s";

    console.log(JSON.stringify(config, null, 2));

    webpack(config, function(err, stats) {
      if (err) console.log(err);
      else {
        renderDocuments();
      }
    });
  }
});

function renderDocuments() {
  let pageName;
  let currentIndex = 0;
  const pluginReactExample = function() {
    return {
      type: "lang",
      regex: /```jsx example\n[\s\S]*?\n```/g,
      replace: function(fullText) {
        const innerText = fullText
          .replace("jsx example", "")
          .replace(/```/g, "");

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
            <h3>Example</h3>
            <iframe
                frameborder="0"
                scrolling="no"
                onload="resizeIframe(this)"
                data-filename="${name}"
                src="${name}">
            </iframe>
        <div>
        <pre class="sample-code hidden" onclick="show(this)"><code class="language-javascript">${escapedInnerText}</code></pre></div></div>`);
      }
    };
  };
  showdown.extension("pluginReactExample", pluginReactExample);

  const pluginPropTypes = function() {
    return {
      type: "lang",
      regex: /^PROPTYPES: .*$/gm,
      replace: function(fullText) {
        const Source = require("./docs/terse").s;
        const p = fullText.replace("PROPTYPES:", "").trim();
        const component = Source[p];

        const getPropTypesTableRows = () => {
          const parsedPropTypes = parsePropTypes(component);
          const result = Object.entries(parsedPropTypes)
            .map(([key, entry]) => {
              return `
                    <tr>
                        <td>${key}</td>
                        <td>${entry.type.name}</td>
                        <td>${entry.required.toString()}</td>
                        <td>${entry.default || ""}</td>
                        <td>${entry.description || ""}</td>
                    </tr>
                `;
            })
            .join("");
          return result;
        };

        if (component) {
          return pretty(`
          <div>
            <h3>PropTypes: ${p}</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Required</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${getPropTypesTableRows()}
                    </tbody>
                </table>
           </div> `);
        }

        return "";
      }
    };
  };
  showdown.extension("pluginPropTypes", pluginPropTypes);

  const converter = new showdown.Converter({
    extensions: ["pluginReactExample", "pluginPropTypes"]
  });

  const header = __chapter => {
    console.log(__chapter);
    return pretty(`
        <ul>
            ${setup.chapters
              .map(chapter => {
                return `<li class="${
                  __chapter === chapter ? "selected" : ""
                }" ><a href="./${
                  chapter.split(".")[0]
                }.html">${chapter}</a></li>`;
              })
              .join("")}
        </ul>
    `);
  };

  setup.chapters.forEach(chapter => {
    pageName = chapter.split(".")[0];
    const page = fs.readFileSync(`./documentation/${chapter}`, "utf8");
    const parsed = `
    <html>
        <head>
            <link href="/prism.css" rel="stylesheet">
            <link href="/site.css" rel="stylesheet">
            <script src="/prism.js"></script>

            <title>${chapter}</title>

            <script>
                /* Resisze the iframes on load */
                function resizeIframe(obj) {
                    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
                }
                function show(e) {
                    e.classList.contains("hidden") ?
                        e.classList.remove("hidden") :
                        e.classList.add("hidden");
                }
            </script>
        </head>
        <body>
            <div class="nav">
                <h3>Navigation</h3>
                ${header(chapter)}
            </div>
            <div class="content">
                ${converter.makeHtml(page)}
            </div>
        </body>
    </html>
  `;
    fs.writeFileSync(`./docs/${pageName}.html`, pretty(parsed), "utf8");
  });
}
