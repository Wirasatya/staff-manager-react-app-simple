import { Search } from "@material-ui/icons";
import React from "react";
import "./searchInput.scss";

const SearchInput = () => {
  return (
    <form className="searchInput">
      <div className="searchWrapper">
        <span className="serachTextIcon">
          <Search className="iconSearch"></Search>Search
        </span>
        <input
          placeholder="Type Something"
          type="text"
          className="inputSearch"
        />
      </div>
      <button type="submit"></button>
    </form>
  );
};

export default SearchInput;
