import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const FRONTEND = process.env.FRONTEND_SERVER || 'http://localhost:5173';
const BACKEND = process.env.BACKEND_SERVER || 'http://localhost:3001';
const PORT = process.env.PORT || 3002;


const io = new Server(server, {
    cors: {
        origin: [FRONTEND, BACKEND],
    }
});

io.on('connection', (socket) => {

    socket.on('joinRoom', (roomID) => {
        socket.join(roomID);
        console.log('user joined room', roomID);
    });

    socket.on('sendEvent', (data) => {
        console.log(data);
        const receiverID = data.receiverID;
        if (receiverID) {
            io.to(receiverID).emit('receiveEvent', data);
        } else {
            console.log('Receiver not found:', data.receiverID);
        }
    });

    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
    });
});

server.listen(PORT, () => {
    console.log('listening on :', PORT);
});