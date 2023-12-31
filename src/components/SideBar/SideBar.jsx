import React from "react";
import { Container, Close, ContainerContent, Content } from "./style";
import SideBarItem from "../SideBarItem/SideBarItem";
import { FaHome } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import { TbSquareRoundedPlusFilled, TbTargetArrow } from "react-icons/tb";
import { PiNewspaperClippingBold } from "react-icons/pi";
import { MdPix } from "react-icons/md";
import Logo from "../../assets/BANK-removebg-preview 1.png";
import Account from "../Pix/Acconut/acconut";

export default function SideBar({ visible, onClose }) {
  return (
    <Container sidebar={visible ? "true" : "false"}>
      <Close onClick={onClose} />
      <ContainerContent>
        <Content>
          <Account />
          <SideBarItem Icon={FaHome} Text="Home" to="/" />
          <SideBarItem Icon={TbSquareRoundedPlusFilled} Text="Criar Cartões" to="/criar" />
          <SideBarItem Icon={AiFillCreditCard} Text="Meus Cartões" to="/meus-cartoes" />
          <SideBarItem Icon={MdPix} Text="Faça seu Pix" to="/pagamentos" />
          <SideBarItem Icon={PiNewspaperClippingBold} Text="Extrato" to="/extrato" />
          <SideBarItem Icon={TbTargetArrow} Text="POUPA HEROI!" to="/poupanca" />
          <label></label>
          <div>
            <img src={Logo} alt="LOGO" />
          </div>
        </Content>
      </ContainerContent>
    </Container>
  );
}
