import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import carimg1 from '../Assets/collegestudy1.jpg'
import carimg2 from '../Assets/collegestudy4.jpg'
import './Homepage.css'
import Button from 'react-bootstrap/esm/Button';
import Series from './Series';
import Footer from '../Components/Footer';
import Navbar from '../Components/MainNavbar';
import axios from 'axios'

function Homepage() {

    const [allBooks, setAllBooks] = useState([])

    const getAllBooks= async () =>{
        const response = await axios.get(`http://localhost:4000/allbooks`);
        
        if(response.status ===200){
            setAllBooks(response.data.books);
            console.log("allBooks" ,response.data.books)

        } else {
            
        }
    }

    useEffect(()=>{
        getAllBooks()
    } , []);
 
    return (
        <div className="homediv">

            
            <Navbar/>

            <Carousel>
                <Carousel.Item>
                    <img
                        className='sliderimg'
                        src={carimg1} >
                    </img>
                    <Carousel.Caption>
                        <h1 style={{ fontSize: '60px' }}>"A word after a word after a word is power"</h1>
                        <h3 style={{ fontSize: '30px' }}>Margaret Atwood</h3>
                        
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <img className='sliderimg'
                        src={carimg2}
                    >

                    </img>
                    
                    <Carousel.Caption>
                        <h1 style={{ fontSize: '60px' }}>"Today a reader, tomorrow a leader"</h1>
                        <h3 style={{ fontSize: '30px' }}>Margaret Fuller</h3>
                        
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