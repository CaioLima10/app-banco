import { ContaineIconArrowDown, ContainerExtract, ContainerValue, CreditCard, FilesEmpty, Section } from "./style";
import Header from "../Header/Header";
import StyleColorGlobal from '../styleColorGlobal';
import BackToTopButton from "../../BackToTopButton";
import { useEffect, useState } from "react";

export default function Exctract() {
  const createPix = JSON.parse(localStorage.getItem('Pix')) || [];
  const [ isVisibled , setIsVisibled ] = useState(true)

  useEffect(() => {
    setIsVisibled(createPix.length === 0)
  }, [ createPix.length ])

  return (
    <>
      <Header />
      <Section>
        <ContainerValue>
          <StyleColorGlobal />
          <ContaineIconArrowDown>
            <ContainerExtract>
              <p className="title-extract">Extrato</p>
               { isVisibled  ? (
                <div className="container-extract-empty">
                  <FilesEmpty />
                  <h3>Extrato esta vazio</h3>
                </div>
               ):(createPix.map((item, index) => (
                  <div key={index}>
                    <div className="container-info" >
                      <div className="icon-container" >
                        <CreditCard />
                      </div>
                      <div className="name__number">
                        <span className="number"> - R${item.number}</span>
                      </div>
                      <div className="type-date">
                        <span className="title-type">tipo de transferencia: PIX </span>
                        <small className="date" > {item.date}</small>
                      </div>
                      {
                        createPix && (
                          item.cpf ? <span className="name">para: {item.userCpf}</span> :
                          item.cnpj ? <span className="name">para: {item.userCnpj}</span> :
                          item.telephone ? <span className="name">para: {item.userTelephone}</span> :
                          null
                        )
                      }
                      {item.cpf && <small className="dados">cpf: {item.cpf}</small>}
                      {item.cnpj && <small className="dados">cnpj: {item.cnpj}</small>}
                      {item.telephone && <small className="dados">telefone: {item.telephone}</small>}
                      <small className="describe"> Descrição: {item.describe}</small>
                    </div>

                    <div className="border-info"></div>
                  </div>
                ))
               )}
            </ContainerExtract>
          </ContaineIconArrowDown>
        </ContainerValue>
        <BackToTopButton />
      </Section>
    </>
  );
}
