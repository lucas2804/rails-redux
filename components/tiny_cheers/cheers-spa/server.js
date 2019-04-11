/* eslint-disable */
const path = require('path');
const request = require('request');
const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.config');
const csrf = require('./server-csrf');

const app = express();
const compiler = webpack(config);
const DEFAULT_PORT = 3001;
const BACKEND_HOST = 'http://app.lvh.me:3000/';

app.set('port', process.env.PORT || DEFAULT_PORT);

const compiledMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
});

app.use(compiledMiddleware);
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '/public/')));

/**
 * Foward the API requests to backend
 */
app.all('/api/*', (req, res) => {
  const cookie = req.headers.cookie;
  const options = {
    url: BACKEND_HOST + req.url,
    method: req.method,
    headers: {
      cookie: cookie,
      'X-CSRF-Token': req.headers['x-csrf-token'],
    },
    json: req.body,
  };
  request(options, (err, response, body) => {
    if (err) {
      console.error('Error from backend server');
      console.error(err);
      return res.status(500);
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(response.statusCode);
    res.send(body);
  });
});

app.get('*', (req, res) => {
  const cookie = req.headers.cookie;
  csrf(cookie, BACKEND_HOST).then(function(token) {
    const html = `
    <!doctype html>
    <html lang="en">
  
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Plural Sight | Courses</title>
      <meta name="description" content="Recognition">
      <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
      <!--<link rel="stylesheet" media="all" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"-->
      <!--/>-->
      <!--<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">-->
      <!--<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700" rel="stylesheet">-->
      <!--<link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">-->
      <meta name="csrf-token" content="${token}" />
    </head>
  
    <body>
      <div id="cheers-container"></div>
      <script src="/recognition/assets/main.js"></script>
    </body>
  
    </html>
    `;
    res.set('Content-Type', 'text/html');
    res.send(new Buffer(html));
  });
});

app.listen(app.get('port'));
