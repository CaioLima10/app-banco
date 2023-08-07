import { AiOutlineEye, AiTwotoneDelete } from "react-icons/ai";
import { BiHide, BiLogoVisa } from "react-icons/bi";
import { FcSimCardChip } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


export const CardsContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 340px;
  height: 380px;
  margin: 40px 10px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #ECECEC;


`;

export const Cards = styled.div`
  background-color: ${({ color }) => color};
  
  width: 300px;
  height: 180px;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  position: relative;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 


  .btnBlock {
    position: absolute;
    text-align: center;
    align-items: center;
    justify-content:center;
    margin:auto;
    top: 14px;
    right: 12px;
    width: 35px;
    height: 30px;
    background-color: #D9D9D9;
    border: none;
    border-radius: 50%;
  }

  h2 {
    display: flex;
    margin-top: 15px;
  
  }

  h4 {
    display: flex;
    margin: auto;
    margin-left: 3px;
    text-align: center;
    align-items: flex-start;
    justify-content: flex-start;    
  }

  small{
    margin-bottom: -10px;
  }

  img{
    display: flex;
    width: 80px;
  }
`;

export const Lock = styled(BiHide)`
  font-size: 24px;
  border-radius: 50px;
  text-align: center;
  align-items: center;
  justify-content:center;
  margin:auto;
  color: #000;
  color: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);
  color: linear-gradient(to right, #2c3e50, #bdc3c7);
  cursor: pointer;
`

export const OpenLock = styled(AiOutlineEye)`
  font-size: 24px;
  border-radius: 50px;
  color: #000;
  cursor: pointer;
`
export const Delete = styled(AiTwotoneDelete)`
  font-size: 22px;
  display: flex;

  &:hover{
    color: red;
    cursor: pointer;
  }
`

export const ContainerFunctions = styled.div`
  display:flex;
  flex-direction: column;
  text-align: center;
  align-items:center;
  justify-content: center;
  margin: auto;
  width: 100%;
  gap: 5px;

  .border-card{
    height: 2px;
    width: 100%;
    background-color: #C7C7C7;
  }

`

export const DescribeContainer = styled.div`

${props =>
    props.$completed === "checked-block" &&
    css`
      opacity: ${props => (props.disabled ? "0.6" : "1")};
      pointer-events: ${props => (props.disabled ? "none" : "auto")};
    `}
`

export const ButtonDelete = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  background-color: none;
  border: none;
  width: 300px;
  height: 50px;
  padding-left: 10px;
  cursor: pointer;

  background-color: #ECECEC;

  &:hover{
    background-color: #AED8EF99;
  }

  &:active{
    border-radius: 5px;
    border: 2px solid #0A9AE9;
  }


${props =>
    props.$completed === "checked-block" &&
    css`
      opacity: ${props => (props.disabled ? "0.4" : "1")};
      pointer-events: ${props => (props.disabled ? "none" : "auto")};
    `}

`

export const ArrowForward = styled(IoIosArrowForward)`
  position: absolute;
  right: 30px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`

export const CardChipIcon = styled(FcSimCardChip)`
  font-size: 50px;
  display: flex;
  margin-bottom: 5px;
`;

export const ContainerCvcExpiry = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px;
  position: relative;

  .create{
    font-size: 12px;
  
  }

  .validate{
    left: 110px;
    top: 3px;
    font-size: 12px;
    position: absolute;

  }
`;

export const TitleVisa = styled.div`
display: flex;
text-align: center;
align-items: center;
justify-content: flex-end;
margin: auto;
width: 100%;
margin-bottom: 20px;
margin-top: 15px;

`

export const Visa = styled(BiLogoVisa)`
  font-size: 50px;
  color: #bdc3c7;
  color: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);
  color: linear-gradient(to right, #2c3e50, #bdc3c7);
`;

export const ContainerPix = styled.button`
  background: none;
  border: none;
  display: flex;
  text-align: center;
  align-items: center;
  background-color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;


${props =>
  props.$completed === "checked-block" &&
  css`
    opacity: ${props => (props.disabled ? "0.4" : "1")};
    pointer-events: ${props => (props.disabled ? "none" : "auto")};
  `}
`
