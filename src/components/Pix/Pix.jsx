import Header from "../Header/Header";
import {  Container, 
          Form , 
          Section } from "./style";

import { useEffect, useRef, useState } from "react";
import { useNavigate} from "react-router-dom";
import StyleColorGlobal from "../styleColorGlobal";
import { AiFillInfoCircle } from "react-icons/ai";
import Acconut from "./Acconut/acconut";


export default function Pix() {

    const totalValue = JSON.parse(localStorage.getItem('totalValue'))

    const [ usersCpf , setUsersCpf ] = useState("Caio Lima") 
    const [ usersCnpj , setUsersCnpj ] = useState("Ygor Mendes") 
    const [ usersTelephone , setUsersTelephone ] = useState("Gael Edward") 

    const [ cpfErrorMessage, setCpfErrorMessage] = useState("");
    const [ cnpjErrorMessage ,  setCnpjErrorMessage ] = useState("")
    const [ telephoneErrorMessage , setTelephoneErrorMessage ] = useState("")

    const [ inputNumber, setInputNumber] = useState("");
    const [ textereaDescribe, setTextereaDescribe] = useState("");
    const [ createPix, setCreatePix] = useState([]);
    const [ openInputCpf, setOpenInputCpf] = useState(false);
    const [ openInputCnpj, setOpenInputCnpj] = useState(false);
    const [ openInputTelephone, setOpenInputTelephone]   = useState(false);
    const [ desconto , setDesconto ] = useState(0)
    const [ totalDiscount, setTotalDiscount] = useState(0);
    const [ isPixPriceEmpty , setIsPixPriceEmpty] = useState("")
    const [ selectedOption, setSelectedOption] = useState(""); 

    console.log(createPix)

  const pixPriceRef = useRef()
  const navigate = useNavigate();

  function handleNumberKeyPress(event) {
    const charCode = event.charCode;
    if (
      (charCode < 48 || charCode > 57) && charCode !== 8 && charCode !== 13) 
       {
      event.preventDefault();
    } 
  }

  useEffect(() => {
    const storedPixData = localStorage.getItem('Pix');
    const parsedPixData = storedPixData ? JSON.parse(storedPixData) : [];
    setCreatePix(parsedPixData);

}, []);

    function handleClickPix(event) {
      event.preventDefault();

      if (totalValue < parseFloat(inputNumber)) {
        alert("Você está sem saldo suficiente para realizar essa transação.");
        setInputNumber("")
        return;
      }

      if(!inputNumber 
        || !usersCpf 
        || !usersCnpj 
        || !usersTelephone
        ){
        return
      }
      if (!openInputCpf 
          && !openInputCnpj 
          && !openInputTelephone) {
        return
      }

      setDesconto(0);
    
      const newPix = {
        userCpf: usersCpf,
        userCnpj: usersCnpj,
        userTelephone: usersTelephone, 
        number: inputNumber,
        describe: textereaDescribe,
        cpf: openInputCpf,
        cnpj: openInputCnpj,
        telephone: openInputTelephone,
        date: new Date().toLocaleDateString("pt-br", {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }),
      };


      if (openInputCpf && isValidCpf(openInputCpf)) {
        if (openInputCpf === "111.111.111-11") {
          setUsersCpf(usersCpf)

        } else {
        setCpfErrorMessage(" CPF digitado não foi encontrado.")
        return
        }
    }
    if (openInputCnpj && isValidCnpj(openInputCnpj)) {
      if (openInputCnpj === "11.111.111.1111/11") {
        setUsersCnpj(usersCnpj)
      } else {
      setCnpjErrorMessage(" CNPJ digitado não foi encontrado.")
      return
      }
  }

    if(openInputTelephone && isValidTelephone(openInputTelephone)){
      if(openInputTelephone === "(11) 11111-1111"){
        setUsersTelephone(usersTelephone)
      }else{
        setTelephoneErrorMessage("Telefone digitado não foi encontrado.")
        return
      }
    }
    if(open)
      setCreatePix((prevState) => { 
      const updatePix = [...prevState, newPix];
      setTotalDiscount(totalDiscount + desconto);
      localStorage.setItem('Pix', JSON.stringify(updatePix));
      navigate("/enviado", { state: { ...newPix, selectedOption } }); 

      return updatePix;
  });
    }
    function isValidCpf(){
      return true 
    }
    function isValidCnpj(){
      return true
    }
    function isValidTelephone(){
      return true
    }

    function handleRegexCpf(e) {
        let value = e.currentTarget.value;
        value = value.replace(/\D/g, "").trim();
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
        e.currentTarget.value = value;
        setOpenInputCpf(value);
        return
    }

    function handleRegexCnpj(e) {
        let value = e.currentTarget.value;
        value = value.replace(/\D/g, "").trim();
        value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3.$4/$5")
        e.currentTarget.value = value;
        setOpenInputCnpj(value);
        return
    }

    function handleRegexTelephone(e) {
        let value = e.currentTarget.value;
        value = value.replace(/[^\d.]/g, "").trim();
        if (value.length <= 11) {
            value = value.replace(/(\d{2})(\d)/, "($1) $2");
            value = value.replace(value.length === 11 ? /(\d{4})(\d)/ : /(\d{5})(\d)/, "$1-$2");
            e.currentTarget.value = value;
        }
        setOpenInputTelephone(value);
        return
    }
        
        const handleInputChangePrice = (event) => {
          const price = event.target.value.trim()
          event.target.value = price
          setInputNumber(price)
        }

        function handleCardPriceBlur(){
          const pixPriceValue = pixPriceRef.current.value
          setIsPixPriceEmpty(!pixPriceValue)
        }

    return (
        <>
          <Header />
          <StyleColorGlobal/>
          <Section>
            <Container>
                <Form>
                <Acconut/>
                    <div className="container-value">
                      <p>Digite o valor a ser enviado</p>
                        <input
                          className="input-price"
                            value={inputNumber}
                            maxLength={10}
                            onChange={handleInputChangePrice}
                            onKeyPress={handleNumberKeyPress}
                            placeholder="R$ 0.00"
                            ref={pixPriceRef}
                            onBlur={handleCardPriceBlur}
                        />
                    </div>
                        {isPixPriceEmpty && <small>Digite o valor</small>}

                        <span className="info-select">Para quem você quer transferir</span>
                        <span className="info-select-two">Escolha o tipo de dado e preencha o campo.</span>
                        <div className="container-input">
                        <select value={selectedOption} onChange={(e) => {
                            setSelectedOption(e.target.value);

                            if (e.target.value === 'cpf') {
                              setOpenInputCpf(true);
                              setOpenInputCnpj(false);
                              setOpenInputTelephone(false);

                            } else if (e.target.value === 'telephone') {
                              setOpenInputCpf(false);
                              setOpenInputCnpj(false);
                              setOpenInputTelephone(true);

                            } else if (e.target.value === 'cnpj') {
                              setOpenInputCpf(false);
                              setOpenInputCnpj(true);
                              setOpenInputTelephone(false);
                            }
                        }}>
                          <option selected hidden>Escolha opção</option>
                          <option value="cpf">CPF</option>
                          <option value="cnpj">CNPJ</option>
                          <option value="telephone">Telefone</option>
                        </select>
                        {openInputCpf && (
                            <input
                                
                                type="text"
                                maxLength={11}
                                className="input-select"
                                id="inputCpf"
                                onBlur={handleRegexCpf}
                                onKeyUp={handleRegexCpf}
                                placeholder="digite seu cpf"
                              />
                        )}

                        {openInputCnpj && (
                            <input
                                type="text"
                                className="input-select"
                                maxLength={14}
                                onBlur={handleRegexCnpj}
                                onKeyUp={handleRegexCnpj}
                                placeholder="digite seu cnpj"
                            />
                        )}
                        {openInputTelephone && (
                            <input
                                type="text"
                                className="input-select"
                                maxLength={15}
                                onBlur={handleRegexTelephone}
                                onKeyUp={handleRegexTelephone}
                                placeholder="digite seu telefone"
                            />
                        )}
                    </div>
                    {
                      cpfErrorMessage && cpfErrorMessage ? 
                      <p className="error-message">
                        <span className="icon-fill"><AiFillInfoCircle/></span> 
                          {cpfErrorMessage} 
                      </p> : ""
                      || cnpjErrorMessage && cnpjErrorMessage ? 
                      <p className="error-message">
                        <span className="icon-fill"><AiFillInfoCircle/></span>
                          {cnpjErrorMessage} 
                      </p> : "" 
                      || telephoneErrorMessage && telephoneErrorMessage ? 
                      <p className="error-message">
                        <span className="icon-fill"><AiFillInfoCircle/></span>
                          {telephoneErrorMessage} 
                      </p> : ""
                    }
                    <div className="container-texterea">
                      <span className="title-optional">Digite uma descrição</span>
                        <textarea
                            onChange={(e) => setTextereaDescribe(e.target.value)}
                            cols="30"
                            rows= "4"
                            placeholder="Opcional"
                        ></textarea>
                    </div>
                    <div>
                        <button type="submit" onClick={handleClickPix}>
                            Prosseguir
                        </button>
                    </div>
                </Form>
                </Container>
              </Section> 
        </>
    );
}
