import React from 'react';
import './style.css';
import './w3.css';

export default function Footer() {
  return (
    <div>
      <h4 class="w3-xlarge body1 w3-margin">What you need to know!</h4>
      <h4 class="w3-margin w3-large body1 w3-margin-side">
        Be an entrepreneur
      </h4>
      <h4 class="w3-margin">
        Sustainable shopping. Choose what you sell. Easy access and articulated
        dashboards.
      </h4>
      <h4 class="w3-margin w3-large body1">Easy to set up</h4>
      <h4 class="w3-margin">
        With the technologies we use, setting up your first store is easy as
        ever. Don’t think again.
      </h4>
      <h4 class="w3-margin w3-large body1">Our Service</h4>
      <h4 class="w3-margin">
        With worldwide shipping and easy returns, managing a shop has never been
        easier
      </h4>
      <button class="btn-grad1 w3-margin body w3-small">know more</button>

      <div class="bg-gray-50 body w3-text-black w3-padding">
        <img
          class="w3-margin w3-margin-top h-8"
          src="https://public-acl-shop.s3.ap-south-1.amazonaws.com/LogoBlack.png"
        />
        <h4>About us</h4>
        <h4>Contact</h4>
        <h4>Apps</h4>
        <h4>Terms of Service</h4>
      </div>
    </div>
  );
}
