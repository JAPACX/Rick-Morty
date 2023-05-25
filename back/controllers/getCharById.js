const axios = require('axios');

const getCharById = (res, ID) => {
    axios.get(`https://rickandmortyapi.com/api/character/${ID}`)
        .then(response => {
            const { id, image, name, gender, species } = response.data;
            const character = {
                id,
                image,
                name,
                gender,
                species
            };
            console.log(character);
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(JSON.stringify(character))

        })
        .catch(error => {
            console.error(error);
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end(error.message)
        });
}


module.exports = {
    getCharById,
}
