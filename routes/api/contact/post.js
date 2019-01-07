var keystone = require('keystone');
var Contact = keystone.list('Contact');

// save contact to DB
module.exports = function (req, res) {
  let contact = {};
  if(!req.body.contactform_botcheck){
    contact.FirstName = req.body.contactform_first;
    contact.LastName = req.body.contactform_last;
    contact.Email = req.body.contactform_email;
    contact.Phone = req.body.contactform_tel;
    contact.Subscribed = req.body.contactform_subscribe;
    contact.ContactType = req.body.contactform_ind_org;
    contact.OrgName = req.body.contactform_org_name;
  }else{
    console.log("Bot contact detected. No DB operations performed.");
  }
  
  var newContact = new Contact.model();
  console.log(newContact, contact);
  Contact.updateItem(newContact, contact, function (error) {
    if (error) {
      console.log(error);
      return res.send({ message: 'Error' });
    }
    req.flash('success', 'Thanks for contacting us, we\'ll get back to you soon.');
    return  res.redirect("/");    
  });  
};

// email contact to matt