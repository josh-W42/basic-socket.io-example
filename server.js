const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors()); // allow all CORS requests

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log('Server Running on port: ', PORT);
});

const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
});

io.on('connection', socket => {
  console.log(`connect: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`disconnect: ${socket.id}`);
  });
});

setInterval(() => {
  io.emit('message', new Date().toTimeString());
}, 5000);
