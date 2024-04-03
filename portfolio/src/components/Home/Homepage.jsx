import React, { useRef, useState } from "react";
import "./Homepage.css";
import emailjs from "@emailjs/browser";
import Loader from "./Loader";
import toast, { Toaster } from "react-hot-toast";

const Homepage = () => {
  const form = useRef();

  const [loader, setLoader] = useState(false);

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

    setLoader(true);

    emailjs
      .sendForm("service_8xh8x8t", "template_thod5i1", form.current, {
        publicKey: "PdNj-AAnq6y2LxZEH",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setLoader(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoader(false);
        }
      );
  };

  return (
    <div>
      <Toaster />
      <div className="homepage-main">
        {/* //Home section */}

        <div className="home-sec" id="home-sec">
          <div className="home-sec-side-bar">
            <a href="https://www.instagram.com/__amaljit/?utm_source=qr&igsh=MW1nYXR4MXN0MzVyMg%3D%3D">
              <img
                src="/instagram.png"
                alt=""
                className="home-sec-sidebar-logo"
              />
            </a>
            <a href="https://www.linkedin.com/in/amaljithmk">
              <img
                src="/linkedin.png"
                alt=""
                className="home-sec-sidebar-logo"
              />{" "}
            </a>
            <a href="https://github.com/amaljithmk07">
              <img src="/github.png" alt="" className="home-sec-sidebar-logo" />{" "}
            </a>
          </div>
          <div className="home-sec-content seperate-background">
            <h1>Hello !</h1>
            <h1>I am Amaljith</h1>
            <p>
              I'm an experienced web developer skilled in both front-end and
              back-end development, dedicated to creating flawless digital
              experiences. Feel free to explore my resume for a glimpse into my
              portfolio and past projects.
            </p>
            <a
              href="/Mern Resume.pdf"
              download="Amaljith Resume.pdf"
              className="home-sec-btn"
            >
              Download CV
              <img src="/download.png" alt="" className="home-sec-btn-icon" />
            </a>
          </div>
          <div className="home-sec-content">
            <div className="home-sec-content-img-sec">
              <img src="/robot-back.png" alt="" className="robot-back" />
              <img src="/robot.png" alt="" className="robot" />
            </div>{" "}
          </div>
        </div>

        {/* //Project section */}

        <div className="project-sec">
          <div className="project-title-sec" id="project-sec">
            {" "}
            Personal Projects
            <div className="project-title-underline"></div>
          </div>
          <div className="project-content-sec">
            {/* //project card body */}

            {/* //medicalequipment */}

            <div className="project-card-main-body">
              <div className="project-card-sub-body">
                <div className="project-card-body">
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
                      >
                        <img
                          src="/github.png"
                          alt=""
                          className="project-logo"
                        />
                        <div class="project-logo-text">View on GitHub</div>
                      </a>
                      <a
                        href="http://medicalequipment.vercel.app"
                        className="project-btn"
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

            <div className="project-card-main-body">
              <div className="project-card-sub-body">
                <div className="project-card-body">
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
                      >
                        <img
                          src="/github.png"
                          alt=""
                          className="project-logo"
                        />
                        <div class="project-logo-text">View on GitHub</div>
                      </a>
                      <a
                        href="http://hemoglobe.vercel.app"
                        className="project-btn"
                      >
                        Go to web
                        <img src="/web.png" alt="" className="project-logo" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* //Weather Hut */}

            <div className="project-card-main-body">
              <div className="project-card-sub-body">
                <div className="project-card-body">
                  <div className="project-card-img-sec">
                    <img
                      src="/weatherhut.png"
                      alt=""
                      className="project-card-img"
                    />
                  </div>
                  <div className="project-card-content-sec">
                    <div className="project-card-project-title">WeatherHut</div>
                    <div className="project-card-project-details">
                      WeatherHut displays real-time weather for your current
                      location and lets you search and save weather details for
                      specific regions when signed in.
                    </div>
                    <div className="project-card-project-logo-sec">
                      <a
                        href="https://github.com/amaljithmk07/WeatherHut"
                        className="project-github-btn"
                      >
                        <img
                          src="/github.png"
                          alt=""
                          className="project-logo"
                        />
                        <div class="project-logo-text">View on GitHub</div>
                      </a>
                      <a
                        href="http://weatherhut.vercel.app"
                        className="project-btn"
                      >
                        Go to web
                        <img src="/web.png" alt="" className="project-logo" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //contact section */}

        <div className="contact-sec">
          <div className="contact-sec-left-body" id="contact-sec">
            <div className="contact-sec-title-1">CONTACT US </div>
            <div className="contact-sec-title-2">
              {" "}
              Let's talk <br /> about you
            </div>
          </div>
          <div className="contact-sec-right-body">
            <form action="" className="form-sec" ref={form} name="myForm">
              <div className="form-title"> Send us a Message</div>
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
      </div>
    </div>
  );
};

export default Homepage;
