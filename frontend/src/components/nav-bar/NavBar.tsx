import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar-color">
      <Container>
        <Navbar.Brand href="#home">Goal-Setter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto to-front">
            <Nav.Link href="#link">Log In</Nav.Link>
            <NavDropdown title="Goals" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Daily Goals</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Long-term Goals
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">All Goals</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Data
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default NavBar;