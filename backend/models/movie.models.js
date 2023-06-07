const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    cover: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }, 
    rating: {
        type: String,
        required: true
    }, 
    releaseDate: {
        type: String,
        required: true
    }, 
    price: {
        type: String,
        required: true
    }, 
})

module.exports = mongoose.model('Movie', movieSchema)