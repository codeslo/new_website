const keystone = require('keystone');
//const ejs = require('ejs');

keystone.init({
  'cookie secret': 'secure string goes here',
  'name': 'new-website',
  'cookie secret': 'secure string goes here',
  'user model': 'User',
  'auto update': true,
  'auth': true,
	views: 'templates/views',
	'view engine': 'ejs',
});

keystone.import('models');
keystone.set('routes', require('./routes'));
keystone.start();