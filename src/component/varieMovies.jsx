import { Col, Row } from "react-bootstrap";

function VarieMovie(props) {
  console.log(props.movies);
  return (
    <Row>
      {props.movies.slice(0, 6).map((movie) => (
        <Col xs={6} md={3} lg={2} key={movie.imdbID} className="bg-dark px-1">
          <div>
            <img src={movie.Poster} alt="poster" className="img-fluid" />
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default VarieMovie;
