import React from 'react';

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
      
    </div>
  );
}

export default Manifesto
