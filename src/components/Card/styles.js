import styled from 'styled-components';
import { FcSimCardChip } from 'react-icons/fc';
import { BiLogoVisa } from 'react-icons/bi';

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 70px;

  
`;

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ContainerCard = styled.div`
  width: 100%;
  max-width: 350px;
  height: 220px;
  border-radius: 16px;
  padding: 20px;
  background: #ADA996; 
  background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); 
  background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.10);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ContextCard = styled.div`
  color: #000;

  h2 {
    font-size: 24px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  span {
    font-size: 14px;
  }

  p {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Visa = styled(BiLogoVisa)`
  font-size: 70px;
  position: absolute;
  width: 100%;
  right: 0;
  top: 150px;
  color: #000;
`;

export const CardChipIcon = styled(FcSimCardChip)`
  font-size: 50px;
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 160px;
  margin-bottom: 30px;
`;

export const Paper = styled.div`
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin-bottom: 10px;
    width: 320px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

