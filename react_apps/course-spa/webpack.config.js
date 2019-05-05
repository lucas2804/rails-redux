const path = require('path');
const webpack = require('webpack');

const makeRules = require('./configs/rules');
const alias = require('./configs/alias');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?http://app.lvh.me:3001',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'app/index.jsx'),
  ],
  output: {
    path: path.join(__dirname, '/public/'),
    filename: 'main.js',
    publicPath: '/course-spa/assets/',
  },
  context: __dirname,
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': "'development'",
      "process.env.API_URL": JSON.stringify("http://app.lvh.me:3001"),
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
      },
    }),
  ],
  module: {
    rules: makeRules({ isDevelopment: true, isExtracting: false }),
  },
  resolve: {
    alias: alias,
    extensions: ['.js', '.jsx', '.scss', '.css'],
  },
};
