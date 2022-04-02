import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';



export default function NavbarComponet() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <>
  <Navbar variant="dark" 
      fixed="top"
      expand="md"
      className="navbar" style={linkStyle} >
    <Container>
    <Navbar.Brand href="#About" className="d-flex">Ernesto Tham</Navbar.Brand>
    <span></span>
   
    
    <Nav >
      <Link className="mx-2 text-light" to="/About">About</Link>
      <Link className="mx-2 text-light"to="/Work">Work</Link>
      <Link className="mx-2 text-light"to="/Resume">Resume</Link>
      <Link className="mx-2 text-light"to="#Contactme">Contact Me</Link>
      
        
      
    </Nav>
    </Container>
  </Navbar>
  <br />

</>
  );
}
