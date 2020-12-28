import mongoose from 'mongoose';

const contactSchema = mongoose.Squema({
    name: String,
    email: String,
    phone: String,
    date: Date,
    message: String

});

var Contact = mongoose.model('Contact', contactSchema);
export default Contact;