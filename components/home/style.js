import styled from "styled-components";
import Image from "next/image";

export const Main = styled.div`
  height: 650px;
  background-color: #ddd;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
  align-content: center;
`;
export const MyImage = styled.div`
  background-image: url(${(props) => props.back});
  width: 100%;
  height: 100%;
`;
