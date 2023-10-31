import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Discount.css'
import Footer from '../../components/footer/Footer'
// import Order from '../../components/foodorder/Order'
import Image from '../../components/dividingimage/Image'
import Main from '../../components/main/Main'
import Dealss from './Dealss'

function Discount() {
    return (
      <div>
        <div className='section__1'>
          <Navbar />
          <Main />
        </div>
        <div className='dividing__img'>
          <Image />
        </div>
        <div className='section__2'>
          <Dealss />
        </div>
        <Footer />
      </div>
    )
  }
  
  export default Discount;