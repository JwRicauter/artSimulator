import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

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


const CONNECTION_URL = "mongodb+srv://wricauter:Fuckcomunism.12@cluster0.xfm72.mongodb.net/<dbname>?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);







//const client = new MongoClient(uri, { useNewUrlParser: true });
//const MongoClient = require('mongodb').MongoClient;
//client.connect(err => {
//  const collection = client.db("test").collection("devices");
//  // perform actions on the collection object
//  client.close();
//});