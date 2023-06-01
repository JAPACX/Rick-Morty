
const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    const { id } = req.params;

    axios.get(`${URL}${id}`)
        .then(response => {
            const { id, image, name, gender, species } = response.data;
            const character = {
                id,
                name,
                species,
                image,
                gender,
            };
            return res.status(200).send(character);
        })
        .catch(error => {
            return res.status(500).send(error.message);
        });
};

module.exports = getCharById;
