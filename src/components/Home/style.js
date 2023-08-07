import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Section = styled.section`
  background-color: #0375B4;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  max-width: 1100px;
  background-color: #0375B4;

  @media screen and (max-width: 1140px) {
    max-width: 100%;
  }

  @media screen and (max-width: 868px) {
    max-width: 500px;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    display: flex;
    font-size: 32px;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    width: 100%;
    margin-top: 50px;
    text-align: center;
  }

  h3 {
    display: flex;
    color: #fff;
    font-size: 16px;
    width: 100%;
    margin-top: 20px;
  }

  img {
    width: 100%;
    max-width: 500px;
  }

  .img-card {
    width: 100%;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-Logo {
    margin-top: 20px;
    width: 100px;
  }

  button {
    margin-top: 30px;
    width: 100%;
    max-width: 300px;
    height: 40px;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    font-family: sans-serif;
    color: #0375B4;
    font-size: 18px;
    position: relative;
  }
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  position: absolute;
  right: 10px;
  font-size: 22px;
`;
