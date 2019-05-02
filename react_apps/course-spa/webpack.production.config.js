/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const makeRules = require('./configs/rules');
const alias = require('./configs/alias');

module.exports = {
  entry: [path.join(__dirname, 'app/index.jsx')],
  output: {
    path: path.join(__dirname, '../../../public/recognition/assets'),
    filename: 'main-[hash].min.js',
    publicPath: '/recognition/assets/',
  },
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main-[hash].min.css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        minimize: true,
        context: __dirname,
      },
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CompressionPlugin(),
    new ManifestPlugin(),
  ],
  module: {
    rules: makeRules({ isDevelopment: false, isExtracting: true }),
  },
  resolve: {
    alias: alias,
    extensions: ['.js', '.jsx', '.scss'],
  },
};
