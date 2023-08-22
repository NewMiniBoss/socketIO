import express from 'express';
import url from 'url';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const port = process.env.porta || 3000;
const currentPath = url.fileURLToPath(import.meta.url);
const publicDirectory = path.join(currentPath, '../..', 'public');
const serverHtpp = http.createServer(app);
const io = new Server(serverHtpp);

app.use(express.static(publicDirectory));

serverHtpp.listen(
    port, function startServer() {
        console.log(`servidor rodando em porta: http://localhost:${port}`);
    }
);

export default io;