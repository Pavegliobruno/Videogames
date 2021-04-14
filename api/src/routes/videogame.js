require("dotenv").config();
const { Router } = require('express');
const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db.js')

const router = Router();


// Obtengo el detalle de un videogame en particular 

router.get('/:id', function (req, res) {
    const { id } = req.params;

    Videogame.findOne({ where: { id: id}, include: [Genre] })
    .then((data) => { 
        if (data === null) {
            axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
                .then(response => response.data)
                .then(data => {
                    let X = data;
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
                    return res.json(information)
                })
                .catch(() => { res.status(404).json({ error: "ID not found" })
                })
        } else {
            res.json(data)
        }
    })
});

module.exports = router;