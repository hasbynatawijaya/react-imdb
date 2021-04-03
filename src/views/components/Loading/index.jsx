import React from "react";

import "./style.scss";

import LoadingAnimation from "../../../assets/loading_animation.gif";

const index = () => {
  return (
    <div className="loading">
      <img src={LoadingAnimation} alt="Loading..." />;
    </div>
  );
};

export default index;
