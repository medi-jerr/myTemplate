import app from "/public/app";
import { Main, MyImage, ButtonOne } from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./SliderArrow";
import { Link } from "react-scroll";
import { default as LinkOt } from "next/link";

function HomePage() {
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
    <Main id="home">
      <Slider {...settings}>
        {app.slider.map((it, i) => (
          <MyImage back={it.original} key={i}>
            <div className="containerTwo">
              <div className="content">
                <h1>{it.title}</h1>
                <p>{it.description}</p>
                <ButtonOne className="register">
                  <LinkOt href="/blogs">Blogs</LinkOt>
                </ButtonOne>
              </div>
            </div>
          </MyImage>
        ))}
      </Slider>
    </Main>
  );
}

export default HomePage;
