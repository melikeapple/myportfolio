import React from "react";
import Header from "../content/Header";
const Layout = ({ children }) => {
  return (
    <div className="content-base">
      <Header />
      <div className="bg-dark">{children}</div>
    </div>
  );
};

export default Layout;
