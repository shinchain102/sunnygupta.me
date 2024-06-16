import React, { useState, useEffect } from "react";
import NewsSection from "./News/NewSection";
import HalfCircleSvg1 from "../assets/img/svg/half-circle-yellow.svg";
import HalfCircleSvg2 from "../assets/img/svg/half-circle-black.svg";
import Testimonial from "./home/Testimonial";
import EmailSection from "./home/EmailSection";
import FormSection from "./home/FormSection";
import FooterSection from "./FooterSection";
import Loader from "./home/Loader";
import MenuSection from "./News/MenuSection";

const News = () => {
  const [loading, setLoading] = useState(true);

  // circle move functionality
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

  // Loader functionality
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <MenuSection />
      <section className="active_menus overflow-hidden" id="news">
        <div className="all-page-border2">
          <div className="news-spacer">
            <div className="position-relative">
              <div className="yellow_circle"></div>
              <h2
                className="about-text"
                data-aos="fade-up"
                data-aos-container=".scroll-container"
              >
                News
              </h2>
              <p className="design_text creative_text" data-aos="fade-up">
                Luctus in posuere mattis tempor eu vestibulum. Malesuada risus
                felis consequat facilisis aenean quis. In nec.
              </p>
              <div class="half-circle-frame half-circle-frame2">
                <img
                  class="half-circle-yellow object"
                  data-value="-1"
                  src={HalfCircleSvg1}
                  alt="half-circle-yellow"
                />
                <img
                  class="half-circle-black object"
                  data-value="2"
                  src={HalfCircleSvg2}
                  alt="half-circle-black"
                />
              </div>
            </div>
            <NewsSection />
          </div>
        </div>
      </section>
      <section className="active_menus overflow-hidden" id="testimonial">
        <div className="all-page-border2">
          <div className="spacer position-relative container">
            <Testimonial />
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="all-page-border2">
          <EmailSection />
        </div>
      </section>
      <section id="contact">
        <div className="all-page-border2">
          <div className="row">
            <FormSection />
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
};
export default News;
