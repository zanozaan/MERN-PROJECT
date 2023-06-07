import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NowPlaying = () => {
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

  const filterMoviesByGenre = () => {
    if (selectedGenre === "") {
      return movies; // Kembalikan semua film jika tidak ada genre yang dipilih
    } else {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }
  };  

  const navigate = useNavigate();

  return (
    <div className="cinemaBG">
      <Container>
        <br />
        <h1 className="text-dark NowPlaying">NowPlaying</h1>
        <br />
        <select class="form-select" 
        aria-label="Default select example" 
        value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="">All Genres</option>
          <option value="Action">Action</option>
          <option value="Crime">Crime</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Indonesian">Indonesian</option>
          <option value="Adventure">Adventure</option>
        </select>
        <br/>

        <Row>
        {filterMoviesByGenre().map((movie, index) => (
            <Col md={3} className="movieWrapper" id="NowPlaying" href="/" key={movie._id}>
              <Card style={{ width: '17rem' }} className="bg-dark  text-center movieImage">
                <Image variant="center" src={`http://localhost:3001/uploads/${movie.cover}`} className="images" />
                <div className="text-white">
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <div className="genres">
                      <a href="genre">{movie.genre}</a>
                    </div>
                    <Button variant="primary" onClick={() => navigate('/buyticket')}>BUY TIKET</Button>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </div>
  );
};

export default NowPlaying;
