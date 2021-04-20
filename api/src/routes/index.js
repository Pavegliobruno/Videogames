  
const { Router } = require('express')

/* const homeVideogames = require('./videogames') */
const videogame = require('./videogame');
const videogames = require('./videogames');
// const videogameDetail = require('./videogames')
const genres = require('./genres')
const createVideogame = require('./createVideogame')

const router = Router();

// Configuración de los routers
    // Busco un videogame por su ID 
router.use('/videogame', videogame);
    // Busco los 100 primeros videogames o ?name="nemo" busco los de ese nombre
router.use('/videogames', videogames);
  // Busco un video juego por su genero
router.use('/genres', genres); 
  // Creo un video juego POST
router.use('/videogame', createVideogame)

module.exports = router;
