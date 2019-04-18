const keystone = require("keystone");
const nodemailer = require("nodemailer");
const Contact = keystone.list("Contact");
const request = require("request");

// save contact to DB
module.exports = function(req, res) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const verificationURL =
    "https://www.google.com/recaptcha/api/siteverify?secret=" +
    secretKey +
    "&response=" +
    req.body["g-recaptcha-response"] +
    "&remoteip=" +
    req.connection.remoteAddress;

  request(verificationURL, function(error, response, body) {
    body = JSON.parse(body);

    if (body.success !== undefined && !body.success) {
      req.flash(
        "error",
        "Something went wrong. Google thinks you are a robot. If you're human you can email us at info@codeslo.com"
      );
      return res.redirect("/");
    } else {
      let contact = {};
      if (!req.body.contactform_botcheck) {
        contact.Message = req.body.contactform_message;
        contact.FirstName = req.body.contactform_first;
        contact.LastName = req.body.contactform_last;
        contact.Email = req.body.contactform_email;
        contact.Phone = req.body.contactform_tel;
        contact.Subscribed = req.body.contactform_subscribe;
        contact.ContactType = req.body.contactform_ind_org;
        contact.OrgName = req.body.contactform_org_name;
      } else {
        console.log("Bot contact detected. No DB operations performed.");
      }

      var newContact = new Contact.model();
      console.log(newContact, contact);
      Contact.updateItem(newContact, contact, function(error) {
        if (error) {
          console.log(error);
          req.flash(
            "error",
            "Something went wrong. You can email us at info@codeslo.com"
          );
          return res.redirect("/");
        }
        req.flash(
          "success",
          "We got your message and we'll respond soon. Thanks for contacting CodeSLO."
        );
        return res.redirect("/");
        //return res.send({data:"got message"})
      });

      // email contact to matt
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASS
        }
      });

      const mailOptions = {
        from: req.body.contactform_email,
        replyTo: req.body.contactform_email,
        to: "codeslotest@gmail.com",
        envelope: {
          from: req.body.contactform_email,
          to: "codeslotest@gmail.com"
        },
        subject: "Email from CodeSLO contact form",
        html:
          "<h3>From: </h3>" +
          req.body.contactform_first +
          " " +
          req.body.contactform_last +
          "<h3>Email: </h3>" +
          req.body.contactform_email +
          "<h3>Message: </h3>" +
          req.body.contactform_message
      };

      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          return console.log(error);
        }
        console.log(info.response);
      });
    }
  });
};
