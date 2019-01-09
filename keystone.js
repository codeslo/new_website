const keystone = require('keystone');
//const ejs = require('ejs');

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

keystone.init({
  port: port,
  'cookie secret': 'secure string goes here',
  'name': 'new-website',  
  //'mongo':'mongodb://matt-codeslo:NL6pmSEBiKKH8UKXrITgYWS94jwQuBhHe90qOjFXG83AwldEoWHvWHboB55SktsuQZYCtqgyIO1mhq4h8T4Wiw==@matt-codeslo.documents.azure.com:10255/?ssl=true&replicaSet=globaldb',
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