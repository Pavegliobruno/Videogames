  
const { Router } = require('express')

/* const homeVideogames = require('./videogames') */
const videogame = require('./videogame');
// const videogames = require('./videogames');
// const videogameDetail = require('./videogames')
const genres = require('./genres')
const createVideogame = require('./createVideogame')

const router = Router();

// Configuración de los routers
    //
//router.use('/home', homeVideogames);
    // Busco un videogame por su ID
router.use('/games', videogame);
    //
//router.use('/videogames', videogames);
  //
//router.use('/videogames', videogameDetail);
  // Busco un video juego por su genero
router.use('/genres', genres);
  // Creo un video juego
router.use('/create', createVideogame)

module.exports = router;
