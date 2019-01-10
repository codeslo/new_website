var keystone = require('keystone');
var Contact = keystone.list('Contact');

// save contact to DB
module.exports = function (req, res) {
  let contact = {};
  if(!req.body.contactform_botcheck){
    contact.Message = req.body.contactform_message;
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
      req.flash('error', 'Something went wrong. You can email us at info@codeslo.com')
      return res.redirect("/");
    }
    req.flash('success', 'We got your message and we\'ll respond soon. Thanks for contacting CodeSLO.');
    return  res.redirect("/");
    //return res.send({data:"got message"})    
  });  
};

// email contact to matt