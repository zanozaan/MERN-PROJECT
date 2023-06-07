const Movie = require('../../models/movie.models');

//READ ALL
exports.getMovie = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

//CREATE
exports.saveMovie = async (req, res) => {
  const movie = new Movie(req.body)
  try {
    const insertedmovie = await movie.save();
    res.status(201).json(insertedmovie);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

//READ BYID
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.json(movie);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

//UPDATE
exports.updateMovie = async (req, res) => {
  try {
    const updatedmovie = await Movie.updateOne({_id:req.params.id}, {$set: req.body});
    res.status(200).json(updatedmovie);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

//DELETE
exports.deleteMovie = async (req, res) => {
  try {
    const deletedmovie = await Movie.deleteOne({_id:req.params.id});
    res.status(200).json(deletedmovie);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};
