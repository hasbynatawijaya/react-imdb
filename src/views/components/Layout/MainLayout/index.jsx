import React from "react";

import "./style.scss";

import Header from "../../Header";

const MainLayout = ({ children, ...rest }) => {
  return (
    <>
      <Header {...rest} />
      <div className="container">{children}</div>
    </>
  );
};

export default MainLayout;
