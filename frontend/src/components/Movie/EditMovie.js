import React, { useEffect, useState } from 'react';
import './AddMovie.css';
import axios from 'axios';
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom';

const EditMovie = () => {
  const [cover, setCover] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [releaseDate, setreleaseDate] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();

useEffect(() => {
    getMoviesById();
}, []);

  const getMoviesById = async () => {
    const response = await axios.get(`http://localhost:3001/movies/${id}`);
    setCover(response.data.cover)
    setTitle(response.data.title)
    setGenre(response.data.genre)
    setRating(response.data.rating)
    setreleaseDate(response.data.releaseDate)
    setPrice(response.data.price)
  }

  const updateMovie = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3001/movies/${id}`, {
        cover,
        title,
        genre,
        rating,
        releaseDate,
        price
      });
      navigate('/list');
  } catch(error){
    console.log(error);
  }
};

  return (
    <div className='container mt-5'>
      <div className='columns addmovie'>
        <div className='column is-half'>
          <form onSubmit={updateMovie}> 
            <div className='field'>
              <label className='label'>Poster</label>
              <div className='control'>
                <input
                  type='form'
                  className='input'
                  value={cover}
                  onChange={(e) => setCover(e.target.value)}
                  placeholder='Add Url'
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Title</label>
              <div className='control'>
                <input
                  type='text'
                  className='input'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder='Add Title'
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Genre</label>
              <div className='control'>
                <input
                  type='text'
                  className='input'
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  placeholder='Add Genre'
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Rating</label>
              <div className='control'>
                <input
                  type='text'
                  className='input'
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  placeholder='Add Rating'
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Release Date</label>
              <div className='control'>
                <input
                  placeholder="Add Release Date"
                  type="date"
                  className="input"
                  value={releaseDate}
                  onChange={(e) => setreleaseDate(e.target.value)}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Price</label>
              <div className='control'>
                <input
                  type='text'
                  className='input'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder='Add Price'
                />
              </div>
            </div>
            <div className='field'>
              <div className='control'>
              <button
                className="btn btn-success"
                onClick={(e) => {
                  e.preventDefault();
                  updateMovie(e);
                  navigate('/list');
                }}
              >
                Update
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditMovie;
