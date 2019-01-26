const keystone = require('keystone');
const News = new keystone.List('News', {autokey: {path:'slug',from:'Title',unique:true}});
const Types = keystone.Field.Types;

News.add({    
    slug: {type: String,noedit:true,unique:true},
    Image:{type:Types.CloudinaryImage,required:true,initial:true},
    Title:{type:Types.Text,required:true,initial:true},
    Content:{type:Types.Html, wysiwyg:true,required:true,initial:true},
    ShareDescription: {type:Types.Textarea, height:80, required:true, initial:true, note: "A clear description that entices users to click, at least two sentences long."},    
    createdAt: {type:Types.Date, default:Date.now(),required:true,initial:true}       
  }); 

  News.defaultColumns = 'createdAt, Title';
  News.register();