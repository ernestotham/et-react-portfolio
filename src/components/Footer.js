import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { SiGmail, SiGithub,SiLinkedin}  from "react-icons/si";



export default function Footer() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <Container className="footer" >

      
      <Row bg="light" variant="light" md='4'>
        <Col md="4">
          <h3 className='mx-2' id="Contactme">Contact me:</h3>
        </Col>
        
        <Col md="4" padding="2">
          <ul className="list-group list-group-horizontal-md d-flex justify-content-between">
          <span> </span>
            <li className="d-flex justify-content-center list-group-item list-group-item-action list-group-item-dark mx-2">
              <a
                href="https://github.com/ernestotham"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiGithub className="d-flex justify-content-center mx-2"/>
              </a>
              <span> </span>
            </li>
            <li className="d-flex justify-content-center list-group-item list-group-item-action list-group-item-dark mx-2">
              <a
                href="https://www.linkedin.com/in/tham-ernesto-42b1b96b/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiLinkedin className="d-flex justify-content-center mx-2"/>
              </a>
            </li>
            <span> </span>
            <li className="d-flex justify-content-center list-group-item list-group-item-action list-group-item-dark mx-2">
              <a
                href="mailto:ernestotha@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiGmail className="d-flex justify-content-center mx-2"/>
              </a>
            </li>
          </ul>
        </Col>

        <Col className='md-4 mx-4' >
          <h3 className='mx2'>Copyright © {new Date().getFullYear()} </h3>
        </Col>
      </Row>
    </Container>
  );
}


