var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

var htmlWebpackPluginConfig = new htmlWebpackPlugin({
  template: path.resolve(__dirname + '/app/index.html'),
  filename: 'index.html',
  inject: 'body'
});

var entrypoint = [
  process.env.npm_lifecycle_event === 'dev' ?
    'webpack-dev-server/client?http://localhost:8080' :
    path.resolve(__dirname + '/app/ProjectEulerHelpers.js'),
];

module.exports = {
  entry: entrypoint,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [htmlWebpackPluginConfig],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map'
};
