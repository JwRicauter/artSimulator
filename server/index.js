import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import ShopRoutes from '../server/routes/shop';
import PaintingRoutes from '../server/routes/painting';
import ContactRoutes from '../server/routes/contact';
import AboutMeRoutes from '../server/routes/aboutMe';


const app = express()

app.use(bodyParser.json({
    limit: '30mb',
    extended: true
}))

app.use(bodyParser.urlencoded({
    limit: '30mb',
    extended: true
}))

app.use(cors());


app.use('/shop', ShopRoutes);
app.use('/painting', PaintingRoutes);
app.use('/contact', ContactRoutes);
app.use('/aboutme', AboutMeRoutes);


const CONNECTION_URL = "mongodb+srv://wricauter:Fuckcomunism.12@cluster0.xfm72.mongodb.net/<dbname>?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);