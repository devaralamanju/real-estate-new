import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './CheckoutNeighborhood.css'; // Import your CSS file

function CheckoutNeighborhood() {
  return (
    <div className="checkout-neighborhood-container">
      <h2 className="checkout-neighborhood-heading">Check out a neighborhood</h2>
      <SearchBar />
    </div>
  );
}

export default CheckoutNeighborhood;
