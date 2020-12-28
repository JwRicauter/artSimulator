import mongoose from 'mongoose';

const shopSchema = mongoose.Squema({
    name: String,
    email: String,
    shipping: String,
    paintings: Map

});

var Shop = mongoose.model('Shop', shopSchema);
export default Painting;