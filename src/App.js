import React from 'react';
import './style.css';
import Navbar from './component/navbar';
import ColoredLine from './component/hr';
import Banner from './component/banner';
import Carousel from './component/carousel1';

export default function App() {
  return (
    <div>
      <Navbar />
      <ColoredLine color="#FF367F" />
      <Banner />
      <Carousel />
    </div>
  );
}
