import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #222e;
  color: #f8f8f8;
  padding: 60px 10% 40px;
  flex-wrap: wrap;
  gap: 50px;

  @media (max-width: 320px) {
    padding: 60px 10% 40px;
  }

  div:first-of-type {
    width: 300px;
    flex-grow: 1;
  }
  h1 {
    display: flex;
    align-items: flex-start;
    padding-bottom: 20px;
  }
  h3 {
    padding: 8px 0 20px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid ${(props) => props.theme.primaryColor};
    margin-bottom: 24px;
  }
  div {
    min-width: 300px;
    flex-grow: 1;
  }
  p {
    padding: 10px 0;
  }
  .link {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    gap: 30px;
  }
  @media (max-width: 768px) {
    display: block;
    div:first-of-type {
      width: 100%;
    }

    div:nth-of-type(3) {
      margin-top: 20px;
    }
    h3 {
      margin-bottom: 10px;
      padding: 8px 10px 10px 10px;
      width: fit-content;
    }
    p {
      padding: 5px 0;
    }
  }
`;
export const CopyRight = styled.div`
  background-color: #222;
  color: #f8f8f8;
  padding: 30px 0;
  text-align: center;
`;
