import app from "/public/app";
import { Main, MyImage } from "./style";
import Schedule from "../calendar";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

function Slider() {
  const [counter, setCounter] = useState(0);
  const [editMode, setEditMode] = useState(true);

  const description = app.slider[0].description.split("\n");

  let newArray = [];
  for (let i = 0; i < description.length; i++) {
    if (i % 2 == false) {
      newArray = [...newArray, description.slice(i, i + 2)];
    }
  }
  const [item, setItem] = useState(newArray[0]);

  const generatorFun = () => {
    setTimeout(() => {
      if (counter == newArray.length - 1) {
        setCounter(0);
        setEditMode(true);
      } else {
        setCounter(() => counter + 1);
        setEditMode(true);
      }
    }, 0);
  };
  useEffect(() => {
    setItem(newArray[counter]);
  }, [counter]);
  const desc = () => {
    if (editMode == false) {
      return <h3></h3>;
    } else {
      return (
        <h3>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .start()
                .typeString(item[1])
                .pauseFor(1500)
                .deleteAll()
                .callFunction(() => {
                  generatorFun();
                  setEditMode(false);
                });
            }}
          />{" "}
        </h3>
      );
    }
  };

  return (
    <Main img={app.slider[0].original} id="home">
      <p className="overlay"></p>
      <div className="description">
        <h2 className="title">{item[0]}</h2>
        {desc()}
        <button className="button" onClick={generatorFun}>
          Join Us
        </button>
      </div>
      <Schedule />
    </Main>
  );
}

export default Slider;
