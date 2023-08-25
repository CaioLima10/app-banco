import { ContaineIconArrowDown, 
  ContainerExtract, 
  ContainerValue,
  CreditCard,
  Section} from "./style";

import Header from "../Header/Header"  
import StyleColorGlobal from '../styleColorGlobal';
import BackToTopButton from "../../BackToTopButton";


export default function Exctract() {
  
  const createPix = JSON.parse(localStorage.getItem('Pix')) || []

  const addToCardLetter = (name) => {
    if (typeof name === 'string') {
      return name.replace(/[^a-zA-Z ]/g, '');
    } else {
      return "";
    }
  };



  return (
    <>
    <Header/>
    <Section>
      <ContainerValue>
      <StyleColorGlobal/> 
        <ContaineIconArrowDown>
            <ContainerExtract>
              <p className="title-extract">Extrato</p>
                {createPix.map((item, index) => (
                    <div key={index}>
                      <div className="container-info" >
                        <div className="icon-container" >
                          <CreditCard/>
                        </div>
                        <div className="name__number">
                          <small className="name">{addToCardLetter(item.name)} </small>
                          <span className="number"> R$ {item.number}</span>
                        </div>
                        <div className="type-date">
                            <span className="title-type">tipo de transferencia: PIX </span>
                            <small className="date" > {item.date}</small>
                        </div>
                        {item.cpf && <small className="dados">cpf: {item.cpf}</small>}
                        {item.cnpj && <small className="dados">cnpj: {item.cnpj}</small>}
                        {item.telephone && <small className="dados">telefone: {item.telephone}</small>}
                        <small className="describe"> Descrição: {item.describe}</small>
                      </div>

                      <div className="border-info"></div>
                    </div>
                ))}
            </ContainerExtract>
        </ContaineIconArrowDown>
        </ContainerValue>
        <BackToTopButton/>
    </Section>
    </>
  )
}
