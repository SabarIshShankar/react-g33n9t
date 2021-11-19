import { Carousel } from '@trendyol-js/react-carousel';
import React from 'react';
import './style.css';

export default function Carousel() {
  return (
    <div class="w3-black w3-padding">
      <h4 class="body w3-xlarge w3-margin-bottom w3-bold">
        {' '}
        Take a look at the catalogue
      </h4>
      <Carousel show={3} slide={1} swiping={true} class="w3-black">
        <a color="#2d66c3" className="w3-card w3-padding-large">
          Women
        </a>
        <a color="#f44336" className="w3-card w3-padding-large">
          Men
        </a>
        <a color="#f44336" className="w3-card w3-padding-large">
          Accesories
        </a>
        <a color="#f44336" className="w3-card w3-padding-large">
          Footwear
        </a>
      </Carousel>
    </div>
  );
}
