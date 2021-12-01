import styled from "styled-components";

export const Main = styled.div`
  height: 500px;
  background: url(${(props) => props.back});
  background-position: center;
  background-attachment: fixed;
`;
export const Right = styled.div`
  width: 45vw;
  background-color: ${(props) => props.theme.primaryColor};
  margin-left: auto;
  height: 100%;
  position: relative;
  opacity: 0.99;
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
      background-color: ${(props) => props.theme.bodyColor};
      bottom: -1.5px;
      left: 0;
    }
  }
  p {
    text-indent: 10px;
    letter-spacing: 1.2;
    padding-right: 40px;
    color: #f8f8f8;
  }
  &::after {
    content: " ";
    border-top: 500px solid transparent;
    border-right: 400px solid ${(props) => props.theme.primaryColor};
    z-index: -1;
    position: absolute;
    top: 0;
    left: -400px;
  }
`;
