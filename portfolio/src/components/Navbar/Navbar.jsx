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
              ? "navbar-phone-menu-sec"
              : "navbar-island-menu-sec"
          }
          onClick={islandOnHandler}
        >
          {islandOn == true ? (
            <>
              <div className="section">
                <Link
                  onClick={islandOffHandler}
                  activeClass="active"
                  to="home-sec"
                  spy={true}
                  smooth={true}
                  offset={-70}
                >
                  Home
                </Link>
              </div>
              <div className="section">
                <Link
                  onClick={islandOffHandler}
                  activeClass="active"
                  to="project-sec"
                  spy={true}
                  smooth={true}
                  offset={-70}
                >
                  Project
                </Link>
              </div>
              <div className="section">
                <Link
                  onClick={islandOffHandler}
                  activeClass="active"
                  to="skill-sec"
                  spy={true}
                  smooth={true}
                  offset={-70}
                >
                  skills
                </Link>
              </div>
              <div className="section">
                <Link
                  onClick={islandOffHandler}
                  activeClass="active"
                  to="contact-sec"
                  spy={true}
                  smooth={true}
                  offset={-70}
                >
                  Contact
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="section1"></div>
              <div className="section1"></div>
              <div className="section1"></div>
              <div className="section1"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
