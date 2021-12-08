import styled from "styled-components";

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
`;
export const Page = styled.div`
  min-height: 400px;
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
