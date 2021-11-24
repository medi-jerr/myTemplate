import styled from "styled-components";

export const Main = styled.div`
  position: absolute;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.5s ease-in-out;
  box-shadow: 1px 1px 10px ${(props) => props.theme.primaryColor};

  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
`;
