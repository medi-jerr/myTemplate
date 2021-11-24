import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  outline: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
