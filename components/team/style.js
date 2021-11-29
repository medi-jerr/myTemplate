import styled from "styled-components";
import Image from "next/image";

export const Main = styled.div`
  padding: 60px 0 40px;
  color: ${(props) => props.theme.prColor};
  margin-top: 20px;
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

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0%;
    width: 100%;
    background-color: #fff;
    min-height: 0px;
    opacity: 0.99;
    z-index: 1;
    transition: min-height 0.5s ease-in-out;
  }
  &:hover .overlay {
    min-height: 120px;
  }
`;
export const Img = styled(Image)`
  border-radius: 50%;

  cursor: pointer;
`;
