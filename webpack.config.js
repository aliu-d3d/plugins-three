const path = require('path');

module.exports = {
  entry: "./src/index.js", // string | object | array
  output: {
    // options related to how webpack emits results

    path: path.resolve(__dirname, "dist"),
    filename: "plugins-three.js",
    library: "plugins-three", 
    libraryTarget: "umd",
  },
  externals: {
    "three": {
      "commonjs": "three",
      "commonjs2": "three",
      "amd": "three",
      "root": "THREE"
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: [
          path.resolve(__dirname, "node-modules")
        ],
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        },
      }
    ],
  },

  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ],
    // directories where to look for modules

    extensions: [".js", ".json", ".jsx", ".css"],
    // extensions that are used
  },

  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) { 
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },

  devtool: "source-map", // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.

  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory

  target: "web", // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  stats: "errors-only",
  // lets you precisely control what bundle information gets displayed
}
