import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './MainNavbar.css'

function MainNavbar() {
  return (
    <div>
        <Navbar expand="lg" className="navbar fixed-top  ">
                <Container className='justify-content-center d-flex'>
                    <Navbar.Brand href="#home" className='text-dark' style={{ fontSize: '30px' }}>Binary Education</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='text-dark'>
                        <Nav className="me-auto justify-content-center">
                            <NavDropdown title="Home" id="basic-nav-dropdown"  >
                                <NavDropdown.Item href="#action/3.1">Main Demo</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" >
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" >
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Books" id="basic-nav-dropdown"  >
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

                            <NavDropdown title="Classes" id="basic-nav-dropdown" >
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

                            <NavDropdown title="Dashboard" id="basic-nav-dropdown" >
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

                            <NavDropdown title="Resources" id="basic-nav-dropdown" >
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

                            <NavDropdown title="About Us" id="basic-nav-dropdown"  >
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
                </Container>
            </Navbar>
    </div>
  )
}

export default MainNavbar