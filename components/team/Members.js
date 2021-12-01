import React, { useState } from "react";
import {
  TeamMemb,
  Img,
  ImgCont,
  Social,
  Name,
  BigImage,
  ImageCont,
  AiClose,
} from "./style";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

function Members({ members }) {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState(null);

  const showImage = (key) => {
    setShow(true);
    setItem(key);
  };
  return (
    <TeamMemb className="team">
      {members.map((member, i) => (
        <div key={i} className="member">
          <ImgCont onClick={() => showImage(i)}>
            <div className="overlay">
              <h3>{member.name}</h3>
              <p>{member.profission}</p>
            </div>
            <Img
              alt={member.name}
              src={member.image}
              layout="fill"
              loading="eager"
              width="100"
              height="100"
            />
          </ImgCont>
          <Name>
            <p className="pad">Read more</p>
            <p className="hid pad">{member.name}</p>
          </Name>
          <Social>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaFacebookF />
            </li>
          </Social>
        </div>
      ))}
      {show && (
        <BigImage onClick={() => setShow(false)}>
          <AiClose />
          <ImageCont className="img" back={members[item].image}>
            {/* <Image
              src={members[item].image}
              layout="fill"
              alt={members[item].name}
            /> */}
            <p>
              {members[item].description.slice(0, 200)}...
              <span>Read more</span>
            </p>
          </ImageCont>
        </BigImage>
      )}
    </TeamMemb>
  );
}

export default Members;
