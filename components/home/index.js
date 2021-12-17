import app from "/public/app";
import { Main, MyImage } from "./style";
import Schedule from "../calendar";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  console.log(app.slider);
  return (
    <Main>
      <Slider {...settings}>
        {app.slider.map((it, i) => (
          <MyImage back={it.original} key={i}></MyImage>
        ))}
      </Slider>
    </Main>
  );
}

export default HomePage;
