var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

//Middleware
keystone.pre('render', middleware.flashMessages);

//Load routes
var routes = {
  views: importRoutes('./views'),
  partials: importRoutes('./views/partials'),
  api: importRoutes('./api'),
};

//Bind routes
exports = module.exports = function (app) {
  app.get('/', routes.views.index);
  app.get('/contact-list', routes.views.contactList);
  app.get('/article/:slug', routes.views.article);
  //app.get('/add-contact', routes.views.addContact);
  app.post('/add-contact', routes.api.contact.post);  
  app.post('/api/subscribe', routes.api.subscribe.post);  
};