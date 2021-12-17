import React from "react";
import Header from "../frequentComponents/Header";
import app from "/public/app";
import { Plan, Bubble, Main } from "./style";
import { GiNetworkBars } from "react-icons/gi";

function JoinUs() {
  return (
    <Main>
      <div className="containerTwo">
        <Header title={app.join.title} description={app.join.description} />
      </div>
      <div className="containerTwo">
        <Plan>
          {app.join &&
            app.join.plan.map((pl, i) => (
              <div key={i} className="borderM">
                <div className="mirror">
                  <Bubble className="childM" back={pl.back}>
                    <h3 className="logo">
                      <GiNetworkBars size="23" />
                    </h3>
                    <div>
                      <h3>{pl.title}</h3>
                      <p>
                        <strong>${pl.price}</strong> / year
                      </p>
                    </div>
                  </Bubble>
                </div>
              </div>
            ))}
        </Plan>
      </div>
    </Main>
  );
}

export default JoinUs;
