import React , { useEffect, useState } from 'react'
import './Book.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from './MainNavbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bookcover1 from '../Assets/bookcover1.jpg'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios'


function Book() {


  return (
    <div>
      <Navbar/>
      <div className='categorydiv'>
        <h1>Category</h1>
      </div>

      <hr className='border border-primary'></hr>

      <div className='searchbox col md-12 d-flex justify-content-between'>

  
        <div className=' '>
         <h5>Books</h5> 
        </div>

       <div className=''>

       <Form inline >
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
        </div> 
  
      </div>

      <div className='booklayout'>
        <Row>
          <Col lg={4}>
          <Card style={{ width: '25rem' , margin:'10px'}}>
      <Card.Img variant="top" src={bookcover1} />
      <Card.Body>
        <Card.Title>Book Title</Card.Title>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Book