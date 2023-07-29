import { useState } from "react"
import { Container, Hamburguer } from "./style"
import SideBar from '../SideBar/SideBar'


export default function Header() {

    const [ sidebar , setSideBar ] = useState(false)

    const showSideBar = () => setSideBar(!sidebar)

  return (
    <Container>
        <Hamburguer onClick={showSideBar}/>    
        { sidebar && <SideBar active={setSideBar}/>}
    </Container>
  )
}
