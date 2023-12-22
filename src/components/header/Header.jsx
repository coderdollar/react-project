import React from 'react'
import './header.css';
import logo from '../assets/logo.png';
import Widget from '../cartwidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const header = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to = "/">
        <Navbar.Brand href="#home"><img src={logo}></img></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link> 
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <Link to = "/categoria/entradas"> 
                <NavDropdown.Item href="#action/3.1">Entradas</NavDropdown.Item> 
              </Link>
              <Link to = "/categoria/hamburguesas"> 
              <NavDropdown.Item href="#action/3.2">Hamburguesas</NavDropdown.Item>
              </Link>
              <Link to = "/categoria/feasts">
              <NavDropdown.Item href="#action/3.3">Costillas</NavDropdown.Item>
              </Link>
              <Link to = "/categoria/bebidas">
              <NavDropdown.Item href="#action/3.4">Bebidas</NavDropdown.Item>
              </Link>
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