import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import '../Registration/registration.css';
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { useDispatch } from 'react-redux'
import {Link , useNavigate} from 'react-router-dom'


function TeacherRegistration() {

  const [emailLog , setEmailLog] = useState('')
    const [passwordLog , setPasswordLog] = useState('')
    const [emailReg , setEmailReg] = useState('')
    const [passwordReg , setPasswordReg] = useState('')
    const [name , setName] = useState('')
    const [phoneNum , setPhoneNum] = useState('')
    const [school , setSchool] = useState('')
    const [countryId, setCountryId] = useState(null);
    const [country, setCountry] = useState(null);
    const [stateId, setStateId] = useState(null);
    const [state, setState] = useState(null);
    const [cityId, setCityId] = useState(null);
    const [city, setCity] = useState(null);
    const [zipcode, setZipcode] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function login(){
      
      console.log("Log button")
      const requestData = { email:emailLog, password:passwordLog }
      axios.post('http://localhost:4000/teacherlogin' , requestData)
          .then((result) => {
            console.log("getting result")
              if (result.status == 200) {
                  alert("Logged in")
                  console.log("got result")
                  console.log(result.data.result.user)
                  localStorage.setItem("user" , JSON.stringify(result.data.result.user));
                  dispatch({type: 'LOGIN_SUCCESS' , payload : result.data.result.user})
                  navigate('/')
              } else {
                console.log( result ,"no result")
              }
              
          })
          .catch((error) => {
              console.log(error)
              alert(error)
              console.log("error")
          })
       
    }

    function signup() {
     
      const requestData = { fullName: name, email:emailReg, password:passwordReg , phone:phoneNum , 
        school , country:country , state:state, city: city , pincode : zipcode}
      axios.post('http://localhost:4000/teachersignup' , requestData)
          .then((result) => {
              if (result.status == 201) {
                  alert("Signed in")
              }
              
          })
          .catch((error) => {
              console.log(error)
              alert(error)
             
          })
  }

    return (
        <div className='mainregdiv '>
            <h1 className='text-white justify-content-center d-flex'>TEACHER</h1>
            <Container className=' contAiner justify-content-center align-center '>
                <Row>
                    <Col className='mt-4' lg={4} sm={12}>
                        <Card className='mt-4 cardbox' >
                            <Card.Body>
                                <Card.Title><h1>LOGIN</h1></Card.Title>
                                <Card.Text>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control onChange={(e)=>setEmailLog(e.target.value)} type="email" placeholder="name@example.com" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onChange={(e)=>setPasswordLog(e.target.value)} type="password" placeholder="" />
                                    </Form.Group>
                                </Card.Text>
                                <div className='d-grid' >
                                    <Button variant="primary" onClick={()=>login()}>Login</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={8} sm={12}>


                        <Card className='p-3 cardbox' >
                            <Card.Title><h1>REGISTER</h1></Card.Title>
                            <Row>
                                <Col lg={6} sm={12}>
                                    <Card.Body>
                                        <Card.Text>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control onChange={(e)=>setEmailReg(e.target.value)}  type="email" placeholder="name@example.com" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control onChange={(e)=>setPasswordReg(e.target.value)}  type="password" placeholder="" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Phone number</Form.Label>
                                                <Form.Control onChange={(e)=>setPhoneNum(e.target.value)} type="text" placeholder="" />
                                            </Form.Group>
                                            
                                        </Card.Text>


                                    </Card.Body>
                                </Col>

                                <Col lg={6} sm={12}>
                                    <Card.Body>

                                        <Card.Text>


                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>School Name</Form.Label>
                                                <Form.Control 
                                                     type="text" onChange={(e)=>setSchool(e.target.value)} placeholder="" />
                                            </Form.Group>

                                            <Form.Group className="mb-2" controlId="formCountry">
                                                <Form.Label>Select Country</Form.Label>
                                                <CountrySelect
                                                    onChange={(country) => {
                                                        setCountryId(country.id);
                                                        setCountry(country.name)
                                                    }}
                                                    placeHolder="Select Country"
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-2" controlId="formState">
                                                <Form.Label>Select State</Form.Label>
                                                <StateSelect
                                                    countryid={countryId}
                                                    onChange={(state) => {
                                                        setStateId(state.id);
                                                       setState(state.name)
                                                    }}
                                                    placeHolder="Select State"
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-2" controlId="formCity">
                                                <Form.Label>Select City</Form.Label>
                                                <CitySelect
                                                    countryid={countryId}
                                                    stateid={stateId}
                                                    onChange={(city)=>setCity(city.name)}
                                                    placeHolder="Select City"
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-2" controlId="formZipCode">
                                                <Form.Label>Zip Code</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Zip Code"
                                                    name="zipcode"
                                                    onChange={(e)=>setZipcode(e.target.value)}
                                                    required
                                                />
                                            </Form.Group>
                                        </Card.Text>

                                    </Card.Body>
                                </Col>
                            </Row>
                            <div className='d-grid' >
                                <Button onClick={() => signup()} variant="primary" >Register</Button>
                            </div>
                        </Card>


                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default TeacherRegistration