import mongoose from 'mongoose';

const aboutMeSchema = mongoose.Squema({
    message: {
        type: String,
        default: ''
    },
    image: {
        data: Buffer,
        contentType: String
    }

});

var AboutMe = mongoose.model('AboutMe', aboutMeSchema);
export default AboutMe;