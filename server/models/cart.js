import mongoose from 'mongoose';

const cartSchema = mongoose.Squema({
    name: String,
    email: String,
    shipping: String,
    paintings: Map

});

var Cart = mongoose.model('Cart', cartSchema);
export default Painting;