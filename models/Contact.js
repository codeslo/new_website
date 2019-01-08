var keystone = require('keystone');

var Contact = new keystone.List('Contact');

Contact.add({
  FirstName:{type: keystone.Field.Types.Name,required:true,initial:true},
  LastName:{type:keystone.Field.Types.Name,required:true,initial:true},
  Email:{type:keystone.Field.Types.Email,required:true,initial:true},
  Phone:{type:keystone.Field.Types.Text,required:false,initial:true},
  Subscribed:{type:keystone.Field.Types.Text,required:false,initial:true},
  ContactType:{type:keystone.Field.Types.Text,required:false,initial:true},
  OrgName:{type:keystone.Field.Types.Text,required:false,initial:true},
  createdAt: {type:keystone.Field.Types.Date, default:Date.now}
});

// Contact.defaultColumns = 'name, email, message';
Contact.register();