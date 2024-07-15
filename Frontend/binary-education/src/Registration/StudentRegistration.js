import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Registration/registration.css';
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { useDispatch } from 'react-redux'
import {Link , useNavigate} from 'react-router-dom'
import axios from 'axios'


function StudentRegistration() {

    const [emailLog , setEmailLog] = useState('')
    const [passwordLog , setPasswordLog] = useState('')
    const [emailReg , setEmailReg] = useState('')
    const [passwordReg , setPasswordReg] = useState('')
    const [name , setName] = useState('')
    const [phoneNum , setPhoneNum] = useState('')
    const [school , setSchool] = useState('')
    const [studentclass , setStudentClass] = useState('')
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
      axios.post('http://localhost:4000/studentlogin' , requestData)
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
     
      const requestData = { fullName: name, email:emailReg, password:passwordReg , phone:phoneNum , cLass: studentclass ,
        school , country:country , state:state, city: city , pincode : zipcode}
      axios.post('http://localhost:4000/studentsignup' , requestData)
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
            <h1 className='text-white justify-content-center d-flex'>STUDENT</h1>
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

                                            <Form.Label>Select Class</Form.Label>
                                            <Form.Select onChange={(e)=>setStudentClass(e.target.value)} aria-label="Default select example">
                                                <option value="1st Class">1st Class</option>
                                                <option value="2nd Class">2nd Class</option>
                                                <option value="3rd Class">3rd Class</option>
                                                <option value="4th Class">4th Class</option>
                                                <option value="5th Class">5th Class</option>
                                                <option value="6th Class">6th Class</option>
                                                <option value="7th Class">7th Class</option>
                                                <option value="8th Class">8th Class</option>
                                                <option value="9th Class">9th Class</option>
                                                <option value="10th Class">10th Class</option>
                                                <option value="11th Class">11th Class</option>
                                                <option value="12th Class">12th Class</option>
                                                <option value="Pre-Primary">Pre-Primary</option>
                                                <option value="Praveshika/0 part">Praveshika/0 part</option>
                                                <option value="Beginner">Beginner</option>
                                                <option value="NA">NA</option>
                                                <option value="9-10th">9-10th</option>
                                                <option value="11-12th">11th-12th</option>
                                                <option value="Primary">Primary</option>
                                            </Form.Select>
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

export default StudentRegistration