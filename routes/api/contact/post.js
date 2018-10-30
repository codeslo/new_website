var keystone = require('keystone');
var Contact = keystone.list('Contact');

module.exports = function (req, res) {
  if (!req.body.first || !req.body.last || !req.body.email) {
    return res.send({ status: 'incomplete data set' });
  }

  req.body.name = {};
  req.body.name.first = req.body.first;
  req.body.name.last = req.body.last;

  var newContact = new Contact.model();
  console.log(newContact, req.body);
  Contact.updateItem(newContact, req.body, function (error) {
    res.locals.enquirySubmitted = true;
    if (error) res.locals.saveError = true;
    console.log(error);
    res.render('addContact');
  });
};