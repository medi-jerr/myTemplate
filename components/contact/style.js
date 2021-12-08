import styled from "styled-components";

export const Main = styled.div`
  text-align: center;
  padding: 60px 0 40px;
  color: ${(props) => props.theme.mainColor};
  .flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 30px;
    gap: 10px;
  }
  .card {
    width: 300px;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px #2227;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    gap: 10px;
  }
`;
export const Form = styled.form`
  input {
    height: 3rem;
    border: none;
    outline: none;
    padding: 0 10px;
    font-size: 17px;
    border-bottom: 1px solid #ddd;
  }
  input:focus {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  }
  textarea {
    width: 100%;
    height: 9rem;
    padding: 10px;
    font-size: 17px;
    border-radius: 10px;
  }
  textarea:hover {
    box-shadow: 0 0 3px #2227;
    border: none;
  }
  textarea:focus {
    box-shadow: 0 0 10px #2227;
    border: none;
    outline: none;
  }
  input[type="submit"] {
    background-color: ${(props) => props.theme.primaryColor};
    padding: 0 20px;
    color: #f9f9f9;
    margin-top: 10px;
    cursor: pointer;
  }
  .one {
    margin: 50px 0 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50px;
    input {
      flex-basis: 400px;
      flex-grow: 1;
    }
  }
  .two {
    margin-bottom: 30px;
    input {
      width: 100%;
    }
  }
`;
