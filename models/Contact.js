const keystone = require('keystone');
const Contact = new keystone.List('Contact');
const Types = keystone.Field.Types;

Contact.add({
  FirstName:{type:String,required:true,initial:true},
  LastName:{type:String,required:true,initial:true},
  Email:{type:Types.Email,required:true,initial:true},
  Phone:{type:Types.Text,required:false,initial:true},
  Subscribed:{type:Types.Text,required:false,initial:true},
  ContactType:{type:Types.Text,required:false,initial:true},
  OrgName:{type:Types.Text,required:false,initial:true},
  Message:{type:Types.Text,initail:true},
  createdAt: {type:Types.Date, default:Date.now}
});

Contact.defaultColumns = 'FirstName, LastName, Email';
Contact.register();