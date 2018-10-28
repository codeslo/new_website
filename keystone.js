var keystone = require('keystone');

keystone.init({
  'cookie secret': 'secure string goes here'
});

keystone.start();