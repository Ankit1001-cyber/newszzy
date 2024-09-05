import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome
import { Link } from "react-router-dom";

const Navbar = (props) => {
  useEffect(() => {
    document.body.style.backgroundColor =
      props.mode === "dark" ? "#343a40" : "#f8f9fa";
    document.body.style.color = props.mode === "dark" ? "white" : "black";
  }, [props.mode]);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          props.mode === "light" ? "light" : "dark"
        } bg-${props.mode}`}
        style={{
          borderBottom: `2px solid ${props.mode === "light" ? "#000" : "#fff"}`,
        }}
      >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/profile" > */}
            <i className="fas fa-newspaper"></i>
          {/* </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropdown-toggle text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul
                  className={`dropdown-menu bg-${props.mode}`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/business">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/entertainment">
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/general">
                      General
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/science">
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/health">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sports">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/technology">
                      Technology
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                // w3-button w3-bar-item topnav-icons fa fa-adjust ga-tryit
                type="checkbox"
                role="switch"
                onClick={props.toggleMode}
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "light" ? "Light Mode" : "Dark Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
