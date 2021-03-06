const keystone = require('keystone');

module.exports = function (req, res) {
  let view = new keystone.View(req,res),
  locals = res.locals;  
  view.query('Testimonials',keystone.list('Testimonial').model.find());
  view.query('news',keystone.list('News').model.find().sort('-createdAt').limit(4));
  view.render('index');
  locals.view = 'index';
};