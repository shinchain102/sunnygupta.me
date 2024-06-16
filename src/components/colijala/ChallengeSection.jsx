import React, {useEffect, useRef} from "react";
import BlackDotSvg from "../../assets/img/svg/black-dots.svg";
import YellowSquare from "../../assets/img/svg/yellow-square-frame.svg";
import YellowFrameSvg from "../../assets/img/svg/traingle-yellow-frame.svg";
import BlackFrameSvg from "../../assets/img/svg/traingle-black-frame.svg";
import video1 from "../../assets/video/video5.mp4"

const ChallengeSection = () =>
{
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);
    return (
      <>
        <div className="all-page-border2">
          <div className="container">
            <div className="challenge-spacer">
              <div className="position-relative">
                <div className="yellow_circle"></div>
                <h2 className="about-text" data-aos="fade-up">
                  Challenge
                </h2>
                <p className="unconventional" data-aos="fade-up">
                  Create an unconventional yet user-friendly website
                  –innovative, with a clean and simple design that communicates
                  brand values and showcases multi-media content. Site that
                  spreads the message: “Islamic stories your child will love”
                </p>
                <div className="challenge-dots-square">
                  <img
                    className="challenge-black-dots"
                    src={BlackDotSvg}
                    alt="black-dots"
                  />
                  <img
                    className="challenge-squre-frame"
                    src={YellowSquare}
                    alt="yellow-square-frame"
                  />
                </div>
              </div>
              <div className="row challenge-box">
                <div className="col-xl-6" data-aos="fade-up">
                  <div className="skill-list">
                    <ul className="skill-list-main">
                      <li>
                        {" "}
                        Develop easy-to-find and easy-to-navigate mobile
                        friendly website
                      </li>
                      <li>
                        Showcase each type of content: interactive books,
                        animated stories and picture books, audio stories.
                        Create an experience people want to share with others
                      </li>
                      <li>Persuade to download app and subscribe</li>
                    </ul>
                  </div>
                  <p className="integer integer1">
                    Turpis tortor non, integer volutpat. Turpis feugiat leo erat
                    tortor viverra tortor viverra aliquam. Feugiat non, dolor
                    nec porta faucibus. Faucibus proin sed id hac mattis. Ut
                    cursus ut mauris lacus, aliquam platea lobortis pharetra
                    feugiat. Posuere vulputate ornare sed ultrices pulvinar
                    nulla. Adipiscing sagittis eu urna, aliquam vitae maecenas.
                    Donec eget posuere egestas in sed vel. Porta eros, in
                    posuere erat. Amet, urna, malesuada congue lobortis. Non
                    tempus convallis in suspendisse. Enim nec quisque urna,
                    venenatis viverra semper. Lacus dui ultrices feugiat cursus
                    suspendisse fermentum, ac senectus.
                  </p>
                  <p className="integer">
                    Pellentesque et, ornare purus quisque tortor, massa quis. Ut
                    cursus nisi orci, at. Magnis molestie at feugiat eleifend
                    aliquam, et habitasse sapien. Ultricies ac velit adipiscing
                    nunc fusce. Leo vestibulum et pharetra, diam ante eleifend
                    felis, platea. Orci aliquet arcu, at in at sapien laoreet.
                    Adipiscing elementum fermentum sit ut tellus. A, volutpat ut
                    massa egestas vestibulum condimentum. Leo, convall is
                    tristique facilisis elementum, ac adipiscing. Elementum
                    tellus montes, sollicitudin nunc est a id eget. Volutpat.
                  </p>
                  <div className="challenge-traingle-frame">
                    <img
                      className="ch-traingle-yellow-frame"
                      src={YellowFrameSvg}
                      alt="traingle-yellow-frame"
                    />
                    <img
                      className="ch-traingle-black-frame"
                      src={BlackFrameSvg}
                      alt="traingle-black-frame"
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="challenge-img-main">
                    <video
                      className="challenge-img"
                      src={video1}
                      ref={vidRef}
                      width="600"
                      height="300"
                      loop
                      autoPlay
                      muted
                    />
                    {/* <video autoplay loop muted className="challenge-img">
                      <source src={video1} type="video/mp4" />
                    </video> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default ChallengeSection;