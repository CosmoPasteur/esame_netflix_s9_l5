import { Container, Row, Col } from "react-bootstrap";
// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container fluid className="text-center">
        {/* Social Icons */}
        {/* <Row className="mb-4">
          <Col>
            <a href="#" className="text-light mx-2">
            <FaFacebook size={25} className="footer-icon me-2" />
            </a>
            <a href="#" className="text-light mx-2">
              < className="footer-icon me-2">
            </a>
            <a href="#" className="text-light mx-2">
              < className="fab fa-twitter"/>
            </a>
            <a href="#" className="text-light mx-2">
               <FaYoutube size={25} className="footer-icon" />
            </a>
          </Col>
        </Row> */}

        <Row>
          {[
            "Audio and Subtitles",
            "Media Center",
            "Privacy",
            "Contact Us",
            "Audio Description",
            "Investor Relations",
            "Legal Notices",
            "Help Center",
            "Gift Cards",
            "Terms of Use",
            "Corporate Information",
            "Cookie Preferences",
          ].map((text, index) => (
            <Col key={index} xs={6} md={3} className="mb-2">
              <a href="#" className="text-light" style={{ textDecoration: "none" }}>
                {text}
              </a>
            </Col>
          ))}
        </Row>

        <Row className="mt-4">
          <Col>
            <button className="btn btn-outline-light">Service Code</button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="m-0">&copy; 2024 YourCompany, Inc.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
