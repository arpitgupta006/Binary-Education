import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './MainNavbar.css'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Dropdown from 'react-bootstrap/Dropdown';

function MainNavbar() {

    const navigate = useNavigate();

  return (
    <div>
 
        <Navbar expand="lg" className="navbar fixed-top  ">
                    
                <Container className='justify-content-center d-flex'>
                    <Navbar.Brand href="#home" className='text-dark' style={{ fontSize: '30px' }}>Binary Education</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='text-dark'>
                        <Nav className="mx-auto justify-content-center">
                        <Nav.Link href="#home" className='text-dark mx-3' onClick={()=>navigate('/')}>Home</Nav.Link>
                            <NavDropdown title="Books" id="basic-nav-dropdown"  >
                                <NavDropdown.Item href="#action/3.1" onClick={()=>navigate('/book')}>Books 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" >
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" >
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Classes" className='text-dark mx-3' id="basic-nav-dropdown" >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" >
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" >
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Dashboard" className='text-dark mx-3' id="basic-nav-dropdown" >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" >
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" >
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="About Us" className='text-dark mx-3' id="basic-nav-dropdown"  >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" >
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" >
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>

                            
                           

                           
                          
                        </Nav>
                    </Navbar.Collapse>

                    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic">
        Login/Register
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >Login/Register as Student</Dropdown.Item>
        <Dropdown.Item >Login/Register as School</Dropdown.Item>
        <Dropdown.Item >Login/Register as Teacher</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                </Container>
            </Navbar>
    </div>
  )
}

export default MainNavbar