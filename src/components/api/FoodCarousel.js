import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FoodCarousel.css'



const FoodCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="carousel-div" key={index}>
            <img src={image} alt={`Image ${index}`} />
            {/* {console.log(image)} */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FoodCarousel;
