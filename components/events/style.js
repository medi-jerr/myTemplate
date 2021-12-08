import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 30px;
  color: ${(props) => props.theme.prColor};
  & > div {
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    &:hover img {
      transform: scale(1.1);
    }
  }
  .image {
    height: 180px;
    position: relative;

    img {
      transition: transform 0.3s ease-in-out;
    }
    .icons {
      position: absolute;
      z-index: 2;
      right: 5px;
      top: 0px;
      display: flex;
      p {
        background-color: #fff;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
        cursor: pointer;
      }
    }
    .date {
      position: absolute;
      color: #fff;
      z-index: 2;
      bottom: 5px;
      left: 10px;
    }
    .overlay {
      position: absolute;
      width: 100%;
      top: 0;
      height: 100%;
      right: 0;
      z-index: 1;
      background-color: #00000055;
    }
  }
  .description {
    padding: 10px;
    h3,
    p {
      display: flex;
      align-items: center;
    }
    h3 {
      padding: 10px 0;
    }
    p {
      line-height: 1;
    }
  }
`;
export const Span = styled.span`
  display: block;
  margin-right: 30px;
  min-width: 40px;
  height: 40px;
  border: 1px dotted #222;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::after {
    content: " ";
    height: 40px;
    width: 40px;
    border-right: 1px dashed #aaa;
    position: absolute;
    left: 15px;
  }
`;
export const Main = styled.div`
  margin: 60px 0 40px;
`;
