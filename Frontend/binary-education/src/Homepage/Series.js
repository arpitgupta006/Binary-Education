import React , { useEffect, useState } from 'react'
import bookcover1 from '../Assets/bookcover1.jpg'
import bookcover2 from '../Assets/bookcover2.jpg'
import bookcover3 from '../Assets/bookcover3.jpg'
import bookcover4 from '../Assets/bookcover4.jpg'
import bookcover5 from '../Assets/bookcover5.jpg'
import './Series.css'
import axios from 'axios'

import EasyCarousal from 'carousal-hub';

function Series() {

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
        <div >


            <div className="carousal ">
                <EasyCarousal  >
                {allBooks.map((book)=>{
                    return (
                        <div className="items full-width text-center">
                        <img className='booksimg' src={book.image}></img>
                        <h4 className="product">{book.title}</h4>

                    </div>
                    )
                })}
                   
                </EasyCarousal>

            </div>


        </div>
    )
}

export default Series