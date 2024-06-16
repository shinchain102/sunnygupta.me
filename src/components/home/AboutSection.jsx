import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmailSvg from "../../assets/img/svg/email.svg";
import PhoneSvg from "../../assets/img/svg/phone.svg";
import BlackDotSvg from "../../assets/img/svg/black-dots.svg";
import YellowSquare from "../../assets/img/svg/yellow-square-frame.svg";

const AboutSection = () => {
  // About page 8+ year count functionality
  const [counted, setCounted] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const counterElement = document.getElementById("counter");
      const countElements = document.querySelectorAll(".count");

      if (counted === 0 && counterElement) {
        const oTop = counterElement.offsetTop - window.innerHeight;

        if (window.scrollY > oTop) {
          countElements.forEach((element) => {
            const countTo = parseInt(element.getAttribute("data-count"));
            const duration = 9000;
            const easing = "swing";

            animateCount(element, countTo, duration, easing);
          });

          setCounted(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [counted]);

  const animateCount = (element, countTo, duration, easing) => {
    let start = 0;
    const step = () => {
      const increment = Math.ceil(countTo / (duration / 15));
      start += increment;

      if (start > countTo) {
        element.innerText = countTo;
      } else {
        element.innerText = start;
        requestAnimationFrame(step);
      }
    };

    step();
  };
  return (
    <>
      <div className="all-page-border2">
        <div className="about_top-spacer">
          <div className="yellow_circle yellow_circle_about"></div>
          <h2 className="about-text" data-aos="fade-up">
            ABOUT
          </h2>
          <p className="design_text creative_text" data-aos="fade-up">
            Creative Designer with Modern Techniques
          </p>
          <div className="row modern-techniques">
            <div className="col-xl-6 p-0" data-aos="fade-right">
              <div className="top-space">
                <h3 className="lobortgs">Lacusut Imperdiet Morbi Lobortgs.</h3>
                <h4 className="d-none">hidden</h4>
                <h5 className="d-none">hidden</h5>
                <p className="designer designer1">
                  Hello, I’m Nairobi, I'm a web designer and developer based in
                  NYC, USA. I have a passion for web design and love to create
                  for web and mobile devices.If you have a web based project
                  that you want to get started.
                </p>
                <p className="designer designer2">
                  Ut iaculis dignissim justo, ut scelerisque lacus gravida sit
                  amet. Mauris at pharetra quam. className aptent taciti
                  sociosqu ad litora torquent per conubia nostra per.
                </p>
                <div className="phone-email-icons">
                  <div className="phone-icon phone-icon1">
                    <div className="phone-email-svg-main">
                      <Link to="tel:+01(234)5678899">
                        <img
                          className="phone-email-svg"
                          src={PhoneSvg}
                          alt="phone"
                        />
                      </Link>
                    </div>
                    <div className="big-yellow-circle"></div>
                    <p className="mobile-email">
                      <Link to="tel:+01(234)5678899">+01 (234) 567 8899</Link>
                    </p>
                  </div>
                  <div className="email-icon">
                    <div className="phone-email-svg-main2">
                      <Link to="mailto:hello@nairobi.com">
                        <img
                          className="phone-email-svg"
                          src={EmailSvg}
                          alt="email"
                        />
                      </Link>
                    </div>
                    <div className="big-yellow-circle"></div>
                    <p className="mobile-email">
                      <a to="mailto:hello@nairobi.com">hello@nairobi.com</a>
                    </p>
                  </div>
                </div>
                <h6 className="contact-me-text">
                  <Link to="#active_menus">CONTACT ME</Link>
                </h6>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-6  p-0 position-relative image8"
              data-aos="fade-left"
            >
              <div className="dots-main">
                <img
                  className="black-dots object"
                  data-value="1"
                  src={BlackDotSvg}
                  alt="black-dots"
                />
                <img
                  className="yellow-square-frame object"
                  data-value="-2"
                  src={YellowSquare}
                  alt="yellow-square-frame"
                />
              </div>
              <div className="right-space">
                <div className="badge">
                  <ul className="slideshow2">
                    <li>
                      <span className="img-bg-slide">Image 01</span>
                    </li>
                    <li>
                      <span className="img-bg-slide">Image 02</span>
                    </li>
                    <li>
                      <span className="img-bg-slide">Image 03</span>
                    </li>
                    <li>
                      <span className="img-bg-slide">Image 04</span>
                    </li>
                  </ul>
                  <div className="text">
                    <div className="dolly">
                      <div className="digit" id="counter">
                        <h4
                          className="eight-digit count percent"
                          data-count="8"
                        >
                          0
                        </h4>
                      </div>
                      <p className="yer-expi">Years Of Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />
    </>
  );
};
export default AboutSection;
