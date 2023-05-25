const axios = require('axios');

const getCharDetail = (res, ID) => {
    axios.get(`https://rickandmortyapi.com/api/character/${ID}`)
        .then(response => {
            const { image, name, gender, status, origin, species } = response.data;
            const character = {
                image, 
                name, 
                gender, 
                status, 
                origin, 
                species
            };
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(JSON.stringify(character))

        })
        .catch(error => {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end(error.message)
        });
}


module.exports = {
    getCharDetail,
}
