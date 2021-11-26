import React from "react";
import app from "/public/app";
import { Main, Container } from "./style";

function About() {
  return (
    <Main id="about">
      <Container className="container">
        <h1>{app.about.title}</h1>
        <p>{app.about.description}</p>
      </Container>
    </Main>
  );
}

export default About;
