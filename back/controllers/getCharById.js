
const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
    try {
      const { id } = req.params;
  
      const response = await axios.get(`${URL}${id}`);
      const { id: charId, status, name, species, origin, image, gender } = response.data;
  
      const character = {
        id: charId,
        status,
        name,
        species,
        origin,
        image,
        gender,
      };
  
      return res.status(200).send(character);
    } catch (error) {
      if (error) {
        return res.status(500).send(error.message);
      } else {
        return res.status(404).send("Not found");
      }
    }
  };

module.exports = getCharById;
