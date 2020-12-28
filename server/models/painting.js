import mongoose from 'mongoose';

const paintingSchema = mongoose.Squema({
    name: {
        type: String,
        default: ''
    },
    paintType: String,
    image: {
        data: Buffer,
        contentType: String
    },
    pointColor: {
        type: String,
        default: ''
    },
    brushtrokeColor: {
        type: String,
        default: ''
    },
    collage: {
        type: Boolean,
        default: false
    }

});

var Painting = mongoose.model('Painting', paintingSchema);
export default Painting;