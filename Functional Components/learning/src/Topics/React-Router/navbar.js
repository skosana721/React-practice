import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-links">
      <Link to="/">
        <h3>
          <a href="#">Home</a>
        </h3>
      </Link>
      <Link to="/about">
        <h3>
          <a>About</a>
        </h3>
      </Link>

      <Link to="/">
        <h3>
          <a href="">Home</a>
        </h3>
      </Link>
    </div>
  );
}

export default Navbar;
