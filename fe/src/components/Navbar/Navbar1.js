import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";

// import logo from "images/logofinal.png";

function Navbar1() {
  const [navToggle, setnavToggle] = useState(true);

  return (
    <>
      <nav className="navbar navbar-default navbar-expand-md light">
        <div className="navbar-header">
          <Link to="home" className="header-logo" smooth={false} duration={800}>
            {/* <span></span> */}
            <img src="images/logofinal.png" height="90px" width="90" alt="logo" />
          </Link>
          <button
            onClick={() => setnavToggle(!navToggle)}
            type="button"
            className="navbar-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#bs-example-navbar-collapse-1"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div
          className={
            navToggle
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse show"
          }
          id="bs-example-navbar-collapse-1"
        >
          <ul
            className="nav navbar-nav  navbar-right menu-item-6"
            id="navbar-full"
          >
            <li className="current home">
            <span className="bg-nav-gr"></span>
              {/* <span className="bg-icon"><i className="ion-ios-home-outline"></i></span> */}
              <span className="rotated-title effect">Home</span>
              <Link
                to="/"
                className="link-item "
                smooth={false}
                duration={800}
                activeClass="active"
              >
                Home
              </Link>
            </li>
            <li className="vardhan-tips">
            <span className="bg-nav-gr"></span>
              {/* <span className="bg-icon">2</span> */}
              <span className="rotated-title effect">Vardhan Tips</span>
              <Link
                to="/vardhan-tips"
                className="link-item "
                smooth={false}
                duration={800}
                activeClass="active"
              >
                Vardhan Tips
              </Link>
            </li>
            <li className="about">
            <span className="bg-nav-gr"></span>
              {/* <span className="bg-icon"><i className="ion-ios-person-outline"></i></span> */}
              <span className="rotated-title effect">Who is he?</span>
              <Link
                to="/about"
                className="link-item"
                smooth={false}
                duration={800}
                activeClass="active"
              >
                Who is he?
              </Link>
            </li>
            <li className="service">
            <span className="bg-nav-gr"></span>
              {/* <span className="bg-icon"><i className="ion-ios-star-outline"></i></span> */}
              <span className="rotated-title effect">Services</span>
              <Link
                to="/services"
                className="link-item"
                smooth={false}
                duration={800}
                activeClass="active"
              >
                Services
              </Link>
            </li>
            {/* <li className="vardhan-studios">
            <span className="bg-nav-gr"></span>
              <span className="bg-icon">5</span>
              <span className="rotated-title effect">Vardhan Studios</span>
              <Link
                to="/"
                className="link-item "
                smooth={false}
                duration={800}
                activeClass="active"
              >
                Vardhan Studios
              </Link>
            </li> */}
            <li className="blog">
            <span className="bg-nav-gr"></span>
              {/* <span className="bg-icon"><i className="ion-ios-chatboxes-outline"></i></span> */}
              <span className="rotated-title effect">Blogs</span>
              <Link
                to="/blog"
                className="link-item"
                smooth={false}
                duration={800}
                activeClass="active"
              >
                Blogs
              </Link>
            </li>
            <li className="contact">
            <span className="bg-nav-gr"></span>
              {/* <span className="bg-icon"><i className="ion-ios-telephone-outline"></i></span> */}
              <span className="rotated-title effect">Contact</span>
              <Link
                to="contact"
                className="link-item"
                smooth={false}
                duration={800}
                activeClass="active"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar1;
