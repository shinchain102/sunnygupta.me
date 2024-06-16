import React, { useState } from "react";
import HalfCircleSvg1 from "../../assets/img/svg/half-circle-yellow.svg";
import HalfCircleSvg2 from "../../assets/img/svg/half-circle-black.svg";
import HalfCircleBlack from "../../assets/img/svg/black-half-circal.svg";
import HalfCircleYellow from "../../assets/img/svg/yellow-half-circle.svg";
import heartSvg from "../../assets/img/svg/heart-line.svg";
import heartSvgActive from "../../assets/img/svg/heart-fill.svg";


const SolutionSection = () => {
  const [likeCount, setLikeCount] = useState(8); // Initial like count
  const [liked, setLiked] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleLikeClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);

    if (!liked) {
      setLikeCount((prevCount) => prevCount + 1);
      setLiked(true);
    } else {
      setLikeCount((prevCount) => prevCount - 1);
      setLiked(false);
    }
  };
  return (
    <>
      <div className="container">
        <div className="solution-spacer">
          <div className="position-relative">
            <div className="yellow_circle"></div>
            <h2 className="about-text" data-aos="fade-up">
              Solution
            </h2>
            <p className="unconventional" data-aos="fade-up">
              Our approach was to present the site as a visual editorial
              platform with quarterly features based on events and occasions the
              brand was focused on. Each quarterly focus would be marked by the
              hero and custom tags that filter content.
            </p>
            <div className="solution-half-circle">
              <img
                className="half-circle-yellow-solution"
                src={HalfCircleSvg1}
                alt="half-circle-yellow"
              />
              <img
                className="half-circle-black-solution"
                src={HalfCircleSvg2}
                alt="half-circle-black"
              />
            </div>
          </div>
          <div className="solution-text">
            <p className="volutpat volutpat1" data-aos="fade-up">
              Turpis tortor non, integer volutpat. Turpis feugiat leo erat
              tortor viverra tortor viverra aliquam. Feugiat non, dolor nec
              porta faucibus. Faucibus proin sed id hac mattis. Ut cursus ut
              mauris lacus, aliquam platea lobortis pharetra feugiat. Posuere
              vulputate ornare sed ultrices pulvinar nulla. Adipiscing sagittis
              eu urna, aliquam vitae maecenas. Donec eget posuere egestas in sed
              vel. Porta eros, in posuere erat. Amet, urna, malesuada congue
              lobortis. Non tempus convallis in suspendisse. Enim nec quisque
              urna, venenatis viverra semper. Lacus dui ultrices feugiat cursus
              suspendisse fermentum, ac senectus.
            </p>
            <p className="volutpat" data-aos="fade-up">
              Pellentesque et, ornare purus quisque tortor, massa quis. Ut
              cursus nisi orci, at. Magnis molestie at feugiat eleifend aliquam,
              et habitasse sapien. Ultricies ac velit adipiscing nunc fusce. Leo
              vestibulum et pharetra, diam ante eleifend felis, platea. Orci
              aliquet arcu, at in at sapien laoreet. Adipiscing elementum
              fermentum sit ut tellus. A, volutpat ut massa egestas vestibulum
              condimentum. Leo, convallis tristique facilisis elementum, ac
              adipiscing. Elementum tellus montes, sollicitudin nunc est a id
              eget. Volutpat.
            </p>
          </div>
          {/* <!-- ====================================== Like Button ===================================== --> */}
          <div
            className="like-button-circle position-relative"
            data-aos="fade-up"
          >
            <div className="large-font">
              <div className="like-increment" data-aos="fade-up">
                <img
                  className={`open_likes ${isActive ? "active" : ""}`}
                  onClick={handleLikeClick}
                  src={isActive ? heartSvgActive : heartSvg}
                  alt={liked ? "Liked" : "Like"}
                />
              </div>
            </div>

            <div className="half2-circle-like">
              <img
                className="black-half-circal-like object"
                data-value="1"
                src={HalfCircleBlack}
                alt="black-half-circal"
              />
              <img
                className="yellow-half-circal-like object"
                data-value="-2"
                src={HalfCircleYellow}
                alt="yellow-half-circle"
              />
            </div>
          </div>
          <div className={`like-increment ${liked ? "liked" : ""}`}>
            <span className="open_likes_count">{likeCount}</span>
            <p className="like-text">{liked ? "Liked" : "Liked"}</p>
          </div>
          {/* <!-- ====================================== Like Button End ===================================== --> */}
          <div className="next-prev-buttons overflow-hidden">
            <div
              className="colijala-text-group colijala-text-group2"
              data-aos="zoom-out-left"
            >
              <div className="right-line">
                <h3 className="d-none">hidden</h3>
                <h4 className="d-none">hidden</h4>
                <h5 className="d-none">hidden</h5>
                <h6 className="website-text prev-text m-0">
                  <a href="/colijala">PREV</a>
                </h6>
                <h4 className="colijala-text">
                  <a href="/colijala">Moligo</a>
                </h4>
              </div>
              <div className="red">
                <a href="/colijala">
                  <div className="arrow-pro"></div>
                </a>
              </div>
            </div>
            <div className="colijala-text-group" data-aos="zoom-out-right">
              <div className="right-line">
                <h5 className="d-none">hidden</h5>
                <h6 className="website-text m-0">
                  <a href="/colijala">NEXT</a>
                </h6>
                <h4 className="colijala-text">
                  <a href="/colijala">Bolmija</a>
                </h4>
              </div>
              <div className="red">
                <a href="/colijala">
                  <div className="arrow-pro"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SolutionSection;
