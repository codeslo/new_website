var keystone = require('keystone');
var Contact = keystone.list('Contact');

module.exports = function (req, res) {
  req.body.name = {};
  req.body.name.first = req.body.first;
  req.body.name.last = req.body.last;

  var newContact = new Contact.model();
  console.log(newContact, req.body);
  Contact.updateItem(newContact, req.body, function (error) {
    if (error) {
      console.log(error);
      return res.send({ message: 'Error' });
    }
    return res.send({ message: 'Message Sent!' });
  });
};