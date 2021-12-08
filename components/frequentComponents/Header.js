import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  padding: 0 0 15px;
  margin: 0 auto 20px;
  font-weight: bold;
  position: relative;
  width: fit-content;
  text-transform: capitalize;
  &::after {
    content: " ";
    position: absolute;
    width: 30%;
    height: 3px;
    background-color: ${(props) => props.theme.primaryColor};
    bottom: -1.5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const Paragraph = styled.p`
  letter-spacing: 1.2px;
  margin: 0 auto 30px;
  text-indent: 10px;
  width: 80%;
`;

function Header({ title, description }) {
  return (
    <>
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
    </>
  );
}

export default Header;
