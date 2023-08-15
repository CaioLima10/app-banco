import { FaHome  } from "react-icons/fa"
import { Close, Container, ContainerContent, Content } from "./style"
import SideBarItem from "../SideBarItem/SideBarItem"
import { AiFillCreditCard } from 'react-icons/ai'
import { MdPix } from 'react-icons/md'
import  Logo  from "../../assets/LOGO-GOLD.png"
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
            <SideBarItem  Icon={FaHome}  Text="Home" to="/" />
            <SideBarItem Icon={AiFillCreditCard} Text="Meus Cartões" to="/meus-cartoes"/>
            <SideBarItem Icon={MdPix} Text="Faça seu Pix" to="/pagamentos" />
            <div>
              <img src={Logo} alt="LOGO" />
            </div>
        </Content>
        </ContainerContent> 
    </Container>
    </>
  )
}
