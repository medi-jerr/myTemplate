import React from "react";
import { Main, CopyRight } from "./style";
import app from "/public/app";
import { IoIosArrowForward } from "react-icons/io";

function Footer() {
  return (
    <>
      <Main>
        <div>
          <h1>{app.footer.conclusion.title}</h1>
          <p>{app.footer.conclusion.description}</p>
        </div>
        <div>
          <h3>{app.footer.conclusion.links.title}</h3>
          {app.footer.conclusion.links.link.map((item, i) => (
            <p key={i} className="link">
              <IoIosArrowForward />
              {item}
            </p>
          ))}
        </div>
        <div>
          <h3 className="contact">{app.footer.conclusion.contact.title}</h3>
          <p>{app.footer.conclusion.contact.adress}</p>
          <p>{app.footer.conclusion.contact.phone}</p>
          <p>{app.footer.conclusion.contact.email}</p>
        </div>
      </Main>
      <CopyRight>
        <p>&copy;{app.footer.copyright.copyright}</p>
      </CopyRight>
    </>
  );
}

export default Footer;
