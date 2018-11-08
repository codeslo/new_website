const keystone = require('keystone');
//const ejs = require('ejs');


keystone.init({
  'cookie secret': 'secure string goes here',
  'name': 'new-website',
  'cookie secret': 'secure string goes here',
  'user model': 'User',
  'auto update': true,
  'auth': true,
  'static':'public',
  views: 'templates/views',
  'view engine': 'ejs',
  'cloudinary config': ({
    cloud_name:'matt-codeslo',
    api_key: '637496429945961',
    api_secret: '4mmFlB9ZopZmnPSV4RZxlvzyIX0'
  }),
  'wysiwyg cloudinary images': true

});

keystone.import('models');
keystone.set('routes', require('./routes'));
keystone.set('cloudinary api key', '637496429945961');
keystone.set('cloudinary api secret', '4mmFlB9ZopZmnPSV4RZxlvzyIX0');
keystone.start();