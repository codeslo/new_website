const keystone = require('keystone');
require('dotenv').config();

keystone.init({
  port: process.env.PORT || 3000,
  'cookie secret': process.env.COOKIE_SECRET,
  'name': 'new-website',
  'mongo': process.env.MONGODB_URI || 'mongodb://localhost:27017/csloweb',  
  'user model': 'User',
  'auto update': true,
  'auth': true,
  'static':'public',
  views: 'templates/views',
  'view engine': 'ejs',
  'cloudinary config': ({
    cloud_name:'matt-codeslo',
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
  }),
  'wysiwyg cloudinary images': true
});

keystone.import('models');
keystone.set('routes', require('./routes'));
keystone.start();