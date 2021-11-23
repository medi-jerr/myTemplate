import styled from "styled-components";
import { Link } from "react-scroll";

export const Main = styled.div`
  background-color: ${(props) =>
    props.dark ? "rgba(0, 0, 0, 0.9)" : "transparant"};
  padding: ${(props) => (props.dark ? "20px 60px" : "30px 60px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${(props) => props.theme.titleFont};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.5s ease-in-out;
  z-index: 9999;
  color: ${(props) => props.theme.bodyColor};
  li {
    display: inline-block;
    padding: 0 10px;
    transition: all 0.2s ease-in-out;
  }
  li:hover {
    color: ${(props) => props.theme.primaryColor};
    cursor: pointer;
  }
`;
export const TheLink = styled(Link)`
  text-transform: uppercase;
`;
export const Logo = styled.h1`
  margin-left: 34px;
  padding: 0 0 0 10px;
  border-left: 4px solid #18d26e;
  cursor: pointer;
`;
