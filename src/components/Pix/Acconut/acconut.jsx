import React, { useEffect, useState } from "react";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { ContainerOpen } from "./style";

export default function Account() {
  const [open, setOpen] = useState(false);
  const createPix = JSON.parse(localStorage.getItem('Pix')) || [];
  const inputValue = JSON.parse(localStorage.getItem('inputValue')) || 0; 
  let accountBalance = JSON.parse(localStorage.getItem("accountBalance")) || 30000;
  const [value, setValue] = useState(0);

  useEffect(() => {
    const localToggleOpen = JSON.parse(localStorage.getItem('toggle'));
    if (localToggleOpen !== null) {
      setOpen(localToggleOpen);
    }
  }, []);

  const handleHideOpen = (event) => {
    event.preventDefault();
    setOpen(!open);
    localStorage.setItem('toggle', JSON.stringify(!open));
  };

  const calculateTotalValue = () => {
    let totalValue = accountBalance;

    for (const item of createPix) {
      totalValue -= item.number || 0;
    }

    if (inputValue === 30000) {
      totalValue -= inputValue;
      accountBalance = totalValue;
      setValue(accountBalance);
      localStorage.setItem("accountBalance", JSON.stringify(accountBalance));
    }

    if (accountBalance < inputValue) {
      alert("Infelizmente você não tem dinheiro suficiente");
      return totalValue;
    }

    localStorage.setItem('totalValue', JSON.stringify(totalValue));

    return totalValue;
  };

  return (
    <ContainerOpen>
      <div className="number__open__hide">
        <div id="title-balance">
          <span>Saldo disponível</span>
        </div>
        <span id="number-open"> R$ {open ? calculateTotalValue() : "******"}</span>
      </div>

      <div className="btn__open__hide" onClick={handleHideOpen}>
        {open ? <BsEye /> : <BsEyeSlash />}
      </div>

      {createPix.map((item) => (
        <div key={item.id}></div>
      ))}
    </ContainerOpen>
  );
}
