import React from "react";
import app from "/public/app";
import { Main, Container, Mession, Page, Title, Paragraph } from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Main id="about">
      <Container className="containerTwo">
        <Title>{app.about.title}</Title>
        {app.about.description.split("\n").map((item, i) => (
          <Paragraph className="paragraph" key={i}>
            {item}
          </Paragraph>
        ))}
      </Container>
      <Mession back="/images/zhai.jpg">
        <Slider {...settings}>
          {app.about.sections.map((item, i) => (
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
      </Mession>
      <div className="container"></div>
    </Main>
  );
}

export default About;
