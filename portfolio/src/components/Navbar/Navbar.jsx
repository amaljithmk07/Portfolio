import React, { forwardRef, useState } from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

import { useDispatch, useSelector } from "react-redux";
import { DarkmodeHandler } from "../../redux/reducer/Reducer";
import { DynamicIslandHandler } from "../../redux/reducer/Dynamic";

const Navbar = () => {
  //for Dynamic Island
  // const [islandOn, setIslandOn] = useState(false);

  // const islandOnHandler = () => {
  //   setIslandOn(true);
  // };

  const dispatch = useDispatch();
  const dynamicIslandHandlerFunction = useSelector(
    (state) => state.DynamicIslandStore.value
  );

  //Dynamic Island Off

  // const islandOffHandler = () => {
  //   setTimeout(() => {
  //     setIslandOn(false);
  //   }, 200);
  // };

  //Dark Mode Handler

  const darkModeHandlerfunction = useSelector(
    (state) => state.DarkmodeStore.value
  );
  console.log(darkModeHandlerfunction);

  return (
    <div>
      <div
        className={
          darkModeHandlerfunction == true
            ? "navbar-main"
            : " darkmode-navbar-main"
        }
        // className="navbar-main"
      >
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
          {/* <div className="darkmode" onClick={() => dispatch(darkModeHandler())}> */}
          {/* <div className="darkmode" onClick={() => dispatch(DarkmodeHandler())}>
            
            <img
              src={
                darkModeHandlerfunction == true
                  ? "./darkmode.png"
                  : "./lightmode.png "
              }
              className="darkmode-icon"
            />
          </div>{" "} */}
        </div>

        {/* //Dynamic island area */}

        <div
          className={
            // islandOn == false
            dynamicIslandHandlerFunction == false
              ? "navbar-islandoff-menu-sec"
              : "navbar-island-menu-sec"
          }
          onClick={() => dispatch(DynamicIslandHandler())}
          // onClick={islandOnHandler}
        >
          {/* {islandOn == true ? ( */}
          {dynamicIslandHandlerFunction == true ? (
            <>
              <div className="dynamic-island-section">
                <Link
                  // onClick={islandOffHandler}

                  onClick={() => dispatch(DynamicIslandHandler())}
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
                  // onClick={islandOffHandler}

                  onClick={() => dispatch(DynamicIslandHandler())}
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
                  // onClick={islandOffHandler}

                  onClick={() => dispatch(DynamicIslandHandler())}
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
                  // onClick={islandOffHandler}

                  onClick={() => dispatch(DynamicIslandHandler())}
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
              <div className="initial-island"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
