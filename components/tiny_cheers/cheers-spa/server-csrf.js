/* eslint-disable */
const request = require('request');
const cheerio = require('cheerio');

const CSRF_TOKENS = {};

/**
 * Cache all csrf token in CSRF_TOKENS by cookie key
 */
const csrf = function(cookie, backend) {
  return new Promise(function(resolve, reject) {
    if (CSRF_TOKENS[cookie]) {
      return resolve(CSRF_TOKENS[cookie]);
    }
    
    const options = {
      url: backend + 'courses',
      method: 'GET',
      headers: {
        cookie: cookie,
      },
    };
    
    request(options, (err, response, body) => {
      const $ = cheerio.load(body);
      resolve($('[name="csrf-token"]').attr('content'));
    });
  });
};

module.exports = csrf;
