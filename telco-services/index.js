import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/index.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = process.env.PORT || 3001;
const mongo_uri = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use('/api', router);

mongoose.connect(mongo_uri, { dbName: 'telco' })
    .then(() => console.log('=> Connected to MongoDB'))
    .catch(err => console.log(err));

app.listen(port, () => {
    console.log(`=> Listening on port ${port}`);
});

