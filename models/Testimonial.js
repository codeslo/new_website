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
    image: {
        type: Types.CloudinaryImage,
        generateFilename: function (file, attemptNumber, callback) {
            var originalname = file.originalname;
            var filenameWithoutExtension = originalname.substring(0, originalname.lastIndexOf('.'));
            var timestamp = new Date().getTime();
            return `${filenameWithoutExtension}-${timestamp}`;
        },
        whenExists: 'overwrite',
        autoCleanup : true,
        select : true
    }
});

Testimonial.schema.virtual('canAccessKeystone').get(function () {
    return true;
});

Testimonial.defaultColumns = 'id, displayName, email';
Testimonial.register();