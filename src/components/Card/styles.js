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


@media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }

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
    background-color: #D9D9D9;
  }

  option{
    display: flex;
    height: 80px;

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
    margin-top: 40px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    height: 450px;
    background-color: #ECECEC;

    .custom{
    color: #0A9AE9;
  }
`;

export const Form = styled.form`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: auto;
  flex-direction: column;
  width: 700px;


  .label-name{
    display: flex;
    width: 80%;
    font-size: 14px;
    margin-bottom:7px;

  }

  .label{
    font-size: 14px;
    display: flex;
    margin-bottom:3px;
    margin-top:20px;

  }
  

  input {
    display: flex;
    margin: auto;
    background-color: #D9D9D9;
    width: 80%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }

  input:focus{
    border: 2px solid #007bff;
  }

  small{
    width: 80%;
    padding: 6px;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #FF3B3F99;

  }

  .container-expity-cvc{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
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

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }


`;



