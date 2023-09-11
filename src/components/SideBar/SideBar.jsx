import { FaHome  } from "react-icons/fa"
import {  Close, Container, ContainerContent, Content } from "./style"
import SideBarItem from "../SideBarItem/SideBarItem"
import { AiFillCreditCard } from 'react-icons/ai'
import { TbSquareRoundedPlusFilled, TbTargetArrow } from "react-icons/tb"
import { PiNewspaperClippingBold } from "react-icons/pi"
import { MdPix } from 'react-icons/md'
import  Logo  from "../../assets/BANK-removebg-preview 1.png"
import Account from "../Pix/Acconut/acconut"

export default function SideBar({ active }) {

    const closeSideBar = () => {
        active(false)
    }

  return (
    <>
    <Container sidebar={active}>
        <Close onClick={closeSideBar}/> 
       <ContainerContent>       
        <Content >
          <Account/>
            <SideBarItem  Icon={FaHome}  Text="Home" to="/" />
            <SideBarItem Icon={TbSquareRoundedPlusFilled} Text="Criar Cartões" to="/criar"/>
            <SideBarItem Icon={AiFillCreditCard} Text="Meus Cartões" to="/meus-cartoes"/>
            <SideBarItem Icon={MdPix} Text="Faça seu Pix" to="/pagamentos" />
            <SideBarItem  Icon={PiNewspaperClippingBold}  Text="Extrato" to="/extrato" />
            <SideBarItem Icon={ TbTargetArrow } Text="POUPA HEROI!" to="/poupanca"></SideBarItem>
          <label></label>
            <div>
              <img src={Logo} alt="LOGO" />
            </div>
        </Content>
        </ContainerContent> 
    </Container>
    </>
  )
}
