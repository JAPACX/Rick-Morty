let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body;
    myFavorites.push(character);
    res.json(myFavorites);
};

const deleteFav = (req, res) => {
    const { id } = req.params;
    const indexToDelete = myFavorites.findIndex((element) => element.id === parseInt(id));

    if (indexToDelete >= 0) {
        myFavorites.splice(indexToDelete, 1);
        res.json(myFavorites);
    } else {
        return res.status(400).send("ID INVALIDO O NO EXISTE")
    }


}


module.exports = {
    postFav,
    deleteFav
};
