import React from "react";
import app from "/public/app";
import { Main } from "./style";

function Features() {
  return (
    <Main>
      {app.feature.map((it) => (
        <div className="feature" key={Math.random()}>
          <h3>{it.title}</h3>
          <p>{it.description}</p>
        </div>
      ))}
    </Main>
  );
}

export default Features;
