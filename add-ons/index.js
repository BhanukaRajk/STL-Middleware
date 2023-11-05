import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mainRouter from './routes/main.router.js';
dotenv.config();

const app = express();

const port = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());
app.use('/', mainRouter);

app.listen(port, () => {
    console.log(`ADD ONS Server Listening on port ${port}`);
}); 
