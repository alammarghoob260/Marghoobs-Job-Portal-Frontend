import React from "react";
import { FiBell } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo">Yelp</div>
      </div>

      <nav className="navbar-center">
        <ul>
          <li>Post a Job</li>
          <li>Manage Jobs</li>
          <li>Company Profile</li>
        </ul>
      </nav>

      <div className="navbar-right">
        <FiBell className="icon-bell" size={20} />
        <img
          src="https://via.placeholder.com/32"
          alt="Profile"
          className="profile-avatar"
        />
      </div>
    </header>
  );
};

export default Navbar;
