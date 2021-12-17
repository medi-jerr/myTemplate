import React from "react";
import { Main, Container } from "./style";
import app from "/public/app";
import Members from "./Members";
import Header from "../frequentComponents/Header";

function Team() {
  return (
    <Main id="membership">
      <Container className="containerTwo">
        <Header title={app.team.title} description={app.team.description} />
        <Members members={app.team.members} />
      </Container>
    </Main>
  );
}

export default Team;
