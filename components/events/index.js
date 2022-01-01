import React, { useState } from "react";
import Header from "../frequentComponents/Header";
import App from "/public/app";
import Image from "next/image";
import { Main, Container, Span } from "./style";
import { BsHeartFill, BsBookmarkCheckFill } from "react-icons/bs";

function Events() {
  const [id, setId] = useState([]);
  const [join, setJoin] = useState([]);
  const joinEvent = (i) => {
    setJoin(join.includes(i) ? join.filter((it) => it !== i) : [...join, i]);
  };
  const likedEvent = (i) => {
    setId(id.includes(i) ? id.filter((it) => it !== i) : [...id, i]);
  };

  return (
    <Main id="events">
      <Header title={App.event.title} />
      <Container className="container">
        {App.event.events.map((item, i) => (
          <div key={i}>
            <div className="image">
              <Image
                src={item.image}
                layout="fill"
                alt={item.name}
                loading="eager"
              />
              <div className="icons">
                <p onClick={() => likedEvent(i)}>
                  <BsHeartFill
                    size="15"
                    color={id.includes(i) ? "#18d26e" : ""}
                  />
                </p>
                <p onClick={() => joinEvent(i)}>
                  <BsBookmarkCheckFill
                    size="15"
                    color={join.includes(i) ? "#18d26e" : ""}
                  />
                </p>
              </div>
              <p className="date">12-nov-2022</p>
              <div className="overlay"></div>
            </div>
            <div className="description">
              <h3>
                <Span>nov</Span> {item.name}
              </h3>
              <p>
                <Span>12</Span> {item.description}
              </p>
            </div>
          </div>
        ))}
      </Container>
    </Main>
  );
}

export default Events;
