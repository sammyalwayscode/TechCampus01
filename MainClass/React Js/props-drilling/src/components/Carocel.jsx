import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import demo1 from "../assets/demo.jpg";
import demo2 from "../assets/mainbg.jpg";

const Carocel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Div className="slider-container">
      <Slider {...settings}>
        <Slide>
          <img src={demo1} alt="" />
          <h1>Hello</h1>
        </Slide>
        <Slide>
          <img src={demo2} alt="" />
        </Slide>
        <Slide>
          <img src={demo1} alt="" />
        </Slide>
      </Slider>
    </Div>
  );
};

export default Carocel;

const Slide = styled.div`
  height: 250px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Div = styled.div`
  background-color: red;
`;
