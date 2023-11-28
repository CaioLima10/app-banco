import { useState } from "react"
import { Container, Hamburguer } from "./style"
import SideBar from '../SideBar/SideBar'


export default function Header() {

  const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

  return (
    <Container>
        <Hamburguer onClick={toggleSidebar}/>    
        {sidebarVisible && <SideBar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} />}
    </Container>
  )
}
