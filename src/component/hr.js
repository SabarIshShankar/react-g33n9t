import React from 'react';
const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 16,
    }}
  />
);

export default ColoredLine;
