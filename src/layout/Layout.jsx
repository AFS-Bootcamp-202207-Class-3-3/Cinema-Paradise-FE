import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>|{" "}
        <Link to="/orderdetails">order</Link>|{" "}
        <Link to="/purchase">purchase</Link>|{" "}
        <Link to="/sucess">sucess</Link>|{" "}
        <Link to="/cinema">cinema</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
