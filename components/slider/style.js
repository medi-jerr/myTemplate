import styled from "styled-components";
import Image from "next/image";

export const Main = styled.div`
  height: 650px;
  background-color: #f0f;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
  align-content: center;

  .overlay {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #00000099;
  }
  .description {
    color: #fff;

    opacity: 0.99;
    width: 400px;
    .title {
      color: ${(props) => props.theme.primaryColor};
      margin-bottom: 40px;
      height: 40px;
      width: 100%;
    }
    h3 {
      color: ${(props) => props.theme.bodyColor};
      margin-bottom: 20px;
      width: 90%;
      line-height: 1.5;
      height: 70px;
      letter-spacing: 1.5px;
    }
    .button {
      width: 250px;
      height: 50px;
      background: none;
      border-radius: 6px;
      color: ${(props) => props.theme.bodyColor};
      border: none;
      box-shadow: 1px 2px 5px ${(props) => props.theme.primaryColor};
      background: linear-gradient(
        to right,
        #22222288,
        ${(props) => props.theme.primaryColor}
      );
      background-color: #222222cc;
      font-weight: bold;

      &:hover {
        box-shadow: 1px 2px 10px ${(props) => props.theme.primaryColor};
      }
    }
  }
`;
export const MyImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
