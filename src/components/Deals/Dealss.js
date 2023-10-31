import React from 'react'
import './Deals.css'
import Image1 from '../../assets/deal1.jpg'
import Image2 from '../../assets/deal2.jpg'
import Image3 from '../../assets/deal3.jpg'

function Dealss() {
    return (
        <div>
        <div id="deal-heading">
            <h1>Deals For you</h1>
        </div>
        <div id="deal-section">
            <div>
                <img src={Image1} alt=" " />
            </div>
            <div>
                <img src={Image2} alt=" " />
            </div>
            <div>
                <img src={Image3} alt=" " />
            </div>
        </div>
        </div>

    )
}


export default Dealss;