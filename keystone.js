const keystone = require('keystone');
const ejs = require('ejs');

keystone.init({
  'cookie secret': 'secure string goes here',
  'view engine': 'ejs'
});

keystone.start();