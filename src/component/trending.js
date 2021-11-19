import React from 'react';
import './w3.css';
import './style.css';

export default function Banner() {
  return (
    <div className="w3-row w3-container body" id="myGrid">
      <div className="w3-twothird ">
        <div className="w3-margin-top padding-top">
          <h4 className="w3-margin-top w3-padding-top bold w3-xxlarge w3-bold body1 padding-top pink">
            Fashion. Value. Tailored for you
          </h4>

          <h2 class="">Trending this week</h2>
        </div>
      </div>

      <div className="w3-third">
        <div className="padding-top">
          <img
            src="https://static.fibre2fashion.com/articleresources/images/22/2120/womens-clothing-todays-fashions.jpg"
            className="w3-margin-right"
          />
          <a href="" class="w3-right w3-margin-bottom">
            view more
          </a>
        </div>
      </div>
    </div>
  );
}
