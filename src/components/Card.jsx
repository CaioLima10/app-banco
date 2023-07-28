import { useEffect, useState } from 'react';
import { Cards, ContainerCard, ContextCard, CardChipIcon, Form, ContainerForm, Paper, Visa } from './style'

const CreditCard = () => {


const [cardNumber, setCardNumber] = useState("");
const [cardName, setCardName] = useState("");
const [cardExpiry, setCardExpiry] = useState("");
const [cardCvc, setCardCvc] = useState("");
const [ createCards , setCreateCards ] = useState([]) 

useEffect(() => {
    
    const cardsLocalstorage = localStorage.getItem('cards');
       
    if (cardsLocalstorage) {
          const loadCardStorage = JSON.parse(cardsLocalstorage);
          
    setCreateCards(loadCardStorage);
        }
      }, []);



const handleClickBtn = (event) => {
    event.preventDefault()
    const newCard = {
        number: cardNumber,
        name: cardName,
        expiry: cardExpiry,
        cvc: cardCvc
    }

    setCreateCards((prevCards) => {
    const updatedCards = [...prevCards, newCard];      
    localStorage.setItem('cards', JSON.stringify(updatedCards));

                
    setCardNumber('')
    setCardName('')
    setCardExpiry('')
    setCardCvc('')   
            return updatedCards;
})
}

  return (
    <>
    <Cards>
      <ContainerCard>
        <ContextCard>
          <CardChipIcon />
          <h2>{cardNumber}</h2>
          <h3>{cardName}</h3>
          <span>{cardExpiry}</span>
          <p>{cardCvc}</p>
        </ContextCard>
          <Visa/>
      </ContainerCard>
    </Cards>

    <ContainerForm>
      <Paper>
        <Form >
          <input
            type="tel"
            name="number"
            placeholder="Digite Numero"
            maxLength="18"
            value={cardNumber}
            onChange={e =>  setCardNumber(e.target.value)}

          />
          <input
            type="text"
            name="name"
            placeholder="Digite seu Nome"
            maxLength={18}
            value={cardName}
            onChange={e =>  setCardName(e.target.value)}

          />
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            maxLength={4}
            value={cardExpiry}
            onChange={e =>  setCardExpiry(e.target.value)}

          />
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            maxLength={3}
            value={cardCvc}
            onChange={e =>  setCardCvc(e.target.value)}

          />
          <button type="submit" onClick={handleClickBtn}>
            Confirmar
          </button>
        </Form>
      </Paper>

    </ContainerForm>
    {createCards.map((item, index) => (
      <Cards key={index}>
          <h2>{item.number}</h2>
          <h3>{item.name}</h3>
          <span>{item.expiry}</span>
          <p>{item.cvc}</p>
      </Cards>
      ))}
    </>

  );
};

export default CreditCard;

