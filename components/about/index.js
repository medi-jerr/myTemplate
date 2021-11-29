import React from "react";
import app from "/public/app";
import { Main, Container, Section } from "./style";

function About() {
  return (
    <Main id="about">
      <Container className="container">
        <h1>{app.about.title}</h1>
        {app.about.description.split("\n").map((item, i) => (
          <p className="paragraph" key={i}>
            {item}
          </p>
        ))}
        <div className="parent">
          {app.about.sections.map((item) => (
            <Section key={item.id} className="child" img={item.image}>
              <div className="one">
                <h3>{item.title}</h3>
                {item.description.split("\n").map((it, i) => (
                  <p key={i}>{it}</p>
                ))}
              </div>
            </Section>
          ))}
        </div>
      </Container>
    </Main>
  );
}

export default About;
