/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="beast-navbar">
      <div className="beast-container">
        {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        
         
        {/* <h3> BEAST LIFE</h3> */}
      

        <li>
          <Link to="/home" className="beast-nav-link">
            Home
          </Link>
        </li>
        {/* <li>
          <Link to="/all-trainers" className="beast-nav-link">
            Trainer
          </Link>
        </li> */}
        <ul className="beast-navbar-menu">
          <li className="beast-nav-item">
            <span className="beast-nav-link">Trainer</span>
            <ul className="beast-dropdown">
              <li>
                <Link to="/all-trainers" className="beast-dropdown-link">
                  All
                </Link>
              </li>
              <li>
                <Link to="/sort-trainers" className="beast-dropdown-link">
                  Experienced
                </Link>
              </li>
              <li>
                <Link to="/search-trainer" className="beast-dropdown-link">
                  Search
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="beast-navbar-menu">
          <li className="beast-nav-item">
            <span className="beast-nav-link">Member</span>
            <ul className="beast-dropdown">
              <li>
                <Link to="/log-in" className="beast-dropdown-link">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/sign-up" className="beast-dropdown-link">
                  Sign Up
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        <li>
          <Link to="/view-review" className="beast-nav-link">
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="/all-members" className="beast-nav-link">
            Members
          </Link>
        </li>
      </div>
    </nav>
  );
}
