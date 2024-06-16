import React, { useRef } from "react";
import BlackYellowSvg from "../../assets/img/resumeimg/black-yellow-circle.jpg";
import EnvatoIcon from "../../assets/img/svg/envato-icon.svg";
import AppleIcon from "../../assets/img/svg/apple-icon.svg";
import TwitterIcon from "../../assets/img/svg/twitter-icon.svg";
import ResumeProfileImg from "../../assets/img/resumeimg/resume-img.png";
import FrameSvg from "../../assets/img/svg/s-frame.svg";
import YellowFrameSvg from "../../assets/img/svg/traingle-yellow-frame.svg";
import BlackFrameSvg from "../../assets/img/svg/traingle-black-frame.svg";
import HalfCircleBlack from "../../assets/img/svg/black-half-circal.svg";
import HalfCircleYellow from "../../assets/img/svg/yellow-half-circle.svg";
import ProgressScroll from "./ProgressScroll";
import RevealOnScroll from "./RevealOnScroll";
import { Link } from "react-router-dom";

const ResumeSection = () => {
  const progressBarRefs = useRef([]);

  return (
    <>
      <div className="all-page-border2">
        <div className="row">
          <div className="col-xl-6 col-lg-6 line p-0">
            <div className="resume-main">
              <h3 className="education-text" data-aos="fade-up">
                Education
              </h3>
              <h4 className="d-none">hidden</h4>
              <h5 className="d-none">hidden</h5>
              <p className="dignissim-text" data-aos="fade-up">
                Nunc dignissim odio elementum habitant vitae elementum. Diam
                turpis cursus auctor ullamcorper egestas tristique id. Egestas
                commodo purus eget diam diam montes. Tempor integer sagittis sit
                libero. Rhoncus ut tellus pellentesque
              </p>
              <div className="left-line">
                <img
                  className="black-yellow-circle"
                  src={BlackYellowSvg}
                  alt="black-yellow-circle"
                />
                <div className="side-space" data-aos="fade-up">
                  <h6 className="resume-ed-text">
                    Bachelor of Science in Information Technology
                  </h6>
                  <p className="sity">Cambridge University / 2010 - 2014</p>
                  <p className="nibh">
                    Cursus ut consectetur rhoncus ut nibh. Bibendum at sit a
                    tempor, laoreet varius et. Sed ut egestas vitae dolor nulla
                    non. Ullamcorper amet nibh aliquam bibendum netus porttitor
                    nunc feugiat nulla.
                  </p>
                </div>
              </div>
              <div className="left-line">
                <img
                  className="black-yellow-circle"
                  src={BlackYellowSvg}
                  alt="black-yellow-circle"
                />
                <div className="side-space" data-aos="fade-up">
                  <h6 className="resume-ed-text">
                    Master of Science in Information Technology
                  </h6>
                  <p className="sity">Cambridge University / 2014 - 2016</p>
                  <p className="nibh">
                    Cursus ut consectetur rhoncus ut nibh. Bibendum at sit a
                    tempor, laoreet varius et. Sed ut egestas vitae dolor nulla
                    non. Ullamcorper amet nibh aliquam bibendum netus porttitor
                    nunc feugiat nulla.
                  </p>
                </div>
              </div>
              <div className="left-line">
                <img
                  className="black-yellow-circle"
                  src={BlackYellowSvg}
                  alt="black-yellow-circle"
                />
                <div className="side-space" data-aos="fade-up">
                  <h6 className="resume-ed-text">
                    Phd of Science in Information Technology
                  </h6>
                  <p className="sity">Cambridge University / 2016 - 2018</p>
                  <p className="nibh">
                    Cursus ut consectetur rhoncus ut nibh. Bibendum at sit a
                    tempor, laoreet varius et. Sed ut egestas vitae dolor nulla
                    non. Ullamcorper amet nibh aliquam bibendum netus porttitor
                    nunc feugiat nulla.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 p-0">
            <div className="resume-main">
              <h3 className="education-text" data-aos="fade-up">
                Experience
              </h3>
              <h4 className="d-none">hidden</h4>
              <h5 className="d-none">hidden</h5>
              <p className="dignissim-text" data-aos="fade-up">
                Nunc dignissim odio elementum habitant vitae elementum. Diam
                turpis cursus auctor ullamcorper egestas tristique id. Egestas
                commodo purus eget diam diam montes. Tempor integer sagittis sit
                libero. Rhoncus ut tellus pellentesque.
              </p>
              <div className="left-line">
                <img
                  className="black-yellow-circle"
                  src={BlackYellowSvg}
                  alt="black-yellow-circle"
                />
                <div className="side-space" data-aos="fade-up">
                  <div className="icons-set">
                    <div>
                      <h6 className="resume-ed-text">
                        Lead Design & Development
                      </h6>
                      <p className="sity">Envato / 2020 - Current</p>
                    </div>
                    <img
                      className="envato-icon"
                      src={EnvatoIcon}
                      alt="envato-icon"
                    />
                  </div>
                  <p className="nibh">
                    Cursus ut consectetur rhoncus ut nibh. Bibendum at sit a
                    tempor, laoreet varius et. Sed ut egestas vitae dolor nulla
                    non. Ullamcorper amet nibh aliquam bibendum netus porttitor
                    nunc feugiat nulla.
                  </p>
                </div>
              </div>
              <div className="left-line">
                <img
                  className="black-yellow-circle"
                  src={BlackYellowSvg}
                  alt="black-yellow-circle"
                />
                <div className="side-space" data-aos="fade-up">
                  <div className="icons-set">
                    <div>
                      <h6 className="resume-ed-text">
                        Senior Design & Developemnt
                      </h6>
                      <p className="sity">Apple / 2019 - 2020</p>
                    </div>
                    <img
                      className="apple-icon"
                      src={AppleIcon}
                      alt="apple-icon"
                    />
                  </div>
                  <p className="nibh">
                    Cursus ut consectetur rhoncus ut nibh. Bibendum at sit a
                    tempor,laoreet varius et. Sed ut egestas vitae dolor nulla
                    non. Ullamcorper amet nibh aliquam bibendum netus porttitor
                    nunc feugiat nulla.
                  </p>
                </div>
              </div>
              <div className="left-line">
                <img
                  className="black-yellow-circle"
                  src={BlackYellowSvg}
                  alt="black-yellow-circle"
                />
                <div className="side-space" data-aos="fade-up">
                  <div className="icons-set">
                    <div>
                      <h6 className="resume-ed-text">
                        Junior Design & Development
                      </h6>
                      <p className="sity">Twitter / 2018 - 2019</p>
                    </div>
                    <img
                      className="twitter-icon"
                      src={TwitterIcon}
                      alt="twitter-icon"
                    />
                  </div>
                  <p className="nibh">
                    Cursus ut consectetur rhoncus ut nibh. Bibendum at sit a
                    tempor, laoreet varius et. Sed ut egestas vitae dolor nulla
                    non. Ullamcorper amet nibh aliquam bibendum netus porttitor
                    nunc feugiat nulla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-page-border2 reveal progressbar">
        <div className="spacer">
          <div className="row">
            <div className="col-xl-4 col-lg-12 p-0">
              <div className="left-side-space" data-aos="fade-up">
                <div className="resume-img-main">
                  <img
                    className="resume-img"
                    src={ResumeProfileImg}
                    alt="resume-img"
                  />
                </div>
                <div className="s-frame-main">
                  <Link to="https://www.skype.com/en/">
                    <img className="s-frame" src={FrameSvg} alt="s-frame" />
                  </Link>
                </div>
              </div>
              <h4 className="anytime" data-aos="fade-up">
                Anytime Anywhere
              </h4>
              <div className="send-btn-main" data-aos="fade-up">
                <button
                  className="send-btn1"
                  onclick="window.location.href = '#send';"
                >
                  SEND ME MESSAGE
                  <span className="send-span"></span>
                </button>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 position-relative">
              <h3 className="imagine" data-aos="fade-up">
                You Can Imagine I Can Do
              </h3>
              <p className="visually-text" data-aos="fade-up">
                I am working on a professional, visually sophisticated and
                technologically proficient, responsive and multi-functional
                creative personal resume portfolio template Nairobi.
              </p>
              <div
                className="progress-bar reveal"
                data-percentage="84%"
                data-aos="fade-up"
                ref={(element) =>
                  element && progressBarRefs.current.push(element)
                }
              >
                <h4 className="progress-title-holder">
                  <span className="progress-title">HTML/CSS</span>
                  <span className="progress-number-wrapper">
                    <span className="progress-number-mark">
                      <span className="percent-bar">84%</span>
                      <span className="down-arrow"></span>
                    </span>
                  </span>
                </h4>
                <div className="progress-content-outter">
                  <div className="progress-content"></div>
                </div>
              </div>
              <ProgressScroll />
              <RevealOnScroll />
              <div
                className="progress-bar"
                data-percentage="90%"
                data-aos="fade-up"
                ref={(element) =>
                  element && progressBarRefs.current.push(element)
                }
              >
                <h4 className="progress-title-holder clearfix">
                  <span className="progress-title">Figma/Xd</span>
                  <span className="progress-number-wrapper">
                    <span className="progress-number-mark">
                      <span className="percent-bar">90%</span>
                      <span className="down-arrow"></span>
                    </span>
                  </span>
                </h4>
                <div className="progress-content-outter">
                  <div className="progress-content"></div>
                </div>
              </div>
              <ProgressScroll />
              <RevealOnScroll />
              <div
                className="progress-bar"
                data-percentage="78%"
                data-aos="fade-up"
                ref={(element) =>
                  element && progressBarRefs.current.push(element)
                }
              >
                <h4 className="progress-title-holder clearfix">
                  <span className="progress-title">WordPress</span>
                  <span className="progress-number-wrapper">
                    <span className="progress-number-mark">
                      <span className="percent-bar">78%</span>
                      <span className="down-arrow"></span>
                    </span>
                  </span>
                </h4>
                <div className="progress-content-outter">
                  <div className="progress-content"></div>
                </div>
              </div>
              <ProgressScroll />
              <RevealOnScroll />
              <div className="half2-cricle">
                <img
                  className="black-half-circal object"
                  data-value="1"
                  src={HalfCircleBlack}
                  alt="half-circle-black"
                />
                <img
                  className="yellow-half-circle object"
                  data-value="-2"
                  src={HalfCircleYellow}
                  alt="half-circle-yellow"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 p-0 position-relative know-lan">
              <div>
                <h4 className="knowledge-text" data-aos="fade-up">
                  Knowledge
                </h4>
                <div className="skill-list skill-list2" data-aos="fade-up">
                  <ul className="skill-list-main">
                    <li className="">Website/Graphic Designing</li>
                    <li>WordPress Development</li>
                    <li>Brand & Corporate Identity</li>
                    <li>Custom Website Development</li>
                    <li>Mobile App UI/UX Design</li>
                    <li>Digital product design platform</li>
                  </ul>
                  <div className="traingle-frame">
                    <img
                      className="traingle-yellow-frame object"
                      data-value="-2"
                      src={YellowFrameSvg}
                      alt="traingle-yellow-frame"
                    />
                    <img
                      className="traingle-balck-frame object"
                      data-value="1"
                      src={BlackFrameSvg}
                      alt="traingle-balck-frame"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="languages-text" data-aos="fade-up">
                  Languages
                </h4>
                <div className="skill-list skill-list3" data-aos="fade-up">
                  <ul className="skill-list-main">
                    <li>English</li>
                    <li>Spanish</li>
                    <li>Mobile App UI/UX Design</li>
                    <li>French</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResumeSection;
