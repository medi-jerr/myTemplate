import React from "react";
import { Main, Right } from "./style";
import app from "/public/app";

function Committee() {
  return (
    <Main back="/images/slide/quantum.jpg">
      <Right>
        <h1>{app.committee.title}</h1>
        <p>{app.committee.description}</p>
      </Right>
    </Main>
  );
}

export default Committee;
