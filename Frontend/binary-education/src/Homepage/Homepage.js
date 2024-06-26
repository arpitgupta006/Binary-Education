import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import carimg1 from '../Assets/collegestudy1.jpg'
import carimg2 from '../Assets/collegestudy4.jpg'


import './Homepage.css'
import Button from 'react-bootstrap/esm/Button';
import Series from './Series';
import Footer from '../Components/Footer';
import Navbar from '../Components/MainNavbar';


function Homepage() {

   const[loader , setLoader] = useState(true)

   const hideloader = ()=>{
        setLoader(false)
   }

   window.addEventListener("load" , hideloader)
 
    return (
        <div className="homediv">

            <div className={loader ? 'preloader' : ''}></div>
            <Navbar/>

            <Carousel>
                <Carousel.Item>
                    <img
                        className='sliderimg'
                        src={carimg1} >
                    </img>
                    <Carousel.Caption>
                        <h3 style={{ fontSize: '30px' }}>Start Learning Today</h3>
                        <h1 style={{ fontSize: '60px' }}>Explore Interests and Career With Courses</h1>
                        <Button variant='outline-light'>Find Courses</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <img className='sliderimg'
                        src={carimg2}
                    >

                    </img>
                    
                    <Carousel.Caption>
                        <h3 style={{ fontSize: '30px' }}>Start Learning Today</h3>
                        <h1 style={{ fontSize: '60px' }}>Online Courses From Leading Experts</h1>
                        <Button variant='outline-light'>Find Courses</Button>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        <div >
        <Series/>
        </div>
          
      
          
            <Footer />
        </div>
    )
}

export default Homepage