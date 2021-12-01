import styled from "styled-components";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

export const Main = styled.div`
  padding: 60px 0 40px;
  color: ${(props) => props.theme.prColor};
  margin-top: 20px;
`;
export const Container = styled.div`
  padding: 0 15px;
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    padding: 0 0 15px;
    margin: 0 0 20px;
    font-weight: bold;
    position: relative;
    &::after {
      content: " ";
      position: absolute;
      width: 30%;
      height: 3px;
      background-color: ${(props) => props.theme.primaryColor};
      bottom: -1.5px;
      left: 0;
    }
  }
  .paragraph {
    letter-spacing: 1.2px;
    margin-bottom: 30px;
    text-indent: 10px;
  }
`;
export const TeamMemb = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 40px;
`;

export const ImgCont = styled.div`
  width: 300px;
  height: 300px;
  background-color: #ddd;
  border-radius: 50%;
  position: relative;
  padding: 10px;
  border: 5px solid #fff;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  .overlay {
    position: absolute;
    bottom: -50%;
    left: 0%;
    width: 100%;
    background: #fff;
    height: 45%;
    opacity: 0.99;
    z-index: 1;
    transition: bottom 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    & * {
      cursor: pointer;
    }
    p {
      color: #999;
      width: 70%;

      margin: 10px auto;
      text-align: center;
      line-height: 100%;
    }
  }
  &:hover .overlay {
    visibility: visible;
    bottom: 0%;
  }
`;
export const Img = styled(Image)`
  border-radius: 50%;
  cursor: pointer;
`;
export const Name = styled.p`
  width: 210px;
  padding: 0 0px;
  border-radius: 20px;
  text-align: center;
  margin: 10px auto 10px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  height: 25px;
  overflow: hidden;
  .pad {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s ease-in-out;
    transform: translateY(-100%);
  }
  &:hover .pad {
    transform: translateY(0);
  }
  ${ImgCont}:hover + & .pad {
    transform: translateY(0);
  }
`;
export const Social = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  li {
    text-decoration: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.6);
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    &:hover {
      background-color: ${(props) => props.theme.primaryColor};
      box-shadow: 0 1px 10px ${(props) => props.theme.primaryColor};
    }
    &:active {
      filter: brightness(120%);
    }
  }
`;
export const BigImage = styled.div`
  background-color: #0006;
  backdrop-filter: blur(10px);
  /* opacity: 0.3; */
  position: fixed;
  z-index: 9999;
  width: 100%;
  min-height: 100vh;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageCont = styled.div`
  width: 600px;
  height: 600px;
  background: url(${(props) => props.back});
  background-size: cover;
  box-shadow: 1px 1px 15px #0007;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  p {
    height: 100px;
    background: linear-gradient(#fff9, #fff);
    text-align: center;
    span {
      display: block;
      box-shadow: 1px 1px 10px #0007;
      width: 100px;
      border-radius: 5px;
      margin: 0 auto;
      background-color: #fff;
      cursor: pointer;
    }
  }
`;
export const AiClose = styled(AiOutlineClose)`
  position: fixed;
  right: 10px;
  top: 10px;
  color: #ddd;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;