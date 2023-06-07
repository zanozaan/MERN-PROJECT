import React, { useEffect, useState } from 'react';
import './AddMovie.css';
import axios from 'axios';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const [cover, setCover] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [releaseDate, setreleaseDate] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const movieData = {
        cover,
        title,
        genre,
        rating,
        releaseDate,
        price
      }
      const { data } = await axios.post(
        "http://localhost:3001/movies", movieData
      );
      if (data?.success) {
        toast.error(data?.message); 
      } else {
        toast.success("Product created successfully"); 
        navigate("/list");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong"); 
    }
  };

  return (
    <div className='container mt-5'>
      <div className='columns addmovie'>
        <div className='column is-half'>
          <form onSubmit={handleCreate}> 
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
                  handleCreate(e);
                  navigate('/list');
                }}
              >
                Save
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMovie;
