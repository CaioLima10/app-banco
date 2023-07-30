import { useEffect, useState } from 'react';
import { Cards, ContainerCard, ContextCard, CardChipIcon, Form, ContainerForm, Paper, Visa } from './styles'
import Header from '../Header/Header'

const CreditCard = () => {

const storedColor = JSON.parse(localStorage.getItem('backgroundCard'));

const [cardNumber, setCardNumber] = useState("");
const [cardName, setCardName] = useState("");
const [cardExpiry, setCardExpiry] = useState("");
const [cardCvc, setCardCvc] = useState("");
const [ createCards , setCreateCards ] = useState([]) 
const [backgroundCard, setBackgroundCard] = useState(storedColor || "white");

const addSpacesToCardNumber = (number) => {
  return number.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
};

const addSpacesToCardExpiry = (expiry) => {
  return expiry.replace(/(\d{2})(\d{2})/, '$1/$2').trim();
};

console.log(createCards)
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
        id: Date.now(),
        number: cardNumber,
        name: cardName,
        expiry: cardExpiry,
        cvc: cardCvc,
        color: backgroundCard
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
      <Header/>
    <Cards  >
      <ContainerCard style={{ backgroundColor: backgroundCard}}>
        <ContextCard>
          <CardChipIcon />
          <h2 >{addSpacesToCardNumber(cardNumber)}</h2>
          <h3 >{cardName}</h3>
          <span>{addSpacesToCardExpiry(cardExpiry)}</span>
          <p >{cardCvc}</p>
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
            maxLength={16}
            value={cardNumber}
            onChange={e =>  setCardNumber(e.target.value)}

          />
          <input
            type="name"
            name="name"
            placeholder="Digite seu Nome"
            maxLength={18}
            value={cardName}
            onChange={e =>  setCardName(e.target.value)}

          />
          <div className='container-expity-cvc'>
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              className='expity'
              maxLength={4}
              value={cardExpiry}
              onChange={e =>  setCardExpiry(e.target.value)}

            />
            <input
              type="tel"
              name="cvc"
              className='cvc'
              placeholder="CVC"
              maxLength={3}
              value={cardCvc}
              onChange={e =>  setCardCvc(e.target.value)}
            />
          </div>

          <label> Escolha a cor do seu Cartão</label>
            <select value={backgroundCard}  onChange={e => setBackgroundCard(e.target.value)}>
              <option value="white">branco</option>
              <option value="black">preto</option>
              <option value="red">Vermelho</option>
              <option value="pink">Rosa</option>
              <option value="blue">Azul</option>
            </select>

          <button type="submit" onClick={handleClickBtn}>
            Confirmar
          </button>
        </Form>
      </Paper>
    </ContainerForm>
    </>

  );
};

export default CreditCard;

