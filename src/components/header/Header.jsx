import React from 'react'
import './header.css';
import logo from '../assets/logo.png';
import Widget from '../cartwidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const header = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={logo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Menú</Nav.Link>
            <NavDropdown title="Sucursales" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Buenos Aires</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cordoba
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Rosario</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Santa Fé
              </NavDropdown.Item>
            </NavDropdown>
    
            <Nav.Link href="#home">Gift Cards</Nav.Link>
            <Nav.Link href="#home">Contacto</Nav.Link>
 
          </Nav>
        </Navbar.Collapse>
            <Nav.Link href="#link">
                    <Widget />
            </Nav.Link>
      </Container>
    </Navbar>
    </div>
  )
}

export default header