import { AiOutlineEye } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import { CgCreditCard } from "react-icons/cg"
import Header from "../Header/Header";
import { ContaineIconArrowDown, Container, ContainerExtract, ContainerHidden, Form } from "./style";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Pix() {
    const [inputNumber, setInputNumber] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputDescribe, setInputDescribe] = useState("");
    const [createPix, setCreatePix] = useState([]);

    const [hide, setHide] = useState(9999999);
    const [isHidden, setIsHidden] = useState(false);
    const [openInputCpf, setOpenInputCpf] = useState(false);
    const [openInputCnpj, setOpenInputCnpj] = useState(false);
    const [openInputTelephone, setOpenInputTelephone] = useState(false);
    const [ desconto , setDesconto ] = useState(0)
    const [totalDiscount, setTotalDiscount] = useState(0);

    const [isPixNameEmpty , setIsPixNameEmpty] = useState("")
    const [ isPixPriceEmpty , setIsPixPriceEmpty] = useState("")


  const pixNameRef = useRef()
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
    const storedIsHidden = localStorage.getItem('isHidden');
    setIsHidden(storedIsHidden ? JSON.parse(storedIsHidden) : false);

    const storedHide = localStorage.getItem('PixHide');
    setHide(storedHide);

    const storedPixData = localStorage.getItem('Pix');
    const parsedPixData = storedPixData ? JSON.parse(storedPixData) : [];
    setCreatePix(parsedPixData);

}, []);

    useEffect(() => {
        const storedIsHidden = localStorage.getItem('isHidden');
        setIsHidden(storedIsHidden ? JSON.parse(storedIsHidden) : false);
        return
    }, []);

    function toggleVisibility() {
      const newValue = !isHidden;
    setIsHidden(newValue);
      localStorage.setItem('isHidden', JSON.stringify(newValue));
    }

    function handleClickPix(event) {
      event.preventDefault();
      

      if(!inputName || !inputNumber){
        return
      }
      if (!openInputCpf && !openInputCnpj && !openInputTelephone) {
        return
      }

      setInputNumber("");
      setInputName("");
      setInputDescribe("");
      setOpenInputCpf(false);
      setOpenInputCnpj(false);
      setOpenInputTelephone(false);
      setDesconto(0);
    
      const newPix = {
        number: inputNumber,
        name: inputName,
        describe: inputDescribe,
        descont: totalDiscount,
        cpf: openInputCpf,
        cnpj: openInputCnpj,
        telephone: openInputTelephone,
        price: hide,
        Hidden: isHidden,
        date: new Date().toLocaleDateString("pt-br", {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }),
      };
    
      setCreatePix((prevState) => {
        const updatePix = [...prevState, newPix];
        setTotalDiscount(totalDiscount + desconto);
        localStorage.setItem('Pix', JSON.stringify(updatePix));
        navigate("/enviado", { state: newPix });  
        return updatePix;
      });
    }
    

  useEffect(() => {
      const storedIsHidden = localStorage.getItem('isHidden');
      setIsHidden(storedIsHidden ? JSON.parse(storedIsHidden) : false);

      const storedHide = localStorage.getItem('PixHide');
      setHide(storedHide ? parseFloat(storedHide) : 9999999);
  }, []);
  
  useEffect(() => {

    localStorage.setItem('PixHide', hide.toString());
      }, [hide]);

    function handlePrice(e) {
      let value = e.currentTarget.value;
      value = value.replace(/\D/g, "").trim();
  
      if (value === "") {
        setHide(9999999 - totalDiscount);
        setDesconto(0);
        localStorage.setItem('PixHide', hide);
        localStorage.setItem('PixHide', 9999999 - totalDiscount);
      } else {
        const numericValue = parseFloat(value);
        const newValue = Math.max(9999999 - numericValue - totalDiscount, 0);
        const currentDiscount = newValue;
        setDesconto(currentDiscount);
        setHide(newValue);
      }
      return
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

    const addToCardLetter = (name) => {
      if (typeof name === 'string') {
        return name.replace(/[^a-zA-Z ]/g, '');
      } else {
        return "";
      }
    };

      function handleNameKeyPress(event) {
        const charCode = event.charCode;
        setInputName("");

        if (
          (charCode >= 48 && charCode <= 57) || 
          charCode === 59 ||
          charCode === 45 || 
          charCode === 43 || 
          charCode === 47 || 
          charCode === 42 || 
          charCode === 46    
        ) {
          event.preventDefault();
        } 
      }

      
      
      const handleInputChangeName = (event) => {
          const name = event.target.value.trimStart()

          setInputName("");
          event.target.value = name
          setInputName(name)
        } 

        const handleInputChangePrice = (event) => {
          const price = event.target.value.trim()

          event.target.value = price

          setInputNumber(price)
        }

        function handlePixNameBlur() {
          const pixNameValue = pixNameRef.current.value;
          setIsPixNameEmpty(!pixNameValue);
        }

        function handleCardPriceBlur(){
          const pixPriceValue = pixPriceRef.current.value
          setIsPixPriceEmpty(!pixPriceValue)
        }

    return (
        <>
            <Header />
            <Container>
                <Form>
                    <div className="container-value">
                        <input
                            value={inputNumber}
                            onChange={handleInputChangePrice}
                            onKeyPress={handleNumberKeyPress}
                            maxLength={7}
                            className="input-price"
                            placeholder="Digite o Valor"
                            onKeyUp={handlePrice}
                            ref={pixPriceRef}
                            onBlur={handleCardPriceBlur}
                        />
                    </div>
                        {isPixPriceEmpty && <small>Digite o valor</small>}

                    <div>
                        <input
                            className="input-name"
                            type="text"
                            placeholder="para:"
                            onKeyPress={handleNameKeyPress}
                            onChange={handleInputChangeName}
                            onBlur={handlePixNameBlur}
                            ref={pixNameRef}
                        />
                    </div>
                        {isPixNameEmpty && <small>Preencha o nome, precisamos saber destinatario!</small>}
                    <div className="container-texterea">
                        <textarea
                            onChange={(e) => setInputDescribe(e.target.value)}
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="descrição"
                        ></textarea>
                    </div>
                    <div className="container-input">
                        <label> CPF: </label>
                        <input
                            name="input"
                            type="radio"
                            value="cpf"
                            checked={openInputCpf}
                            onChange={() => {
                                setOpenInputCpf(true);
                                setOpenInputCnpj(false);
                                setOpenInputTelephone(false);
                            }}
                        />
                        <label> CNPJ: </label>
                        <input
                            name="input"
                            type="radio"
                            value="cnpj"
                            checked={openInputCnpj}
                            onChange={() => {
                                setOpenInputCpf(false);
                                setOpenInputCnpj(true);
                                setOpenInputTelephone(false);
                            }}
                        />
                        <label> TELEFONE: </label>
                        <input
                            name="input"
                            type="radio"
                            value="telephone"
                            checked={openInputTelephone}
                            onChange={() => {
                                setOpenInputCpf(false);
                                setOpenInputCnpj(false);
                                setOpenInputTelephone(true);
                            }}
                        />
                    </div>
                    <div>
                        {openInputCpf && (
                            <input
                                type="text"
                                maxLength={11}
                                onBlur={handleRegexCpf}
                                onKeyUp={handleRegexCpf}
                                placeholder="digite seu cpf"
                            />
                        )}
                        {openInputCnpj && (
                            <input
                                type="text"
                                maxLength={14}
                                onBlur={handleRegexCnpj}
                                onKeyUp={handleRegexCnpj}
                                placeholder="digite seu cnpj"
                            />
                        )}
                        {openInputTelephone && (
                            <input
                                type="text"
                                maxLength={15}
                                onBlur={handleRegexTelephone}
                                onKeyUp={handleRegexTelephone}
                                placeholder="digite seu telefone"
                            />
                        )}
                    </div>
                    <div>
                        <button type="submit" onClick={handleClickPix}>
                            Confirmar
                        </button>
                    </div>
                </Form>

                <ContaineIconArrowDown>
                <ContainerHidden>
                    <span>
                    <p>Saldo disponivel</p> 
                    <div className="container-hide">
                        {isHidden ? "*****" : hide}
                        <button onClick={toggleVisibility}>
                            {isHidden ? <AiOutlineEye /> : <BiHide />}
                        </button>
                    </div>
                    </span>
                </ContainerHidden>
                    <ContainerExtract>
                      <p className="title-extract">Extrato</p>
                        {createPix.map((item, index) => (
                            <div key={index}>
                              <div className="container-info" >
                                <div className="icon-container">
                                  <CgCreditCard/>
                                </div>
                                <div className="name-number">
                                  <small className="name">{addToCardLetter(item.name)} </small>
                                  <span className="number">R$ {item.number}</span>
                                </div>
                                <div className="type-date">
                                    <span className="title-type">tipo de transferencia: PIX </span>
                                    <small className="date" > {item.date}</small>
                                </div>
                                {item.cpf && <small className="dados">cpf: {item.cpf}</small>}
                                {item.cnpj && <small className="dados">cnpj: {item.cnpj}</small>}
                                {item.telephone && <small className="dados">telefone: {item.telephone}</small>}
                              </div>
                              <small className="describe"> Descrição: {item.describe}</small>

                              <div className="border-info"></div>
                            </div>
                        ))}
                    </ContainerExtract>
                </ContaineIconArrowDown>
            </Container>
        </>
    );
}
