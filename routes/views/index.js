const keystone = require('keystone');

module.exports = function (req, res) {
  let view = new keystone.View(req,res),
  locals = res.locals;
  locals.section = 'testimonials';
  view.query('Testimonials',keystone.list('Testimonial').model.find());
  view.query('news',keystone.list('News').model.find().sort('-createdAt'));
  view.render('index');
};