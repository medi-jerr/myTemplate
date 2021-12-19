import { useState } from "react";
import Header from "../frequentComponents/Header";
import app from "/public/app";
import { Plan, Bubble, Main, Pay, BuContainer } from "./style";
import { GiNetworkBars } from "react-icons/gi";
import Categories from "./Categories";
import PayMethode from "./Payment";

function JoinUs() {
  const [show, setShow] = useState(false);
  return (
    <Main id="join">
      <div className="containerTwo">
        <Header title={app.join.title} description={app.join.description} />
        <Categories data={app.join.category} />
      </div>

      <div className="containerTwo">
        <Plan>
          {app.join &&
            app.join.plan.map((pl, i) => (
              <BuContainer key={i} show={show} onClick={() => setShow(true)}>
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
              </BuContainer>
            ))}
        </Plan>
        <Pay show={show}>
          <PayMethode />
        </Pay>
      </div>
    </Main>
  );
}

export default JoinUs;
