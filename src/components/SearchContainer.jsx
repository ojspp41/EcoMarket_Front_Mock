import React from 'react';
import "../css/components/SearchContainer.css";

const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="원하는 물품을 검색해보세요!"
      />
      <img src="/assets/Search.svg" alt="search" className="search-icon" />
    </div>
  );
};

export default SearchBar;
