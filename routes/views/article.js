const keystone = require('keystone');

module.exports = function (req, res) {
  let view = new keystone.View(req,res);  
  view.query('news',keystone.list('News').model.findOne({slug: req.params.slug}, function(err, article) {
    if(err){
      console.log(err)
      req.flash('error', 'Something went wrong, we can\'t find that article. Sorry about that!')
      return res.redirect("/")
    } else{
      view.render('article',{article:article});
    }
    
  }));
    
};