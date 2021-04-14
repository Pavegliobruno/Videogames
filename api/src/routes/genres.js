require("dotenv").config();
const { Router } = require('express');
const axios = require('axios');
const { API_KEY } = process.env;
const { Genre } = require('../db.js');

const router = Router();

// Obtengo todos los posibles tipos de generos de videojuegos. Los trae de la api y los guarda en la db y los usa desde alla

router.get('/', function (req, res) {
    axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        .then(response => response.data)
        .then((data) => {
            data && data.results.forEach(p => {
                Genre.findOrCreate({
                    where: { name: p.name }
                })
            })
        })
        .then(() => {
            let genresDB = Genre.findAll()
            .then((genresDB) => res.json(genresDB))
        })
        .catch(err => console.error(err));
});

module.exports = router;