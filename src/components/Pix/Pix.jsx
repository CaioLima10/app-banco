import { AiFillEye } from "react-icons/ai";
import { GrFormViewHide } from "react-icons/gr"
import Header from "../Header/Header";
import { ArrowDown, ArrowUp, ButtonIconArrowDown, ContaineIconArrowDown, Container, ContainerExtract, ContainerHidden, Form, TitleExtract } from "./style";
import { useEffect, useState } from "react";



export default function Pix() {

    const [ inputNumber , setInputNumber ] = useState()
    const [ inputDescribe , setInputDescribe ] = useState()
    const [ createPix , setCreatePix ] = useState([])

    const [ hide , setHide ] = useState("")
    const [ isHidden , setIsHidden ] = useState(true)
    const [ openInputCpf , setOpenInputCpf] = useState(false)
    const [ openInputCpnj, setOpenInputCnpj] = useState(false)
    const [ openInputTelephone, setOpenInputTelephone] = useState(false)
    const [ openContainerIconArrowDown , setOpenContaineIconArrowDown ] = useState(false)


    useEffect(() => {
    
        const pixLocalstorage = localStorage.getItem('Pix');
        if (pixLocalstorage) {
            const loadPixStorage = JSON.parse(pixLocalstorage);
            setCreatePix(loadPixStorage);
            }

            const hideValue = localStorage.getItem('PixHide');
            setHide(hideValue || "8000000");

            const isHiddenOpen = localStorage.getItem("isHidden")
            setIsHidden(isHiddenOpen)  
        }, []);
    
    function toggleVisibility(){
        const isHiddenFromLocalStorage = localStorage.getItem('isHidden');
        setIsHidden(isHiddenFromLocalStorage ? JSON.parse(isHiddenFromLocalStorage) : true);
    } 

    function handleClickPix(e){
        e.preventDefault()

        setIsHidden((prevState) => !prevState);
        setHide((prevState) => {

        const discountedValue = prevState - parseFloat(inputNumber.replace(/\D/g, ""));
            const newValue = discountedValue.toFixed(0);
    
            localStorage.setItem('PixHide', newValue);
            return newValue;
        })

        const newPix = {
            number: inputNumber,
            describe: inputDescribe,
            price: hide,
            Hidden: isHidden,
            date: new Date().toLocaleDateString("pt-br" ,{
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }),

        }


        setCreatePix((prevState) => {
            const updatePix = [...prevState, newPix];
            localStorage.setItem('Pix', JSON.stringify(updatePix));
            return updatePix;
        });

     
        localStorage.setItem('isHidden', JSON.stringify(isHidden));
        return isHidden

    }



    function handlePrice(e) {
        let value = e.currentTarget.value;

        value = value.replace(/\D/g, "").trim();
        value = value.replace(/(\d+)(\d{2})$/, "$1,$2");
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        e.currentTarget.value = value;

        setInputNumber(value);
        
        return e;
    }



    function handleRegexCpf(e) {
        let value = e.currentTarget.value;
        value = value.replace(/[^\d.]/g, "").trim(); 
        value = value.replace(/^(\d{3}\.\d{3}\.\d{3}-\d{2})$/, "$1"); 
        setOpenInputCpf(value);
    }

    function handleClickOpenBtnArrow(){

        if(!openContainerIconArrowDown){
            setOpenContaineIconArrowDown(true)
        }else{
            setOpenContaineIconArrowDown(false)
        }
    }

return (
    <>  
    <Header/>
    
    <Container>
        <p>Valor na conta</p>
        
        <ContainerHidden>
            <span>
                {isHidden ? "*****" : hide} 
            <button onClick={toggleVisibility}>
                {isHidden ? <AiFillEye /> : <GrFormViewHide />}
            </button>
            </span>
        </ContainerHidden>
        <Form>
            <div className="container-value">
                <input 
                value={inputNumber}
                onChange={e => setInputNumber(e.target.value)} 
                maxLength={9}
                className="input-price" 
                placeholder="Digite o Valor" 
                onKeyUp={handlePrice}
                onBlur={handlePrice}
                />

            </div>

            <div className="container-texterea">
                <textarea 
                onChange={e => setInputDescribe(e.target.value)}
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
                    checked={openInputCpnj}
                    onChange={() => {
                        setOpenInputCpf(false);
                        setOpenInputCnpj(true);
                        setOpenInputTelephone(false);
                    }}/>
                <label> TELEFONE: </label>
                <input
                    name="input"
                    type="radio"
                    checked={openInputTelephone}
                    onChange={() => {
                        setOpenInputCpf(false);
                        setOpenInputCnpj(false);
                        setOpenInputTelephone(true);
                    }}
                    />
            </div> 
            <div>
                {openInputCpf 
                && openInputCpf 
                ? <input type="text"
                    onBlur={handleRegexCpf}
                    onKeyUp={handleRegexCpf}
                    placeholder="digite seu cpf" 
                /> 
                : false}


                {openInputCpnj && openInputCpnj ? <input type="text" placeholder="digite seu cnpj" /> : false}
                {openInputTelephone && openInputTelephone ? <input type="text" placeholder="digite seu telefone" /> : false}

            </div>
            <div>
                <button type="submit" onClick={handleClickPix}>Confirmar</button>
            </div>
        </Form>
            <TitleExtract>Extrato Bancario</TitleExtract>
            <ButtonIconArrowDown onClick={handleClickOpenBtnArrow} >
                {openContainerIconArrowDown && <ArrowUp/> ? <ArrowUp/> :<ArrowDown/> }
            </ButtonIconArrowDown>
            <ContaineIconArrowDown open={!openContainerIconArrowDown}>
            <ContainerExtract>
            {createPix.map((item, index) => (
                <div key={index}>
                <span> Enviado R$ {item.number}</span>
                <small>{item.describe}</small>
                <span>Saldo anterior: {item.price}</span>
                <small>{item.date}</small>
                <hr />
                </div>
            ))}
            </ContainerExtract>
        </ContaineIconArrowDown>    
    </Container>
    </>
)
}
