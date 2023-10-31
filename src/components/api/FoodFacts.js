import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FoodFacts.css';
import FoodCarousel from './FoodCarousel';
import image1 from './1.png';
import image2 from './2.png';
import image3 from './3.png';




const FoodFacts = () => {
  const [fact, setFact] = useState('');
  const [carouselImages] = useState([
    image1,
    image2,
    image3,
  ]);

  const fetchFoodFact = async () => {
    try {
      const response = await axios.get('https://api.spoonacular.com/food/trivia/random?apiKey=0251a53a78404bcfb87d0e51d57cd5a7');
      setFact(response.data.text);
    } catch (error) {
      console.error('Error fetching food fact:', error);
    }
  };

  useEffect(() => {
    fetchFoodFact();
  }, []);

  const handleButtonClick = () => {
    fetchFoodFact();
  };

  return (
    <div className="food-fact-container">
      <h1 className='dis'>Fun Facts</h1>
      <div className="left">
        <FoodCarousel images={carouselImages} />
      </div>
      <div className="right">
        <div className="food-fact">
          <h2>Did you know?</h2>
          <p>{fact}</p>
          <button className="button" onClick={handleButtonClick}>
            Get New Fact
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodFacts;
