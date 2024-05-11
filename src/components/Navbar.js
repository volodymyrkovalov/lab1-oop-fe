import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <h1>Library System</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/users">Users</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
