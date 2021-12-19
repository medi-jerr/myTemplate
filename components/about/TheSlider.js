import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Page, Title, Paragraph, Arrow } from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./SliderArrow";

function TheSlider({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
      {data.map((item, i) => (
        <Page key={i}>
          <div className="containerTwo">
            <div className="section">
              <Title>{item.title}</Title>
              {item.description.split("\n").map((it, i) => (
                <Paragraph key={i}>{it}</Paragraph>
              ))}
            </div>
          </div>
        </Page>
      ))}
    </Slider>
  );
}

export default TheSlider;
