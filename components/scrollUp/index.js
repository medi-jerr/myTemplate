import React, { useEffect, useState } from "react";
import { Button } from "./Style";
import { MdKeyboardArrowUp } from "react-icons/md";
import { animateScroll } from "react-scroll";

function ScrollUp() {
  const [appear, setAppear] = useState(false);
  const showButton = () => {
    if (window.scrollY > 50) {
      setAppear(true);
    } else {
      setAppear(false);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", showButton);
  });

  return appear ? (
    <Button onClick={() => animateScroll.scrollToTop()}>
      <MdKeyboardArrowUp size="35px" />
    </Button>
  ) : (
    <></>
  );
}

export default ScrollUp;
