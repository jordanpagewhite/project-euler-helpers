var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var babelPluginTransformES2015ModulesCommonJS = require('babel-plugin-transform-es2015-modules-commonjs');

var htmlWebpackPluginConfig = new htmlWebpackPlugin({
  template: path.resolve(__dirname + '/app/index.html'),
  filename: 'index.html',
  inject: 'body'
});

var entrypoint = process.env.npm_lifecycle_event === 'dev' ?
  'webpack-dev-server/client?http://localhost:8080' :
  './app/index.js';

module.exports = {
  entry: entrypoint,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname + '/app'),
          path.resolve(__dirname + '/test'),
        ],
        loader: 'babel-loader',
        query: {
            presets: ['es2016', 'stage-0']
        }
      }
    ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map',
  plugins: [htmlWebpackPluginConfig, babelPluginTransformES2015ModulesCommonJS]
};
