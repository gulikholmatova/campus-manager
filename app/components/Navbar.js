import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-item">
      <Link to="/">
        <div id="nav-item-box">Home page</div>
      </Link>

      <Link to="/campuses">
        <div id="nav-item-box">Campuses</div>
      </Link>

      <Link to="/students">
        <div id="nav-item-box">Students</div>
      </Link>
    </nav>
  );
};

export default Navbar;
