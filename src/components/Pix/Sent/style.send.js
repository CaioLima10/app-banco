import { BsFillPatchCheckFill } from "react-icons/bs";
import styled from "styled-components";

export const ContainerSection = styled.section`
  min-height: 100vh;
  background-color: #FFFFFF;
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  min-height: 500px;
  border-radius: 6px;
  text-align: center;
  align-items: center;
  margin-top: 30px;
  background-color: #ECECEC;

  img{
    margin-top: 30px;
  }

  h2 {
    color: #05AC62;
  }

  .border {
    width: 100%;
    height: 1px;
    background-color: #3B3B3B;
    text-align: center;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
  }

  span {
    text-align: center;
    font-size: 26px;
    color: #0375B4;
  }
  
  small {
    font-size: 16px;
    margin-bottom: 20px;
    color: #3B3B3B;
  }

  #send {
    display: flex;
    font-weight: 400;
    width: 80%;
    flex-direction: column;
  }
  
  .name {
    color: #3B3B3B;
    margin-top: 10px;
    font-weight: bold;
  }
  
  .type-dados {
    margin-top: 10px;
    font-size: 14px;
  }
  
  .title-sigmabank {
    margin-bottom: 10px;
  }

  @media (max-width: 1280px) {
    margin-bottom: 50px;
    min-height: 520px;

  }
  
  @media (max-width: 768px) {
    margin-bottom: 50px;
    min-height: 540px;
    width: 330px;
  }
`;

export const ContainerDados = styled.div`
  width: 400px;
  height: 200px;
  margin-top: 10px;
  margin-bottom: 10px;

  .date {
    margin-bottom: 100px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 10px;

  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const CheckFill = styled(BsFillPatchCheckFill)`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 90px;
  color: #00ff00;
`;


