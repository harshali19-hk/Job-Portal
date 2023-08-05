import React, { useState } from "react";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="#">
            Job<span className="logo">Portal</span>
          </a>

          <ul
            className={
              clicked ? "list-items navbar-nav active" : "list-items navbar-nav"
            }
          >
            <li>
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/jobs">
                Jobs
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
          </ul>

          <div className="mobile" onClick={handleClick}>
            <i
              id="bar"
              className={clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>

          <div className="btn-group">
            <button
              type="button"
              className=" signup-btn btn btn-outline-light rounded"
            >
              Post Job
            </button>
            <button type="button" className=" login-btn btn btn-dark rounded">
              LogIn
            </button>
          </div>

          <button id="user-btn">
            <i className="fa-solid fa-user" id="user"></i>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
