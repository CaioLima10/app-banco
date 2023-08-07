import { Link, useLocation } from "react-router-dom";
import Header from "../../Header/Header";
import { Container, ContainerSection, Section } from "./style.send";
import { Button, ContainerDados } from "./style.send";
import Check from "../../../assets/Check.png"

export default function Sent() {

  const location = useLocation();
  const recentTransaction = location.state;
  
  

  return (
    <ContainerSection>
      <Header/>
    <Section>
      <Container>
          <img src={Check} alt="" />
          <h2>Transferencia enviada com sucesso!</h2>
        
      {recentTransaction && (
        <>     
        <ContainerDados>
          <small className="date">{recentTransaction.date}</small> 
          <div className="border"></div><br /> 
          <span>R$ {recentTransaction.number}</span>
           <div className="border"></div><br /> 
           <div className="name"><p id="send">De: </p>SigmaBank </div>
          <div className="name"><p id="send">Para: </p>{recentTransaction.name} </div>
          {recentTransaction.cpf && <div className="type-dados">cpf: {recentTransaction.cpf}</div>}
          {recentTransaction.cnpj && <div className="type-dados">cnpj: {recentTransaction.cnpj}</div>}
          {recentTransaction.telephone && <div className="type-dados">telefone: {recentTransaction.telephone}</div>}
          <div className="title-sigmabank"> conta: SigmaBank </div>

          <Link to="/pagamentos">
            <Button>fazer nova transação</Button>
          </Link>
        </ContainerDados>
        </>
      )}
      </Container>
    </Section>
    </ContainerSection>
  )
}
