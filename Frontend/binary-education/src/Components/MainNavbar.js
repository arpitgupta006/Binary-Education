import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './MainNavbar.css'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import binary from '../Assets/binary.png'

function MainNavbar() {

    const navigate = useNavigate();

    const [color , setColor] = useState(false)

    const changeColor= () =>{
        if(window.scrollY >= 200){
            setColor(true)
        } else{
            setColor(false)
        }
    }

    window.addEventListener('scroll' , changeColor)

  return (
    <div >
 
 
        <Navbar expand="lg" className={color ? 'fixed-top navbar-active' : 'fixed-top'}>
                    
                <Container className='justify-content-center d-flex'>
                    <Navbar.Brand href="#home" className='text-light' style={{ fontSize: '30px' }}>
                        <img src={binary}  width={350} height={60}>
                        </img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='text-light'>
                        <Nav className="mx-auto justify-content-center">
                        <Nav.Link href="#home" className='text-light mx-3' onClick={()=>navigate('/')}>Home</Nav.Link>
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

                            <NavDropdown title="Classes" className='text-light mx-3' id="basic-nav-dropdown" >
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

                            <NavDropdown title="Dashboard" className='text-light mx-3' id="basic-nav-dropdown" >
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
                            <Nav.Link className='text-light mx-3' onClick={()=>navigate('/aboutus')}>About Us</Nav.Link>
                                              
                        </Nav>
                    </Navbar.Collapse>

                    <Dropdown>
      <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
        Login/Register
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>navigate('/studentregistration')} >Login/Register as Student</Dropdown.Item>
        <Dropdown.Item onClick={()=>navigate('/schoolregistration')} >Login/Register as School</Dropdown.Item>
        <Dropdown.Item onClick={()=>navigate('/teacherregistration')} >Login/Register as Teacher</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                </Container>
            </Navbar>
    </div>
  )
}

export default MainNavbar