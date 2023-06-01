
const express = require('express');
const router = require('./routes/index');

const server = express();
const PORT = 3001;

// Middleware que ejecuta el método json en express
server.use(express.json());

// Middleware para la ruta "/"
server.use('/', router);

server.listen(PORT, () => {
    console.log('Server raised in port ' + PORT);
});