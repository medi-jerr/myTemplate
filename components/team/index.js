import React from "react";
import { Main, Container } from "./style";
import app from "/public/app";
import Members from "./Members";

function Team() {
  return (
    <Main id="membership">
      <Container className="container">
        <h1>{app.team.title}</h1>
        <p className="paragraph">{app.team.description}</p>
        <Members members={app.team.members} />
      </Container>
    </Main>
  );
}

export default Team;
