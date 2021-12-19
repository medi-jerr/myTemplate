import styled, { css } from "styled-components";

export const Main = styled.div`
  padding: 20px 0 40px;
  color: ${(props) => props.theme.prColor};
  margin-top: 20px;
`;

export const Container = styled.div`
  padding: 0 15px;
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  .paragraph {
    width: 80%;
  }
`;
export const Title = styled.h1`
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
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const Paragraph = styled.p`
  letter-spacing: 1.2px;
  margin-bottom: 10px;
  text-indent: 10px;
`;
export const Mession = styled.div`
  width: 100%;
  background: url(${(props) => props.back});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  .slick-slider {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0cc;
  }
  .slick-next:before {
    content: "→";
    font-size: 50px;
    color: #222;
  }
  .slick-prev :before {
    font-size: 50px;
    color: #222;
  }
  .slick-prev {
    left: 60px;
    z-index: 1;
  }
  .slick-next {
    right: 110px;
  }
  .slick-dots {
    position: absolute;
    bottom: 10px;
  }
  .slick-dots li button {
    border: 1px solid #aaa;
    border-radius: 50%;
  }

  .slick-dots li button:before {
    color: #000;
    width: 14px;
    height: 14px;
    background: #000;
    font-size: 2px;
    border-radius: 50%;
    top: 3px;
    left: 3px;
    opacity: 0;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
  }
`;
export const Page = styled.div`
  min-height: 450px;
  .containerTwo {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .section {
    width: 80%;
    height: 100%;
    padding: 20px 0 10px;
    position: relative;
    h1 {
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 768px) {
      .section {
        width: 100%;
      }
    }
    /* p {
      font-size: 18px;
    } */
  }
`;

// ***********
export const Arrow = styled.div`
  font-size: 90px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  opacity: 0.4;
  cursor: pointer;
  transition: opacity 0.1s ease-in-out;
  ${(props) =>
    props.dir == "next"
      ? css`
          right: 100px;
        `
      : css`
          left: 100px;
        `}
  &:hover {
    opacity: 1;
  }
`;
