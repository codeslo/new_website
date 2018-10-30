// This is mostly for initial testing, this view and route will not be in the final site.
const keystone = require('keystone');
const Contact = keystone.list('Contact');

module.exports = function (req, res) {
  const view = new keystone.View(req, res);
  view.query('contacts', Contact.model.find({}));
  view.render('contactlist');
};