import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const recentSearches = ['New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ'];

  const handleSearch = () => {
    console.log('Search term:', searchTerm);
  };

  const handleFocus = () => {
    setIsDropdownVisible(true);
  };

  const handleBlur = () => {
    setTimeout(() => setIsDropdownVisible(false), 200);
  };

  const handleRecentSearchClick = (search) => {
    setSearchTerm(search);
    handleSearch();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Atlanta, GA"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button onClick={handleSearch}> <svg viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg" width="54" height="54" role="img" aria-label="" aria-hidden="true" className="search-icon">
          <path d="m20.756 18.876 6.155 6.154-1.88 1.881-6.155-6.155A9.269 9.269 0 0 1 13.3 22.61a9.31 9.31 0 1 1 9.31-9.31c0 2.091-.69 4.021-1.854 5.576zM13.3 19.95a6.65 6.65 0 1 0 0-13.3 6.65 6.65 0 0 0 0 13.3z" fill="white"></path>
        </svg></button>
      {isDropdownVisible && (
        <div className="dropdown">
          <div className="dropdown-item" onMouseDown={() => handleRecentSearchClick('Current Location')}>
            Current Location
          </div>
          <div className="dropdown-divider"></div>
          <div className="dropdown-header">Recent Searches</div>
          {recentSearches.map((search, index) => (
            <div key={index} className="dropdown-item" onMouseDown={() => handleRecentSearchClick(search)}>
              {search}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
