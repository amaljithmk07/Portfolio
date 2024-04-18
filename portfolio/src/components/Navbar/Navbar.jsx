import React, { forwardRef, useState } from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [islandOn, setIslandOn] = useState(false);
  const islandOnHandler = () => {
    setIslandOn((prev) => !prev);
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
        <div className={islandOn==false?"navbar-phone-menu-sec":"navbar-island-menu-sec"} onClick={islandOnHandler}>
          sdsdsd
        </div>
      </div>
    </div>
  );
};

export default Navbar;
