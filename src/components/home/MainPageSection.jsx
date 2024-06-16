import React, { useEffect } from "react";
import MultiplicationSvg1 from "../../assets/img/svg/black-multipliction.svg";
import MultiplicationSvg2 from "../../assets/img/svg/yellow-multiplication.svg";
import HalfCircleSvg1 from "../../assets/img/svg/half-circle-yellow.svg";
import HalfCircleSvg2 from "../../assets/img/svg/half-circle-black.svg";
import SlickImage from "../../../src/components/home/SlickImage";
import { Link } from "react-router-dom";

const MainPageSection = () =>
{
  // circle and multiplication moving functionality
  useEffect(() => {
    const parallax = (e) => {
      document.querySelectorAll(".object").forEach((move) => {
        const movingValue = move.getAttribute("data-value");
        const x = (e.clientX * movingValue) / 250;
        const y = (e.clientY * movingValue) / 250;
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);
  return (
    <>
      <div className="row top-img">
        <div className="col-xl-6 col-lg-6 col-md-12 p-0 position-relative">
          <div className="main_image_slider">
            <SlickImage />
          </div>
          <div className="multiplication-frame-main">
            <img
              className="black-multiplication object"
              data-value="-1"
              src={MultiplicationSvg1}
              alt="black-multipliction"
            />
            <img
              className="yellow-multiplication object"
              data-value="2"
              src={MultiplicationSvg2}
              alt="yellow-multiplication"
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 main-text-box">
          <div className="half-circle-main">
            <img
              className="half-circle-yellow object"
              data-value="-1"
              src={HalfCircleSvg1}
              alt="half-circle-yellow"
            />
            <img
              className="half-circle-black object"
              data-value="2"
              src={HalfCircleSvg2}
              alt="half-circle-black"
            />
          </div>
          <div className="main_text">
            <h2 className="d-none">hidden</h2>
            <h3 className="d-none">hidden</h3>
            <h4 className="d-none">hidden</h4>
            <h5 className="d-none">hidden</h5>
            <h6 className="hello_text">Hello, It’s</h6>
            <div className="nairobi_text animate one">
              <span className="singal-text">N</span>
              <span className="singal-text">a</span>
              <span className="singal-text">i</span>
              <span className="singal-text">r</span>
              <span className="singal-text">o</span>
              <span className="singal-text">b</span>
              <span className="singal-text">i&nbsp;</span>
              <br />
              <span className="singal-text">G</span>
              <span className="singal-text">a</span>
              <span className="singal-text">l</span>
              <span className="singal-text">z</span>
              <span className="singal-text">a</span>
              <span className="singal-text">r</span>
              <span className="singal-text">o</span>
            </div>
            <p className="design_text">
              I design, code, and build superficial things, and I love what I
              do.
            </p>
          </div>
        </div>
      </div>
      <div className="main_page_bottom_text">
        <div className="say-hello-main">
          <h6 className="say_hello_text">SAY HELLO</h6>
        </div>
        <div className="mouse">
          <Link to="#about">
            <div className="container_mouse mouse-img">
              <span className="mouse-btn">
                <span className="mouse-scroll"></span>
              </span>
            </div>
          </Link>
        </div>
        <div>
          <h6 className="follow_us_text follow_us_text2">FOLLOW US</h6>
          <div className="media-text">
            <p className="fb">
              <Link to="https://www.facebook.com/">Fb.</Link>
            </p>
            <p className="fb">
              <Link to="https://twitter.com/">Tw.</Link>
            </p>
            <p className="fb">
              <Link to="https://www.instagram.com/">Ins.</Link>
            </p>
            <p className="fb">
              <Link to="https://www.behance.net/">Be.</Link>
            </p>
            <p className="fb">
              <Link to="https://dribbble.com/">Db.</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainPageSection;
