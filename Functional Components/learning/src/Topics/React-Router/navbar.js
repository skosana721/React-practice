import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/people">People</Link>
    </div>
  );
}

export default Navbar;
