import React from "react";
import { Main, Form } from "./style";
import app from "/public/app";
import Header from "../frequentComponents/Header";
import Image from "next/image";

function Contact() {
  return (
    <div id="contact">
      <div className="containerTwo">
        <Main>
          <Header
            title={app.contact.title}
            description={app.contact.description}
          />
          <div className="flex">
            {app.contact.contact.map((item, i) => (
              <div key={i} className="card">
                <h3>{item.title}</h3>
                <p>
                  {item.description} <i className="far fa-heart"></i>
                </p>
                <Image src={item.icon} width="30" height="30" alt="call" />
              </div>
            ))}
          </div>
          <Form>
            <div className="one">
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="two">
              <input type="text" placeholder="Subject" />
            </div>
            <textarea cols="30" rows="10" placeholder="Message"></textarea>
            <input type="submit" value="Send" />
          </Form>
        </Main>
      </div>
    </div>
  );
}

export default Contact;
