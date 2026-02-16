const path = require("path");

const assetsPath = path.resolve(__dirname,"./assets/");

const config = {
  entry: "./index.js",
  module: {}
};

const devServer = {
  compress: true,
  contentBase: assetsPath,
  historyApiFallback: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  host: "127.0.0.1",
  hot: false,
  port: 8091,
  stats: {
    children: false,
    maxModules: 0
  }
};

config.devServer = devServer;

module.exports = config;