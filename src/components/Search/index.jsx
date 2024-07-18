import React from "react";
// ---- Style ---- //
import "./index.scss";
import { CiSearch } from "react-icons/ci";

// ---- Components ---- //

const Search = () => {
  return (
    <form className="search">
      <label className="search__label">
        <input className="search__input" type="text" />
      </label>
      <button className="search__btn">
        <CiSearch />
      </button>
    </form>
  );
};

export default Search;
