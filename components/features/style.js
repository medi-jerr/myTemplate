import styled from "styled-components";

export const Main = styled.div`
  width: 95%;
  background-color: ${(props) => props.theme.prColor};
  border-radius: 10px;
  margin: -50px auto;
  color: ${(props) => props.theme.bodyColor};
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 3px 15px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 1px;
  @media (max-width: 768px) {
    display: block;
    width: 95%;
  }
  .feature {
    width: calc(100% / 3);
    padding: 30px 20px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .feature:nth-child(2) {
    background-image: linear-gradient(
      0deg,
      ${(props) => props.theme.prColor} 0%,
      ${(props) => props.theme.primaryColor} 50%,
      ${(props) => props.theme.prColor} 100%
    );
  }
  h3 {
    padding: 15px 0;
  }

  /* 
  display: flex;
    div {
      width: 50%;
    } */
`;
