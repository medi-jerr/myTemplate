import { useState, useEffect } from "react";
import { Logo, Main, TheLink, LogoSec, LogoIcon, Container } from "./style";
import app from "/public/app";
import Responsive from "./Responsive";

function Navbar() {
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
      <Container className="container">
        <TheLink to="#" smooth={true} duration={1000}>
          <LogoSec>
            <LogoIcon
              src={app.navbar.logo.icon}
              alt={app.navbar.logo.name}
              width="40px"
              height="40px"
            />
            <Logo>{app && app.navbar.logo.name}</Logo>
          </LogoSec>
        </TheLink>

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
        <Responsive titles={app.navbar.titles} />
      </Container>
    </Main>
  );
}

export default Navbar;
