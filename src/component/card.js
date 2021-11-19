import React from 'react';
import './style.css';
import './w3.css';

export default function Card() {
  return (
    <div>
      <h4 class="w3-xlarge body1 w3-margin">Find us on here</h4>

      <div class="w-full rounded overflow-hidden shadow-lg ml-5 mr-5">
  <img class="w3-padding h-20" src="https://public-acl-shop.s3.ap-south-1.amazonaws.com/LogoBlack.png"/>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Playstore</span>
    <span class="inline-block bg-gray-900  px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">App store</span>
  </div>
</div>

    </div>
  );
}
