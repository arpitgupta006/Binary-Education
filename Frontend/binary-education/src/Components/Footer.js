import React from 'react'
import './Footer.css'
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <div>
        
     
        <div className='links justify-content-center'>
          <div  className='footdiv2'>
          <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home" className='text-light'>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home" className='text-light'>Books</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home" className='text-light'>Resources</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home" className='text-light' >Contacts</Nav.Link>
      </Nav.Item>
    </Nav>
          </div>
       
          <div className='footdiv3'>
        <Nav>
      <Nav.Item>
        <Nav.Link href="/home"><i class="fa-brands fa-facebook"></i></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home"><i class="fa-brands fa-twitter"></i></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home"><i class="fa-brands fa-vimeo"></i></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home" ><i class="fa-brands fa-linkedin"></i></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home" ><i class="fa-brands fa-instagram"></i></Nav.Link>
      </Nav.Item>
    </Nav>
        </div>
 
        </div>

      <div className='footdiv4'>
        <p className='text-light m-4'> 2019 Binary Eduction. All Right Reserved.</p>
      </div>
     
    </div>
  )
}

export default Footer