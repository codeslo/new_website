const keystone = require('keystone');
const nodemailer = require('nodemailer');
if(process.env.NODE_ENV !== 'production') {
  var config = require('../../../secrets');  
}
const Contact = keystone.list('Contact');

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
      req.flash('error', 'Something went wrong. You can email us at info@codeslo.com');
      return res.redirect("/");
    }
    req.flash('success', 'We got your message and we\'ll respond soon. Thanks for contacting CodeSLO.');
    return  res.redirect("/");
    //return res.send({data:"got message"})    
  });
  
  // email contact to matt
  var transporter = nodemailer.createTransport({  
    service: 'gmail',
    auth: {
           user: process.env.NODEMAILER_USER || config.NODEMAILER_USER,
           pass: process.env.NODEMAILER_PASS || config.NODEMAILER_PASS
       }
   });

  const mailOptions = {
    from: req.body.contactform_email,
    replyTo: req.body.contactform_email,
    to: 'codeslotest@gmail.com',
    envelope: {
      from: req.body.contactform_email
    }, 
    subject: 'Email from CodeSLO contact form', 
    html: '<h3>From: </h3>'+req.body.contactform_first+' '+req.body.contactform_last+'<h3>Email: </h3>'+ req.body.contactform_email+'<h3>Message: </h3>'+req.body.contactform_message
  };  

  transporter.sendMail(mailOptions, function(error, info) {
    if(error){
      return console.log(error);
    }
    console.log(info.response);

  });

};

