const keystone = require('keystone');
const ejs = require('ejs');

keystone.init({
  'cookie secret': 'secure string goes here',
  'view engine': 'ejs',
  'name': 'new-website',
  'user model': 'User',
  'auto update': true,
  'auth': true,
});

keystone.import('models');
keystone.start();