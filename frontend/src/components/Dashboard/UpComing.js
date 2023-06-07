import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";

const UpComing = () => {
  const [movies, setMovies] = useState([]);

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

  return (
    <div className="cinemaBG">
      <Container>
        <br />
        <h1 className="text-dark NowPlaying">UPCOMING</h1>
        <br />
        <Row>
          {movies.map((movie, index) => (
            <Col md={3} className="movieWrapper" id="NowPlaying" href="/" key={movie._id}>
              <Card style={{ width: '17rem' }} className="bg-dark  text-center movieImage">
                <Image variant="center" src={`http://localhost:3001/uploads/${movie.cover}`} className="images" />
                <div className="text-white">
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
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

export default UpComing