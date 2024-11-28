import React from "react";

const Search = () => {
  return (
    <div>
      <input
        type="text"
        className="search"
        placeholder="Search for..."
        defaultValue=""
      />
      <button className="btn btn-secondary searchButton" type="button">
        Search
      </button>
    </div>
  );
};

export default Search;
