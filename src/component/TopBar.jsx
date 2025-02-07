import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";

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
              <IoSearch className="icons me-3 text-white" />
              {/* <i className="bi bi-search icons text-white"></i> */}
              <div id="kids" className="fw-bold text-white">
                KIDS
              </div>
              <i className="bi bi-bell icons"></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopBar;
