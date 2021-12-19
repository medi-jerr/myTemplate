import React from "react";
import { Paypal, Card } from "./style";
import Image from "next/image";

function PayMethode() {
  return (
    <div>
      <Paypal
        onClick={() => {
          window.open(
            "https://www.paypal.com/donate?hosted_button_id=BF5Z784YRSX4Y",
            "_blank"
          );
        }}
      >
        <Image
          src="/images/download.svg"
          width="80"
          height="30"
          alt="paypal"
          loading="eager"
        />
      </Paypal>
      <Card className="card">
        <Image
          src="/images/bankCard.svg"
          width="20"
          height="20"
          alt="bankCard"
          loading="eager"
        />
        <p>Bank Card</p>
      </Card>
    </div>
  );
}

export default PayMethode;
