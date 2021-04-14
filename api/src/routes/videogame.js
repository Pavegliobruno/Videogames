require("dotenv").config();
const { Router } = require('express');
const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db.js')

const router = Router();

// Obtengo el detalle de un videogame en particular 

router.get('/:id', async function (req, res) {
    const { id } = req.params;
    const gameDB = await Videogame.findOne({ where: { id: id}, include: [Genre] });

    if (gameDB === null) {
        const gameID = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
            .then(response => response.data)
            .then(data => {
                let X = data;
                console.log("estoooo" + X)
                const information = {
                    name: X.name,
                    image: X.background_image,
                    genres: X.genres && X.genres.map((p) =>
                        p.name).filter(p => p != null).join(', '),
                    description: X.description_raw,
                    released: X.released,
                    rating: X.rating,
                    platforms: X.platforms && X.platforms.map((p) =>
                        p.platform.name).filter(p => p != null).join(', ')
                }
                if (X.detail === "Not found.") {
                    res.status(500).send({ error: "ID not found"})
                } else {
                    
                    res.json(information)
                }
            })
    } else {
        res.json(gameDB)
    }
});

module.exports = router;