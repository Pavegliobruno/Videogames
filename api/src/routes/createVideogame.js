const { Router } = require('express');
const { Videogame, Genre } = require('../db.js');

const router = Router();

//Recibe la data colectada desde el formulario por el body
// Creo el videojuego en la db

router.post('/', async (req, res) => {
    const { name, description, released, rating, platforms, genres } = req.body;
    let platformJoin = platforms.join(', ')

    let gameCreated = await Videogame.create({
    name,
    description,
    released,
    rating,
    platforms: platformJoin
    })
    genres.forEach(async (P) => {
        let genresGame = await Genre.findOne({ where: { name: P } })
        gameCreated.addGenre(genresGame)
    })
    res.send( 'Videogame created successfully!' )
});


module.exports = router;