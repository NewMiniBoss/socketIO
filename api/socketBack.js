import io from './server.js';

io.on('connection', function startSocket(socket) {
    console.log(`Um cliente se conectou! ID: ${socket.id}`);

    socket.on('realTimeTexto', (text) => {
        socket.broadcast.emit('realTimeTextoCliente', text);
    });
});