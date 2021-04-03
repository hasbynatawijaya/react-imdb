import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const SearchField = (props) => {
  const [keyword, setKeyword] = React.useState("");

  const query = new URLSearchParams(props.location.search);

  React.useEffect(() => {
    if (query.get("s") !== null) {
      setKeyword(query.get("s"));
    }
  }, []);

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
