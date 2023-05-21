const fs = require("fs")
const http = require("http")
const character = require('./utils/data')

const PORT = 3001

http.createServer(function (req, res) {

    console.log(`Server raised in port ${PORT}`);

    res.setHeader('Access-Control-Allow-Origin', '*');

    const id = parseInt(req.url.split('/').pop(), 10) // req url trae toda la url del navegador, split la separa en un array por cada '/', pop me regresa el ultimo y parseInt lo convierte en un numero, y el menos uno se usa para que corresponda con los id del personaje 

    if (req.url.includes('/rickandmorty/')) {

        //words.filter(word => word.length > 6);

        if(character[id]){
            const response = character.filter(char => char.id === id)
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(response[0]))
        }

        else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end('No hay personajes con ese ID')
        }

    }

}).listen(PORT, 'localhost') 