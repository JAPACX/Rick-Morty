const { Router } = require('express');
const getCharById = require('../controllers/getCharById')
const getCharDetail = require('../controllers/getCharDetail')


const routerfavs = require('../utils/favs');
const router = Router();


router.get("/rickandmorty/onsearch/:id", getCharById)
router.get("/rickandmorty/detail/:id", getCharDetail )
router.use("/rickandmorty/favorites/", routerfavs )


module.exports = router;
