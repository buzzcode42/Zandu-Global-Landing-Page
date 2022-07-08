import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import slideOne from '../assets/slide_one.jpg';
import slideTwo from '../assets/slide_two.jpg';
import slideThree from '../assets/slide_three.jpg';
import slideFour from '../assets/slide_four.jpg';
import slideFive from '../assets/slide_five.jpg';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img alt="" src={slideOne} onDragStart={handleDragStart} role="presentation"/>,
  <img alt="" src={slideTwo} onDragStart={handleDragStart} role="presentation" />,
  <img alt="" src={slideThree} onDragStart={handleDragStart} role="presentation" />,
  <img alt="" src={slideFour} onDragStart={handleDragStart} role="presentation" />,
  <img alt="" src={slideFive} onDragStart={handleDragStart} role="presentation" />,
];

const Manifesto = () => {
  return (
    <div id="manifesto" className="place-items-center">
       <AliceCarousel mouseTracking items={items} itemsInSlide={2}/>
    </div>
  );
}

export default Manifesto
