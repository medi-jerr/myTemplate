import styled from "styled-components";

export const Main = styled.div`
  padding: 60px 0 40px;
  color: ${(props) => props.theme.prColor};
  margin-top: 20px;
`;
export const Container = styled.div`
  padding: 0 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    padding: 0 0 15px;
    margin: 0 0 20px;
    font-weight: bold;
    /* border-bottom: 1px solid #ddd; */
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
  p {
    letter-spacing: 1.2px;
  }
`;
