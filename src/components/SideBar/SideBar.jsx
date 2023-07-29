import { FaHome  } from "react-icons/fa"
import { Close, Container, Content } from "./style"
import SideBarItem from "../SideBarItem/SideBarItem"
import { AiFillCreditCard } from 'react-icons/ai'
import { MdPix } from 'react-icons/md'
import { PiNewspaperBold } from 'react-icons/pi'

export default function SideBar({ active }) {

    const closeSideBar = () => {
        active(false)
    }

  return (
    <Container sidebar={active}>
        <Close onClick={closeSideBar}/> 
        <Content >
            <SideBarItem Icon={FaHome}  Text="Home" to="/" />
            <SideBarItem Icon={AiFillCreditCard} Text="Meus Cartoes" to="meus-cartoes"/>
            <SideBarItem Icon={MdPix} Text="Faça seu Pix" />
            <SideBarItem Icon={PiNewspaperBold} Text="Extrato da conta "/>
        </Content>
    </Container>
  )
}
