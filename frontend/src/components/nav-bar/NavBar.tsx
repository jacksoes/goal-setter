import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import Cookies from "js-cookie";

import { useState, useEffect } from "react";







const NavBar = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get("userName") != null);

 

  const logOutUser =  async () => {
    Cookies.remove("userName");

    

    await fetch("http://localhost:3000/logout", {
      method: "DELETE",
      credentials: "include",
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Client-side, logout Error:", error));

    window.location.reload();
    //! windo reload is preventing fetch request    

    //! get request needed to remove user session from database, aswell as the client.
  }

  return (
    <Navbar expand="lg" className="navbar-color">
      <Container>
        <Navbar.Brand className="pointer"><Link className="none" to="/">Goal-Setter</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto to-front">
            <Nav.Link>{isLoggedIn ? <Link onClick={logOutUser} className="none" to="/">Log Out</Link> : <Link  className="none" to="/LogInPage">Log In</Link>}</Nav.Link>
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
        <div>{Cookies.get("userName")}</div>
      </Container>
    </Navbar>
  );
};


export default NavBar;