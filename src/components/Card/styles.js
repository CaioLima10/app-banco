import styled from 'styled-components';
import { FcSimCardChip } from 'react-icons/fc';
import { BiLogoVisa } from 'react-icons/bi';
import { AiOutlineWifi } from 'react-icons/ai';
import { GiSwipeCard } from "react-icons/gi"

export const Cards = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 440px;
  margin-top: 15px;

  img{
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: 0;
    width: 70%;
    position: absolute;
  }

  .border-color{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 80px;
    height: 100%;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  @media (max-width: 1260px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;
      margin: auto;
    }

    @media (max-width: 926px) {
      width: 300px;
      height: 200px;
    }
`;

export const CardsStyle = styled.div`
    width: 100%;
    height: 200px;
    max-width: 320px;
    position: relative; 
    border-radius: 16px;
    border: 3px dashed #3D3B37;
    background-color: #D9D9D999;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    text-align: center;
    align-items: center;
    justify-content: center;

    span{
      font-size: 20px;
      font-weight: 700;
      color: #3D3B3799;
      margin-bottom: 20px;
    }
`
export const IconsCardStyle = styled(GiSwipeCard)`
    font-size: 80px;
    color: #3D3B3799;

`

export const Wifi = styled(AiOutlineWifi)`
  position: absolute;
  font-size: 26px;
  display: flex;
  right: 28px;
  top: 10px;
  transform: rotate(90deg);
  z-index: 2;
`

export const ContainerCard = styled.div`
  width: 100%;
  height: 200px;
  max-width: 320px;
  position: relative; 
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.60);
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ContainerCardSelect = styled.div`
.custom-title{
  width: 100%;
  margin-top: 20px;
}

label{
    text-align: center;
    margin: auto;
    font-size: 14px;
    opacity: 0.8;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  select{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 70%;
    padding: 12px;
    border: 1px solid #ccc;
    font-size: 14px;
    outline: none;
    background-color: #E9E9E9;
  }

  @media ( max-width: 1080px ){

    .title-color{
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;
    }

}

  @media ( max-width: 926px ){
  
    select{
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;
      width: 74%;
  }
    .custom-title{
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;
      font-size: 16px;
      
    }
  }

  @media (max-width: 1260px) {
    .custom-title{
          width: 400px;
          display: flex;
          text-align: center;
          align-items: center;
          justify-content: center;
          margin: auto;
        }
    }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    .custom-title{
      font-size: 14px;
      width: 300px;
      }
  }
`

export const ContextCard = styled.div`
color: #000000;
color: -webkit-linear-gradient(to bottom, #434343, #000000);
color: linear-gradient(to bottom, #434343, #000000);


  h3 {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
    margin: auto;
    margin-top: 130px;
    font-size: 22px;
    color: rgb(157,156,156);
    color: linear-gradient(0deg, rgba(157,156,156,1) 0%, rgba(237,237,237,1) 52%, rgba(157,156,156,1) 100%);
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    
  }
`;

export const Visa = styled(BiLogoVisa)`
  position: absolute;
  font-size: 50px;
  display: flex;
  right: 16px;
  bottom: 0px;
  z-index: 2;
`;

export const CardChipIcon = styled(FcSimCardChip)`
  font-size: 50px;
`;

export const ContainerForm = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: auto;
  `;

export const Paper = styled.div`
  display: flex;
  margin-top: 45px;
  border-radius: 8px;
  min-height: 450px;
  background-color: #fff;
  


  @media (max-width: 1260px) {
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: 50px auto;
    }

    @media (max-width: 926px) {
      width: 380px;
    }
    @media (max-width: 926px) {
      width: 340px;
    }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 550px;
  background-color: #272521;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;


  .label-name,
  .label {
    display: flex;
    width: 81%;
    font-size: 14px;
    margin-bottom: 7px;
    margin-top: 15px;
    color: #fff;
  }

  input {
    background-color: #3D3B37;
    color: #FF9900;
    width: 445px;
    padding: 14px;
    font-size: 14px;
    border-radius: 4px;
    border: none;
    outline: none;
    display: flex;
  }

  input::placeholder{
    color: #FF9900;
  }

  input:focus {
    border: 2px solid rgba(255,214,0,1);
  }

  small {
    width: 81%;
    margin-top: 5px;
    padding: 6px;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #ff3b3f99;
  }

  .container-expiry-cvc {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  button {
    width: 50%;
    margin-top: 20px;
    padding: 10px;
    background: rgb(255,214,0);
    background: linear-gradient(90deg, rgba(255,214,0,1) 0%, rgba(255,153,0,1) 100%);
    border: 2px solid #FFFFFF;
    color: #111111;
    font-size: 18px;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
  }

  @media (max-width: 1260px) {
    flex-direction: column; 
    width: 100%;
  }

  @media (max-width: 926px) {
      align-items: center;
      justify-content: center;
      margin: auto;
      min-height: 370px;

    .label-name,
    .label {
      width: 300px;
      padding-left: 3px;
      font-size: 12px;
      margin-top: 10px;

    }
    small{
      width: 298px;
    }

    input {
      
      width: 300px;
    }

    button {
      width: 300px;
    }
  }

`;
