import styled from "styled-components";
import { Link } from "react-scroll";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

export const Main = styled.div`
  background-color: ${(props) =>
    props.dark ? props.theme.prColor : "transparant"};
  padding: ${(props) => (props.dark ? "10px 0 10px" : "15px 0 20px")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.5s ease-in-out;
  z-index: 9999;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${(props) => props.theme.titleFont};
  color: ${(props) => props.theme.bodyColor};
  li {
    display: inline-block;
    padding: 0 10px;
    transition: all 0.2s ease-in-out;
    font-size: ${(props) => props.theme.navItems};
  }
  li:hover {
    color: ${(props) => props.theme.primaryColor};
    cursor: pointer;
  }
  @media (max-width: 768px) {
    ul {
      display: none;
    }
  }
`;
export const TheLink = styled(Link)`
  text-transform: uppercase;
  font-weight: bold;
`;
export const Logo = styled.h1`
  font-size: ${(props) => props.theme.logoFs};
`;
export const LogoIcon = styled(Image)`
  border-radius: 50%;
`;
export const LogoSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: 4px solid ${(props) => props.theme.primaryColor};
  /* margin-left: 35px; */
  padding: 0 0 0 30px;
  cursor: pointer;
`;
// **********************************************
export const IconBar = styled.div`
  margin-left: auto;
  margin-right: 20px;
  cursor: pointer;
  @media (min-width: 769px) {
    display: none;
  }
`;
export const Fabars = styled(FaBars)`
  font-size: 30px;
  &:active {
    opacity: 0.5;
  }
`;
export const List = styled.div`
  position: fixed;
  top: 70px;
  backdrop-filter: blur(8px);
  width: 90vw;
  background-color: #22222288;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 1);
  z-index: 999;
  display: ${(props) => (props.show ? "block" : "none")};
  border-radius: 10px;
  left: 50%;
  transform: translateX(-50%);
`;
export const ListItem = styled.div`
  height: 3rem;
  padding: 7px 10px;
  border-bottom: 1px solid #033;
  display: flex;
  align-items: center;
  border-top: 1px solid #ffffff55;
  margin: 0 10px;
  cursor: pointer;
  color: ${(props) => props.theme.bodyColor};
  &:hover {
    color: ${(props) => props.theme.primaryColor};
  }
  &:last-child {
    margin: 30px auto;
    border-radius: 30px;
    width: 60%;
    font-weight: bold;
    :hover {
      background-color: ${(props) => props.theme.primaryColor};
      color: #fff;
    }
  }
`;
export const LinkItemList = styled(Link)`
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  display: block;
  display: flex;
  justify-content: ${({ last }) => (last ? "center" : "space-between")};
  padding: 0 15px;
  transition: all 0.4s;
  width: 100%;
  letter-spacing: 1px;
  font-size: ${(props) => props.theme.navItems};
  text-transform: uppercase;
`;

export const ContIcon = styled.p`
  transition: all 0.3s;
  ${LinkItemList}:hover && {
    transform: translate(4px);
  }
`;
