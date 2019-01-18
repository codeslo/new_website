const keystone = require('keystone');
const News = new keystone.List('News', {autokey: {path:'slug',from:'Title',unique:true}});
const Types = keystone.Field.Types;

News.add({    
    slug: {type: String,noedit:true,unique:true},
    Image:{type:Types.CloudinaryImage,initial:true},
    Title:{type:Types.Text,required:true,initial:true},
    Content:{type:Types.Html, wysiwyg:true, initial:true},    
    createdAt: {type:Types.Date, default:Date.now(),initial:true}    
  }); 

  News.defaultColumns = 'createdAt, Title';
  News.register();