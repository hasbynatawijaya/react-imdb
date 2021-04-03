import React from "react";

import "./style.scss";

import Logo from "../../../assets/imdb_logo.png";
import SearchField from "../SearchField";

const Header = ({ ...rest }) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={Logo} alt="logo" height={70} />
        <SearchField {...rest} />
      </div>
    </header>
  );
};

export default Header;
