import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { searchQuery } from "../actions";

const SearchBar = props => {
  const [search, setSearch] = useState("");

  const handleSearch = search => {
    setSearch(search);
    props.searchQuery(search);
  };

  return (
    <nav style={{ marginBottom: "30 px" }}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              onChange={e => handleSearch(e.target.value)}
              id="search"
              type="search"
              placeholder="Search Rentals"
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default connect(
  null,
  { searchQuery }
)(SearchBar);
