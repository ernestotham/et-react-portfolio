import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";



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
      <Nav.Link href="/About">About</Nav.Link>
      <Nav.Link href="/Work">Work</Nav.Link>
      <Nav.Link href="/Resume">Resume</Nav.Link>
      <Nav.Link to="#Contactme">Contact Me</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />

</>
  );
}
