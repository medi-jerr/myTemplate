import React from "react";
import { Main } from "./style";
import app from "/public/app";
import Header from "../frequentComponents/Header";
import Image from "next/image";
import Link from "next/link";

function Donation() {
  return (
    <Main id="donation">
      <div className="containerTwo">
        <Header title={app.donate.title} description={app.donate.description} />
      </div>
      <div className="container">
        <div
          className="donate"
          onClick={() => {
            window.open(
              "https://www.paypal.com/donate?hosted_button_id=BF5Z784YRSX4Y",
              "_blank"
            );
          }}
        >
          <Image
            src="/images/paypal.png"
            width="300"
            height="100"
            alt="Paypal"
            loading="eager"
          />
        </div>
      </div>
    </Main>
  );
}

export default Donation;
