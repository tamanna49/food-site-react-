import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Main from '../../components/main/Main'
import Form from '../../components/reservation/Form'
import Order from '../../components/foodorder/Order'
import Footer from '../../components/footer/Footer'
import Discover from '../../components/discover/Discover'
import Image from '../../components/dividingimage/Image'
import FoodFacts from '../../components/api/FoodFacts'
import Dealss from '../../components/Deals/Dealss'
function Home() {
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
        <Order />
      </div>
      <div>
        <Dealss/>
      </div>
      <div className='section__3'>
        <Discover />
      </div>
      <div className='section__5'>
        <div className="food-facts-page">
        <div className="left-content">
          {/* <FoodFactsSlider /> */}
        </div>
        <div className="right-content">
          <FoodFacts />
        </div>
    </div>
      </div>
      <div className='section__4'>
      <Form />
      </div>

      <Footer />
    </div>
  )
}

export default Home