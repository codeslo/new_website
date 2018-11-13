const keystone = require('keystone');

let Testimonial = new keystone.List('Testimonial');

Testimonial.add({
    name: {
        type: String,
        unique: true
    },
    title: {
        type: String
    },
    quote:{
        type:String
    },
    image: {
        type: keystone.Field.Types.CloudinaryImage,
    }
});

Testimonial.defaultColumns = 'name, title, quote, image';
Testimonial.register();