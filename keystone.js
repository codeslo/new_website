const keystone = require('keystone');
const config = require('./secrets') || console.log("no secrets.js");

keystone.init({
  port: process.env.PORT || 3000,
  'cookie secret': 'secure string goes here',
  'name': 'new-website',
  'mongo': process.env.MONGODB_URI || 'mongodb://localhost:27017/cslo',  
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
/*   'cloudinary config': ({
    cloud_name:'matt-codeslo',
    api_key: process.env.CLOUDINARY_KEY || config.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_KEY || config.CLOUDINARY_SECRET
  }), */
  'wysiwyg cloudinary images': true

});

keystone.import('models');
keystone.set('routes', require('./routes'));
keystone.start();