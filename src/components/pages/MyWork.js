import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import bitfit from '../../images/BitFit.png';
import scheduler from '../../images/scheduler.jpg';
import weatherapp from '../../images/weatherapp.jpg';
import githomies from '../../images/githomies.jpg';
import employeeMan from '../../images/EmployeeManager.jpg';
import techblog from '../../images/techBlog.jpg';
import { SiGithub } from "react-icons/si";
import { IoRocketOutline } from "react-icons/io5";



export default function MyWork() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const styleimg = { width: "18rem", height: "18rem", overflow: "hidden", alignitems: "center", }


  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row><Col className="d-flex  justify-content-center mb-5" style={{color:"white" }}><h1>Recent Projects</h1></Col></Row>

      <Carousel className="d-flex justify-content-center mt-5" activeIndex={index} onSelect={handleSelect} >

        <Carousel.Item >

          <Row className="d-flex justify-content-center mt-5 mb-5">
            <Col className="d-flex justify-content-center  mt-4 mb-4">
              <Card style={{ width: '18rem', alignitems: "center" }}>
                <Card.Img className="p-2 bg-light border" variant="top" src={bitfit} style={styleimg} />
                <Card.Body className="justify-center" style={{ alignitems: "center" }}>
                  <Card.Title>Bitfit</Card.Title>
                  <Card.Text>
                  A webpage built to collect and display a user's NFT's.
                  </Card.Text>
                  <div className="d-flex justify-content-center mx-2">
                    <a 
                      href="https://github.com/mcstewart76/BitFit"
                      style={{ color: "black", width:"20px",height:"20px"}}
                      target="_blank"
                      rel="noopener noreferrer">
                      <SiGithub className='mx-4' style={{ color: "black", width:"20px",height:"20px"}}/>
                      </a>

                  
                    <a href="https://bitfitted.herokuapp.com/"
                      style={{ color: "black" }}
                      target="_blank"
                      rel="noopener noreferrer" >
                      <IoRocketOutline className='mx-4' style={{ color: "black", width:"20px",height:"20px"}}/> </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col className="d-flex justify-content-center mt-4 mb-4">
              <Card fluid style={{ width: '18rem' }}>
                <Card.Img variant="top" src={githomies} style={styleimg} />
                <Card.Body>
                  <Card.Title>GitHomies</Card.Title>
                  <Card.Text>
                  Social media collaboration tool for developers to share their works.
                  </Card.Text>
                  <div className="d-flex justify-content-center mx-2">
                    <a 
                      href="https://github.com/mcstewart76/gitHomies"
                      style={{ color: "black", width:"20px",height:"20px"}}
                      target="_blank"
                      rel="noopener noreferrer">
                      <SiGithub className='mx-4' style={{ color: "black", width:"20px",height:"20px"}}/>
                      </a>

                  
                    <a href="https://gh.githomies.com/"
                      style={{ color: "black" }}
                      target="_blank"
                      rel="noopener noreferrer" >
                      <IoRocketOutline className='mx-4' style={{ color: "black", width:"20px",height:"20px"}}/> </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>



            <Col className="d-flex justify-content-center  mt-4 mb-4">
              <Card fluid style={{ width: '18rem' }}>
                <Card.Img variant="top" src={weatherapp} style={styleimg} />
                <Card.Body>
                  <Card.Title>Weather Dashboard</Card.Title>
                  <Card.Text>
                    Weatehr app using the Open weatehr api .
                  </Card.Text>
                  <div className="d-flex justify-content-center mx-2">
                    <a 
                      href="https://github.com/ernestotham/ET-Weather-Dashboard"
                      style={{ color: "black", width:"20px",height:"20px"}}
                      target="_blank"
                      rel="noopener noreferrer">
                      <SiGithub className='mx-4' style={{ color: "black", width:"20px",height:"20px"}}/>
                      </a>

                  
                    <a href="https://ernestotham.github.io/ET-Weather-Dashboard/"
                      style={{ color: "black" }}
                      target="_blank"
                      rel="noopener noreferrer" >
                      <IoRocketOutline className='mx-4' style={{ color: "black", width:"20px",height:"20px"}}/> </a>
                  </div>
                </Card.Body>
              </Card>

            </Col>
          </Row>

        </Carousel.Item>

        <Carousel.Item >

          <Row>
            <Col className="d-flex justify-content-center  mt-4 mb-4">
              <Card fluid style={{ width: '18rem' }}>
                <Card.Img variant="top" src={scheduler} style={styleimg} />
                <Card.Body>
                  <Card.Title>Work Day Scheduler</Card.Title>
                  <Card.Text>
                    Javascript app to keep track of your day to day work.
                  </Card.Text>
                  <div className="d-flex justify-content-center mx-2">
                    <a 
                      href="https://github.com/ernestotham/ET-WorkDayScheduler"
                      style={{ color: "black", width:"20px",height:"20px"}}
                      target="_blank"
                      rel="noopener noreferrer">
                      <SiGithub className='mx-4' style={{ color: "black", width:"20px",height:"20px"}}/>
                      </a>

                  
                    <a href="https://ernestotham.github.io/ET-WorkDayScheduler/"
                      style={{ color: "black" }}
                      target="_blank"
                      rel="noopener noreferrer" >
                      <IoRocketOutline className='mx-4' style={{ color: "black", width:"20px",height:"20px"}}/> </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col className="d-flex justify-content-center  mt-4 mb-4">
              <Card fluid style={{ width: '18rem' }}>
                <Card.Img variant="top" src={employeeMan} style={styleimg} />
                <Card.Body>
                  <Card.Title>EmployeeManager</Card.Title>
                  <Card.Text>
                    CLI application using Javascript, inquirer and Mysql .
                  </Card.Text>
                  <div className="d-flex justify-content-center mx-2">
                    <a 
                      href="https://github.com/ernestotham/ET-EmployeeManager"
                      style={{ color: "black", width:"20px",height:"20px"}}
                      target="_blank"
                      rel="noopener noreferrer">
                      <SiGithub className='mx-4' style={{ color: "black", width:"20px",height:"20px"}}/>
                      </a>

                  
                    <a href="https://watch.screencastify.com/v/VkDnfHubwJtXFOf7rUoR"
                      style={{ color: "black" }}
                      target="_blank"
                      rel="noopener noreferrer" >
                      <IoRocketOutline className='mx-4' style={{ color: "black", width:"20px",height:"20px"}}/> </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>



            <Col className="d-flex justify-content-center  mt-4 mb-4">
              <Card fluid style={{ width: '18rem' }}>
                <Card.Img variant="top" src={techblog} style={styleimg} />
                <Card.Body>
                  <Card.Title>Tech Blog</Card.Title>
                  <Card.Text>
                    This a blog application coded with JavaScript, node, express and sequelize.
                  </Card.Text>
                  <div className="d-flex justify-content-center mx-2">
                    <a 
                      href="https://github.com/ernestotham/ET-TechBlog"
                      style={{ color: "black", width:"20px",height:"20px"}}
                      target="_blank"
                      rel="noopener noreferrer">
                      <SiGithub className='mx-4' style={{ color: "black", width:"20px",height:"20px"}}/>
                      </a>

                  
                    <a href="https://et-the-tech-blog.herokuapp.com/"
                      style={{ color: "black" }}
                      target="_blank"
                      rel="noopener noreferrer" >
                      <IoRocketOutline className='mx-4' style={{ color: "black", width:"20px",height:"20px"}}/> </a>
                  </div>
                </Card.Body>
              </Card>

            </Col>
          </Row>

        </Carousel.Item>

      </Carousel>


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </Container>

  );
}