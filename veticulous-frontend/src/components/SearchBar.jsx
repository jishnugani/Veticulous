import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar fancy">
      <div className="search-bar-container">
        <input
          type="text"
          value={searchInput}
          onChange={handleSearch}
          placeholder={placeholder || "What are you looking for?"}
          className="search-input"
        />
        <button className="search-button" onClick={() => onSearch(searchInput)}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
