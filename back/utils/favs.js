const baseDeDatosFalsa =[]

server.post("/posts", (req, res) => {
    const { author, title, contents } = req.body

    if (author && title && contents) {
        const newPublication = {
            id: ++id,
            author: author,
            title: title,
            contents: contents,
        }
        publications.push(newPublication)
        return res.status(200).send(publications)
    } else {
        return res
            .status(400)
            .send({ error: "No se recibieron los parámetros necesarios para crear la publicación" })
    }
})

server.get("/posts", (req, res) => {
    const { author, title } = req.query
    const filteredContents = publications.filter(
        (publication) => publication.author === author && publication.title === title
    );

    if (filteredContents.length > 0) {
        return res
            .status(200)
            .send(filteredContents)
    } else {
        return res
            .status(400)
            .send({ error: "No existe ninguna publicación con dicho título y autor indicado" })
    }
})

server.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    const indexToDelete = publications.findIndex((publication) => publication.id == id);

    if (indexToDelete !== -1) {
        publications.splice(indexToDelete, 1);
        return res.status(200).send({ success: true });
    }

    else {
        return res
            .status(400)
            .send({ error: "No se recibió el id correcto necesario para eliminar la publicación" });
    }
});

module.exports = baseDeDatosFalsa;
