import React from 'react';
import './style.css';
import Navbar from './component/navbar';
import ColoredLine from './component/hr';

export default function App() {
  return (
    <div>
      <Navbar />
      <ColoredLine color="#FF367F" />
    </div>
  );
}
