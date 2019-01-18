const keystone = require('keystone');

let Testimonial = new keystone.List('Testimonial');

Testimonial.add({
    name: {type:String,unique:true,initial:true},
    title: {type:String,initial:true},
    quote: {type:String, initial:true},
    image: {type:keystone.Field.Types.CloudinaryImage,initial:true}
});

Testimonial.defaultColumns = 'name, title';
Testimonial.register();