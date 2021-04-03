import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.scss";

const BackButton = ({ title }) => {
  const history = useHistory();

  return (
    <div onClick={() => history.goBack()} className="back-button">
      <div className="back-button__arrow"></div>
      <p className="back-button__text">{title}</p>
    </div>
  );
};

export default BackButton;
