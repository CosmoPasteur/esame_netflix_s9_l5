import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container fluid className="d-flex justify-content-center bg-dark text-white">
        {/* ICONE */}
        <div>
          <Row className="mb-3 mt-5">
            <Col className="text-center">
              <a href="#" className="text-light mx-2">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-light mx-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light mx-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light mx-2">
                <i className="fab fa-youtube"></i>
              </a>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={3}>
              <a href="#" className="text-light d-block">
                Audio and Subtitles
              </a>
            </Col>
            <Col md={3}>
              <a href="#" className="text-light d-block">
                Media Center
              </a>
            </Col>
            <Col md={3}>
              <a href="#" className="text-light d-block">
                Privacy
              </a>
            </Col>
            <Col md={3}>
              <a href="#" className="text-light d-block">
                Contact Us
              </a>
            </Col>
          </Row>
          <Row className="text-center mt-2">
            <Col md={3}>
              <a href="#" className="text-light d-block">
                Audio Description
              </a>
            </Col>
            <Col md={3}>
              <a href="#" className="text-light d-block">
                Investor Relations
              </a>
            </Col>
            <Col md={3}>
              <a href="#" className="text-light d-block">
                Legal Notices
              </a>
            </Col>
            <Col md={3}>
              <a href="#" className="text-light d-block">
                Help Center
              </a>
            </Col>
          </Row>
        </div>
      </Container>
      <Container fluid className="d-flex justify-content-center bg-dark text-white">
        <Row className="text-center mt-3">
          <Col>
            <button className="btn btn-outline-light">Service Code</button>
          </Col>
        </Row>

        <Row className="text-center mt-3">
          <Col>
            <p className="m-0">&copy; 2024 YourCompany, Inc.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
