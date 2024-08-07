import React from 'react';
import one from './img/1.jpg';
import two from './img/2.jpg';
import three from './img/3.jpg';

export default function ImageSlider() {
  return (
    <div className='imagesInSlider'>
      <img src={one} alt="Description of  1" />
      <img src={two} alt="Description of  2" />
      <img src={three} alt="Description of  3" />
    </div>
  );
}

