import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Header from "../Header/Header";
import {  Button, Container, ContainerTitle, ContainerWrapper, Content, Section } from "./style";
import Hero from "../../assets/noto_man-superhero.png";
import Resume from "./Resume/index";
import Acconut from "../Pix/Acconut/acconut"


export default function Savings() {
  
  const data = localStorage.getItem("transaction");
  const [transactionList, setTransactionList] = useState(data ? JSON.parse(data) : []);

  const [total, setTotal] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [ progress , setProgress ] = useState(0)
  const [ imc , setImc ] = useState(0)
  const [ confirmedCdi , setConfirmedCdi ] = useState(0)

  const handleAddTransaction = () => {
    const amountIncome = transactionList
    .filter((item) => item.expense)
    .map((transaction) => Number(transaction.amount));
    
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0)
    
    setTotal(income);
    if (inputValue.trim() !== "") {
      const newTransaction = {
        id: Math.random(),
        expense: true,
        amount: parseFloat(inputValue),
        imc: imc
      };


      const newTotalUnits = (inputValue / 1000) * 10.90;

      const valueCdi = confirmedCdi + newTotalUnits
      setConfirmedCdi(valueCdi)
      setImc(newTotalUnits);

      
      const newTotal = total + parseFloat(inputValue);
      setTotal(newTotal);

      if (newTotal >= 10000) {
        setProgress(100); 
        setProgress((newTotal / 10000) * 100);
        alert("parabens vc ganhou caixa surpresa")
      }else {
        setProgress((newTotal / 10000) * 100); 
      }
      
      if (progress === 100) {
      alert("Parabéns, você chegou aos 10.000!");
        setProgress(0)
        }
  
        const updatedTransactionList = [...transactionList, newTransaction];

        localStorage.setItem("transaction", JSON.stringify(updatedTransactionList));
    
        setTransactionList(updatedTransactionList);
      setInputValue("");
    }
  };

  const [isOpen, setIsOpen] = useState(true);
  const [isIconArrow, setIsIconArrow] = useState(true);

  const toggleContainer = () => {
    setIsOpen(!isOpen);
    setIsIconArrow(!isIconArrow);
  };

  return (
    <>
      <Header />
      <Section>
      <Acconut/>
        <ContainerWrapper>
          <ContainerTitle isOpen={isOpen}>
            <Content></Content>
            <div>
              <img className="hero" src={Hero} alt="Heroi" />
            </div>
          </ContainerTitle>
          <Container>
            <Button onClick={toggleContainer}>
              {isIconArrow ? <IoIosArrowBack /> : <IoIosArrowForward />}
            </Button>
            <form>
              <Resume
                total={`R$ ${total}`} 
                progress={progress}
                imc={imc}
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleAddTransaction={handleAddTransaction}
              />
            </form>
          </Container>
        </ContainerWrapper>
      </Section>
    </>
  );
}
