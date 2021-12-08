import styled from "styled-components";

export const Main = styled.div`
  /* min-height: 500px; */
  background: url(${(props) => props.back});
  background-position: center;
  background-attachment: fixed;
`;
export const Right = styled.div`
  width: 45vw;
  background-color: #1e613d;
  margin-left: auto;
  min-height: 500px;
  position: relative;
  opacity: 0.99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.bodyColor};
  @media (max-width: 1070px) {
    width: 55vw;
  }
  @media (max-width: 876px) {
    width: 70vw;
  }
  @media (max-width: 690px) {
    width: 95vw;
  }
  @media (max-width: 400px) {
    width: 100vw;
  }
  h1 {
    padding: 0 0 15px;
    margin: 0 0 20px;
    font-weight: bold;
    position: relative;
    text-align: center;
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
  }
  .desc {
    text-indent: 10px;
    font-size: 18px;
    padding: 0 20px;
  }
  &::after {
    content: " ";
    border-top: 500px solid transparent;
    border-right: 400px solid #1e613d;
    z-index: -1;
    position: absolute;
    top: 0;
    left: -399px;
  }

  @media (max-width: ${(props) => props.theme.middleScreen}) {
    .desc {
      font-size: calc(18px * 0.9);
      letter-spacing: 1.2px;
    }
  }
  @media (max-width: ${(props) => props.theme.tabletScreen}) {
    .desc {
      font-size: calc(18px * 0.8);
    }
  }
  @media (max-width: ${(props) => props.theme.smallScreen}) {
    .desc {
      font-size: calc(18px * 0.65);
    }
  }
`;
