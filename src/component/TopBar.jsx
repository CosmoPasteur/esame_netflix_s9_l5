import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";

const TopBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" style={{ height: "40px", width: "auto" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-white" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" href="#">
                TV Shows
              </Nav.Link>
              <Nav.Link className="text-white" href="#">
                Movies
              </Nav.Link>
              <Nav.Link className="text-white" href="#">
                Recently Added
              </Nav.Link>
              <Nav.Link className="text-white" href="#">
                My List
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
              <i className="bi bi-search icons "></i>
              <div id="kids" className="fw-bold text-white">
                KIDS
              </div>
              <i className="bi bi-bell icons"></i>
              <i className="bi bi-person-circle icons"></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopBar;
