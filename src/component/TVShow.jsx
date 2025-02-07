import { Container, NavDropdown } from "react-bootstrap";

const TvShow = () => {
  return (
    <Container fluid className="px-0">
      <div className="bg-dark text-white ">
        <nav className="d-flex align-items-center ">
          <h2 className="mx-3">TvShow</h2>
          <NavDropdown id="nav-dropdown-dark-example" title="Dropdown" menuVariant="dark">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </nav>
      </div>
    </Container>
  );
};

export default TvShow;
