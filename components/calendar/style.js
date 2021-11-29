import styled from "styled-components";

export const Main = styled.div`
  opacity: 0.99;
  transition: all 0.5s ease-in-out;
  box-shadow: 1px 1px 5px ${(props) => props.theme.primaryColor};
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
`;
