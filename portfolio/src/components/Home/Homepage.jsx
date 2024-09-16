import React, { useEffect, useRef, useState } from "react";
import "./Homepage.css";
import emailjs from "@emailjs/browser";
import Loader from "./Loader";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { DarkmodeHandler } from "../../redux/reducer/Reducer";
import { DynamicOffHandler } from "../../redux/reducer/Dynamic";
import "aos/dist/aos.css";
import AOS from "aos";

const Homepage = () => {
  const form = useRef();

  const [loader, setLoader] = useState(false); //Loader for Email send Button

  const sendEmail = (e) => {
    e.preventDefault();

    let from_name = document.forms["myForm"]["from_name"].value;
    let from_email = document.forms["myForm"]["from_email"].value;
    let subject = document.forms["myForm"]["subject"].value;
    let message = document.forms["myForm"]["message"].value;
    // console.log(from_name);
    if (from_name == "") {
      toast.error("You should enter Name ", {
        position: "bottom-center",
      });
      return false;
    } else if (from_email == "") {
      toast.error("You should enter Email", {
        position: "bottom-center",
      });
      return false;
    } else if (subject == "") {
      toast.error("You should enter Subject", {
        position: "bottom-center",
      });
      return false;
    } else if (message == "") {
      toast.error("You should enter Message", {
        position: "bottom-center",
      });
      return false;
    }

    // const fields = ["from_name", "from_email", "subject", "message"];

    // for (let field of fields) {
    //   const value = document.forms["myForm"][field].value;
    //   if (value.trim() === "") {
    //     toast.error(`You should enter ${field.replace("_", " ")}`, {
    //       position: "bottom-center",
    //     });
    //     return false;
    //   }
    // }

    setLoader(true);

    emailjs
      .sendForm("service_8xh8x8t", "template_thod5i1", form.current, {
        publicKey: "PdNj-AAnq6y2LxZEH",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Email sent", { position: "bottom-center" });
          setLoader(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoader(false);
        }
      );
  };

  //Redux area for Dark mode

  const dispatch = useDispatch();
  const darkModeHandlerfunction = useSelector(
    (state) => state.DarkmodeStore.value
  );
  console.log(darkModeHandlerfunction);

  ///useEffect for Aos

  useEffect(() => {
    AOS.init({ duration: 1500, delay: 400 });
  }, {});

  const [showMore, setShowmore] = useState(false); //For Show more button

  return (
    <div
      onClick={() =>
        setTimeout(() => {
          dispatch(DynamicOffHandler());
        }, 200)
      }
    >
      <Toaster />
      {/* <div className="homepage-main"> */}
      <div
        className={
          darkModeHandlerfunction == true
            ? "homepage-main"
            : "darkmode-homepage-main"
        }
      >
        {/* //Home section */}

        <div
          className="new-back-img"
          style={
            darkModeHandlerfunction == false
              ? {
                  background: "url(/home-new-back.png) no-repeat center/cover",
                }
              : {
                  background:
                    " url(/home-new-back1.png) no-repeat center/cover",
                }
          }
        ></div>
        <div className="home-sec " id="home-sec">
          {/* //sidebar */}
          <div className="home-sec-side-bar-sec">
            <div className="home-sec-darkmode">
              <div onClick={() => dispatch(DarkmodeHandler())}>
                <img
                  src={
                    darkModeHandlerfunction == true
                      ? "./darkmode.png"
                      : "./lightmode.png "
                  }
                  className="darkmode-icon"
                />
              </div>{" "}
            </div>{" "}
            <div className="home-sec-side-bar">
              <a
                href="https://www.instagram.com/__amaljit/?utm_source=qr&igsh=MW1nYXR4MXN0MzVyMg%3D%3D"
                target="_blank"
              >
                <img
                  src="/instagram.png"
                  alt=""
                  className="home-sec-sidebar-logo"
                />
              </a>
              <a href="https://www.linkedin.com/in/amaljithmk" target="_blank">
                <img
                  src="/linkedin.png"
                  alt=""
                  className="home-sec-sidebar-logo"
                />{" "}
              </a>
              <a href="https://github.com/amaljithmk07" target="_blank">
                <img
                  src="/github.png"
                  alt=""
                  className="home-sec-sidebar-logo"
                />{" "}
              </a>
            </div>
          </div>
          {/* /////// */}
          <div
            className={
              darkModeHandlerfunction == true
                ? "home-sec-content seperate-background"
                : "darkmode-home-sec-content  "
            }
          >
            <h1>Hello !</h1>
            <h1>I am Amaljith</h1>
            <p className="home-sec-content-p">
              I'm a proficient Full Stack web developer adept in both front-end
              and back-end development, committed to crafting seamless digital
              experiences. Please feel free to persue my CV to get a glimpse of
              my portfolio and previous endeavors.
              {/* Hello, all! I'm Amaljith M K, an enthusiastic and motivated web
              developer with proficiency in both frontend and backend
              technologies. Lately, I finished an extensive MERN stack course,
              refining my abilities and understanding in constructing resilient
              web applications. Along my educational path, I've tackled various
              demanding ventures to enhance my skills and aptitude in addressing
              challenges. My commitment to mastering the art of web development
              motivates me to produce outstanding outcomes in each
              endeavor I pursue. */}
            </p>
            <div className="home-sec-content-btn-sec">
              <a
                href="/Amaljith MERN Resume.pdf"
                download="Amaljith MERN Resume.pdf"
                className="home-sec-btn"
              >
                Download CV
                <img src="/download.png" alt="" className="home-sec-btn-icon" />
              </a>

              <a
                href="https://github.com/amaljithmk07"
                className="home-sec-socialmedia-btn"
                target="_blank"
              >
                <img src="/github.png" alt="" className="home-sec-btn-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/amaljithmk/"
                className="home-sec-socialmedia-btn"
                target="_blank"
              >
                <img src="/linkedin.png" alt="" className="home-sec-btn-icon" />
              </a>
            </div>
          </div>
          <div className="home-sec-content">
            <div className="home-sec-content-img-sec">
              <div className="robot">
                <img src="/robot2.png" alt="" />
              </div>
            </div>{" "}
          </div>
        </div>

        {/* //////////////////////////////////////// */}

        {/* //Project section */}

        <div className="project-sec ">
          <div
            className={
              darkModeHandlerfunction == true
                ? "project-title-sec"
                : "darkmode-project-title-sec"
            }
            id="project-sec"
            data-aos="fade-up"
          >
            {" "}
            {/* Personal Projects */}
            Personal Endeavors
            <div
              className={
                darkModeHandlerfunction == true
                  ? "project-title-underline"
                  : "darkmode-project-title-underline"
              }
            ></div>
          </div>
          <div className="project-content-sec">
            {/* //project card body */}

            {/* //medicalequipment */}

            <div className="project-card-main-body" data-aos="fade-up">
              <div className="project-card-sub-body">
                <div
                  className={
                    darkModeHandlerfunction == true
                      ? "project-card-body"
                      : "darkmode-project-card-body"
                  }
                >
                  <div className="project-card-img-sec">
                    <img
                      src="/medicalequip.jpg"
                      alt=""
                      className="project-card-img"
                    />
                  </div>
                  <div className="project-card-content-sec">
                    <div className="project-card-project-title">
                      Medical Equipment
                    </div>
                    <div className="project-card-project-details">
                      This dynamic web application supports a charitable cause
                      by facilitating the donation of refurbished medical
                      equipment to those in need. Users have the option to
                      contribute either by donating equipment or by providing
                      financial support.
                    </div>
                    <div className="project-card-project-logo-sec">
                      <a
                        href="https://github.com/amaljithmk07/Med.Equip-MERN"
                        className="project-github-btn"
                        target="_blank"
                      >
                        <img
                          src="/github.png"
                          alt=""
                          className={
                            darkModeHandlerfunction == true
                              ? "project-logo "
                              : "darkmode-project-logo"
                          }
                        />
                        <div class="project-logo-text">View on GitHub</div>
                      </a>
                      <a
                        href="http://medicalequipment.vercel.app"
                        className="project-btn"
                        target="_blank"
                      >
                        Go to web
                        <img src="/web.png" alt="" className="project-logo" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* //Hemoglobe */}

            <div className="project-card-main-body" data-aos="fade-up">
              <div className="project-card-sub-body">
                <div
                  className={
                    darkModeHandlerfunction == true
                      ? "project-card-body"
                      : "darkmode-project-card-body"
                  }
                >
                  <div className="project-card-img-sec">
                    <img src="/hemo.avif" alt="" className="project-card-img" />
                  </div>
                  <div className="project-card-content-sec">
                    <div className="project-card-project-title">Hemoglobe</div>
                    <div className="project-card-project-details">
                      This dynamic web application facilitates blood donation by
                      providing extensive information on both donors and
                      recipients. Users have the ability to download a
                      certificate upon completing a donation.
                    </div>
                    <div className="project-card-project-logo-sec">
                      <a
                        href="https://github.com/amaljithmk07/Hemoglobe-MERN"
                        className="project-github-btn"
                        target="_blank"
                      >
                        <img
                          src="/github.png"
                          alt=""
                          className={
                            darkModeHandlerfunction == true
                              ? "project-logo "
                              : "darkmode-project-logo"
                          }
                        />
                        <div class="project-logo-text">View on GitHub</div>
                      </a>
                      <a
                        href="http://hemoglobe.vercel.app"
                        className="project-btn"
                        target="_blank"
                      >
                        Go to web
                        <img src="/web.png" alt="" className="project-logo" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* //Frame Finder */}

            <div className="project-card-main-body" data-aos="fade-up">
              <div className="project-card-sub-body">
                <div
                  className={
                    darkModeHandlerfunction == true
                      ? "project-card-body"
                      : "darkmode-project-card-body"
                  }
                >
                  {" "}
                  <div className="project-card-img-sec">
                    <img
                      src="/framefinder.jpg"
                      alt=""
                      className="project-card-img"
                    />
                  </div>
                  <div className="project-card-content-sec">
                    <div className="project-card-project-title">
                      Frame Finder
                    </div>
                    <div className="project-card-project-details">
                      This is a dynamic application where users can book
                      photographers, review their photos, and communicate with
                      each other. (In progress)
                    </div>
                    <div className="project-card-project-logo-sec">
                      <a
                        href="https://github.com/amaljithmk07/FrameFinder"
                        className="project-github-btn"
                        target="_blank"
                      >
                        <img
                          src="/github.png"
                          alt=""
                          className={
                            darkModeHandlerfunction == true
                              ? "project-logo "
                              : "darkmode-project-logo"
                          }
                        />
                        <div class="project-logo-text">View on GitHub</div>
                      </a>
                      <a
                        href="http://framefinder.vercel.app"
                        className="project-btn"
                        target="_blank"
                      >
                        Go to web
                        <img src="/web.png" alt="" className="project-logo" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* //Bloogie */}

            <div className="project-card-main-body" data-aos="fade-up">
              <div className="project-card-sub-body">
                <div
                  className={
                    darkModeHandlerfunction == true
                      ? "project-card-body"
                      : "darkmode-project-card-body"
                  }
                >
                  {" "}
                  <div className="project-card-img-sec">
                    <img
                      src="/bloogie.png"
                      alt=""
                      className="project-card-img"
                      style={{ width: "70%" }}
                    />
                  </div>
                  <div className="project-card-content-sec">
                    <div className="project-card-project-title">Bloogie</div>
                    <div className="project-card-project-details">
                      Bloogie is a dynamic web application that allows users to
                      register, log in, and upload their blogs. Users can view
                      blogs posted by others, as well as edit their own blog
                      entries. (In progress)
                    </div>
                    <div className="project-card-project-logo-sec">
                      <a
                        href="https://github.com/amaljithmk07/Bloogie"
                        className="project-github-btn"
                        target="_blank"
                      >
                        <img
                          src="/github.png"
                          alt=""
                          className={
                            darkModeHandlerfunction == true
                              ? "project-logo "
                              : "darkmode-project-logo"
                          }
                        />
                        <div class="project-logo-text">View on GitHub</div>
                      </a>
                      <a
                        href="http://bloogie.vercel.app"
                        className="project-btn"
                        target="_blank"
                      >
                        Go to web
                        <img src="/web.png" alt="" className="project-logo" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {showMore == true ? (
              <>
                {/* //Weather Hut */}

                <div className="project-card-main-body" data-aos="fade-up">
                  <div className="project-card-sub-body">
                    <div
                      className={
                        darkModeHandlerfunction == true
                          ? "project-card-body"
                          : "darkmode-project-card-body"
                      }
                    >
                      {" "}
                      <div className="project-card-img-sec">
                        <img
                          src="/weatherhut.png"
                          alt=""
                          className="project-card-img"
                        />
                      </div>
                      <div className="project-card-content-sec">
                        <div className="project-card-project-title">
                          WeatherHut
                        </div>
                        <div className="project-card-project-details">
                          WeatherHut displays real-time weather for your current
                          location and lets you search and save weather details
                          for specific regions when signed in.
                        </div>
                        <div className="project-card-project-logo-sec">
                          <a
                            href="https://github.com/amaljithmk07/WeatherHut"
                            className="project-github-btn"
                            target="_blank"
                          >
                            <img
                              src="/github.png"
                              alt=""
                              className={
                                darkModeHandlerfunction == true
                                  ? "project-logo "
                                  : "darkmode-project-logo"
                              }
                            />
                            <div class="project-logo-text">View on GitHub</div>
                          </a>
                          <a
                            href="http://weatherhut.vercel.app"
                            className="project-btn"
                            target="_blank"
                          >
                            Go to web
                            <img
                              src="/web.png"
                              alt=""
                              className="project-logo"
                            />
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* //Whatsapp Clone */}

                <div className="project-card-main-body" data-aos="fade-up">
                  <div className="project-card-sub-body">
                    <div
                      className={
                        darkModeHandlerfunction == true
                          ? "project-card-body"
                          : "darkmode-project-card-body"
                      }
                    >
                      {" "}
                      <div className="project-card-img-sec">
                        <img
                          src="/whatsapp.png"
                          alt=""
                          className="project-card-img"
                        />
                      </div>
                      <div className="project-card-content-sec">
                        <div className="project-card-project-title">
                          WhatsApp Clone
                        </div>
                        <div className="project-card-project-details">
                          This application will allow users to send messages
                          through the platform, replicating the core
                          functionality of the original WhatsApp Web. (In
                          progress)
                        </div>
                        <div className="project-card-project-logo-sec">
                          <a
                            href="https://github.com/amaljithmk07/Whatsapp"
                            className="project-github-btn"
                            target="_blank"
                          >
                            <img
                              src="/github.png"
                              alt=""
                              className={
                                darkModeHandlerfunction == true
                                  ? "project-logo "
                                  : "darkmode-project-logo"
                              }
                            />
                            <div class="project-logo-text">View on GitHub</div>
                          </a>
                          <a
                            href="http://whatsapp-mini.vercel.app"
                            className="project-btn"
                            target="_blank"
                          >
                            Go to web
                            <img
                              src="/web.png"
                              alt=""
                              className="project-logo"
                            />
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* //Personal Portfolio */}

                <div className="project-card-main-body" data-aos="fade-up">
                  <div className="project-card-sub-body">
                    <div
                      className={
                        darkModeHandlerfunction == true
                          ? "project-card-body"
                          : "darkmode-project-card-body"
                      }
                    >
                      {" "}
                      <div className="project-card-img-sec">
                        <img
                          src="/portfolio.jpg"
                          alt=""
                          className="project-card-img"
                        />
                      </div>
                      <div className="project-card-content-sec">
                        <div className="project-card-project-title">
                          Personal Portfolio
                        </div>
                        <div className="project-card-project-details">
                          Interactive web application displaying extensive
                          information about my professional portfolio,
                          encompassing expertise, key projects, and contact
                          details.
                        </div>
                        <div className="project-card-project-logo-sec">
                          <a
                            href="https://github.com/amaljithmk07/Portfolio"
                            className="project-github-btn"
                            target="_blank"
                          >
                            <img
                              src="/github.png"
                              alt=""
                              className={
                                darkModeHandlerfunction == true
                                  ? "project-logo "
                                  : "darkmode-project-logo"
                              }
                            />
                            <div class="project-logo-text">View on GitHub</div>
                          </a>
                          <a
                            href="http://amaljithmk.vercel.app"
                            className="project-btn"
                            target="_blank"
                          >
                            Go to web
                            <img
                              src="/web.png"
                              alt=""
                              className="project-logo"
                            />
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div
            className="showmore-sec"
            onClick={() => setShowmore((prev) => !prev)}
          >
            <img
              // data-aos="fade-up"
              src="showmore.png"
              className={showMore == false ? "showmore-icon" : "lessmore-icon"}
              // onClick={() => setShowmore((prev) => !prev)}
            />
            <div className="showmore-text">
              {showMore == false ? "Show more" : "Less more"}
            </div>
          </div>
        </div>

        {/* ///////////////////////////////// */}

        {/* //Skill section */}

        <div className="skill-sec " id="skill-sec">
          <div
            className={
              darkModeHandlerfunction == true
                ? "skill-title-sec"
                : "darkmode-skill-title-sec"
            }
            data-aos="fade-up"
          >
            Expertise
            <div className="skill-title-underline"></div>
          </div>
          <div className="skill-card-sec">
            <div
              className=""
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div
                className={
                  darkModeHandlerfunction == true
                    ? "skill-card-body"
                    : "darkmode-skill-card-body"
                }
              >
                <img src="/react.png" alt="" className="skill-card-logo" />
                React
              </div>
            </div>
            <div
              className=""
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              {" "}
              <div
                className={
                  darkModeHandlerfunction == true
                    ? "skill-card-body"
                    : "darkmode-skill-card-body"
                }
              >
                <img src="/redux.png" alt="" className="skill-card-logo" />
                Redux
              </div>
            </div>
            <div
              className=""
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              {" "}
              <div
                className={
                  darkModeHandlerfunction == true
                    ? "skill-card-body"
                    : "darkmode-skill-card-body"
                }
              >
                <img src="/mongodb.png" alt="" className="skill-card-logo" />
                Mongo DB
              </div>
            </div>
            <div
              className=""
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="1000"
            >
              {" "}
              <div
                className={
                  darkModeHandlerfunction == true
                    ? "skill-card-body"
                    : "darkmode-skill-card-body"
                }
              >
                <img src="/node.png" alt="" className="skill-card-logo" />
                Node JS
              </div>
            </div>
            <div
              className=""
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-duration="1000"
            >
              {" "}
              <div
                className={
                  darkModeHandlerfunction == true
                    ? "skill-card-body"
                    : "darkmode-skill-card-body"
                }
              >
                <img src="/express.png" alt="" className="skill-card-logo" />
                Express JS
              </div>
            </div>
            <div
              className=""
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              {" "}
              <div
                className={
                  darkModeHandlerfunction == true
                    ? "skill-card-body"
                    : "darkmode-skill-card-body"
                }
              >
                <img src="/postman.png" alt="" className="skill-card-logo" />
                Postman
              </div>
            </div>
            <div
              className=""
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              {" "}
              <div
                className={
                  darkModeHandlerfunction == true
                    ? "skill-card-body"
                    : "darkmode-skill-card-body"
                }
              >
                <img src="/rest-api.png" alt="" className="skill-card-logo" />
                REST API{" "}
              </div>
            </div>
            <div
              className=""
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              {" "}
              <div
                className={
                  darkModeHandlerfunction == true
                    ? "skill-card-body"
                    : "darkmode-skill-card-body"
                }
              >
                <img src="/jwt.png" alt="" className="skill-card-logo" />
                JWT
              </div>
            </div>
            <div
              className=""
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1000"
            >
              {" "}
              <div
                className={
                  darkModeHandlerfunction == true
                    ? "skill-card-body"
                    : "darkmode-skill-card-body"
                }
              >
                <img src="/git.png" alt="" className="skill-card-logo" />
                Git
              </div>
            </div>
            <div
              className=""
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              {" "}
              <div
                className={
                  darkModeHandlerfunction == true
                    ? "skill-card-body"
                    : "darkmode-skill-card-body"
                }
              >
                <img src="/bootstrap.png" alt="" className="skill-card-logo" />
                Bootstrap
              </div>
            </div>
            <div
              className=""
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              {" "}
              <div
                className={
                  darkModeHandlerfunction == true
                    ? "skill-card-body"
                    : "darkmode-skill-card-body"
                }
              >
                <img src="/javascript.png" alt="" className="skill-card-logo" />
                Javascript
              </div>
            </div>
            <div
              className=""
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              {" "}
              <div
                className={
                  darkModeHandlerfunction == true
                    ? "skill-card-body"
                    : "darkmode-skill-card-body"
                }
              >
                <img src="/css.png" alt="" className="skill-card-logo" />
                CSS
              </div>
            </div>
            <div
              className=""
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="1000"
            >
              {" "}
              <div
                className={
                  darkModeHandlerfunction == true
                    ? "skill-card-body"
                    : "darkmode-skill-card-body"
                }
              >
                <img src="/html.png" alt="" className="skill-card-logo" />
                HTML
              </div>
            </div>
          </div>
        </div>

        {/* //contact section */}

        <div
          className={
            darkModeHandlerfunction == true
              ? "contact-sec"
              : "darkmode-contact-sec"
          }
        >
          <div className="contact-sec-left-body" id="contact-sec">
            <div className="contact-sec-title-1" data-aos="fade-up">
              {/* CONTACT US */}
              CONNECT ME{" "}
            </div>
            <div className="contact-sec-title-2" data-aos="fade-up">
              {" "}
              Let's talk <br /> about you
            </div>
          </div>
          <div className="contact-sec-right-body">
            <form
              action=""
              className="form-sec"
              ref={form}
              name="myForm"
              data-aos="fade-up"
            >
              <div className="form-title"> Send me a Message</div>
              <div className="form-input-field-sec">
                Full Name
                <input
                  type="text"
                  className="form-input-field"
                  required
                  name="from_name"
                />
              </div>
              <div className="form-input-field-sec">
                Email
                <input
                  type="text"
                  className="form-input-field"
                  required
                  name="from_email"
                />
              </div>
              <div className="form-input-field-sec">
                Subject
                <input
                  type="text"
                  className="form-input-field"
                  required
                  name="subject"
                />
              </div>
              <div className="form-input-field-sec">
                Your message here
                <input
                  type="text"
                  className="form-input-field"
                  required
                  name="message"
                />
              </div>
              {loader == false ? (
                <button className="form-send-btn" onClick={sendEmail}>
                  <>
                    Send{" "}
                    <img src="/send.png" alt="" className="form-btn-icon" />
                  </>
                </button>
              ) : (
                <>
                  <Loader />
                </>
              )}
            </form>
          </div>
        </div>

        {/* //Footer */}

        <div className="footer-sec">
          <div className="footer-sec-content">
            <a
              className={
                darkModeHandlerfunction == true
                  ? "footer-card-sec"
                  : "darkmode-footer-card-sec"
              }
              data-aos="fade-up"
              href="https://maps.app.goo.gl/ubY4SunqyHHi9hPq7"
              target="_blank"
            >
              <img src="/location.png" alt="" className="footer-icon" />
              Calicut,Kerala
            </a>

            <a
              className={
                darkModeHandlerfunction == true
                  ? "footer-card-sec"
                  : "darkmode-footer-card-sec"
              }
              data-aos="fade-up"
              href="tel:8086171296"
            >
              <img src="/phone.png" alt="" className="footer-icon" />
              +91-(8086)171296
            </a>

            <a
              className={
                darkModeHandlerfunction == true
                  ? "footer-card-sec"
                  : "darkmode-footer-card-sec"
              }
              data-aos="fade-up"
              href="mailto:amaljithmk44@gmail.com"
            >
              <img src="/email.png" alt="" className="footer-icon" />
              Amaljithmk44@gmail.com
            </a>
          </div>
          <div
            className={
              darkModeHandlerfunction == true
                ? "footer-sec-data"
                : "darkmode-footer-sec-data"
            }
          >
            © 2024 All Rights Reserved{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
