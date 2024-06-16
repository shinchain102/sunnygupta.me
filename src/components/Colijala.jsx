import React, { useState, useEffect } from "react";
import MenuSection from "./colijala/MenuSection";
import MainPageSection from "./colijala/MainPageSection";
import headerLogo from "../assets/img/svg/logo.svg";
import Marque from "./colijala/MarqueSection";
import ChallengeSection from "./colijala/ChallengeSection";
import SolutionSection from "./colijala/SolutionSection";
import ServicesSection from "./home/ServicesSection";
import Testimonial from "./home/Testimonial";
import EmailSection from "./home/EmailSection";
import FormSection from "./home/FormSection";
import FooterSection from "./FooterSection";
import Loader from "./home/Loader";
import { Link } from "react-router-dom";

const Colijala = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <header className="menu">
        <div className="logo_main">
          <Link to="/">
            <img className="logo" src={headerLogo} alt="logo" />
          </Link>
        </div>
        <nav className="nav_item">
          <ul className="list">
            <li className="menu-btn">
              <Link to="/">
                HOME
                <span className="yellow-line"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="wrapper" id="wrapper">
        <MenuSection />
      </div>
      <div className="main-page-space overflow-hidden">
        <MainPageSection />
      </div>
      <section>
        <Marque />
      </section>
      <section className="overflow-hidden">
        <ChallengeSection />
      </section>
      <section className="overflow-hidden">
        <div className="all-page-border2">
          <SolutionSection />
        </div>
      </section>
      <ServicesSection />
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
export default Colijala;
