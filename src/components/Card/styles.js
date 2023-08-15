import styled from 'styled-components';
import { FcSimCardChip } from 'react-icons/fc';
import { BiLogoVisa } from 'react-icons/bi';

export const Cards = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  margin: auto;
  width: 350px;
  margin-top: 15px;
  margin-left: 70px;

  img{
    width: 80px;
    position: absolute;
    left: 15px;
    margin: auto;
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

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;


`;

export const ContainerCard = styled.div`
  position: relative; 
  width: 100%;
  max-width: 320px;
  height: 200px;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.60);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ContainerCardSelect = styled.div`
.custom-title{
  width: 80%;
  margin-left: 60px;
  margin-top: 20px;
}

label{
    text-align: center;
    margin: auto;
    margin-left: 35px;
    font-size: 14px;
    opacity: 0.8;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  select{
    display: flex;
    width: 76%;
    margin-left: 70px;
    padding: 12px;
    border: 1px solid #ccc;
    font-size: 14px;
    outline: none;
    background-color: #E9E9E9;
  }

  option{
    display: flex;
    height: 80px;

  }

  @media ( max-width: 1280px ){

    .title-color{
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;
    }

    select{
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;
      width: 80%;
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
    margin-top: 60px;
    font-size: 20px;
    color: rgb(157,156,156);
    color: linear-gradient(0deg, rgba(157,156,156,1) 0%, rgba(237,237,237,1) 52%, rgba(157,156,156,1) 100%);
    font-family: Poppins, sans-serif;
    
  }
`;

export const Visa = styled(BiLogoVisa)`
  position: absolute;
  font-size: 70px;
  display: flex;
  right: 10px;
  bottom: 0px;
  color: #bdc3c7;  
  color: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); 
  color: linear-gradient(to right, #2c3e50, #bdc3c7); 
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
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  min-height: 450px;
  background-color: #D2D2D2;


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
      width: 360px;
    }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  width: 700px;

  

  .label-name,
  .label {
    display: flex;
    width: 80%;
    font-size: 14px;
    margin-bottom: 7px;
    margin-top: ${({ className }) =>
      className === 'label' ? '20px' : 'inherit'};
  }

  input {
    background-color: #F3F3F3;
    width: 560px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    margin: auto;
    display: flex;
  }

  input:focus {
    border: 2px solid #007bff;
  }

  small {
    width: 80%;
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
    width: 80%;
    margin-top: 20px;
    padding: 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  @media (max-width: 1260px) {
    flex-direction: column; 
  }

  @media (max-width: 926px) {
      width: 300px;
      align-items: center;
      justify-content: center;
      margin: auto;

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
