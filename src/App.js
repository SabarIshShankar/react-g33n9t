import React from 'react';
import './style.css';
import Navbar from './component/navbar';
import ColoredLine from './component/hr';
import Banner from './component/banner';
import Carousel from './component/carousel1';
import Trending from './component/trending';
import Footer from './component/footer';
import Card from './component/card';

export default function App() {
  return (
    <div>
      <Navbar />
      <ColoredLine color="#FF367F" />
      <Banner />
      <Trending />
      <ColoredLine color="#FF367F" />
      <Card />
      <Footer />
    </div>
  );
}
