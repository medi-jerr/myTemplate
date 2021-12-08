import styled from "styled-components";
export const Main = styled.div`
  padding: 70px 0 40px;

  .donate {
    width: 100%;
    background-color: #ddd;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    height: 130px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .donate:active {
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
  }
`;
