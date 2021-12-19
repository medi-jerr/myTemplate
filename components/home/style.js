import styled, { css } from "styled-components";

export const Main = styled.div`
  height: 650px;
  width: 100%;
  background-color: #ddd;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  font-size: 17px;
`;
export const MyImage = styled.div`
  background-image: url(${(props) => props.back});
  width: 700px;
  height: 650px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
padding-top: 40px;
  &::after {
    content: " ";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #0009;
    z-index:0
  }
  .containerTwo {
    height: 100%;
    display: flex;
    align-items: center;
    opacity:0.99;
    position: relative;
    z-index:1;
    @media(max-width: 768px){
     
        justify-content: center;
text-align: center
      
      }
      
    .content {
      width: 60%;
      color: #fff;
      margin-left:20px;
      @media(max-width: 1024px){
      width: 74%;
   }
   @media(max-width: 375px){
      width: 85%;
      margin-left:10px;

   }
      h1 {
        color: ${(props) => props.theme.primaryColor};
        margin-bottom: 30px;
        font-weight: bold;
        text-align: center;
        
      }
      p {
        letter-spacing: 1.2px;
        text-indent: 20px;
      }
      }
    }
  }
`;
export const ButtonOne = styled.button`
  width: 250px;
  margin-top: 30px;
  height: 50px;
  border-radius: 30px;
  font-size: 17px;
  color: ${(props) => props.theme.bodyColor};
  border: none;
  box-shadow: 1px 2px 5px ${(props) => props.theme.primaryColor};
  cursor: pointer;
  background-color: ${(props) => props.theme.primaryColor};
  font-weight: bold;
  &:hover {
    background-color: ${(props) => props.theme.bodyColor};
    color: ${(props) => props.theme.primaryColor};
  }
`;
export const ButtonTwo = styled(ButtonOne)`
  color: #fff;
  cursor: pointer;
  background-color: transparent;
  border: 3px solid #fff;
  box-shadow: none;
  &:hover {
    color: #fff;
    background-color: ${(props) => props.theme.primaryColor};
  }
`;
export const Arrow = styled.div`
  font-size: 30px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 4;
  opacity: 0.8;
  cursor: pointer;
  transition: opacity 0.1s ease-in-out;
  ${(props) =>
    props.dir == "next"
      ? css`
          right: 0px;
          ::before {
            left: 2px;
          }
        `
      : css`
          left: 0px;
          ::before {
            right: 2px;
          }
        `}
  &:hover {
    opacity: 1;
    color: ${(props) => props.theme.primaryColor};
  }
  &:hover ::before {
    background-color: ${(props) => props.theme.bodyColor};
  }
  ::before {
    content: " ";
    width: 60px;
    height: 60px;
    background-color: ${(props) => props.theme.primaryColor};
    position: absolute;
    z-index: -1;
    transform: rotate(45deg);
  }
`;
