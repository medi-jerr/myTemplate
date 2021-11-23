import { useState, useEffect } from "react";
import { Logo, Main, TheLink } from "./style";
import app from "/public/app";

function Navbar({ data }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setDark(true);
      } else {
        setDark(false);
      }
    });
  }, []);

  return (
    <Main dark={dark}>
      <Logo>{app && app.navbar.logo}</Logo>
      <ul>
        {app &&
          app.navbar.titles.map((it) => (
            <li key={Math.random()}>
              <TheLink to={it} smooth={true} duration={1000}>
                {it}
              </TheLink>
            </li>
          ))}
      </ul>
    </Main>
  );
}

export default Navbar;
