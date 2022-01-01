import styled, { css } from "styled-components";

export const Main = styled.div`
  padding: 70px 0 40px;
`;
export const Plan = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const BuContainer = styled.div`
  background-image: linear-gradient(to right bottom, #f8f8f8, #999, #333);
  border-radius: 50%;
  width: 253px;
  height: 253px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-top: 2px solid #777;
  margin: 0px auto 10px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  ::after {
    content: " ";
    width: 209px;
    height: 16px;
    bottom: -8px;
    background-image: radial-gradient(#000a, transparent 60%);
    position: absolute;
    border-radius: 50%;
  }
  &:hover {
    transform: translateY(-5px);
  }
  &:hover ::after {
    bottom: -13px;
    width: 170px;
    transition: all 0.2s ease-in-out;

    background-image: radial-gradient(#0004, transparent 60%);
  }
  .mirror {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    background-image: linear-gradient(
      to right bottom,
      #ffffff,
      #fffefe,
      #e9e9e9
    );
    border-radius: 50%;
    position: relative;
    z-index: 1;
  }
`;
export const Bubble = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  position: relative;
  border: 3px solid #ddd;
  background-image: linear-gradient(to right bottom, ${(props) => props.back});
  color: #fff;
  text-align: center;
  .logo {
    justify-self: flex-start;
    margin: 20px 0 20px;
  }
  ::after {
    content: " ";
    position: absolute;
    top: 20px;
    left: 36px;
    width: 20px;
    height: 40px;
    background-image: radial-gradient(
      #fff,
      ${(props) => props.back.substring(0, 7)}
    );
    transform: rotate(45deg);
    border-radius: 60%;
    opacity: 0.8;
  }
`;
/* ***************** Categories component ************/
export const Category = styled.div`
  width: 80%;
  margin: 0 auto;
  color: #222;
  p {
    text-indent: 20px;
  }
  h3 {
    margin: 0 0 5px;
  }
  .section {
    width: 90%;
    margin-bottom: 20px;
    
    }
  }
`;
/* **************************************/
/* *****************  Payment Component ************/
export const Paypal = styled.div`
  background-color: #ffc439;
  width: 80%;
  height: 55px;
  border-radius: 30px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 35px;
  letter-spacing: 1.3px;
  gap: 10px;
  min-width: 320px;
`;
export const Card = styled(Paypal)`
  background-color: #2c2e2f;
`;
export const Pay = styled.div`
  width: 100%;
  max-height: ${(props) => (props.show ? "1000px" : "0px")};
  overflow: hidden;
  transition: max-height 1s linear;
`;
