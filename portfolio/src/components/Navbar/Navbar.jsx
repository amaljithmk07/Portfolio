import React, { forwardRef, useState } from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [islandOn, setIslandOn] = useState(false);
  const islandOnHandler = () => {
    setIslandOn(true);
  };
  const islandOffHandler = () => {
    setTimeout(() => {
      setIslandOn(false);
    }, 200);
  };
  return (
    <div>
      <div className="navbar-main">
        <div className="navbar-menu-sec">
          <ul className="navbar-menu-items">
            <Link
              className="navbar-menu-data"
              activeClass="active"
              to="home-sec"
              spy={true}
              smooth={true}
              offset={-70}
              // duration={500}
            >
              Home
            </Link>
            <Link
              className="navbar-menu-data"
              activeClass="active"
              to="project-sec"
              spy={true}
              smooth={true}
              offset={-70}
              // duration={500}
            >
              Project
            </Link>
            <Link
              className="navbar-menu-data"
              activeClass="active"
              to="skill-sec"
              spy={true}
              smooth={true}
              offset={-70}
              // duration={500}
            >
              Skills
            </Link>{" "}
            <Link
              className="navbar-menu-data"
              activeClass="active"
              to="contact-sec"
              spy={true}
              smooth={true}
              offset={-70}
              // duration={500}
            >
              Contact
            </Link>{" "}
          </ul>
        </div>
        <div
          className={
            islandOn == false
              ? "navbar-islandoff-menu-sec"
              : "navbar-island-menu-sec"
          }
          onClick={islandOnHandler}
        >
          {islandOn == true ? (
            <>
              <div className="dynamic-island-section">
                <Link
                  onClick={islandOffHandler}
                  activeClass="active"
                  className="dynamic-island-link"
                  to="home-sec"
                  spy={true}
                  smooth={true}
                  offset={-70}
                >
                  <img src="/home.png" alt="" className="dynamic-logo" />
                  Home
                </Link>
              </div>
              <div className="dynamic-island-section">
                <Link
                  onClick={islandOffHandler}
                  activeClass="active"
                  className="dynamic-island-link"
                  to="project-sec"
                  spy={true}
                  smooth={true}
                  offset={-70}
                >
                  <img src="/projects.png" alt="" className="dynamic-logo" />
                  Projects
                </Link>
              </div>
              <div className="dynamic-island-section">
                <Link
                  onClick={islandOffHandler}
                  activeClass="active"
                  className="dynamic-island-link"
                  to="skill-sec"
                  spy={true}
                  smooth={true}
                  offset={-70}
                >
                  <img src="/skills.png" alt="" className="dynamic-logo" />
                  Skills
                </Link>
              </div>
              <div className="dynamic-island-section">
                <Link
                  onClick={islandOffHandler}
                  activeClass="active"
                  className="dynamic-island-link"
                  to="contact-sec"
                  spy={true}
                  smooth={true}
                  offset={-70}
                >
                  <img src="/contact.png" alt="" className="dynamic-logo" />
                  Contacts
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="initial-island"></div>
              <div className="initial-island"></div>
              <div className="initial-island"></div>
              <div className="initial-island"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
