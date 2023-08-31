import { Container, ContainerDialog } from "./styles";
import { FaRegTimesCircle } from "react-icons/fa";
import Hiding from "../../../assets/hiding.png";
import Logo from "../../../assets/BANK-logo.png"
import { useState } from "react";

export default function Dialog({ message, onDialog }) {
  const [isVisibled, setIsVisibled] = useState(false); 
  const [isVisibledLogo , setIsVisibledLogo] = useState(true); 

  function handleHiding() {
    setIsVisibled(false);
    setIsVisibledLogo(true)
  }

  function handleMouseEnter() {
    setIsVisibled(true);
    setIsVisibledLogo(false)
  }

  return (
    <>
        <Container onClick={() => onDialog(false)}/>
      <ContainerDialog>
        <button 
          className="cancel"
          onClick={() => onDialog(false)}>
          <FaRegTimesCircle />

        </button>
        { isVisibledLogo && <img className="logo" src={Logo} alt="Logo" /> }

        {isVisibled && (
          <>
          <img className="hiding" src={Hiding} alt="Personagem-Escondido" />
          <div className="container-text">
            <p>Não faz isso cartão tão bonito!!</p>
          </div>
          </>
        )}
        <h3>{message}</h3>
        <div className="bar-color"></div>
        <div className="container-btn">
          <button
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleHiding}
            className="confirm"
            onClick={() => onDialog(true)}
          >
            Confirmar
          </button>
        </div>
      </ContainerDialog>


    </>
  );
}
