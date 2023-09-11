import { useState } from "react";
import { Container, ContainerDialog } from "./style";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function DialogAward({ setOpenModal , closeBox }) {
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);

  const currentDate = new Date()

  function handleBtnCopied(e){
    e.preventDefault();
    setValue("Copiado")
    if(!copied){
      setTimeout(() => {
        setCopied(false)
        setValue("")
      }, 1500)
  }}

  function handleClose(){
    setOpenModal(closeBox)
  }

  return (
    <>
      <Container onClick={handleClose} />
      <ContainerDialog>
        <div className="circle"></div>
        <div>
        <p className="gold">Gold</p>
          <h1>10% OFF</h1>
            <span>esse cupom pode ser usado em lojas parceiras</span>
          <div className="container-coupon">
            <p className="coupon">
              CUPOM:{" "}
              <span className="coupon-code">
                SIGMA10
              </span>
            </p>
          </div>
          <AiOutlineCloseCircle  className="cancel" onClick={closeBox}/>
          <CopyToClipboard text="SIGMA10" onCopy={() => setCopied(true)}>
            <button onClick={handleBtnCopied}>Copiar</button>
          </CopyToClipboard>
          {value && <p className="copied">{value}</p>}
          
          
        </div>
        <div className="circle-two"></div>
        <div className="container-date">
          <span className="info-date"> valido por 30 dias inicio: { currentDate.toLocaleDateString() }</span>
        </div>

      </ContainerDialog>
    </>
  );
}
