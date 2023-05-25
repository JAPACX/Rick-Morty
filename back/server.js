
const http = require("http")
const {getCharById} = require('./controllers/getCharById')
const {getCharDetail} = require('./controllers/getCharDetail')

const PORT = 3001

http.createServer(function (req, res) {

    console.log(`Server raised in port ${PORT}`);

    res.setHeader('Access-Control-Allow-Origin', '*');

    const idUrl = parseInt(req.url.split('/').pop(), 10) // req url trae toda la url del navegador, split la separa en un array por cada '/', pop me regresa el ultimo y parseInt lo convierte en un numero


    //  si la url contiene onsearch
    if (req.url.includes('onsearch')) {
        getCharById(res, idUrl)
        console.log(onsearch);
        return 
    }

    //  si la url contiene detail
    if (req.url.includes('detail')) {
        getCharDetail(res, idUrl)
        return
    }

    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end(`Not Found 404 esta ruta no existe`)

}).listen(PORT, 'localhost') 