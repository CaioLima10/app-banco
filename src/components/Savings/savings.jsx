import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Header from "../Header/Header";
import {  Button, Container, ContainerTitle, ContainerWrapper, Content, Section } from "./style";
import Hero from "../../assets/noto_man-superhero.png";
import Resume from "./Resume/index";
import ContentTextHero from "./ContentTextHero";
import StyleColorGlobal from "../styleColorGlobal/index"
import ImgbottomContainer from "../../assets/capa-fundo-2.png"

export default function Savings() {

  const initialCdi = JSON.parse(localStorage.getItem("cdi")) || 0;
  const initialInputValue = JSON.parse(localStorage.getItem("inputValue")) || "";
  const initialTotal = JSON.parse(localStorage.getItem("total")) || 0;
  const initialPresentNumber = JSON.parse(localStorage.getItem("presentNumber")) || 0;
  const initialFullTotal = JSON.parse(localStorage.getItem("fullTotal")) || 0;
  const initialProgress = JSON.parse(localStorage.getItem("progress")) || 0;
  const initialAccountBalance = JSON.parse(localStorage.getItem("accountBalance")) || 30000;

  const data = localStorage.getItem("transaction");
  const initialTransactionList = JSON.parse(localStorage.getItem("transaction")) || [];
  const [transactionList, setTransactionList] = useState(initialTransactionList);
  
  const [cdi, setCdi] = useState(initialCdi);
  const [inputValue, setInputValue] = useState(initialInputValue);
  const [total, setTotal] = useState(initialTotal);
  const [presentNumber, setPresentNumber] = useState(initialPresentNumber);
  const [fullTotal, setFullTotal] = useState(initialFullTotal);
  const [ progress , setProgress ] = useState(initialProgress)

  useEffect(() => {
    const transactionAmounts = transactionList.map((transaction) => parseFloat(transaction.amount)
    );
    const calculatedFullTotal = transactionAmounts.reduce((acc, cur) => acc + cur,0);
    
    setFullTotal(calculatedFullTotal);
  }, [transactionList]); 

  useEffect(() => {
    localStorage.setItem("cdi", JSON.stringify(cdi));
    localStorage.setItem("inputValue", JSON.stringify(inputValue));
    localStorage.setItem("total", JSON.stringify(total));
    localStorage.setItem("presentNumber", JSON.stringify(presentNumber));
    localStorage.setItem("fullTotal", JSON.stringify(fullTotal));
    localStorage.setItem("progress" , JSON.stringify(progress))
  }, [cdi, inputValue, total, presentNumber, fullTotal , progress]);

  const handleAddTransaction = () => {
    const amountIncome = transactionList
    .filter((item) => item.expense)
    .map((transaction) => Number(transaction.amount));
    
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0)
    
    setTotal(income);

    const newTotalUnits = (parseFloat(inputValue) / 1000) * 10.90;
    const updatedCdi = cdi + newTotalUnits
    setCdi(updatedCdi);

    if (parseFloat(inputValue) > initialAccountBalance) {
      alert("Você está sem saldo suficiente para realizar essa transação.");
      setInputValue("");
      setCdi(cdi)
      return;
    }

    if (inputValue.trim() !== "") {

      const newAccountBalance = initialAccountBalance - parseFloat(inputValue);   
      localStorage.setItem("accountBalance", JSON.stringify(newAccountBalance));

      const newTransaction = {
        id: Math.random(),
        expense: true,
        amount: parseFloat(inputValue)
      };

      const newTotal = total + parseFloat(inputValue);
      setTotal(newTotal);

      if (newTotal >= 10000) {
        const numberOfIncrements = Math.floor(newTotal / 10000);
        setPresentNumber(prev => prev + numberOfIncrements);
        const remainder = newTotal % 10000;
        setTotal(remainder);
        setProgress((newTotal / 10000) * 100);
      } else {
        setProgress((newTotal / 10000) * 100);
      }
      
      const updatedTransactionList = [...transactionList, newTransaction];
      setTransactionList(updatedTransactionList);

      localStorage.setItem("transaction", JSON.stringify(updatedTransactionList));
      setInputValue("");
      return
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
        <ContainerWrapper>
          <ContainerTitle isOpen={isOpen}>
            <Content></Content>
          <ContentTextHero/>
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
                fullTotal={`R$ ${fullTotal}`}
                total={`R$ ${total}`} 
                progress={progress}
                presentNumber={presentNumber}
                setPresentNumber={setPresentNumber}
                cdi={cdi}
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleAddTransaction={handleAddTransaction}
              />
            </form>
            <img className="img-bottom" src={ImgbottomContainer} alt="capa-do-container" />
          </Container>
        </ContainerWrapper>
        <StyleColorGlobal/>
      </Section>
    </>
  );
}
