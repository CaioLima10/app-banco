import { BiLogoVisa } from "react-icons/bi";
import { FcSimCardChip } from "react-icons/fc";
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
  width: 100%;
  max-width: 350px;
  height: 220px;
  border-radius: 16px;
  margin: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.60);

  ${props =>
    props.$completed === "checked-block" &&
    css`
      opacity: ${props => (props.disabled ? "0.6" : "1")};
      pointer-events: ${props => (props.disabled ? "none" : "auto")};
    `}

`;

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

export const ContainerBtnIcons = styled.div`
margin-top: 30px;
display: flex;
text-align: center;
justify-content: center;
align-items: center;
background-color: red;
`