import React from "react";
import YellowSquare from "../../assets/img/svg/yellow-square-frame.svg";
import BlackDotSvg from "../../assets/img/svg/black-dots.svg";
import Emoji1 from "../../assets/img/testimonial/emoji.png";
import Emoji2 from "../../assets/img/testimonial/emoji2.png";
import Emoji3 from "../../assets/img/testimonial/emoji3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevArrowImg from "../../assets/img/svg/pre-arrow.svg";
import nextArrowImg from "../../assets/img/svg/next-arrow.svg";


class Testimonial extends React.Component
{
  render ()
  {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />
    };
    return (
      <>
        <div className="position-relative">
          <div className="yellow_circle"></div>
          <h2 className="about-text" data-aos="fade-up">
            Testimonial
          </h2>
          <p className="design_text creative_text" data-aos="fade-up">
            Luctus in posuere mattis tempor eu vestibulum. Malesuada risus felis
            consequat facilisis aenean quis. In nec.
          </p>
          <div className="dots-square2">
            <img
              className="dots-img1 object"
              data-value="1"
              src={BlackDotSvg}
              alt="dots-img"
            />
            <img
              className="yellow-square-frame2 object"
              data-value="-2"
              src={YellowSquare}
              alt="yellow-square-frame"
            />
          </div>
        </div>
        <Slider {...settings} className="testimonial_slider">
          <div>
            <div className="left-right-space">
              <p className="slider-text">
                I had a problem finding something, asked the support team, got a
                replay and a solution within a few minutes. Brilliant support!
                Very happy with the website I bought.
              </p>
            </div>
            <div className="emoji-img-main">
              <img className="emoji" src={Emoji1} alt="emoji" />
            </div>
            <h3 className="requel">raquel Murillo</h3>
            <h4 className="ceo">CEO, DLKP</h4>
          </div>

          <div>
            <div className="left-right-space">
              <p className="slider-text">
                I had a problem finding something, asked the support team, got a
                replay and a solution within a few minutes. Brilliant support!
                Very happy with the website I bought.
              </p>
            </div>
            <div className="emoji-img-main">
              <img className="emoji" src={Emoji2} alt="emoji2" />
            </div>
            <h3 className="requel">raquel Murillo</h3>
            <h4 className="ceo">CEO, DLKP</h4>
          </div>

          <div>
            <div className="left-right-space">
              <p className="slider-text">
                I had a problem finding something, asked the support team, got a
                replay and a solution within a few minutes. Brilliant support!
                Very happy with the website I bought.
              </p>
            </div>
            <div className="emoji-img-main">
              <img className="emoji" src={Emoji3} alt="emoji3" />
            </div>
            <h3 className="requel">raquel Murillo</h3>
            <h4 className="ceo">CEO, DLKP</h4>
          </div>
        </Slider>
        <img
          className="singal-dots-img object"
          data-value="3"
          src={BlackDotSvg}
          alt="dots-img"
        />
      
      </>
    );
  };
};
const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <span className={className} onClick={onClick}>
      <img src={prevArrowImg} alt="Previous" />
    </span>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <span className={className} onClick={onClick}>
      <img src={nextArrowImg} alt="Next" />
    </span>
  );
};
export default Testimonial;
