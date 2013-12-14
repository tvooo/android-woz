var io = require('socket.io').listen(9003),
    prompt = require('prompt');

prompt.start();

function sendCommand() {
    prompt.get(['command'], function (err, result) {
        io.sockets.emit('sendEvent', { item: result.command });
        sendCommand();
    });
}

io.set('log level', 1);

sendCommand();

io.sockets.on('connection', function (socket) {
    console.log('Client connected');
});
