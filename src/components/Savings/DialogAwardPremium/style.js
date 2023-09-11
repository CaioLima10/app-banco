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
    background-color: #242424;
    padding: 10px;
    width: 550px;
    height: 328px;
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

    .premium{
      color: #fff;
      position: absolute;
      left: 0;
      top: 0;
      font-weight: bold;
      font-size: 18px;
    }

    .circle{
      position: absolute;
      left: 0px;
      top: 40%;
      width: 30px;
      height: 60px;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      background-color: #E3E3E3;
    }

    .circle-two{
      position: absolute;
      right: 0px;
      top: 40%;
      width: 30px;
      height: 60px;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      background-color: #E3E3E3;
    }

    h1{
        font-weight: 900;
        font-size: 70px;
        color: #761f75;
        font-family: 'Inter', sans-serif;
    }

    #span{
      color: #761f99;
      font-size: 18px;
    }

    .container-coupon{
        width: 400px;
        align-items: center;
        justify-content: center;
        margin: auto;
        padding: 10px;
        border: 2px dashed #242424;
        background-color: #E3E3E3;
    }

    .coupon{
        color: #242424;
        font-size: 18px;
    }

    .coupon-code{
        font-weight: 900;
        font-size: 24px;
        color: #761f75;
    }

    .copied{
      align-items: center;
      justify-content: center;
      margin: 3px auto;
      width: 268px;
      background-color: green;
      color: #E3E3E3;
      animation: ${modalFadeIn} 0.2s ease-in-out;
      padding: 4px;
      
    }

    small{
      color: #E3E3E3;
      font-weight: 600;
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
    border-radius: 5px;
    margin-bottom: 20px;
    position: absolute;
    border: none;
    color: #761f75;
    top: 0;
    right: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-size: 22px;
    cursor: pointer;
    width: 38px;
    height: 38px;
    border-radius: 50px;
  }

  .cancel:hover{
    background-color: #761f75;
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

  .container-date{
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px dashed #242424;
    width: 100%;
    padding: 6px;
    background-color: #E3E3E3;


  }

  @media screen and (max-width: 580px) {
          &{
            width: 90%;
          }
      .container-coupon {
        width: 320px;
      }
    }
    @media screen and (max-width: 480px) {
          &{
            width: 400px;
          }
      .container-coupon {
        width: 320px;
      }
    }
    @media screen and (max-width: 400px) {
          &{
            width: 360px;
          }

          h1{
            font-size: 50px;
          }
      .container-coupon {
        width: 320px;
      }
    }
`;