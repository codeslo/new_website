var keystone = require('keystone');

var Contact = new keystone.List('Contact');

Contact.add({
  name: { type: keystone.Field.Types.Name, required: true, initial: true },
  email: { type: keystone.Field.Types.Email, required: true, initial: true },
  message: { type: keystone.Field.Types.Textarea, required: true, initial: true }
});

Contact.defaultColumns = 'name, email, message';
Contact.register();