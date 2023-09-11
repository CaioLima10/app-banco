import { BorderProgressWrapper, ColoredProgressBar, ContainerContent, ContainerCurrency, ContainerImc , ContainerTotal, Progress } from "./style";
import Box from "../../../assets/Box.png"
import OpenBox from "../../../assets/openBox.png"
import { useState } from "react";
import DialogAward from "../DialogAward";
import DialogAwardPremium from "../DialogAwardPremium";

export default function Resume({ total,  progress, cdi, inputValue, setInputValue, handleAddTransaction, presentNumber, setPresentNumber,fullTotal}) {

const initialPresentNumber = JSON.parse(localStorage.getItem("presentNumber")) || 0;

const [ openModal , setOpenModal ] = useState(false)
const [ openModalPremium , setOpenModalPremium ] = useState(false)
const [ openBox , setOpenBox ] = useState(false)


function handleBtnBox(){
    if (initialPresentNumber === 1) {
        setOpenModal(true);
        localStorage.setItem("presentNumber", JSON.stringify(0)) || 0
        setPresentNumber(0)
        setOpenBox(true)
    }else if(initialPresentNumber >= 2){
        setOpenModalPremium(true)
        localStorage.setItem("presentNumber", JSON.stringify(0)) || 0
        setPresentNumber(0)
        setOpenBox(true)
    }
    else {
        setOpenModal(false)
        setOpenBox(false)
    }
  }
  
  function closeBox(){
    if (initialPresentNumber === 1) {
      setOpenBox(true)
  }else if(initialPresentNumber >= 2){
    setOpenBox(true)
  }
  else {
    setOpenModal(false)
    setOpenBox(false)
  }
}

function handleNumberKeyPress(event) {
  const charCode = event.charCode;
  if (
    (charCode < 48 || charCode > 57) && charCode !== 8 && charCode !== 13) 
     {
    event.preventDefault();
  } 
}


  return (
    <>
    <ContainerContent>
      <ContainerTotal>
        <div className="content-total">
          <span>{fullTotal}</span>

          <hr />
          <p>Sua Poupança Atual</p>
        </div>
      </ContainerTotal>
      <ContainerImc>
      <div className="content-total">
          <span>R$ {cdi}</span>
          <hr />
          <p>Expectativa de doação <br /> por mês</p>
        </div>
      </ContainerImc>
    </ContainerContent>
      <ContainerCurrency>
        { openModal && (
          <DialogAward setOpenModal={setOpenModal} closeBox={closeBox} />
        ) }
        {
          openModalPremium && (
            <DialogAwardPremium setOpenModalPremium={setOpenModalPremium} closeBox={closeBox}/>
            )
        }
      <Progress >

        <span>{`${total} /10000`}</span>

        <label>{presentNumber}</label>
        {openBox ? (
            <img onClick={closeBox} src={OpenBox} alt="Caixa" />
          ) : (
            <img onClick={handleBtnBox} src={Box} alt="Caixa" />
          )}
      </Progress>
      <BorderProgressWrapper> 

        <div className="circle" >
          <div className="children-circle" ></div>
        </div>
        <ColoredProgressBar style={{ width: `${progress}%`}}></ColoredProgressBar>
      </BorderProgressWrapper>
        <input
          type="text" 
          placeholder="R$ 0,00"
          maxLength={5}
          onKeyPress={handleNumberKeyPress}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        { inputValue ? (
        <button type="button"  onClick={handleAddTransaction}>
          Depositar
        </button>):(
        <button type="button" disabled onClick={handleAddTransaction}>
          Depositar
        </button>
        ) }
      </ContainerCurrency>
    </>

  );  
}
