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
    z-index: 1000;
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
    background-color: #D2D2D2;
    width: 400px;
    height: 300px;
    border-radius: 6px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    animation: ${modalFadeIn} 0.2s ease-in-out;

    h3{
        margin:10px 10px;
    }

  .container-btn {
    display: flex;
    align-items: center;
  }

  .confirm{
    background-color: #0A9AE9; 
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    color: #FFFFFF;
  }

  .confirm:hover{
    background-color: red;
  }
  .cancel{
    background-color: #AED8EF;
    border: 1px solid #0A9AE9;
    border-radius: 5px;
  }
  .cancel:hover{
    background-color: green;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
  }

  button {
    width: 200px;
    height: 40px;
    margin: 5px;
    cursor: pointer;
  }

  @media (max-width: 520px){
    width: 350px;
  }

`;