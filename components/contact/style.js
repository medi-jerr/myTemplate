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
    width: 200px;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px #ccc9;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    max-width: 280px;
    gap: 10px;
    margin: 0 auto;
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
    color: #222;
    letter-spacing: 1.5px;
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
    box-shadow: 0 0 3px #ccc7;
  }
  textarea:focus {
    box-shadow: 0 0 10px #ccc7;
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
    position: relative;

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
