const keystone = require('keystone');
const News = new keystone.List('News');
const Types = keystone.Field.Types;

News.add({
    Image:{type:Types.CloudinaryImage,initial:true},
    Title:{type:String,required:true,initial:true},
    Content:{type:String,required:true,initial:true},    
    createdAt: {type:Types.Date, default:Date.now}
  });

  News.register();