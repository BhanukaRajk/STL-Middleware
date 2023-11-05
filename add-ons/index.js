import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = process.env.PORT || 3006;

app.use(axios)
app.use(express.json());

app.listen(port, () => {
    console.log(`ADD ONS Server Listening on port ${port}`);
});