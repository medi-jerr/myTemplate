import React from "react";
import { Main, TeamMemb, Img, ImgCont } from "./style";
import app from "/public/app";
import Image from "next/image";

function Team() {
  return (
    <Main>
      <div className="container">
        <TeamMemb className="team">
          {app.team.members.map((member, i) => (
            <ImgCont key={i}>
              <div className="overlay"></div>
              <Img
                alt={member.name}
                src={member.image}
                layout="fill"
                loading="eager"
                width="100"
                height="100"
              />
            </ImgCont>
          ))}
        </TeamMemb>
      </div>
    </Main>
  );
}

export default Team;
