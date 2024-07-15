import React from 'react'
import Navbar from '../Components/MainNavbar';
import './About.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <div>
      <Navbar />
      <div className='aboutpage'>
            <div className=' abouttext'>
              <Container>
               <Row>
                <Col lg={1} sm={1}>
                
                </Col>

                <Col lg={12} sm={12}>
                <h1 className='text-light '>About Us</h1>
              <p className='text-light '>
                But I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a complete
                account of the system, and expound the actual teachings of the great
                explorer of the truth, the master-builder of human happiness. No one
                rejects, dislikes, or avoids pleasure itself, because it is pleasure,
                but because those who do not know how to pursue pleasure rationally
                encounter consequences that are extremely painful.</p>
                </Col>

                <Col lg={1} sm={1}>
                
                </Col>
              </Row> 
              </Container>
              
               
            </div>
             
        </div>  
    </div>
  )
}

export default About