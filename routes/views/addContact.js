module.exports = function (req, res) {
  res.locals.enquirySubmitted = false;
  res.render('addContact');
};