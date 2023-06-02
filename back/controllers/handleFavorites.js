let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;
  myFavorites.push(character);
  res.json(myFavorites);
};

const deleteFav = (req, res) => {
    const { id } = req.params;
    const indexToDelete = myFavorites.findIndex((element) => element.id === parseInt(id));
    myFavorites.splice(indexToDelete, 1);
    res.json(myFavorites);
}


module.exports = {
    postFav,
    deleteFav
};
