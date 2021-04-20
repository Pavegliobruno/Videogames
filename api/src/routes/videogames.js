require("dotenv").config();
const { Router } = require('express');
// const { Op } = require("sequelize");
const fetch = require('node-fetch');
const axios = require('axios');
const { API_KEY } = process.env;

const { Videogame, Genre } = require('../db.js');

const router = Router();


// Si me envia un name por query, busca los primeros 15 que tengan ese name en la api
// y despues, lo busca en la db y los concatenated

// Si no me envia un name, entrega los primeros 15 videojuegos

router.get('/', async function (req, res) {
    const { name } = req.query;
    if (name) {
        axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&page_size=15`)
        .then(response => response.data)
        .then(data => {
            let gamesDB = Videogame.findAll({ where: {name: name}});
            let gamesAPI = data.results.map((X) => {
                var game = {
                    name: X.name,
                    image: X.background_image,
                    genres: X.genres && X.genres.map((p) => p.name).filter(p => p != null).join(', '),
                    //platforms: X.platforms.map((p) => p.platform.name).filter(p => p != null).join(', '),
                    //source: 'Api',
                    id: X.id,
                    //rating: X.rating
                };
                return game;
            })
            res.json(gamesAPI.concat(gamesDB))
        })
        .catch(() => { res.status(404).json({ error: "Videogame not found" })})
    } else {
      let gamesResults = []
      let apiRAWG = `https://api.rawg.io/api/games?key=${API_KEY}`
      for (let index = 0; index < 5; index++) {
        let games = (await axios.get(apiRAWG)).data
        apiRAWG = games.next;
        let dataGame = games.results.map((G) => {
          var game = {
            name: G.name,
            image: G.background_image,
            genres: G.genres.map((gen) => gen.name),
            //platforms: G.platforms.map((p) => p.platform.name).filter(p => p != null).join(', '),
            //source: "Api",
            id: G.id,
            //rating: G.rating
          };
          return game
        })
        gamesResults = gamesResults.concat(dataGame)
      }
      let dbGames = await Videogame.findAll({ include: [Genre] })
      let jsonGames = dbGames.map((J) => J.toJSON())
      jsonGames.forEach(C => {
        C.source = "Created", 
        C.genres = C.genres.map((genre) => genre.name)
      });
      gamesResults = gamesResults.concat(jsonGames)
    
      res.json(gamesResults)
}
  
    
    
    /* else {
        axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=15`)
        .then(response => response.data)
        .then(data => {
            let videogames = data.results.map((X) => {
            var game = {
                name: X.name,
                image: X.background_image,
                genres: X.genres && X.genres.map((p) => p.name).filter(p => p != null).join(', '),
                // platforms: X.platforms.map((p) => p.platform.name).filter(p => p != null).join(', ')
            }
            return game;
            })
        res.json(videogames)
        })
        .catch((err) => { res.status(404).json({ err })})
    } */
});


module.exports = router;