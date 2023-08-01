import { AiTwotoneDelete } from "react-icons/ai";
import { BiLogoVisa } from "react-icons/bi";
import { FcSimCardChip } from "react-icons/fc";
import { GiConfirmed } from "react-icons/gi";
import { ImBlocked } from "react-icons/im";
import { MdPix } from "react-icons/md";
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
  max-width: 350px;
  height: 220px;
  border-radius: 16px;
  margin: 30px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.60);

  .btnBlock{
    position: absolute;
    top: 20px;
    right: 10px;
    border: none;
    border-radius: 50px;
    background: none;
  }
`;

export const Blocked = styled(ImBlocked)`
  font-size: 22px;
  border-radius: 50px;
  color: #444;
  color: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);
  color: linear-gradient(to right, #2c3e50, #bdc3c7);
  cursor: pointer;
`

export const Confirmed = styled(GiConfirmed)`
  font-size: 22px;
  border-radius: 50px;
  color: #007849;
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
  justify-content: center;
  background-color: none;
  border: none;
  flex-direction: column;

${props =>
    props.$completed === "checked-block" &&
    css`
      opacity: ${props => (props.disabled ? "0.4" : "1")};
      pointer-events: ${props => (props.disabled ? "none" : "auto")};
    `}

  p{

  }

`

export const CardChipIcon = styled(FcSimCardChip)`
  font-size: 50px;
`;

export const Visa = styled(BiLogoVisa)`
  font-size: 70px;
  width: 100%;
  right: 0;
  top: 150px;
  color: #bdc3c7;
  color: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);
  color: linear-gradient(to right, #2c3e50, #bdc3c7);
`;

export const ContainerPix = styled.button`
  position: absolute;
  background: none;
  border: none;
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

${props =>
  props.$completed === "checked-block" &&
  css`
    opacity: ${props => (props.disabled ? "0.4" : "1")};
    pointer-events: ${props => (props.disabled ? "none" : "auto")};
  `}
`

export const Pix = styled(MdPix)`
  font-size: 22px;
  display: flex;
  cursor: pointer;


    &:hover{
      color: green;
    }
`