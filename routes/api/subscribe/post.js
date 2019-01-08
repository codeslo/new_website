var keystone = require('keystone');
var Contact = keystone.list('Contact');

// save contact to DB
module.exports = function (req, res) {
  let contact = {};
  if(!req.body.subscribe_botcheck){
    contact.FirstName = 'null';
    contact.LastName = 'null';
    contact.Email = req.body.subscribe_email;    
    contact.Subscribed = 'subscribed';    
  }else{
    console.log("Bot contact detected. No DB operations performed.");
  }
  
  var newContact = new Contact.model();
  console.log(newContact, contact);
  Contact.updateItem(newContact, contact, function (error) {
    if (error) {
      console.log(error);
      req.flash('error', 'Something went wrong. You can email us at info@codeslo.com to let us know you want to subscribe')
      return res.redirect("/");
    }    
    req.flash('success', 'You\'re in. Thanks for signing up for emails from CodeSLO');
    return  res.redirect("/");
    //return res.send({data:"got email address"})    
  });  
};