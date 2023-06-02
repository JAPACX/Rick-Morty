const express = require("express");
const routerfavs = express.Router();

const favs = [];

routerfavs.post("/", (req, res) => {
    const { char } = req.body;

    favs.push(char);

    return res.status(200).send({ success: true });
});

routerfavs.get("/", (req, res) => {
    return res.status(200).send(favs);
});

routerfavs.delete("/:id", (req, res) => {
    const { id } = req.params;
    const indexToDelete = favs.findIndex((char) => char.id == id);

    if (indexToDelete !== -1) {
        favs.splice(indexToDelete, 1);
        return res.status(200).send({ success: true });
    } else {
        return res
            .status(400)
            .send({ error: "No se recibió el id correcto necesario para eliminar el personaje favorito" });
    }
});

module.exports = routerfavs;
