const path = require('path');

module.exports = {
  node_modules: path.resolve(__dirname, '../../node_modules'),
  'bootstrap-styles': path.resolve(
    __dirname,
    '../../node_modules/bootstrap-sass/assets/stylesheets/bootstrap'
  ),
  vendor: path.resolve(__dirname, './../app/vendor'),
  'app-styles': path.resolve(__dirname, './../app/styles'),
  'app-images': path.resolve(__dirname, './../app/images'),
  'app-fonts': path.resolve(__dirname, './../app/fonts'),
};
