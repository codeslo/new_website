var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);

var routes = {
  views: importRoutes('./views'),
  partials: importRoutes('./views/partials'),
  api: importRoutes('./api'),
};

exports = module.exports = function (app) {
  app.get('/', routes.views.index);
  app.get('/contact-list', routes.views.contactList);
  app.get('/add-contact', routes.views.addContact);
  app.post('/add-contact', routes.api.contact.post);
};