const express                   = require('express')
const router                    = express.Router()
const { getMovie, 
    getMovieById, 
    saveMovie,
    updateMovie,
    deleteMovie
} = require('../app/controller/movie.controller')

//CREATE
router.post('/movies', saveMovie)

//READ ALL
router.get('/movies', getMovie)

//READ BYID
router.get('/movies/:id', getMovieById)

//UPDATE
router.patch('/movies/:id', updateMovie)

//DELETE
router.delete('/movies/:id', deleteMovie)


module.exports = router  