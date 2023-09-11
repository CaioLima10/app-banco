import Header from "../Header/Header"
import { Logo, Section, StyledIcon, StyledLink } from "./style"
import { MdOutlineAddCard, MdPix } from "react-icons/md";
import { BsCreditCard2Back, BsNewspaper } from "react-icons/bs"
import SigmaBank from "../../assets/BANK-removebg-preview 1.png"          
import BackToTopButton from "../../BackToTopButton";
import StyleColorGlobal from "../styleColorGlobal/index"
import { TbTargetArrow } from "react-icons/tb";

export default function Home() {
  return (
    <>  
    <Header/>
    <Logo className="logo">
        <img src={SigmaBank} alt="Logo" />
    </Logo>
    <Section>
      <div className="container-card">
        <StyledLink to={"/criar"}>    
          <button className="content">
                <StyledIcon as={MdOutlineAddCard} />
                <span>Criar cartão digital</span>
          </button>
        </StyledLink>
      </div>
      <div className="container-card">
        <StyledLink to={"/meus-cartoes"}>  
          <button className="content">
            <StyledIcon as={BsCreditCard2Back}/>
            <span>Seus cartões</span>
          </button>
        </StyledLink>
      </div>
      <div className="container-card">
        <StyledLink to={"/pagamentos"}>  
          <button className="content">
              <StyledIcon as={MdPix} />
              <span>Pix</span>
          </button>
        </StyledLink>
      </div>
      <div className="container-card">
        <StyledLink to={"/extrato"}>  
          <button className="content-extract">
            <StyledIcon  as={BsNewspaper}/>
            <span>Extrato</span>
          </button>
        </StyledLink>  
      </div>
      <div className="container-card">
        <StyledLink to={"/poupanca"}>  
          <button className="content-extract">
            <StyledIcon  as={TbTargetArrow}/>
            <span>POUPA HEROI!</span>
          </button>
        </StyledLink>  
      </div>
    </Section>
      <StyleColorGlobal/>
      <BackToTopButton/>
    </>
  )
}
