import React, { useEffect, useState } from "react";
import MenuSection from "./home/MenuSection";
import AboutSection from "./home/AboutSection";
import MainPageSection from "./home/MainPageSection";
import ServicesSection from "./home/ServicesSection";
import ResumeSection from "./home/ResumeSection";
import PortFolioSection from "./home/PortFolioSection";
import FaqPricing from "./home/FaqPricing";
import SvgIcon from "../assets/img/svg/traingle-btn.svg";
import Testimonial from "./home/Testimonial";
import NewsSection from "./home/NewsSection";
import YellowCurve from "../assets/img/svg/yellow-curve-frame.svg";
import BlackCurve from "../assets/img/svg/black-curve-frame.svg";
import EmailSection from "./home/EmailSection";
import FormSection from "./home/FormSection";
import FooterSection from "./FooterSection";
import Loader from "./home/Loader";
import VideoModal from "./VideoModal";
import { Link } from "react-router-dom";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="site_content">
        <div class="main_container">
          <MenuSection />
          <div className="all-page-border active_menus">
            <MainPageSection />
          </div>
          <section className="active_menus overflow-hidden" id="about">
            <AboutSection />
          </section>
          <div className="all-page-border2 overflow-hidden">
            <div className="shapes-bg">
              <div className="video-section-text-main container">
                <p className="video-section-text" data-aos="fade-up">
                  We are a team of design-led developers & designers that
                  believe in the value of well-considered design and how it can
                  positively impact lives, communities and the broader
                  environment.
                </p>
                <div>
                  <div className="video-btn-main" data-aos="fade-up">
                    <button
                      id="play-video"
                      className="video-play-button pulse"
                      onClick={openModal}
                    >
                      <img class="traingle-img" src={SvgIcon} alt="traingle" />
                    </button>

                    <VideoModal isOpen={isModalOpen} onClose={closeModal} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="overflow-hidden">
            <ServicesSection />
          </section>
          <section className="active_menus overflow-hidden" id="resume">
            <div className="all-page-border2">
              <div className="resume-bg">
                <div className="servies-spacer">
                  <div className="yellow_circle"></div>
                  <h2 className="about-text" data-aos="fade-up">
                    Resume
                  </h2>
                  <p className="design_text creative_text" data-aos="fade-up">
                    Luctus in posuere mattis tempor eu vestibulum. Malesuada
                    risus felis consequat facilisis aenean quis. In nec.
                  </p>
                </div>
              </div>
            </div>
            <ResumeSection />
          </section>
          <section className="active_menus overflow-hidden" id="portfolio">
            <PortFolioSection />
          </section>
          <section className="active_menus overflow-hidden" id="testimonial">
            <div className="all-page-border2">
              <div className="spacer position-relative container">
                <Testimonial />
              </div>
            </div>
          </section>
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
                    Luctus in posuere mattis tempor eu vestibulum. Malesuada
                    risus felis consequat facilisis aenean quis. In nec.
                  </p>
                  <div className="curve-svg">
                    <img
                      className="yellow-curve-frame"
                      src={YellowCurve}
                      alt="yellow-curve-frame"
                    />
                    <img
                      className="black-curve-frame"
                      src={BlackCurve}
                      alt="black-curve-frame"
                    />
                  </div>
                </div>
                <NewsSection />
              </div>
              <h5 className="d-none">hidden</h5>
              <h6 className="view-more">
                <Link to="news">View More</Link>
              </h6>
            </div>
          </section>
          <section className="overflow-hidden">
            <FaqPricing />
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
        </div>
      </div>
    </>
  );
};
export default Home;
