import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const SearchField = () => {
  const [keyword, setKeyword] = React.useState("");

  return (
    <div className="search-field">
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        type="text"
        placeholder="Type your favourite movie here"
      />
      <Link to={`/movies?s=${keyword}`}>
        <button className="search-field__button">Search</button>
      </Link>
    </div>
  );
};

export default SearchField;
