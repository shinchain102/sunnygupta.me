import React, { useState } from "react";
import YellowFrameSvg from "../../assets/img/svg/traingle-yellow-frame.svg";
import BlackFrameSvg from "../../assets/img/svg/traingle-black-frame.svg";
import HalfCircleYellow from "../../assets/img/svg/yellow-half-circle.svg";
import HalfCircleBlack from "../../assets/img/svg/black-half-circal.svg";
import Accordion from "./Accordion";
import DownAngle from "../../assets/img/svg/arrow-down-s-line.svg";

const AccordionItems = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion2 accordion-sub" data-aos="fade-up">
      <button className="btn-toggle-show2" onClick={toggleAccordion}>
        <em>
          <span className="text-full-time">{title}</span>
          <span className="degit-dollar">
            $68 <span className="each-hour-text">/each hour</span>
          </span>
        </em>
        <img
          src={DownAngle}
          alt=""
          className={`fa-2xl ${isOpen ? "rotate" : ""}`}
        />
      </button>
      <div className={`inner-content2 ${isOpen ? "" : "para-hide"}`}>
        {children}
      </div>
    </div>
  );
};

const FaqPricing = () => {
  return (
    <>
      <div className="all-page-border2">
        <div className="row">
          <div className="col-xl-6 col-lg-6 p-0 line-faq">
            <div className="position-relative space">
              <div className="yellow_circle"></div>
              <h2 className="about-text" data-aos="fade-up">
                Faq
              </h2>
              <p className="design_text creative_text" data-aos="fade-up">
                Luctus in posuere mattis tempor eu vestibulum malesuada risus
                felis.
              </p>
              <div className="traingle-frame2">
                <img
                  className="traingle-yellow-frame2 object"
                  data-value="1"
                  src={YellowFrameSvg}
                  alt="traingle-yellow-frame"
                />
                <img
                  className="traingle-black-frame2 object"
                  data-value="-2"
                  src={BlackFrameSvg}
                  alt="traingle-balck-frame"
                />
              </div>
            </div>
            <Accordion />
          </div>
          <div className="col-xl-6 col-lg-6 p-0">
            <div className="position-relative space space2">
              <div className="yellow_circle"></div>
              <h2 className="about-text" data-aos="fade-up">
                Pricing
              </h2>
              <h3 className="d-none">hidden</h3>
              <h4 className="d-none">hidden</h4>
              <h5 className="d-none">hidden</h5>
              <p className="design_text creative_text" id="business-txt">
                Find the plan that's right for your business.
              </p>
              <div className="half2-cricle2">
                <img
                  className="black-half-circal2 object"
                  data-value="1"
                  src={HalfCircleBlack}
                  alt="half-circle-yellow"
                />
                <img
                  className="yellow-half-circle2 object"
                  data-value="-2"
                  src={HalfCircleYellow}
                  alt="half-circle-black"
                />
              </div>
            </div>
            <div className="accoedion2-main">
              <AccordionItems title="FULL TIME">
                <div className="row plan-top-space">
                  <div className="col-xxl-6 col-xl-12 col-lg-12 col-md-12 p-0">
                    <div className="basic box">
                      <h2 className="title">Basic</h2>
                      <div className="view">
                        <div className="cost">
                          <p className="amount">$88</p>
                          <p className="detail">/each hour</p>
                        </div>
                      </div>
                      <div className="description">
                        <ul>
                          <li className="description-text">
                            Lorem, ipsum dolor.
                          </li>
                          <li className="description-text">
                            Harum, beatae laudantium.
                          </li>
                          <li className="description-text">
                            Odit, fugit saepe.
                          </li>
                          <li className="description-text">
                            Harum, veniam suscipit!
                          </li>
                          <li className="description-text">
                            A, aut veritatis!
                          </li>
                          <li className="description-text">
                            Aliquid, quasi repellat!
                          </li>
                        </ul>
                      </div>
                      <div className="sub-btn">
                        <button className="sub-btn-main" type="submit">
                          7 DAYS FREE TRIAL
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-12 col-lg-12 col-md-12 p-0">
                    <div className="business box">
                      <h2 className="title">Business</h2>
                      <h3 className="d-none">hidden</h3>
                      <h4 className="d-none">hidden</h4>
                      <h5 className="d-none">hidden</h5>
                      <div className="view">
                        <div className="cost">
                          <p className="amount">$68</p>
                          <p className="detail">/each hour</p>
                        </div>
                      </div>
                      <div className="description">
                        <ul>
                          <li className="description-text">
                            Lorem, ipsum dolor.
                          </li>
                          <li className="description-text">
                            Harum, beatae laudantium.
                          </li>
                          <li className="description-text">
                            Odit, fugit saepe.
                          </li>
                          <li className="description-text">
                            Harum, veniam suscipit!
                          </li>
                          <li className="description-text">
                            A, aut veritatis!
                          </li>
                          <li className="description-text">
                            Aliquid, quasi repellat!
                          </li>
                        </ul>
                      </div>
                      <div className="sub-btn">
                        <button className="sub-btn-main" type="submit">
                          7 DAYS FREE TRIAL
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItems>

              <div className="accordion2">
                <AccordionItems title="CONTRACT">
                  <div className="row plan-top-space">
                    <div className="col-xl-6 col-lg-12 col-md-6 p-0">
                      <div className="basic box">
                        <h2 className="title">Basic</h2>
                        <div className="view">
                          <div className="cost">
                            <p className="amount">$88</p>
                            <p className="detail">/each hour</p>
                          </div>
                        </div>
                        <div className="description">
                          <ul>
                            <li className="description-text">
                              Lorem, ipsum dolor.
                            </li>
                            <li className="description-text">
                              Harum, beatae laudantium.
                            </li>
                            <li className="description-text">
                              Odit, fugit saepe.
                            </li>
                            <li className="description-text">
                              Harum, veniam suscipit!
                            </li>
                            <li className="description-text">
                              A, aut veritatis!
                            </li>
                            <li className="description-text">
                              Aliquid, quasi repellat!
                            </li>
                          </ul>
                        </div>
                        <div className="sub-btn">
                          <button className="sub-btn-main" type="submit">
                            7 DAYS FREE TRIAL
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6 p-0">
                      <div className="business box">
                        <h2 className="title">Business</h2>
                        <div className="view">
                          <div className="cost">
                            <p className="amount">$68</p>
                            <p className="detail">/each hour</p>
                          </div>
                        </div>
                        <div className="description">
                          <ul>
                            <li className="description-text">
                              Lorem, ipsum dolor.
                            </li>
                            <li className="description-text">
                              Harum, beatae laudantium.
                            </li>
                            <li className="description-text">
                              Odit, fugit saepe.
                            </li>
                            <li className="description-text">
                              Harum, veniam suscipit!
                            </li>
                            <li className="description-text">
                              A, aut veritatis!
                            </li>
                            <li className="description-text">
                              Aliquid, quasi repellat!
                            </li>
                          </ul>
                        </div>
                        <div className="sub-btn">
                          <button className="sub-btn-main" type="submit">
                            7 DAYS FREE TRIAL
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionItems>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FaqPricing;
