import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import TypeWriterEffect from 'react-typewriter-effect';
import Image from 'react-bootstrap/Image'
import me from "../../images/me.jpg"
import techStackList from '../dataMaps/technologies.js'



const styles = { color: 'white', background: 'black', padding: '40px', borderRadius: 25 + 'px' }
const stylesConttributions = { color: 'white', background: 'black', padding: '40px', borderRadius: 25 + 'px' }
const stylesCol = { color: 'white', fontSize: '20px', padding: '40px', boderstyle: 'solid', boder: 'black' }
const stylesCont = { padding: '2px' }



const renderOtherTechnologies = () => {

  return (
    
    <CardGroup> 
      
      {techStackList.Other.map((card, idx) => (
       
       <Card key={idx} style={{ width: '18rem' }} className="mb-2"
     >
       <Card.Header>Header</Card.Header>
       <Card.Body>
       <Card.Img id="top" src="holder.js/100px180?text=Image cap" />
         <Card.Title>{card.title}</Card.Title>
         <Card.Text>
           Some 
           {card.path}
         </Card.Text>npm startDelay
       </Card.Body>
     </Card>
      )
      )}
    </CardGroup>
    
  )
}


export default function about() {
  return (

    <Container  className="d-flex flex-column" style={stylesCont}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
      <Row className="d-flex flex-wrap md">
        <Col className="col-md-6 p-0" style={stylesCol}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p style={styles}><span>
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'Red Hat Display',
              color: 'white',
              fontWeight: 500,
              fontSize: '1.5em',
            }}
            startDelay={3000}
            cursorColor="#3F3D56"
            multiTextLoop
            multiText={[
              'Hi!!!',
            

            ]}
            multiTextDelay={1000}
            typeSpeed={30}
          />
            
            </span>I am Ernesto Tham</p>
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'Red Hat Display',
              color: 'white',
              fontWeight: 500,
              fontSize: '2.5em',
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiTextLoop
            multiText={[
              'Software Engineer',
              'Frontend developer',
              'Backend developer',
              'System Architect',

            ]}
            multiTextDelay={1000}
            typeSpeed={30}
          />
          <br></br>
          <p style={{ color: 'white' }}>
            I graduated from Kennesaw State University with a bachelor's degree in Computer Science.
            I have 13 years’ experience system Engineering. I specialized on mergers and acquisitions, privilege Identity management and automation.
            I love designing and building applications and keeping up with the latest technology. I am currently working on getting a certification as a software Engineer at Georgia Tech.



          </p>

        </Col>

        <Col className="col-md-6 p-0">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Image className="d-block w-100"
            src={me}
            alt="Second slide"
            roundedCircle
          >


          </Image>
        </Col>

      </Row>
      <br />
      <br />
      <br />
      <br />

      </Container>


      <Container>  
    
      <Row>
            {renderOtherTechnologies()}

      </Row>

      </Container>    


      <Container>
      <br />
      <br />
      <br />
      <br />
      <Row  >
        <Col background='black'>
          <h1 className="portfolio-About" style={{ color: 'white', paddingBottom: "20px", justifyContent: "center" }}>
            My Github contributions
          </h1>
        </Col>

      </Row>

      <Row >
        <Col >
          <div className="d-flex justify-content-center">
            <GitHubCalendar username="ernestotham" style={stylesConttributions} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>

        </Col>

      </Row>


      <br />
      <br />
      <br />


      <br />
      <br />
      <br />
      <br />

      </Container>


    </Container>


  );
}
