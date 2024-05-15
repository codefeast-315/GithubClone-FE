import React from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "@primer/octicons-react";
import "./Searchbar.css";

const Searchbar = () => {
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate(`/search`);
    }
  };

  return (
    <div className="search">
      <div className="searchbar">
        <SearchIcon />
        <input
          onKeyDown={handleKeyPress}
          type="text"
          name="search"
          id="searchBar"
          placeholder="Search GitHub"
          className="github-search-input"
        />
      </div>
    </div>
  );
};

export default Searchbar;
