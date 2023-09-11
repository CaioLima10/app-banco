import { AiOutlineInfoCircle } from "react-icons/ai";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 997;
`;

const modalFadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const InfoCircle = styled(AiOutlineInfoCircle)`
    font-size: 70px;
    color: #ED8181;
    margin-top: 30px;
    text-align: center;
    align-items: center;
    justify-content: center;
`

export const ContainerDialog = styled.div`
    background-color: #E3E3E3;
    padding: 10px;
    width: 340px;
    height: 400px;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    animation: ${modalFadeIn} 0.2s ease-in-out;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    z-index: 998;

    h3{
        position: absolute;
        margin:10px 10px;
        color: #242424;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 16px;
        top: 80px;
    }

    .bar-color{
      position: absolute;
      top: 140px;
      left: 0;
      right: 0;
      text-align: center;
      margin: auto;
      width: 80%;
      height: 2px;
      background-color: #8c8c8c;
    }

@keyframes fadeInOut {
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: 250px;
  }
}

.hiding {
  width: 250px;
  position: absolute;
  left: -50px;
  top: 120px;

  animation: fadeInOut 0.2s ease-in-out;
}

.celebrating{
  width: 250px;
  right: 0px;
  margin-top: 86px;
}

  .container-text{
        position: absolute;
        width: 150px;
        height: 80px;
        right: 50px;
        top: 200px;
        border-radius: 48%;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin: auto;
        border: 2px solid #FF9900;
    }

    p{
        color: #242424;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 14px;
        margin: 15px;
    }

  .container-btn {
    display: flex;
    align-items: center;
  }

  .logo{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 60px;
    margin: auto;
  }

  .cancel{
    background-color: #242424;
    border-radius: 5px;
    margin-bottom: 20px;
    position: absolute;
    border: none;
    color: #E3E3E3;
    top: 0;
    right: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-size: 22px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.80);
    width: 70px;
    height: 40px;
    border-top-right-radius: 12px;
  }

  .cancel:hover{
    background-color: green;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
  }

  .confirm{
    background-color: #242424;
    border-radius: 5px;
    margin-bottom: 20px;
    position: absolute;
    border: none;
    color: #E3E3E3;;
    left:0 ;
    bottom: 20px;
    right: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.80);
  }

  .confirm:hover{
    background-color: red;
    border: 1px solid #FFFFFF;
  }
  button {
    height: 50px;
    width: 270px;
    cursor: pointer;
  }

  @media (max-width: 520px){
    width: 350px;
  }

`;