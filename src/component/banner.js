import React from 'react';
import './w3.css';
import './style.css';

export default function Banner() {
  return (
    <div className="w3-row w3-margin w3-container body" id="myGrid">
      <div className="w3-twothird ">
        <div className="w3-margin-top">
          <h4 className="w3-margin-top w3-padding-top bold w3-xxlarge w3-bold body1">
            A platform to buy, sell & share your FASHION
          </h4>
        </div>

        <button className="btn-grad w3-margin-top">Sign up</button>
      </div>

      <div className="w3-third">
        <img
          src="https://datadeeds.netlify.app/image%202.png"
          className="w3-margin-right"
        />
      </div>
    </div>
  );
}
