import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const API_KEY = "ce6d4979";

const MovieGallery = ({ title, movieTitles }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies = await Promise.all(
        movieTitles.map(async (movie) => {
          const res = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${API_KEY}`);
          return res.ok ? await res.json() : null;
        })
      );
      setMovies(fetchedMovies.filter((movie) => movie));
    };

    fetchMovies();
  }, [movieTitles]);

  return (
    <Container className="my-4">
      <h2 className="text-light">{title}</h2>
      <Row>
        {movies.map((movie, index) => (
          <Col key={index} md={4} className="mb-3">
            <Card className="bg-dark text-light" style={{ width: "12rem" }}>
              <Card.Img
                variant="top"
                src={movie.Poster}
                alt={movie.Title}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Year}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const Movie = () => {
  return (
    <div className="bg-black text-white py-5">
      <MovieGallery title="Trending Now" movieTitles={["The Fast and the Furious", "2 Fast 2 Furious", "Fast Five"]} />
      <MovieGallery
        title="Watch it Again"
        movieTitles={[
          "The Lord of the Rings: The Fellowship of the Ring",
          "The Lord of the Rings: The Two Towers",
          "The Lord of the Rings: The Return of the King",
        ]}
      />
      <MovieGallery title="New Releases" movieTitles={["Batman Begins", "The Dark Knight", "The Dark Knight Rises"]} />
    </div>
  );
};

export default Movie;
