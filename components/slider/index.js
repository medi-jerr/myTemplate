import React from "react";
import ReactImageGallery from "react-image-gallery";
import app from "/public/app";
import { Overlay, Main } from "./style";
import "react-image-gallery/styles/css/image-gallery.css";

function Slider() {
  return (
    <Main>
      <ReactImageGallery
        items={app.slider}
        slideDuration={3000}
        showThumbnails={false}
        swipingTransitionDuration={100}
      />
      <Overlay></Overlay>
    </Main>
  );
}

export default Slider;
