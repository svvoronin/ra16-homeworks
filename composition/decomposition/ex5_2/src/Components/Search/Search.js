import React from "react";

export const Search = () => {
  return (
    <div className="search-wrapper">
      <div class="bar">
        <input class="searchbar" type="text" title="Search" />
        <a href="#">
          <img
            class="voice"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png"
            title="Search by Voice"
          />
        </a>
      </div>
      <div class="buttons">
        <button class="button" type="button">
          Google Search
        </button>
        <button class="button" type="button">
          I'm Feeling Lucky
        </button>
      </div>
    </div>
  );
};

export default Search;
