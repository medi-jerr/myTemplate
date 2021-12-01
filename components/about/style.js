import styled from "styled-components";

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
    margin-bottom: 10px;
    text-indent: 10px;
  }
  .parent {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    width: 100%;
    align-items: flex-start;
    margin-top: 30px;
  }
`;
export const Section = styled.div`
  background-image: linear-gradient(
    ${(props) => props.theme.prColor},
    ${(props) => props.theme.primaryColor}
  );
  background-size: cover;
  padding: 90px 20px 20px;
  border-radius: 10px;
  width: 312px;
  flex-grow: 1;
  h3 {
    text-align: center;
    padding: 0px 0 20px;
  }
  .one {
    color: ${(props) => props.theme.prColor};
    max-height: 150px;
    overflow: hidden;
    position: relative;
    transition: max-height 0.5s ease-in-out;
    background-color: #f8f8f8;
    position: relative;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.5);
    &:hover {
      max-height: 1000px;
    }
  }
  .one::before {
    content: " ";
    height: 10px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0px;
    border-radius: 4px 0 0;
    background: linear-gradient(#999, #fff, #999);
    transition: all 0.5s ease-in-out;
  }
  /* &:hover .one {
    max-height: 1000px;
  } */
  &:hover .one::before {
    opacity: 0;
  }
`;
