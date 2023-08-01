import { useEffect, useRef, useState } from 'react';
import { Cards, ContainerCard, ContextCard, CardChipIcon, Form, ContainerForm, Paper, Visa } from './styles'
import Header from '../Header/Header'
import Swal from 'sweetalert2';

const CreditCard = () => {

const storedColor = JSON.parse(localStorage.getItem('backgroundCard'));

const [cardNumber, setCardNumber] = useState("");
const [cardName, setCardName] = useState("");
const [cardExpiry, setCardExpiry] = useState("");
const [cardCvc, setCardCvc] = useState("");
const [createCards , setCreateCards ] = useState([]) 
const [backgroundCard, setBackgroundCard] = useState(storedColor || "white");

// validações
const [isCardNumberEmpty, setIsCardNumberEmpty] = useState(false);
const [isCardNameEmpty, setIsCardNameEmpty] = useState(false);
const [isValidLetterEmprt , setIsValidLetterEmprt ] = useState(false)
const [isCardExpiryEmpty, setIsCardExpiryEmpty] = useState(false);
const [isCardCvcEmpty, setIsCardCvcEmpty] = useState(false);
const cardNumberRef = useRef(null);
const cardNameRef = useRef(null)
const cardNameLetterRef = useRef(null)
const cardExpiryRef = useRef(null)
const cardCvcRef = useRef(null)



function handleNameKeyPress(event){
  const charCode = event.charCode;

  if(charCode >= 48 && charCode <= 57){
    event.preventDefault()
  }
}

function handleNumberKeyPress(event){
  const charCode = event.charCode

  if(((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))){
    event.preventDefault()
  }
}

function handleCardNumberBlur() {
  const cardNumberValue = cardNumberRef.current.value;
  setIsCardNumberEmpty(!isValidCardNumber(cardNumberValue))
}
function handleCardNameBlur() {
  const cardNameValue = cardNameRef.current.value;
  setIsCardNameEmpty(!cardNameValue);
}
function handleCardExpiryBlur() {
  const cardExpiryValue = cardExpiryRef.current.value;
  setIsCardExpiryEmpty(!isValidCardExpiry(cardExpiryValue));
}
function handleCardCvcBlur() {
  const cardCvcValue = cardCvcRef.current.value;
  setIsCardCvcEmpty(!isValidCardCvc(cardCvcValue));
}

function handdleCardLetterNameBlur(){
  const cardNameLetter = cardNameLetterRef.current.value
  setIsValidLetterEmprt(!cardNameLetter)
}

const addSpacesToCardNumber = (number) => {
  return number.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
};

const addSpacesToCardExpiry = (expiry) => {
  return expiry.replace(/(\d{2})(\d{2})/, '$1/$2').trim();
};

const addToCardLetter = (name) => {
  return name.replace(/[^a-zA-Z]+/g, "  ").trim();
};

console.log(createCards)
useEffect(() => {
    
    const cardsLocalstorage = localStorage.getItem('cards');
    if (cardsLocalstorage) {
          const loadCardStorage = JSON.parse(cardsLocalstorage);
    setCreateCards(loadCardStorage);
        }
      }, []);

      function isValidCardNumber(cardNumber) {
        return cardNumber && cardNumber.length === 16;
      }

      function isValidCardExpiry(cardNumber) {
        return cardNumber && cardNumber.length === 4;
      }
      function isValidCardCvc(cardNumber) {
        return cardNumber && cardNumber.length === 3;
      }

        const handleClickBtn = (event) => {
        event.preventDefault();

        const isCardNumberValid = isValidCardNumber(cardNumber);
        const isCardExpiryValid = isValidCardExpiry(cardExpiry);
        const isCardCvcValid = isValidCardCvc(cardCvc)
        
        if (!isCardNumberValid) {
          setIsCardNumberEmpty(true);
        } else {
          setIsCardNumberEmpty(false);
        }
      
        if (!cardName) {
          setIsCardNameEmpty(true);
        } else {
          setIsCardNameEmpty(false);
        }

        if(cardName.length < 6){
          setIsValidLetterEmprt(true)
        }else{
          setIsValidLetterEmprt(false)
        }

        if (!isCardExpiryValid) {
          setIsCardExpiryEmpty(true);
        } else {
          setIsCardExpiryEmpty(false);
        }
      
        if (!isCardCvcValid) {
          setIsCardCvcEmpty(true);
        } else {
          setIsCardCvcEmpty(false);
        }
        if (cardName.length < 6) {
          return;
        }
        
        if (!cardNumber || !cardName || !cardExpiry || !cardCvc) {
          return;
        }

        const newCard = {
          id: Date.now(),
          number: cardNumber,
          name: cardName,
          expiry: cardExpiry,
          cvc: cardCvc,
          color: backgroundCard
        };

        setCreateCards((prevCards) => {
          const updatedCards = [...prevCards, newCard];
          localStorage.setItem('cards', JSON.stringify(updatedCards));
      
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
          });
      
          Toast.fire({
            icon: 'success',
            title: 'Cartão criado com sucesso'
          });
      
          setCardNumber('');
          setCardName('');
          setCardExpiry('');
          setCardCvc('');
      
          return updatedCards;
        });
      };
    
  return (
    <>
      <Header/>
    <Cards  >
      <ContainerCard style={{ backgroundColor: backgroundCard}}>
        <ContextCard>
          <CardChipIcon />
          <h2 >{addSpacesToCardNumber(cardNumber)}</h2>
          <h3 >{addToCardLetter(cardName)}</h3>
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
            ref={cardNumberRef}
            onKeyPress={handleNumberKeyPress}
            onBlur={handleCardNumberBlur}
            maxLength={16}
            value={cardNumber}
            onChange={e =>  setCardNumber(e.target.value)}

          />
          {isCardNumberEmpty && <small>Preencha o número do cartão!</small>}

          <input
            type="text"
            name="name"
            placeholder="Digite seu Nome"
            maxLength={18}
            onKeyPress={handleNameKeyPress ? handleNameKeyPress : handdleCardLetterNameBlur}
            ref={cardNameRef ? cardNameRef : cardNameLetterRef}
            onBlur={handleCardNameBlur}
            value={cardName}
            onChange={e =>  setCardName(e.target.value)}

          />
            {isCardNameEmpty && <small>Preencha o nome completo!</small>}
            {isValidLetterEmprt && <small>necessario ter 8 digitos</small>}

            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              className='expity'
              onKeyPress={handleNumberKeyPress}
              ref={cardExpiryRef}
              onBlur={handleCardExpiryBlur}
              maxLength={4}
              value={cardExpiry}
              onChange={e =>  setCardExpiry(e.target.value)}

            />
              {isCardExpiryEmpty && <small>Preencha a data de validate!</small>}

            <input
              type="tel"
              name="cvc"
              className='cvc'
              placeholder="CVC"
              onKeyPress={handleNumberKeyPress}
              ref={cardCvcRef}
              onBlur={handleCardCvcBlur}
              maxLength={3}
              value={cardCvc}
              onChange={e =>  setCardCvc(e.target.value)}
            />
              { isCardCvcEmpty && <small>Preencha seu codigo de segurança!</small>}


          <label> Escolha a cor do seu Cartão</label>
            <select value={backgroundCard}  onChange={e => setBackgroundCard(e.target.value)}>
              <option value="white">branco</option>
              <option value="black">preto</option>
              <option value="red">Vermelho</option>
              <option value="pink">Rosa</option>
              <option value="blue">Azul</option>
            </select>

          <button type="submit" onClick={ handleClickBtn }>
            Confirmar
          </button>
        </Form>
      </Paper>
    </ContainerForm>
    </>

  );
};

export default CreditCard;

