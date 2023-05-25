
const http = require("http")
const {getCharById} = require('./controllers/getCharById')

const PORT = 3001

http.createServer(function (req, res) {

    console.log(`Server raised in port ${PORT}`);

    res.setHeader('Access-Control-Allow-Origin', '*');

    const idUrl = parseInt(req.url.split('/').pop(), 10) // req url trae toda la url del navegador, split la separa en un array por cada '/', pop me regresa el ultimo y parseInt lo convierte en un numero, y el menos uno se usa para que corresponda con los id del personaje 

    getCharById(res, idUrl)

    if (req.url.includes('onsearch')) {

        getCharById(res, idUrl)
        
    }



}).listen(PORT, 'localhost') 