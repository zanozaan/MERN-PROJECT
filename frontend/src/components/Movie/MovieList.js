import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './MovieList.css';
import { Button } from 'react-bootstrap';


const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await axios.get("http://localhost:3001/movies");
      setMovies(response.data);
    } catch (error) {
      console.log("Failed to get movies", error);
    }
  };

  const navigate = useNavigate();

  const deleteMovie = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/movies/${id}`);
      getMovies(); // Mengupdate daftar film setelah menghapus film
    } catch (error) {
      console.log("Failed to delete movie", error);
    }
  };

  return (
    <div className='container mt-5'>
      <table className="table movielist">
      <Button className='btn btn-success' href='/add'>Add Movie</Button>
        <thead>
          <tr className='h5'>
            <th scope="col">Poster</th>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Rating</th>
            <th scope="col">ReleaseDate</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <th scope="row">
                <img src={`http://localhost:3001/uploads/${movie.cover}`} alt="Movie Poster" className='posterMovie' />
              </th>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.rating}</td>
              <td>{movie.releaseDate}</td>
              <td>{movie.price}</td>
              <td>
                <Button href={`edit/${movie._id}`} type="button" className='btn btn-primary'>Edit</Button>
                <button type="button" className='btn btn-danger' onClick={() => deleteMovie(movie._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
