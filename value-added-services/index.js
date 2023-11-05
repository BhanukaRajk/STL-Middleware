import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import mainRouter from './routes/main.router.js';
dotenv.config();

const app = express();

const port = process.env.PORT || 3008;
const mongo_uri = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use('/vas', mainRouter);

mongoose.connect(mongo_uri, { dbName: 'telco' })
    .then(() => console.log('=> Connected to MongoDB'))
    .catch(err => console.log(err));

app.listen(port, () => {
    console.log(`VAS Server Listening on port ${port}`);
}); 