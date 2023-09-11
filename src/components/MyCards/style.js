import { AiOutlineWifi } from "react-icons/ai";
import { BiLogoVisa } from "react-icons/bi";
import { BsFillLockFill, BsFillUnlockFill } from "react-icons/bs";
import { FcSimCardChip } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;

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
  height: 365px;
  background-color: #fff;
  margin: 40px 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 20px;
`;

export const ContainerContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 210px;
  background-color: #272521;
  border-radius: 8px;

`

export const Cards = styled.div`
  width: 280px;
  height: 170px;
  margin: 10px;
  padding: 10px;
  border-radius: 16px;
  position: relative;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.60);
  z-index: 1;

  .container-number{
    display: flex;
    align-items: end;
    text-align: end;
    margin: auto;
    width: 100%;
    height: 100px;
  }

  .container-name-expiry{
    display: flex;
    width: 70%;
    justify-content: space-evenly;
    font-size: 12px;
    margin-top: 20px;
  }

  .title-name{
    font-weight: 900;
  }
  
  .container-expiry{
    width: 20%;
    height: 15px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  h2 , h3{
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }

  h2{
    font-size: 20px;
  }
  
  h3{
    display: flex;
    font-size: 12px;
    width: 100%;
  }
  
  .sub-color{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 70px;
    height: 100%;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  .btnBlock {
    position: absolute;
    text-align: center;
    align-items: center;
    justify-content:center;
    margin:auto;
    top: 8px;
    left: 10px;
    width: 35px;
    height: 30px;
    background-color: #D9D9D9;
    border: none;
    border-radius: 50%;
  }
  h2{
    display: flex;

  }

 h3{
    display: flex;  
  }

  small{
    margin-bottom: -10px;
  }

  img{
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: 0;
    width: 70%;
    position: absolute;
  }
`;

export const Wifi = styled(AiOutlineWifi)`
  display: flex;
  position: absolute;
  font-size: 24px;
  right: 24px;
  top: 10px;
  transform: rotate(90deg);
  z-index: 2;
`

export const CreateCards = styled.div`
    width: 340px;
    min-height: 365px;
    background-color: #272521;
    padding: 10px;
    margin: 40px 10px 0;
    margin-bottom: 40px;
    border-radius: 8px;

    img{
      margin-top: 30px;
    }

    p{
      color: #FFFFFF;
    }

    .border-color-plus{
      height: 2px; 
      width: 80%;
      background-color: #B3B3B3;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;
      margin-top: 10px;
    }

    .btn-card-plus{
      margin-top: 20px;
      height: 40px;
      width: 300px;
      border: none;
      color: #FFFFFF;
      font-size: 16px;
      border-radius: 6px;
      height: 50px;
      padding-left: 10px;
      cursor: pointer;
      background-color: #3D3B37;
    }

    button{
      position: relative;
    }

    button:hover{
    border: 2px solid #FF9900;
  }
  
    @media (max-width: 1080px){
      &{
        margin-bottom: 50px;
      } 
    }
`

export const Lock = styled(BsFillLockFill)`
  font-size: 20px;
  border-radius: 50px;
  text-align: center;
  align-items: center;
  justify-content:center;
  margin:auto;
  cursor: pointer;
`

export const OpenLock = styled(BsFillUnlockFill)`
  font-size: 20px;
  border-radius: 50px;
  color: #000;
  cursor: pointer;
`

export const ContainerFunctions = styled.div`
  display:flex;
  flex-direction: column;
  text-align: center;
  align-items:center;
  justify-content: center;
  margin: 50px auto;
  width: 100%;
  gap: 5px;

  .title-digital{
    font-size: 18px;
    margin-top: 5px;
    margin-bottom: 10px;
    color: #fff;
  }

  .border-card{
    height: 2px;
    margin-bottom: 10px;
    width: 100%;
    background-color: #D8D7D6;
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

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const BtnHero = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  border: none;
  width: 300px;
  border-radius: 6px;
  height: 50px;
  padding-left: 10px;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  background-color: #3D3B37;

  &:hover{
    border: 2px solid #FF9900;
  }

`

export const ButtonDelete = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  border: none;
  width: 300px;
  border-radius: 6px;
  height: 50px;
  padding-left: 10px;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  background-color: #3D3B37;

  &:hover{
    border: 2px solid #FF9900;
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


export const TitleVisa = styled.div`
display: flex;
text-align: center;
align-items: center;
justify-content: flex-end;
margin: auto;
width: 100%;
`

export const Visa = styled(BiLogoVisa)`
  font-size: 40px;
  position: absolute;
  display: flex;
  right: 16px;
  bottom: 0px;
  z-index: 2;
  z-index: 2;
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
