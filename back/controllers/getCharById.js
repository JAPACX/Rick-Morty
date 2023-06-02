
const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    const { id } = req.params;

    axios.get(`${URL}${id}`)
        .then(response => {
            const { id, status, name, species, origin, image, gender} = response.data;
            const character = {
                id,
                status,
                name,
                species,
                origin,
                image,
                gender,
            };
            return res.status(200).send(character);
        })
        .catch(error => {
            if(error)return res.status(500).send(error.message);
            else{
                return res.status(404).send("Not found")
            }
        });
};

module.exports = getCharById;
