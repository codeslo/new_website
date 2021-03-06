var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

//Common Middleware
keystone.pre('render', middleware.flashMessages);
keystone.pre('routes', middleware.initLocals);
keystone.pre('routes', middleware.initErrorHandlers);

keystone.set('500', function(err, req, res, next) {
  var title, message;
  if (err instanceof Error) {
      message = err.message;
      err = err.stack;
  }
  res.err(err, title, message);
});

keystone.set('404', function(req, res, next) {  
  res.notfound();
});

//Load routes
var routes = {
  views: importRoutes('./views'),
  partials: importRoutes('./views/partials'),
  api: importRoutes('./api'),
};

//Bind routes
exports = module.exports = function (app) {
  app.get('/', routes.views.index);   
  app.get('/article/:slug', routes.views.article);  
  app.post('/add-contact', routes.api.contact.post);  
  app.post('/api/subscribe', routes.api.subscribe.post);  
};