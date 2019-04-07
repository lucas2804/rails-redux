const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const cssVariables = require('postcss-css-variables');

const makeJsLoaders = () => [
  {
    test: /\.(js|jsx)?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
];

const makeAssetsLoaders = ({ isDevelopment }) => [
  {
    test: /\.(eot|ttf|svg|woff|woff2)(\?[a-z0-9#=&.]+)?$/,
    exclude: /images/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 200000,
        },
      },
    ],
  },
  {
    test: /\.(jpe?g|png|svg)(\?[a-z0-9#=&.]+)?$/,
    include: /images/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: isDevelopment ? 'images/[name]-[hash].[ext]' : 'images/[name].[ext]',
        },
      },
    ],
  },
];

const makeStyleLoaders = ({ isDevelopment, isExtracting }) => [
  // Vendor loader
  {
    test: /\.scss$/,
    include: [/node_modules/, /app\/vendor/],
    use: [
      {
        loader: isExtracting ? MiniCssExtractPlugin.loader : 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'sass-loader',
      },
    ],
  },
  // App styles loaders
  {
    test: /\.scss$/,
    exclude: [/node_modules/, /app\/vendor/],
    use: [
      {
        loader: isExtracting ? MiniCssExtractPlugin.loader : 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: isDevelopment,
          minimize: !isDevelopment,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: isDevelopment,
          sourceComments: isDevelopment,
          plugins: () => [postcssPresetEnv(), cssVariables()],
        },
      },
      {
        loader: 'sass-loader',
      },
    ],
  },
];


module.exports = ({ isDevelopment, isExtracting }) => [
  ...makeJsLoaders(),
  ...makeStyleLoaders({ isDevelopment, isExtracting }),
  ...makeAssetsLoaders({ isDevelopment }),
];

