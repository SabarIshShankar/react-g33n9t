import React from 'react';
import './w3.css';
import './style.css';

export default function Banner() {
  return (
    <div className="w3-row w3-margin w3-container body" id="myGrid">
      <div className="w3-twothird ">
        <div className="w3-margin-top padding-top">
          <h4 className="w3-margin-top w3-padding-top bold w3-xxlarge w3-bold body1 padding-top">
            A platform to buy, sell & share your FASHION
          </h4>
          <h2 class="w3-xlarge w3-margin-top w3-hide-small">
            Get started with setting up your online shop in minutes.
          </h2>
          <h2 class="w3-margin-top">Start selling now.</h2>
        </div>

        <button className="btn-grad w3-margin-top">Sign up</button>
      </div>

      <div className="w3-third padding-top">
        <div className="padding-top">
          <img
            src="https://assets.burberry.com/is/image/Burberryltd/59E498FD-7D19-4599-9924-C3859F5607F7.jpg?$BBY_V2_ML_1x1$&wid=1251&hei=1251"
            className="w3-margin-right"
          />
          <h2 class="w3-right w3-xlarge w3-margin-top">
            The next stop for your fashion
          </h2>
        </div>
      </div>
    </div>
  );
}
