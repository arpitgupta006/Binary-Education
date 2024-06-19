import React from 'react'
import bookcover1 from '../Assets/bookcover1.jpg'
import bookcover2 from '../Assets/bookcover2.jpg'
import bookcover3 from '../Assets/bookcover3.jpg'
import bookcover4 from '../Assets/bookcover4.jpg'
import bookcover5 from '../Assets/bookcover5.jpg'
import './Series.css'

import EasyCarousal from 'carousal-hub';

function Series() {
    return (
        <div >


            <div className="carousal ">
                <EasyCarousal  >
                    <div className="items full-width text-center">
                        <img className='booksimg' src={bookcover1}></img>
                        <h1 className="product">Book 1</h1>

                    </div>

                    <div className="items full-width text-center">
                        <img className='booksimg' src={bookcover2}></img>
                        <h1 className="product">Book 2</h1>
                    </div>

                    <div className="items full-width text-center">
                        <img className='booksimg' src={bookcover3}></img>
                        <h1 className="product">Book 3</h1>
                    </div>

                    <div className="items full-width text-center">
                        <img className='booksimg' src={bookcover4}></img>
                        <h1 className="product">Book 4</h1>
                    </div>

                    <div className="items full-width text-center">
                        <img className='booksimg' src={bookcover5}></img>
                        <h1 className="product">Book 5</h1>
                    </div>
                </EasyCarousal>

            </div>


        </div>
    )
}

export default Series