
const express = require('express');
const router = require('./routes/index');

const server = express();
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    console.log('Pasa por este Milddelware');
    next();
});
const PORT = 3001;

// Middleware que ejecuta el método json en express
server.use(express.json());

// Middleware para la ruta "/"
server.use('/rickandmorty', router);


server.listen(PORT, () => {
    console.log('Server raised in port ' + PORT);
});