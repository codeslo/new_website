const keystone = require('keystone');

module.exports = function (req, res) {
  let view = new keystone.View(req,res);  
  view.query('news',keystone.list('News').model.findOne({slug: req.params.slug}, function(err, article) {
    view.render('article',{article:article});
  }));
    
};