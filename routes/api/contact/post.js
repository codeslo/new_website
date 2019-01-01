var keystone = require('keystone');
var Contact = keystone.list('Contact');

// save contact to DB

module.exports = function (req, res) {
  console.log(req.body);
  if(!req.body.contactform-botcheck){
    let contact = {};
    contact.FirstName = req.body.contactform-first;
    contact.LastName = req.body.contactform-last;
    contact.Email = req.body.contactform-email;
    contact.Phone = req.body.contactform-tel;
    contact.Subscribed = req.body.contactform-subscribe;
    contact.ContactType = req.body.contactform-ind-org;
    contact.OrgName = req.body.contactform-org-name;
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
    return res.send({ message: 'Message Sent!' });
  });
};

// email contact to matt