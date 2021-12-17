import React from "react";
import app from "/public/app";
import { Main, Container, Mession, Title, Paragraph } from "./style";
import TheSlider from "./TheSlider";

function About() {
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
        <TheSlider data={app.about.sections} />
      </Mession>
      <div className="container"></div>
    </Main>
  );
}

export default About;
