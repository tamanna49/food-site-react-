import React from 'react'
import './Order.css'
import Image1 from '../../assets/item1.png';
import Image2 from '../../assets/Pizza3.png';
import Image3 from '../../assets/item3.png';
import Image4 from '../../assets/dividing-image.png'
import Image5 from '../../assets/dosa.png'
import Image6 from '../../assets/burger.png'
import Image7 from '../../assets/fries.png'
import Image8 from '../../assets/chowmein.png'
import Image9 from '../../assets/sphagetti.png'


function Order() {
  const orderNow = () => {
    const itemName = prompt('Enter the quantity and any special instructions for your order:');
    if (itemName) {
      window.alert(`${itemName} Order Successfull`);
    }
  };
  return (
    <div className="order__section">
      <div className="orderSection__content">
        <h1>choose & enjoy</h1>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum consectetur commodi eveniet sed officiis placeat? Culpa maiores possimus est ad perspiciatis sit porro hic mollitia. Amet quo magnam quaerat.</p> */}
      </div>
      <div className="orderSection__items">
        {/* <img src={Image4} id='dividing-image' /> */}
        <div className="items__container">
        <img src={Image9} alt="My Image" />
          <h3>Sphagetti</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, animi?</p>
          <button className="items__button"  onClick={orderNow}>order now</button>
        </div>
        <div className="items__container">
        <img src={Image2} alt="My Image" />
          <h3>Pizza</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, animi?</p>
          <button className="items__button"  onClick={orderNow}>order now</button>
        </div>
        <div className="items__container">
        <img src={Image7} alt="My Image" />
          <h3>Fries</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, animi?</p>
          <button className="items__button"  onClick={orderNow}>order now</button>
        </div>

      </div>
      {/* <div className="orderSection__content">
        <h1>choose & enjoy</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum consectetur commodi eveniet sed officiis placeat? Culpa maiores possimus est ad perspiciatis sit porro hic mollitia. Amet quo magnam quaerat.</p>
      </div> */}
      <div className="orderSection__items">
        {/* <img src={Image4} id='dividing-image' /> */}
        <div className="items__container">
        <img src={Image5} alt="My Image" />
          <h3>Dosa</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, animi?</p>
          <button className="items__button"  onClick={orderNow}>order now</button>
        </div>
        <div className="items__container">
        <img src={Image6} alt="My Image" />
          <h3>Burger</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, animi?</p>
          <button className="items__button"  onClick={orderNow}>order now</button>
        </div>
        <div className="items__container">
        <img src={Image8} alt="My Image" />
          <h3>Noodles</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, animi?</p>
          <button className="items__button"  onClick={orderNow}>order now</button>
        </div>

      </div>
    </div>


  )
}

export default Order
