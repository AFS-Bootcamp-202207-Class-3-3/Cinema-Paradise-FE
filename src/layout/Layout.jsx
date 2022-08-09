import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>|{" "}
        <Link to="/order">order</Link>|{" "}
        <Link to="/moviedetails">moviedetails</Link>|{" "}
        <Link to="/purchase">purchase</Link>|{" "}
        <Link to="/sucess">sucess</Link>|{" "}
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
