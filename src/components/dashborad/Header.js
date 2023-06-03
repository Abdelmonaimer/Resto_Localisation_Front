import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function Header() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src="/logo512.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo de l'application"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Accueil</Nav.Link>
            <Nav.Link href="/">Villes</Nav.Link>
            <Nav.Link href="villes/:id">Ajouter Ville</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
export default Header;