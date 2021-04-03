import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <h1>Header im</h1>
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
