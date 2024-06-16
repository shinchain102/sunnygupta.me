import React from "react";
import { Link } from "react-router-dom";

const EmailSection = () => {
  return (
    <>
      <div className="email-bg">
        <div className="email-spacer">
          <div className="yellow_circle"></div>
          <h2 className="email-section" data-aos="fade-up">
            <Link to="mailto:hello@nairobi.comv">hello@nairobi.com</Link>
          </h2>
          <p className="design_text creative_text tell_us" data-aos="fade-up">
            Let tell us know your dream and we will help you make it become
            reality
          </p>
        </div>
      </div>
    </>
  );
};
export default EmailSection;
