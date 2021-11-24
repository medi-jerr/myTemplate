import React from "react";
import ReactImageGallery from "react-image-gallery";
import app from "/public/app";
import { Main } from "./style";
import "react-image-gallery/styles/css/image-gallery.css";
import Schedule from "../calendar";

function Slider() {
  return (
    <Main>
      <ReactImageGallery
        items={app.slider}
        slideDuration={2000}
        showThumbnails={false}
        swipingTransitionDuration={100}
      />
      <Schedule />
    </Main>
  );
}

export default Slider;
