import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './HomeBanner.css';

const HomeBanner = () => {
  const [activeTab, setActiveTab] = useState('buy');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="home-banner">
      <div className="search-options">
        <h1>Discover a place<br/> you'll love to live</h1>
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === 'buy' ? 'active' : ''}`}
            onClick={() => handleTabClick('buy')}
          >
            Buy
          </button>
          <button
            className={`tab-button ${activeTab === 'rent' ? 'active' : ''}`}
            onClick={() => handleTabClick('rent')}
          >
            Rent
          </button>
          <button
            className={`tab-button ${activeTab === 'sold' ? 'active' : ''}`}
            onClick={() => handleTabClick('sold')}
          >
            Sold
          </button>
        </div>
      </div>
      {activeTab === 'buy' && <div>Buy content</div>}
      {activeTab === 'rent' && <div>Rent content</div>}
      {activeTab === 'sold' && <div>Sold content</div>}
      <SearchBar />
    </div>
  );
}

export default HomeBanner;
